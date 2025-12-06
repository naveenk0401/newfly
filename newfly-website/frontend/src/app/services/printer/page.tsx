"use client";

import * as React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";

const service = {
  title: "Printers & Cartridge Services",
  image: "/services/printer.jpg",
  bullets: [
    "Comprehensive printer installation and setup services for home and business environments.",
    "High-quality cartridge replacement and toner management to ensure optimal printing performance.",
    "Maintenance and troubleshooting of printers to minimize downtime and improve operational efficiency.",
    "Tailored printer solutions to fit your business needs, offering cost-effective and reliable support.",
  ],
  whyChoose: [
    "We ensure your printers are installed and maintained by certified technicians, guaranteeing smooth performance and reducing the risk of operational disruptions in your home or business setup.",
    "Our cartridge replacement service uses genuine or high-quality compatible cartridges, providing long-lasting prints and reducing maintenance costs over time while maintaining print clarity and efficiency.",
    "We provide timely troubleshooting and repair services to avoid prolonged downtime, helping businesses and individuals maintain productivity without interruptions due to printer issues.",
    "Our preventive maintenance plans help identify potential issues before they escalate, saving you from unexpected expenses and ensuring that your printing equipment remains in optimal condition.",
    "Customer satisfaction is our priority, with personalized support, advice, and flexible service options designed to meet diverse printing needs, making us a trusted choice for all printer-related requirements.",
  ],
};

export default function PrinterService() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, md: 6 }, backgroundColor: "#f9fafc" }}>
      
      {/* Page Title */}
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", mb: 6, textAlign: "center", fontSize: { xs: "1.8rem", md: "2.8rem" }, color: "#1a202c" }}
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
                color: "#2d3748",
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
            color: "#1a202c",
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
                flex: { xs: "1 1 100%", md: "1 1 300px" }, // full width on mobile
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
                  color: "#444",
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
