# app/services/inquiry_service.py
import logging
from typing import Dict, Any
from datetime import datetime
from app.models.inquiry_model import insert_inquiry # adjust imports to your actual model funcs
from app.utils.otp_store import consume  # Use consume instead of verify to delete OTP after use
from app.utils.async_email import send_email_background
from app.config import ADMIN_EMAIL

log = logging.getLogger("inquiry_service")


def _to_json_safe(doc: dict) -> dict:
    if not doc:
        return {}
    out = dict(doc)
    if "_id" in out:
        out["id"] = str(out["_id"])
        del out["_id"]
    for k, v in list(out.items()):
        if isinstance(v, datetime):
            out[k] = v.isoformat()
    return out


async def submit_inquiry_with_email_otp(data: Dict[str, Any], email: str, otp: int) -> Dict:
    try:
        log.info(f"Processing inquiry from {email}")
        
        # consume otp (verify and delete - consume is sync function, no await needed)
        if not consume(email, otp):
            log.warning(f"Invalid or expired OTP for {email}")
            raise ValueError("Invalid or expired OTP")
        log.info(f"✅ OTP verified and consumed for {email}")
        
        rec = await insert_inquiry(data)
        log.info(f"✅ Inquiry record inserted for {email}")
        
        # Send confirmation email to customer (non-blocking)
        try:
            log.info(f"Queuing confirmation email to customer ({email})")
            await send_email_background(
                to_email=email,
                subject="Thank you for your inquiry - Newfly Tech Solutions",
                template_name="customer_template.html",
                name=data.get('name', ''),
                product=data.get('product', ''),
                message=data.get('message', '')
            )
            log.info(f"✅ Customer confirmation email queued")
        except Exception as e:
            log.error(f"❌ Failed to queue customer confirmation email: {e}", exc_info=True)
        
        # Send admin notification email (non-blocking)
        try:
            log.info(f"Queuing inquiry notification email to admin ({ADMIN_EMAIL})")
            await send_email_background(
                to_email=ADMIN_EMAIL,
                subject="New Inquiry Received",
                template_name="inquiry_admin.html",
                name=data.get('name', ''),
                email=email,
                mobile_number=data.get('mobile_number', ''),
                product=data.get('product', ''),
                city=data.get('city', ''),
                message=data.get('message', '')
            )
            log.info(f"✅ Admin notification email queued")
        except Exception as e:
            log.error(f"❌ Failed to queue admin notification email: {e}", exc_info=True)
        
        return _to_json_safe(rec)
    except ValueError:
        raise
    except Exception as e:
        log.error(f"❌ Error in submit_inquiry_with_email_otp: {e}", exc_info=True)
        raise
