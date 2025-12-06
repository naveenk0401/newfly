"use client";

import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { FaTools, FaTruckPickup, FaHandshake, FaDesktop } from "react-icons/fa";

const features = [
  {
    icon: <FaTruckPickup size={40} color="#00d9ff" />,
    title: "Free Pickup & Delivery",
    description:
      "Enjoy hassle-free IT service with our complimentary doorstep pickup and delivery—saving you time and effort while ensuring smooth service flow.",
  },
  {
    icon: <FaTools size={40} color="#dfe52e" />,
    title: "Expert & Reliable Technical Support",
    description:
      "Get professional support from certified technicians who deliver fast, precise, and dependable service for all IT systems, ensuring your business runs without interruption.",
  },
  {
    icon: <FaDesktop size={40} color="#00d9ff" />,
    title: "Computer Hardware & Software Sales",
    description:
      "We supply branded computers, hardware components, printers, and cartridges—providing cost-effective IT solutions trusted by businesses in Tiruppur & Coimbatore.",
  },
  {
    icon: <FaHandshake size={40} color="#dfe52e" />,
    title: "Trusted by Businesses",
    description:
      "Proudly serving textile and industrial sectors across Tiruppur & Coimbatore with reliable, customer-focused IT solutions and long-term partnerships.",
  },
];

export default function WhyChooseUs() {
  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 3, md: 8 },
        background: "linear-gradient(135deg, #00d9ff 10%, #dfe52e 90%)",
        color: "#000000", // ✅ Always black text (prevents dark mode inversion)
        transition: "none", // ✅ Disable color transitions on theme change
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#1a1a1a", // ✅ Lock color
          mb: 6,
        }}
      >
        Why Choose{" "}
        <span style={{ color: "#ffffff" }}>Newfly Tech Solutions?</span>
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              sx={{
                width: { xs: "100%", sm: "260px", md: "280px" },
                borderRadius: "20px",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
                backgroundColor: "#ffffff", // ✅ Always white
                textAlign: "center",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardContent>
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 1, color: "#000000" }} // ✅ Always black
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#333333" }} // ✅ Text stays dark
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
