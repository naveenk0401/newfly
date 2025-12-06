"""Email utility functions for sending OTP emails."""

import logging
from app.utils.async_email import send_email

log = logging.getLogger("email_utils")


async def send_otp_email(email: str, otp: int) -> bool:
    """
    Send OTP email to the user.
    
    Args:
        email: Recipient email address
        otp: OTP code to send
    
    Returns:
        True if email sent successfully, False otherwise
    """
    try:
        log.info(f"Sending OTP to {email}")
        result = await send_email(
            to_email=email,
            subject="Your OTP for Newfly Tech Solutions",
            template_name="otp_mail.html",
            otp=otp
        )
        log.info(f"✅ OTP email sent successfully to {email}")
        return True
    except Exception as exc:
        log.error(f"❌ Failed to send OTP email to {email}: {exc}", exc_info=True)
        return False
