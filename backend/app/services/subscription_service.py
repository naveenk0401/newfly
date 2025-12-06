from typing import Dict, List
import logging
from datetime import datetime
from app.models.subscription_model import add_subscription, find_subscription_by_email, list_subscriptions
from app.utils.async_email import send_email_background
from app.config import ADMIN_EMAIL

log = logging.getLogger("subscription_service")


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


async def subscribe_user(email: str) -> Dict:
    try:
        log.info(f"Processing subscription for {email}")
        
        existing = await find_subscription_by_email(email)
        if existing:
            log.warning(f"Email {email} already subscribed")
            raise ValueError("Email already subscribed")
        
        rec = await add_subscription(email)
        log.info(f"✅ Subscription record created for {email}")
        
        # Queue confirmation email to subscriber (non-blocking)
        try:
            log.info(f"Queuing subscription confirmation email to {email}")
            await send_email_background(
                to_email=email,
                subject="Welcome to Newfly Tech Solutions Newsletter",
                template_name="subscribe_user.html",
                email=email
            )
            log.info(f"✅ Subscription confirmation email queued")
        except Exception as e:
            log.error(f"❌ Failed to queue subscription confirmation email: {e}", exc_info=True)
        
        # Queue admin notification (non-blocking)
        try:
            log.info(f"Queuing new subscriber notification to admin ({ADMIN_EMAIL})")
            await send_email_background(
                to_email=ADMIN_EMAIL,
                subject="New Subscriber",
                template_name="admin_new_subscriber.html",
                email=email
            )
            log.info(f"✅ Admin notification email queued")
        except Exception as e:
            log.error(f"❌ Failed to queue admin notification email: {e}", exc_info=True)
        
        return _to_json_safe(rec)
    except ValueError:
        raise
    except Exception as e:
        log.error(f"❌ Error in subscribe_user: {e}", exc_info=True)
        raise


async def get_all_subscriptions() -> List[dict]:
    try:
        log.info("Fetching all subscriptions")
        raw = await list_subscriptions()
        log.info(f"✅ Retrieved {len(raw)} subscriptions")
        return [_to_json_safe(r) for r in raw]
    except Exception as e:
        log.error(f"❌ Error in get_all_subscriptions: {e}", exc_info=True)
        raise
