# app/controllers/otp_controller.py
from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, EmailStr
import logging
from app.services.otp_service import send_email_otp, check_otp
from app.utils.email_utils import send_otp_email  # ✅ Import email utility

log = logging.getLogger("otp_controller")
router = APIRouter(prefix="/otp", tags=["OTP"])


class OTPSendIn(BaseModel):
    email: EmailStr


class OTPVerifyIn(BaseModel):
    email: EmailStr
    otp: int


@router.post("/otp-send", status_code=status.HTTP_200_OK)
async def otp_send(payload: OTPSendIn):
    """Send OTP to email."""
    try:
        # Generate OTP
        otp = await send_email_otp(payload.email)
        log.info(f"Generated OTP {otp} for {payload.email}")
        
        # Queue email in background (non-blocking)
        from app.utils.async_email import send_email_background
        await send_email_background(payload.email, "Your OTP Code - Newfly Tech Solutions", "otp_mail.html", otp=otp)
        
        log.info(f"✅ OTP queued for sending to {payload.email}")
        return {"message": "OTP sent", "otp_preview": otp}  # Remove otp_preview in production
        
    except HTTPException:
        raise
    except Exception as exc:
        log.exception(f"otp_send failed: {str(exc)}")
        raise HTTPException(status_code=500, detail=f"Failed to send OTP: {str(exc)}")


@router.post("/otp-validate", status_code=status.HTTP_200_OK)
async def otp_validate(payload: OTPVerifyIn):
    """Validate OTP for an email."""
    try:
        ok = await check_otp(payload.email, payload.otp)
        if not ok:
            raise HTTPException(status_code=400, detail="Invalid or expired OTP")
        return {"message": "OTP verified"}
    except HTTPException:
        raise
    except Exception as e:
        log.exception(f"otp_validate failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"OTP verification failed: {str(e)}")