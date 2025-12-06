"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
  Stack,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { subscriptionService } from "@/services/api";

const services = [
  { name: "Hardware/Software Support", href: "/services/hardware" },
  { name: "Printers & Cartridge", href: "/services/printer" },
  { name: "CCTV", href: "/services/cctv" },
  { name: "EPR & Payroll", href: "/services/epr" },
  { name: "Microsoft Support", href: "/services/microsoft" },
  { name: "Antivirus", href: "/services/antivirus" },
  { name: "Cloud-Mail Support", href: "/services/cloudmail" },
  { name: "Firewall Support", href: "/services/firewall" },
  { name: "AMC/ASC", href: "/services/amc" },
];

const socialMedia = [
  { name: "Facebook", link: "https://facebook.com" },
  { name: "Instagram", link: "https://instagram.com" },
  { name: "LinkedIn", link: "https://linkedin.com" },
  { name: "YouTube", link: "https://youtube.com" },
];


export default function Footer() {
  const [email, setEmail] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "warning" | "error"
  >("success");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setSnackbarMessage("⚠️ Please enter your email address.");
      setSnackbarSeverity("warning");
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);
    const result = await subscriptionService.subscribe(email);

    if (result.success) {
      setSnackbarMessage("🎉 Subscribed successfully! Thank you!");
      setSnackbarSeverity("success");
      setEmail("");
    } else {
      setSnackbarMessage(`❌ ${result.error || "Subscription failed. Try again later."}`);
      setSnackbarSeverity("error");
    }
    
    setOpenSnackbar(true);
    setLoading(false);
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #0a192f 0%, #000000 100%)",
        color: "#ffffff",
        px: { xs: 3, sm: 6, md: 10 },
        py: 8,
        mt: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: { xs: 6, md: 0 },
        }}
      >
        {/* Company Info */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1 }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 1, color: "#00bcd4" }}
          >
            Newfly Tech Solutions
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: "#ccc" }}>
            Orange park, Kanniyampoondi,
            <br />
            Tiruppur – 641663, Tamil Nadu.
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.5, color: "#ccc" }}>
            📞 +91 8618949885
          </Typography>
          <Typography variant="body2" sx={{ color: "#ccc" }}>
            ✉️ newflytechsolutions@gmail.com
          </Typography>
        </motion.div>

        {/* Our Services */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: 1 }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 2, color: "#00bcd4" }}
          >
            Our Services
          </Typography>
          <Stack spacing={1.2}>
            {services.map((service, index) => (
              <MuiLink
                key={index}
                component={Link}
                href={service.href}
                underline="hover"
                sx={{
                  color: "#ccc",
                  fontSize: "0.95rem",
                  transition: "all 0.3s ease",
                  "&:hover": { color: "#00bcd4", pl: 1 },
                }}
              >
                {service.name}
              </MuiLink>
            ))}
          </Stack>
        </motion.div>

        {/* Social + Newsletter */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ flex: 1 }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 2, color: "#00bcd4" }}
          >
            Connect With Us
          </Typography>
          <Stack spacing={1.2} sx={{ mb: 3 }}>
            {socialMedia.map((social, index) => (
              <MuiLink
                key={index}
                href={social.link}
                target="_blank"
                underline="hover"
                sx={{
                  color: "#ccc",
                  fontSize: "0.95rem",
                  transition: "all 0.3s ease",
                  "&:hover": { color: "#00bcd4", pl: 1 },
                }}
              >
                {social.name}
              </MuiLink>
            ))}
          </Stack>

          <Typography variant="body2" sx={{ mb: 1 }}>
            Subscribe to our newsletter:
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              size="small"
              placeholder="Enter your email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                bgcolor: "#fff",
                borderRadius: 1,
                flex: 1,
                input: { color: "#000" },
              }}
            />
            <Button
              variant="contained"
              onClick={handleSubscribe}
              disabled={loading}
              sx={{
                bgcolor: "#00bcd4",
                color: "#fff",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#0097a7" },
                borderRadius: 1,
                px: 2,
              }}
            >
              {loading ? "..." : "Subscribe"}
            </Button>
          </Box>
        </motion.div>
      </Box>

      <Divider sx={{ my: 5, borderColor: "#222" }} />

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          color: "#999",
          pt: 2,
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} Newfly Tech Solutions. All Rights Reserved.
      </Typography>

      {/* Stylish Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        TransitionProps={{ onExited: () => setSnackbarMessage("") }}
      >
        <Alert
          severity={snackbarSeverity}
          variant="filled"
          onClose={() => setOpenSnackbar(false)}
          sx={{
            width: "100%",
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: 2,
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
