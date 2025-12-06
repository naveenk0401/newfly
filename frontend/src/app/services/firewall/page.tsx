"use client";

import * as React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

const service = {
  title: "Firewall Service",
  image: "/services/firewall.jpg",
  bullets: [
    "Next-Generation Firewalls (NGFW): Advanced threat detection, deep packet inspection, and application-level filtering.",
    "Unified Threat Management (UTM): All-in-one protection combining antivirus, intrusion prevention, and content filtering.",
    "Traffic Monitoring & Reporting: Real-time insights into network activity, bandwidth usage, and potential attacks.",
    "VPN & Remote Access Setup: Securely connect your remote teams or branches with encrypted virtual private networks.",
  ],
  whyChoose: [
    "Expert configuration and deployment by certified professionals.",
    "24/7 monitoring and remote support.",
    "Affordable security packages for startups to enterprises.",
    "Protection against hacking, phishing, and malware attacks.",
    "Focused service coverage in Tiruppur, Coimbatore, and nearby regions.",
  ],
};

export default function FirewallService() {
  return (
    <Box
      sx={{
        pt: { xs: 12, md: 14 }, // ✅ Title below navbar
        pb: { xs: 6, md: 8 },
        px: { xs: 2, md: 6 },
        backgroundColor: "#ffffff", // ✅ Light theme
        color: "#000000", // ✅ Dark text
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
            sx={{ width: "100%", height: 250, objectFit: "cover", borderRadius: 2 }}
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
                sx={{ mb: 2, fontSize: { xs: "0.9rem", md: "1rem" }, color: "#333333", lineHeight: 1.6 }}
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
            color: "#111111",
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
                backgroundColor: "#ffffff",
                minWidth: { xs: "100%", md: "350px" },
                transition: "0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
              }}
            >
              <CardContent sx={{ py: { xs: 1, md: 2 } }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#333333",
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
