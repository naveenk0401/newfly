"use client";

import * as React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

const service = {
  title: "CCTV Installation & Monitoring",
  image: "/services/cctv.jpg",
  bullets: [
    "Professional CCTV setup for homes, offices, and industrial facilities.",
    "High-definition cameras, DVR/NVR systems, and remote monitoring solutions.",
    "Maintenance and troubleshooting ensure continuous security coverage.",
    "Custom CCTV plans tailored to your property layout and security needs.",
  ],
  whyChoose: [
    "Our certified installers provide expert camera placement to maximize coverage and security.",
    "We offer high-quality hardware with clear video output and reliable recording.",
    "24/7 support ensures any issues are resolved quickly to maintain safety.",
    "Flexible monitoring solutions allow access from anywhere using smartphones or PCs.",
    "Customized security plans enhance protection while optimizing cost and resources.",
  ],
};

export default function CCTVService() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 6 },
        backgroundColor: "#ffffff", // Always light
        color: "#1a1a1a", // Dark readable text
        minHeight: "100vh",
        pt: { xs: "100px", md: "120px" }, // ✅ Push content below navbar
      }}
    >
      {/* Page Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          mb: 6,
          textAlign: "center",
          fontSize: { xs: "2rem", md: "2.8rem" },
          color: "#1a1a1a",
          position: "relative",
          zIndex: 5,
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
            backgroundColor: "#fff",
            borderRadius: 3,
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
            backgroundColor: "#fff",
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
                  color: "#333",
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
            color: "#1a1a1a",
            position: "relative",
            zIndex: 5,
          }}
        >
          Why You Should Choose This Service
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          flexWrap="wrap"
          gap={{ xs: 2, md: 4 }}
          justifyContent="center"
        >
          {service.whyChoose.map((point, index) => (
            <Card
              key={index}
              sx={{
                flex: { xs: "1 1 100%", md: "1 1 350px" },
                p: { xs: 2, md: 3 },
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "#fff",
                minWidth: { xs: "100%", md: "350px" },
                transition: "0.3s ease",
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
                    color: "#333",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    lineHeight: 1.6,
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
