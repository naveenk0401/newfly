# app/controllers/inquiry_controller.py
from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, EmailStr
import logging
from datetime import datetime
from typing import Any
from app.services.inquiry_service import submit_inquiry_with_email_otp

log = logging.getLogger("inquiry_controller")
router = APIRouter(prefix="/inquiry", tags=["Inquiry"])


class InquiryIn(BaseModel):
    name: str
    email: EmailStr
    mobile_number: str | None = None
    product: str | None = None
    city: str | None = None
    message: str | None = None
    otp: int


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


@router.post("", status_code=status.HTTP_201_CREATED)
async def create_inquiry(payload: InquiryIn):
    try:
        log.info(f"Received inquiry from {payload.email}")
        log.debug(f"Inquiry payload: {payload.dict()}")
        data = payload.dict()
        otp = data.pop("otp")
        rec = await submit_inquiry_with_email_otp(data, payload.email, otp)
        log.info(f"✅ Inquiry created successfully for {payload.email}")
        return {"message": "Verified inquiry created", "data": _to_json_safe(rec)}
    except ValueError as ve:
        log.warning(f"Validation error in create_inquiry: {ve}")
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        log.exception(f"create_inquiry failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
