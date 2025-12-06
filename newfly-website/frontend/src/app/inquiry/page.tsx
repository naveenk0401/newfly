"use client";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { otpService, inquiryService } from "@/services/api";

const tamilNaduCities = [
  "Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul",
  "Erode","Kallakurichi","Kancheepuram","Kanniyakumari","Karur","Krishnagiri","Madurai",
  "Mayiladuthurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram",
  "Ranipet","Salem","Sivaganga","Tenkasi","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli",
  "Tirupathur","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"
];

export default function Inquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    otp: "",
    product: "",
    city: "",
    message: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (mobile: string) => /^[6-9]\d{9}$/.test(mobile);

  const handleSendOtp = async () => {
    if (!formData.email) return setErrorMsg("Please enter your email.");
    if (!validateEmail(formData.email)) return setErrorMsg("Enter a valid email address.");

    setLoading(true);
    const result = await otpService.sendOTP(formData.email);
    
    if (result.success) {
      setOtpSent(true);
      setErrorMsg("");
    } else {
      setErrorMsg(result.error || "Failed to send OTP. Check your email or try again.");
    }
    
    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    if (!formData.otp) return setErrorMsg("Please enter the OTP sent to your email.");

    setLoading(true);
    const result = await otpService.verifyOTP(formData.email, parseInt(formData.otp));
    
    if (result.success) {
      setOtpVerified(true);
      setErrorMsg("");
    } else {
      setErrorMsg(result.error || "Invalid or expired OTP.");
    }
    
    setLoading(false);
  };

  const handleSubmit = async () => {
    const { name, email, mobile_number, product, city, message } = formData;
    if (!name || !email || !mobile_number || !product || !city)
      return setErrorMsg("Please fill all mandatory fields.");
    if (!otpVerified) return setErrorMsg("Please verify your email OTP before submitting.");
    if (!validateMobile(mobile_number)) return setErrorMsg("Please enter a valid 10-digit mobile number.");

    setLoading(true);
    const result = await inquiryService.submitInquiry({
      name,
      email,
      mobile_number,
      product,
      city,
      message,
      otp: parseInt(formData.otp),
    });
    
    if (result.success) {
      setFormData({ name: "", email: "", mobile_number: "", otp: "", product: "", city: "", message: "" });
      setOtpSent(false);
      setOtpVerified(false);
      setErrorMsg("");
      setOpenDialog(true);
    } else {
      setErrorMsg(result.error || "Error submitting inquiry. Please try again.");
    }
    
    setLoading(false);
  };

  // ✅ Common input styles (same as ContactUs)
  const inputStyles = {
    backgroundColor: "#ffffff",
    color: "#000000",
    "& .MuiInputBase-input": {
      color: "#000000", // input text black
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#555555", // placeholder dark gray
      opacity: 1,
    },
    "& .MuiInputLabel-root": {
      color: "#444444", // label dark gray
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#d1d5db",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0072e5",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0072e5",
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        px: { xs: 3, md: 10 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 550,
          bgcolor: "white",
          borderRadius: 4,
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          p: 5,
          textAlign: "center",
          transition: "0.3s ease",
          "&:hover": { transform: "translateY(-3px)" },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0072e5", mb: 3 }}>
          Inquiry Form
        </Typography>

        {errorMsg && <Alert severity="error" sx={{ mb: 2 }}>{errorMsg}</Alert>}

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          <TextField
            label="Full Name"
            size="small"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            fullWidth
            sx={inputStyles}
            placeholder="Enter your full name"
          />

          <TextField
            label="Mobile Number"
            size="small"
            value={formData.mobile_number}
            onChange={(e) => setFormData({ ...formData, mobile_number: e.target.value })}
            fullWidth
            sx={inputStyles}
            placeholder="Enter your mobile number"
          />

          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              label="Email Address"
              size="small"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              fullWidth
              sx={inputStyles}
              placeholder="Enter your email address"
            />
            {!otpSent ? (
              <Button variant="contained" onClick={handleSendOtp} disabled={loading}>
                Send OTP
              </Button>
            ) : (
              <Button variant="outlined" onClick={handleSendOtp} disabled={loading}>
                Resend
              </Button>
            )}
          </Box>

          {otpSent && (
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                label="Enter OTP"
                size="small"
                value={formData.otp}
                onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                fullWidth
                sx={inputStyles}
                placeholder="Enter the OTP"
              />
              <Button
                variant="contained"
                color={otpVerified ? "success" : "primary"}
                onClick={handleVerifyOtp}
                disabled={loading}
              >
                {otpVerified ? "Verified" : "Verify"}
              </Button>
            </Box>
          )}

          <TextField
            label="Product Details"
            size="small"
            multiline
            rows={3}
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            fullWidth
            sx={inputStyles}
            placeholder="Enter your product details"
          />

          <TextField
            label="Select City"
            size="small"
            select
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            fullWidth
            sx={inputStyles}
            placeholder="Choose your city"
          >
            {tamilNaduCities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </TextField>

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              mt: 2,
              backgroundColor: "#0072e5",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: 2,
              "&:hover": { backgroundColor: "#005bb5" },
            }}
            disabled={loading}
          >
            Submit Inquiry
          </Button>
        </Box>
      </Box>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle sx={{ color: "#0072e5", fontWeight: "bold" }}>Thank You!</DialogTitle>
        <DialogContent>
          <Typography>
            Thank you for contacting <b>Newfly Tech Solutions</b>. We’ll get back to you within 24 hours.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
