"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  CircularProgress
} from "@mui/material";
import { useState } from "react";
import { contactService } from "@/services/api";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (mobile: string) => /^[6-9]\d{9}$/.test(mobile);

  const handleSubmit = async () => {
    const { name, email, mobile, message } = formData;

    if (!name && !email && !mobile && !message) {
      setErrorMsg("Please fill all mandatory fields.");
      return;
    }
    if (!name) return setErrorMsg("Please enter your name.");
    if (!email) return setErrorMsg("Please enter your email.");
    if (!mobile) return setErrorMsg("Please enter your mobile number.");
    if (!message) return setErrorMsg("Please enter your message.");
    if (!validateEmail(email)) return setErrorMsg("Enter a valid email address.");
    if (!validateMobile(mobile)) return setErrorMsg("Enter a valid 10-digit mobile number.");

    setLoading(true);
    const result = await contactService.submitContact(formData);
    
    if (result.success) {
      setOpenDialog(true);
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setErrorMsg("");
    } else {
      setErrorMsg(result.error || "Failed to submit the form. Please try again later.");
    }
    
    setLoading(false);
  };

  // ✅ Common input styles for constant light theme
  const inputStyles = {
    backgroundColor: "#ffffff", // always white
    color: "#000000", // user input text always black
    "& .MuiInputBase-input": {
      color: "#000000", // user-entered text color
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#555555", // placeholder always dark gray
      opacity: 1,
    },
    "& .MuiInputLabel-root": {
      color: "#444444", // label always dark
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
        background: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0072e5", mb: 2 }}>
          Contact Us
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: "#444", fontWeight: 400, fontStyle: "italic" }}>
          “We’re excited to hear from you! Let’s start building your digital journey together.”
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
            label="Email Address"
            size="small"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            fullWidth
            sx={inputStyles}
            placeholder="Enter your email address"
          />
          <TextField
            label="Mobile Number"
            size="small"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            fullWidth
            sx={inputStyles}
            placeholder="Enter your mobile number"
          />
          <TextField
            label="Your Message"
            size="small"
            multiline
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            fullWidth
            sx={inputStyles}
            placeholder="Type your message here..."
          />
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
            {loading ? <CircularProgress size={24} color="inherit" /> : "Submit"}
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
          <Button onClick={() => setOpenDialog(false)} autoFocus>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
