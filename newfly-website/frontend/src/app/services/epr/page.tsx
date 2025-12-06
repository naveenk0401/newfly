"use client";

import * as React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

const service = {
  title: "ERP & Payroll Management System",
  image: "/services/epr.jpg",
  bullets: [
    "ERP (Enterprise Resource Planning) is a software system that unifies core business operations within a single integrated platform.",
    "It connects key departments such as finance, human resources, manufacturing, and supply chain management.",
    "ERP systems streamline processes like financial management, HR operations, customer order tracking, logistics, and procurement.",
    "They deliver data-driven insights to enhance efficiency and support better strategic decision-making.",
  ],
  whyChoose: [
    "Our solution ensures accuracy and compliance in payroll, avoiding errors and legal penalties.",
    "Automated processes reduce administrative workload, saving time and improving efficiency.",
    "Scalable systems accommodate businesses of any size and complexity.",
    "Secure data management protects sensitive employee and company information.",
    "Our team provides continuous support and updates for seamless operation and compliance.",
  ],
};

export default function EPRService() {
  return (
    <Box
      sx={{
        pt: { xs: 12, md: 14 }, // ✅ Prevents title from hiding under Navbar
        pb: { xs: 6, md: 8 },
        px: { xs: 2, md: 6 },
        backgroundColor: "#ffffff", // ✅ Always white
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
          color: "#111111", // ✅ Dark text
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
            backgroundColor: "#ffffff", // ✅ light
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
                  color: "#333333",
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
