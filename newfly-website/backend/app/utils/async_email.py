import asyncio, smtplib
import logging
from email.message import EmailMessage
from jinja2 import Environment, FileSystemLoader, select_autoescape
from pathlib import Path
from app.config import MAIL_USERNAME, MAIL_PASSWORD, MAIL_SERVER, MAIL_PORT, MAIL_FROM
import threading

logger = logging.getLogger("async_email")

TEMPLATES_DIR = Path(__file__).resolve().parent / "templates"
env = Environment(loader=FileSystemLoader(str(TEMPLATES_DIR)),
                  autoescape=select_autoescape(['html','xml']))

# Background task queue for non-blocking email sending
_email_queue = []
_queue_lock = threading.Lock()

def _background_email_sender():
    """Background thread that processes emails from queue"""
    while True:
        try:
            with _queue_lock:
                if _email_queue:
                    to_email, subject, template_name, ctx = _email_queue.pop(0)
                else:
                    to_email = None
            
            if to_email:
                _send_email_sync(to_email, subject, template_name, **ctx)
            else:
                asyncio.run(asyncio.sleep(0.1))  # Sleep briefly if queue is empty
        except Exception as e:
            logger.error(f"Background email sender error: {e}", exc_info=True)

# Start background thread on module import
_bg_thread = threading.Thread(target=_background_email_sender, daemon=True)
_bg_thread.start()
logger.info("Background email sender thread started")

async def _send_blocking(msg: EmailMessage, use_tls=True):
    # run blocking SMTP operations in a thread
    def _sync_send():
        try:
            port = MAIL_PORT
            logger.info(f"Connecting to {MAIL_SERVER}:{port}")
            with smtplib.SMTP(MAIL_SERVER, port) as smtp:
                smtp.ehlo()
                if use_tls:
                    logger.info("Starting TLS")
                    smtp.starttls()
                    smtp.ehlo()
                logger.info(f"Logging in as {MAIL_USERNAME}")
                smtp.login(MAIL_USERNAME, MAIL_PASSWORD)
                logger.info(f"Sending email to {msg['To']}")
                smtp.send_message(msg)
                logger.info(f"✅ Email sent successfully to {msg['To']}")
        except Exception as e:
            logger.error(f"❌ SMTP Error: {e}", exc_info=True)
            return False
        return True
    
    try:
        result = await asyncio.to_thread(_sync_send)
        return result
    except Exception as e:
        logger.error(f"❌ Failed to send email: {e}", exc_info=True)
        return False

def _send_email_sync(to_email: str, subject: str, template_name: str, **ctx):
    """Synchronous email sending (used by background thread)"""
    try:
        logger.info(f"[BG] Preparing email for {to_email} with subject: {subject}")
        tmpl = env.get_template(template_name)
        html = tmpl.render(**ctx)
        msg = EmailMessage()
        msg['From'] = MAIL_FROM
        msg['To'] = to_email
        msg['Subject'] = subject
        msg.set_content(html, subtype='html')
        
        # Send synchronously
        port = MAIL_PORT
        logger.info(f"[BG] Connecting to {MAIL_SERVER}:{port}")
        with smtplib.SMTP(MAIL_SERVER, port) as smtp:
            smtp.ehlo()
            logger.info("[BG] Starting TLS")
            smtp.starttls()
            smtp.ehlo()
            logger.info(f"[BG] Logging in as {MAIL_USERNAME}")
            smtp.login(MAIL_USERNAME, MAIL_PASSWORD)
            logger.info(f"[BG] Sending email to {to_email}")
            smtp.send_message(msg)
        
        logger.info(f"✅ [BG] Email successfully sent to {to_email}")
        return True
    except Exception as e:
        logger.error(f"❌ [BG] Error sending email: {e}", exc_info=True)
        return False

async def send_email(to_email: str, subject: str, template_name: str, **ctx):
    try:
        logger.info(f"Preparing email for {to_email} with subject: {subject}")
        tmpl = env.get_template(template_name)
        html = tmpl.render(**ctx)
        msg = EmailMessage()
        msg['From'] = MAIL_FROM
        msg['To'] = to_email
        msg['Subject'] = subject
        msg.set_content(html, subtype='html')
        await _send_blocking(msg)
        logger.info(f"✅ Email successfully sent to {to_email}")
        return True
    except Exception as e:
        logger.error(f"❌ Error preparing/sending email: {e}", exc_info=True)
        return False

async def send_email_background(to_email: str, subject: str, template_name: str, **ctx):
    """Queue email for background sending (non-blocking)"""
    try:
        with _queue_lock:
            _email_queue.append((to_email, subject, template_name, ctx))
        logger.info(f"📧 Email queued for background sending to {to_email}")
        return True
    except Exception as e:
        logger.error(f"❌ Failed to queue email: {e}", exc_info=True)
        return False
