// src/services/api.ts
import APP_CONFIG from "@/app/config/api";

const API_BASE_URL = APP_CONFIG.API_BASE_URL;

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// OTP Services
export const otpService = {
  async sendOTP(email: string): Promise<ApiResponse<{ otp: number }>> {
    try {
      const response = await fetch(`${API_BASE_URL}/otp/otp-send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error("Error sending OTP:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to send OTP",
      };
    }
  },

  async verifyOTP(email: string, otp: number): Promise<ApiResponse<{ message: string }>> {
    try {
      const response = await fetch(`${API_BASE_URL}/otp/otp-validate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error("Error verifying OTP:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to verify OTP",
      };
    }
  },
};

// Inquiry Services
export const inquiryService = {
  async submitInquiry(inquiryData: {
    name: string;
    email: string;
    mobile_number?: string;
    product?: string;
    city?: string;
    message?: string;
    otp: number;
  }): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_BASE_URL}/inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inquiryData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to submit inquiry",
      };
    }
  },
};

// Contact Services
export const contactService = {
  async submitContact(contactData: {
    name: string;
    email: string;
    mobile: string;
    message: string;
  }): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error("Error submitting contact:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to submit contact",
      };
    }
  },
};

// Subscription Services
export const subscriptionService = {
  async subscribe(email: string): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_BASE_URL}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error("Error subscribing:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to subscribe",
      };
    }
  },

  async getSubscriptions(): Promise<ApiResponse<any[]>> {
    try {
      const response = await fetch(`${API_BASE_URL}/subscribe`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data: data.data };
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to fetch subscriptions",
      };
    }
  },
};
