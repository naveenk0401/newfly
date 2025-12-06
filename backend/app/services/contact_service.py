import logging
from app.models.contact_model import insert_contact
from app.utils.async_email import send_email_background
from app.config import ADMIN_EMAIL
from typing import Dict

log = logging.getLogger("contact_service")


async def submit_contact(data: Dict):
    try:
        log.info(f"Submitting contact from {data.get('email')}")
        
        # Convert 'mobile' to 'mobile_number' for consistency
        if 'mobile' in data and 'mobile_number' not in data:
            data['mobile_number'] = data.pop('mobile')
        
        rec = await insert_contact(data)
        log.info(f"✅ Contact record inserted for {data.get('email')}")
        
        # Queue customer confirmation email (non-blocking)
        try:
            log.info(f"Queuing contact confirmation email to customer ({data.get('email')})")
            await send_email_background(
                to_email=data.get('email'),
                subject="We received your message - Newfly Tech Solutions",
                template_name="contact_confirmation.html",
                name=data.get('name', ''),
                message=data.get('message', '')
            )
            log.info(f"✅ Customer confirmation email queued")
        except Exception as e:
            log.error(f"❌ Failed to queue customer confirmation email: {e}", exc_info=True)
        
        # Queue email to admin (non-blocking)
        try:
            log.info(f"Queuing contact notification email to admin ({ADMIN_EMAIL})")
            await send_email_background(
                to_email=ADMIN_EMAIL,
                subject="New Contact Message",
                template_name="contact_admin.html",
                **data
            )
            log.info(f"✅ Admin notification email queued")
        except Exception as e:
            log.error(f"❌ Failed to queue admin notification email: {e}", exc_info=True)
        
        return rec
    except Exception as e:
        log.error(f"❌ Error in submit_contact: {e}", exc_info=True)
        raise
