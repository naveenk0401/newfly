"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  "/partners/Canon.png",
  "/partners/Dell.png",
  "/partners/Hikvision.png",
  "/partners/Brother.png",
  "/partners/Epson.png",
  "/partners/Microsoft.png",
  "/partners/hp.png",
  "/partners/asus.png",
  "/partners/mac.png",
  "/partners/lenovo.png",
  "/partners/acer.png",
  "/partners/McAfee.png",
];

export default function TrustedPartners() {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        py: 6,
        backgroundColor: "#f5f5f5", // consistent background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Title Section */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: "#000000", // always black text
          }}
        >
          Our Trusted Partners
        </Typography>
      </Box>

      {/* Logos Carousel */}
      <Box sx={{ display: "flex", width: "100%" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          style={{ display: "flex", gap: "50px" }}
        >
          {partners.concat(partners).map((logo, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: { xs: 80, sm: 100, md: 120 },
                height: { xs: 50, sm: 65, md: 80 },
                flexShrink: 0,
              }}
            >
              <Image
                src={logo}
                alt={`Partner ${index}`}
                fill
                sizes="(max-width: 600px) 80px, (max-width: 900px) 100px, 120px"
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
}
