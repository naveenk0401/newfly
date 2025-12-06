"use client";

import * as React from "react";
import { Box, Card, CardMedia, Typography, Button } from "@mui/material";
import Link from "next/link";

const services = [
  {
    title: "Printer Service",
    image: "/services/printer.jpg",
    link: "/services/printer",
    description: [
      "Professional printer repair and maintenance services for all brands.",
      "Expert cartridge replacement, paper jam solutions, and hardware fixes.",
      "Ensure fast and high-quality printing for office and home environments.",
      "Affordable printer servicing with guaranteed satisfaction.",
      "Reliable solutions to maximize printer performance and uptime.",
    ],
  },
  {
    title: "Desktop and Laptop Service",
    image: "/services/hardware.jpg",
    link: "/services/hardware",
    description: [
      "Comprehensive laptop repair and maintenance services.",
      "Hardware upgrades, virus removal, and software optimization included.",
      "Screen, keyboard, and battery replacements with certified parts.",
      "Expert technicians ensuring fast turnaround and minimal downtime.",
      "Enhance laptop performance and prolong device life.",
    ],
  },
  {
    title: "CCTV Installation",
    image: "/services/cctv.jpg",
    link: "/services/cctv",
    description: [
      "High-quality CCTV camera installation and setup for homes and businesses.",
      "Professional positioning and cable management for optimal security.",
      "Remote monitoring and recording solutions for peace of mind.",
      "Affordable CCTV packages to suit every requirement.",
      "Reliable surveillance to protect property and assets.",
    ],
  },
  {
    title: "Microsoft Software Update",
    image: "/services/microsoft.jpg",
    link: "/services/microsoft",
    description: [
      "Microsoft software updates and license management services.",
      "Keep your Windows OS and Office tools secure and up-to-date.",
      "Optimize system performance and productivity for businesses.",
      "Expert guidance on software installation and compliance.",
      "Ensure smooth operations with professional software support.",
    ],
  },
  {
    title: "ERP and Payroll System",
    image: "/services/epr.jpg",
    link: "/services/epr",
    description: [
      "Automated ERP and payroll solutions for businesses of all sizes.",
      "Streamline employee management and salary processing efficiently.",
      "Generate reports and maintain compliance effortlessly.",
      "User-friendly interface with secure data management.",
      "Simplify HR operations and reduce manual errors.",
    ],
  },
  {
    title: "Antivirus Protection",
    image: "/services/antivirus.jpg",
    link: "/services/antivirus",
    description: [
      "Comprehensive antivirus and cybersecurity solutions for devices.",
      "Protect desktops, laptops, and networks from malware and viruses.",
      "Regular updates and real-time threat detection included.",
      "Maintain device performance while staying secure online.",
      "Ensure business continuity with robust antivirus protection.",
    ],
  },
  {
    title: "AMC/ASC",
    image: "/services/asc.jpg",
    link: "/services/amc",
    description: [
      "Experience complete peace of mind with our maintenance contract.",
      "We offer truly unlimited on-site support, meaning you can call us whenever you need help without worrying about hidden fees or call caps.",
      "Our main priority is to ensure your systems are always running smoothly, no matter how often you need us.",
    ],
  },
  {
    title: "Cloud Mail Service",
    image: "/services/cloudmail.jpg",
    link: "/services/cloudmail",
    description: [
      "Secure and scalable cloud-based email hosting for businesses and professionals.",
      "Access your mails anytime, anywhere with enterprise-grade reliability.",
      "Enhanced spam filtering, data encryption, and 99.9% uptime guarantee.",
      "Seamless migration and setup support from our expert IT team.",
      "Empower your business communication with fast, reliable cloud mail solutions in Tiruppur & Coimbatore.",
    ],
  },
  {
    title: "Firewall Service",
    image: "/services/firewall.jpg",
    link: "/services/firewall",
    description: [
      "We deliver powerful firewall protection services to safeguard your business network from cyber threats, unauthorized access, and data breaches.",
      "Our team ensures your systems remain secure and stable — so you can focus on what matters most: your business growth.",
    ],
  },
];

export default function ServiceGrid() {
  return (
    <Box
      sx={{
        py: 5,
        px: { xs: 2, md: 6 },
        backgroundColor: "#ffffff", // ✅ Always white background
        color: "#000000", // ✅ Always black text
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 6,
          color: "#000000", // ✅ Always black heading
        }}
      >
        Our Services
      </Typography>

      {services.map((service, index) => (
        <Box
          key={service.title}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            },
            alignItems: "center",
            mb: 6,
            gap: 4,
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 50%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: { xs: "100%", md: 400 },
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={service.image}
                alt={service.title}
                sx={{ objectFit: "cover" }}
              />
            </Card>
          </Box>

          {/* Description Section */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 50%" },
              color: "#000000", // ✅ Always black text
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              {service.title}
            </Typography>
            {service.description.map((line, idx) => (
              <Typography key={idx} sx={{ mb: 1 }}>
                {line}
              </Typography>
            ))}
            <Link href={service.link} passHref>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  background: "linear-gradient(90deg, #00d9ff, #dfe52e)",
                  color: "#000",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(90deg, #dfe52e, #00d9ff)",
                  },
                }}
              >
                Learn More
              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
