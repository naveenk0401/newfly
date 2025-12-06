import os
from dotenv import load_dotenv
from pathlib import Path

base = Path(__file__).resolve().parent.parent
load_dotenv(base / ".env")

MONGO_URL = os.getenv("MONGO_URL")
MONGO_DB_NAME = os.getenv("MONGO_DB_NAME", "newfly_db")

MAIL_USERNAME = os.getenv("MAIL_USERNAME")
MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
MAIL_SERVER = os.getenv("MAIL_SERVER", "smtp.gmail.com")
MAIL_PORT = int(os.getenv("MAIL_PORT", 587))
MAIL_FROM = os.getenv("MAIL_FROM", MAIL_USERNAME)
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL", MAIL_USERNAME)
