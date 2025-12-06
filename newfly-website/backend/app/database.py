# app/database.py
import logging
from motor.motor_asyncio import AsyncIOMotorClient
from app.config import MONGO_URL, MONGO_DB_NAME

log = logging.getLogger("app.database")

# Normalize environment values (strip accidental spaces/newlines)
_MONGO_URL = (MONGO_URL or "").strip()
_MONGO_DB_NAME = (MONGO_DB_NAME or "newfly_db").strip()

if not _MONGO_URL:
    log.error("MONGO_URL is empty. Check your .env")
    # We still create client with empty string so import doesn't crash; errors surface on connect.
_client = AsyncIOMotorClient(_MONGO_URL)
_db = _client[_MONGO_DB_NAME]


def get_db():
    """Return the Motor DB instance. Non-blocking quick accessor."""
    return _db


async def test_connection(timeout_ms: int = 5000) -> bool:
    """
    Ping the MongoDB server to verify connectivity.
    Returns True on success, raises on failure.
    """
    try:
        # Motor uses async commands; admin.command("ping") is the standard check
        await _client.admin.command("ping")
        log.info("MongoDB ping OK")
        return True
    except Exception as exc:
        log.exception("MongoDB ping failed")
        raise
