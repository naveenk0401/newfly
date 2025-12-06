"use client";

import { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const banners = [
  "/banner/slide1.png",
  "/banner/slide2.jpg",
  "/banner/slide3.jpg",
  "/banner/slide4.jpg",
  "/banner/slide5.png",
];
// const banners = ["/banner/slide1.png", "/banner/slide2.jpg", "/banner/slide3.jpg", "/banner/slide4.jpg", "/banner/slide5.jpg"];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex((prev) => (prev + 1) % banners.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const getBannerAspectRatio = () => (isMobile ? 0.33 : isTablet ? 0.4 : 0.5);

  return (
    <Box sx={{ mt: { xs: "64px", sm: "70px" }, width: "100%" }}>
      {/* Banner */}
      <Box sx={{ position: "relative", width: "100%", pb: `${getBannerAspectRatio() * 100}%`, overflow: "hidden", backgroundColor: "#000" }}>
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          >
            <Image
              src={banners[currentIndex]}
              alt={`Banner ${currentIndex + 1}`}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Dots below banner changes*/}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, mt: 2 }}>
        {banners.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: currentIndex === index ? 14 : 10,
              height: currentIndex === index ? 14 : 10,
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "#00d9ff" : "rgba(255,255,255,0.5)",
              transition: "all 0.3s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
