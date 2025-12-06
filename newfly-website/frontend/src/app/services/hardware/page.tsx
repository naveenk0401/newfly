"use client";

import * as React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

const serviceDetails = [
  {
    title: "Comprehensive Hardware Solutions",
    image: "/services/hardware.jpg",
    bullets: [
      "We provide end-to-end hardware support for desktops, laptops, and servers, ensuring your systems run without interruptions.",
      "Troubleshooting and repair services are offered for peripherals and devices to maximize uptime and operational efficiency.",
      "Hardware upgrades and replacements extend your equipment lifecycle with minimal downtime and cost-effective solutions.",
      "Tailored hardware solutions designed to meet your specific business needs, combining reliability, performance, and affordability.",
      "Learn more about our hardware services to keep your business running smoothly and efficiently.",
    ],
  },
  {
    title: "Software Support & Installation",
    image: "/services/software.jpg",
    bullets: [
      "Experts assist with software installation, updates, and configuration to keep systems secure and running smoothly.",
      "Troubleshooting productivity software and operating systems reduces downtime and ensures consistent performance.",
      "License management ensures compliance with software regulations, avoiding legal and financial penalties.",
      "Custom software solutions streamline workflows and automate repetitive tasks for business efficiency.",
    ],
  },
  {
    title: "Preventive & Emergency Maintenance",
    image: "/services/maintenance.jpg",
    bullets: [
      "Regular preventive maintenance prevents unexpected failures and ensures stable IT environments.",
      "Emergency support quickly resolves critical issues, minimizing downtime and protecting your valuable data.",
      "Proactive monitoring detects potential problems early, reducing the risk of system disruptions.",
      "Comprehensive reports and recommendations help optimize system performance and prevent future issues.",
    ],
  },
];

export default function HardwarePage() {
  return (
    <Box
      sx={{
        pt: { xs: 16, md: 14 }, // ✅ extra top padding for mobile
        pb: { xs: 6, md: 8 },
        px: { xs: 2, md: 6 },
        backgroundColor: "#ffffff",
        color: "#000000",
        minHeight: "100vh",
      }}
    >
      {serviceDetails.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Image + Bullets */}
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
            gap={4}
            mb={10}
            alignItems="center"
          >
            <Card
              sx={{
                flex: 1,
                maxWidth: { xs: "100%", md: 400 },
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

            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  color: "#111111",
                }}
              >
                {service.title}
              </Typography>
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
        </motion.div>
      ))}
    </Box>
  );
}
