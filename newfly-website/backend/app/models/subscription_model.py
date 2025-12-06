# app/models/subscription_model.py
from datetime import datetime
from typing import Optional
from bson import ObjectId
from app.database import get_db

COL = "subscriptions"


def _to_dict(doc: dict) -> dict:
    if not doc:
        return {}
    doc = dict(doc)
    _id = doc.pop("_id", None)
    if _id:
        doc["id"] = str(_id)
    return doc


async def add_subscription(email: str) -> dict:
    db = get_db()
    doc = {"email": email, "created_at": datetime.utcnow()}
    res = await db[COL].insert_one(doc)
    return {**doc, "id": str(res.inserted_id)}


async def find_subscription_by_email(email: str) -> Optional[dict]:
    db = get_db()
    doc = await db[COL].find_one({"email": email})
    return _to_dict(doc) if doc else None


async def list_subscriptions() -> list:
    db = get_db()
    docs = await db[COL].find().to_list(None)
    return [_to_dict(d) for d in docs]
