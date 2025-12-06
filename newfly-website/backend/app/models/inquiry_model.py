from datetime import datetime
from app.database import get_db

async def insert_inquiry(data: dict) -> dict:
    db = get_db()
    data = {**data, "created_at": datetime.utcnow()}
    res = await db.inquiries.insert_one(data)
    return {"id": str(res.inserted_id), **data}

async def list_inquiries() -> list:
    db = get_db()
    items = await db.inquiries.find().to_list(None)
    for i in items:
        i["id"] = str(i["_id"])
        del i["_id"]
    return items
