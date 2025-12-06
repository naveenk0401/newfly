"use client";

import * as React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Star, CheckCircle, HeartHandshake, ThumbsUp } from "lucide-react";

const service = {
  title: "Antivirus Protection",
  image: "/services/antivirus.jpg",
  bullets: [
    "Protect your systems from malware, viruses, and ransomware with our comprehensive antivirus solutions.",
    "Real-time scanning and automatic updates ensure your devices are always secure and up-to-date.",
    "User-friendly interfaces make it easy to monitor and manage your protection across multiple devices.",
    "Tailored packages for businesses or individuals provide flexibility, cost-efficiency, and optimal security.",
    "Learn more about our antivirus services to safeguard your digital environment effectively.",
  ],
  whyChoose: [
    { icon: <Star color="#fbc02d" size={26} />, text: "Our antivirus service offers proactive protection, preventing malware infections before they occur and keeping your sensitive data safe from cyber threats consistently." },
    { icon: <CheckCircle color="#4caf50" size={26} />, text: "With automatic updates and real-time monitoring, you can ensure your systems are always equipped with the latest threat intelligence without manual intervention." },
    { icon: <HeartHandshake color="#e91e63" size={26} />, text: "We provide easy-to-use interfaces and centralized management, enabling businesses to oversee multiple devices efficiently without needing specialized IT knowledge." },
    { icon: <ThumbsUp color="#2196f3" size={26} />, text: "Our solutions are scalable, allowing customization for individual users, small businesses, or large enterprises, offering cost-effective options tailored to your needs." },
  ]
};

export default function AntivirusPage() {
  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh", py: { xs: 6, md: 8 }, px: { xs: 2, md: 6 } }}>
      
      {/* Mobile view title below navbar */}
      <Box sx={{ display: { xs: "block", md: "none" }, textAlign: "center", mb: 4, pt: "70px"  }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: "1.8rem",
            color: "#0a192f"
          }}
        >
          {service.title}
        </Typography>
      </Box>

      {/* Desktop title (optional if you want above content) */}
      <Box sx={{ display: { xs: "none", md: "block" }, textAlign: "center", mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#0a192f",
            fontSize: { md: "2.8rem" }
          }}
        >
          {service.title}
        </Typography>
      </Box>

      {/* Image + Bullets */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        gap={5}
        mb={10}
      >
        <Card sx={{ maxWidth: { xs: "100%", md: 500 }, mx: "auto", boxShadow: 3, backgroundColor: "#ffffff" }}>
          <CardMedia
            component="img"
            image={service.image}
            alt={service.title}
            sx={{ width: "100%", height: 250, objectFit: "cover", borderRadius: 2 }}
          />
        </Card>

        <Card sx={{ p: { xs: 2, md: 3 }, boxShadow: "none", flex: 1, minWidth: { xs: "100%", md: 350 }, backgroundColor: "#ffffff" }}>
          <CardContent>
            {service.bullets.map((bullet, index) => (
              <Typography key={index} variant="body1" sx={{ mb: 2, fontSize: { xs: "0.8rem", md: "1rem" }, color: "#333" }}>
                • {bullet}
              </Typography>
            ))}
          </CardContent>
        </Card>
      </Box>

      {/* Why Choose Section */}
      <Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 6, textAlign: "center", fontSize: { xs: "1.8rem", md: "2.2rem" }, color: "#0a192f" }}
        >
          Why You Should Choose This Service
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          flexWrap="wrap"
          gap={{ xs: 1, md: 4 }}
          justifyContent="center"
        >
          {service.whyChoose.map((item, index) => (
            <Card
              key={index}
              sx={{
                flex: { xs: "1 1 100%", md: "1 1 350px" },
                p: { xs: 1, md: 3 },
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#ffffff",
                height: "auto",
                transition: "0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
              }}
            >
              <Box display="flex" alignItems="flex-start" mb={0.5}>
                <Box mr={1}>{item.icon}</Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#444",
                      fontSize: { xs: "0.75rem", md: "1rem" },
                      lineHeight: { xs: 1.2, md: 1.5 },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
