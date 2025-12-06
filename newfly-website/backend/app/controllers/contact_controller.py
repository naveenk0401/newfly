# app/controllers/contact_controller.py
from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, EmailStr
from typing import Any
import logging
from datetime import datetime
from app.services.contact_service import submit_contact

log = logging.getLogger("contact_controller")
router = APIRouter(prefix="/contact", tags=["Contact"])


class ContactIn(BaseModel):
    name: str
    email: EmailStr
    mobile: str
    message: str


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


def _ok(message: str, data: Any = None) -> dict:
    out = {"message": message}
    if data is not None:
        out["data"] = data
    return out


@router.post("", status_code=status.HTTP_201_CREATED)
async def create_contact(payload: ContactIn):
    try:
        log.info(f"Received contact from {payload.email}")
        rec = await submit_contact(payload.dict())
        log.info(f"✅ Contact created successfully for {payload.email}")
        return _ok("Contact saved", _to_json_safe(rec))
    except ValueError as ve:
        log.warning(f"Validation error in create_contact: {ve}")
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        log.exception(f"create_contact failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
