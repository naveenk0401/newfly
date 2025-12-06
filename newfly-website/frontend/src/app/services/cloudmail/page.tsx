"use client";

import * as React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

const service = {
  title: "Cloud Mail Service & Business Email Solutions",
  image: "/services/cloudmail.jpg",
  bullets: [
    "Professional business email setup with your custom domain for a trusted brand identity.",
    "Secure cloud-based mail hosting with 99.9% uptime and automatic data backup.",
    "Sync emails, contacts, and calendars seamlessly across all devices.",
    "Migration support from Gmail, Outlook, or other existing email systems.",
  ],
  whyChoose: [
    "Boost business credibility with professional domain-based email (e.g., info@yourcompany.com).",
    "Advanced spam protection and data encryption safeguard your communication.",
    "24/7 cloud access enables you to manage emails anytime, anywhere without server dependency.",
    "Expert setup and integration with Google Workspace, Microsoft 365, or Zoho Mail.",
    "Scalable plans for startups and enterprises to optimize productivity and collaboration.",
  ],
};

export default function CloudMailService() {
  return (
    <Box
      sx={{
        pt: { xs: 12, md: 14 }, // ✅ adds top padding to keep title below navbar
        pb: { xs: 6, md: 8 },
        px: { xs: 2, md: 6 },
        backgroundColor: "#ffffff", // ✅ always light
        color: "#000000", // ✅ dark text
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
          color: "#111111", // ✅ dark text
        }}
      >
        {service.title}
      </Typography>

      {/* Image + Bullets Section */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        gap={5}
        mb={10}
      >
        <Card
          sx={{
            maxWidth: { xs: "100%", md: 500 },
            mx: "auto",
            boxShadow: 3,
            backgroundColor: "#ffffff",
          }}
        >
          <CardMedia
            component="img"
            image={service.image}
            alt={service.title}
            sx={{
              width: "100%",
              height: 250,
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </Card>

        <Card
          sx={{
            p: { xs: 2, md: 3 },
            boxShadow: "none",
            flex: 1,
            minWidth: { xs: "100%", md: 350 },
            backgroundColor: "#ffffff",
          }}
        >
          <CardContent>
            {service.bullets.map((bullet, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  mb: 2,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#333333", // ✅ readable dark text
                  lineHeight: 1.6,
                }}
              >
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
          sx={{
            fontWeight: "bold",
            mb: 6,
            textAlign: "center",
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            color: "#111111", // ✅ visible in all modes
          }}
        >
          Why You Should Choose This Service
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          flexWrap={{ xs: "wrap", md: "wrap" }}
          gap={{ xs: 2, md: 4 }}
          justifyContent="center"
        >
          {service.whyChoose.map((point, index) => (
            <Card
              key={index}
              sx={{
                flex: { xs: "1 1 100%", md: "1 1 350px" },
                p: { xs: 1.5, md: 3 },
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#ffffff", // ✅ always light
                minWidth: { xs: "100%", md: "350px" },
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ py: { xs: 1, md: 2 } }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#333333", // ✅ readable dark text
                    fontSize: { xs: "0.85rem", md: "1rem" },
                    lineHeight: { xs: 1.4, md: 1.6 },
                  }}
                >
                  • {point}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
