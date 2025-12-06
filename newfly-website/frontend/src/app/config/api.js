// src/config/app.js

const APP_CONFIG = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000",
  COMPANY_NAME: "Newfly Tech Solutions",
  CONTACT_EMAIL: "support@newflytechsolutions.com",
  DEFAULT_CITY: "Tiruppur",
  SUPPORTED_STATES: ["Tamil Nadu"],
};

export default APP_CONFIG;
