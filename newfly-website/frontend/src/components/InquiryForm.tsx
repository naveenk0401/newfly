"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography, Alert, CircularProgress } from "@mui/material";
import { inquiryService, otpService } from "@/services/api";

export default function InquiryForm({ id }: { id: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    city: "",
    message: "",
  });

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      setMessage({ type: "error", text: "Please enter your email" });
      return;
    }

    setLoading(true);
    const result = await otpService.sendOTP(formData.email);

    if (result.success) {
      setOtpSent(true);
      setMessage({ type: "success", text: "OTP sent to your email!" });
    } else {
      setMessage({ type: "error", text: result.error || "Failed to send OTP" });
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!otp) {
      setMessage({ type: "error", text: "Please enter the OTP" });
      return;
    }

    setLoading(true);

    // Submit inquiry with OTP
    const result = await inquiryService.submitInquiry({
      name: formData.name,
      email: formData.email,
      mobile_number: formData.phone,
      product: formData.product,
      city: formData.city,
      message: formData.message,
      otp: parseInt(otp),
    });

    if (result.success) {
      setMessage({ type: "success", text: "Thank you! Your inquiry has been submitted." });
      setFormData({ name: "", email: "", phone: "", product: "", city: "", message: "" });
      setOtp("");
      setOtpSent(false);
    } else {
      setMessage({ type: "error", text: result.error || "Failed to submit inquiry" });
    }

    setLoading(false);
  };

  return (
    <Box id={id} sx={{ py: 8, px: { xs: 2, md: 4 }, maxWidth: 600, mx: "auto", backgroundColor: "#f5f5f5", mt: 6 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}>
        Customer Inquiry
      </Typography>

      {message && (
        <Alert severity={message.type} sx={{ mb: 3 }}>
          {message.text}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          sx={{ mb: 3 }}
          required
          disabled={otpSent}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ mb: 3 }}
          type="email"
          required
          disabled={otpSent}
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          sx={{ mb: 3 }}
          required
          disabled={otpSent}
        />
        <TextField
          fullWidth
          label="Product/Service"
          name="product"
          value={formData.product}
          onChange={handleChange}
          sx={{ mb: 3 }}
          disabled={otpSent}
        />
        <TextField
          fullWidth
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          sx={{ mb: 3 }}
          disabled={otpSent}
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          sx={{ mb: 3 }}
          multiline
          rows={4}
          required
          disabled={otpSent}
        />

        {!otpSent ? (
          <Button
            onClick={handleSendOTP}
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #00d9ffff, #dfe52eff)",
              color: "#000",
              fontWeight: "bold",
              "&:hover": { opacity: 0.9 },
            }}
            fullWidth
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Send OTP"}
          </Button>
        ) : (
          <>
            <TextField
              fullWidth
              label="Enter OTP"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              sx={{ mb: 3 }}
              type="text"
              required
              placeholder="6-digit OTP"
            />
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #00d9ffff, #dfe52eff)",
                  color: "#000",
                  fontWeight: "bold",
                  "&:hover": { opacity: 0.9 },
                  flex: 1,
                }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Submit Inquiry"}
              </Button>
              <Button
                onClick={() => {
                  setOtpSent(false);
                  setOtp("");
                }}
                variant="outlined"
              >
                Back
              </Button>
            </Box>
          </>
        )}
      </form>
    </Box>
  );
}
