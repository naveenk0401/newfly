"use client";

import * as React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";

const service = {
  title: "Microsoft Software Update & License Management",
  image: "/services/microsoft.jpg",
  bullets: [
    "We manage Microsoft software updates to keep your systems secure and compatible.",
    "License renewal and management services ensure compliance with Microsoft regulations and reduce legal risks.",
    "Custom deployment of Microsoft tools and Office 365 for efficient business operations.",
    "Technical support for troubleshooting and resolving software conflicts and installation issues.",
  ],
  whyChoose: [
    "Certified Microsoft professionals ensure proper installation, updates, and licensing for smooth operations.",
    "We provide proactive monitoring to prevent software downtime and security vulnerabilities.",
    "Tailored solutions fit your organization’s needs, optimizing productivity and collaboration.",
    "Timely support minimizes disruption and ensures all systems remain up-to-date.",
    "Our service guarantees legal compliance, cost efficiency, and reliable access to the latest Microsoft features.",
  ],
};

export default function MicrosoftService() {
  return (
    <Box
      sx={{
        pt: { xs: 12, md: 14 }, // Title below navbar
        pb: { xs: 6, md: 8 },
        px: { xs: 2, md: 6 },
        backgroundColor: "#ffffff", // Light theme
        color: "#000000", // Dark text
        minHeight: "100vh",
      }}
    >
      {/* Page Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 6,
          textAlign: "center",
          fontSize: { xs: "1.8rem", md: "2.8rem" },
          color: "#111111",
        }}
      >
        {service.title}
      </Typography>

      {/* Image + Bullets */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        mb={10}
        alignItems="center"
      >
        <Card sx={{ flex: 1, maxWidth: { xs: "100%", md: 400 }, mx: "auto", boxShadow: 3 }}>
          <CardMedia
            component="img"
            image={service.image}
            alt={service.title}
            sx={{ width: "100%", height: 250, objectFit: "cover", borderRadius: 2 }}
          />
        </Card>

        <Box sx={{ flex: 1 }}>
          {service.bullets.map((bullet, i) => (
            <Typography
              key={i}
              sx={{
                mb: 1.5,
                fontSize: { xs: "0.85rem", md: "1rem" },
                lineHeight: { xs: 1.3, md: 1.5 },
                color: "#333",
              }}
            >
              • {bullet}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Why Choose Section */}
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
            fontSize: { xs: "1.6rem", md: "2.2rem" },
            color: "#111111",
          }}
        >
          Why You Should Choose This Service
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          flexWrap="wrap"
          gap={3}
          justifyContent="center"
        >
          {service.whyChoose.map((point, idx) => (
            <Card
              key={idx}
              sx={{
                flex: { xs: "1 1 100%", md: "1 1 300px" }, // Mobile full width
                p: { xs: 2, md: 3 },
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "#ffffff",
                minWidth: { xs: "100%", md: "300px" },
                transition: "0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#333",
                  fontSize: { xs: "0.85rem", md: "1rem" },
                  lineHeight: 1.4,
                }}
              >
                • {point}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
