# app/controllers/subscribe_controller.py
from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, EmailStr
from typing import Any
import logging
from datetime import datetime
from app.services.subscription_service import subscribe_user, get_all_subscriptions

log = logging.getLogger("subscribe_controller")
router = APIRouter(prefix="/subscribe", tags=["Subscribe"])


class SubscribeIn(BaseModel):
    email: EmailStr


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
async def subscribe(payload: SubscribeIn):
    try:
        log.info(f"Received subscription request from {payload.email}")
        rec = await subscribe_user(payload.email)
        log.info(f"✅ Subscription created successfully for {payload.email}")
        return _ok("Subscribed", _to_json_safe(rec))
    except ValueError as ve:
        log.warning(f"Validation error in subscribe: {ve}")
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        log.exception(f"subscribe failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")


@router.get("", status_code=status.HTTP_200_OK)
async def list_subscribers():
    try:
        log.info("Fetching all subscribers")
        items = await get_all_subscriptions()
        log.info(f"✅ Retrieved {len(items)} subscribers")
        safe = [_to_json_safe(i) for i in items]
        return _ok("ok", safe)
    except Exception as e:
        log.exception(f"list_subscribers failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
