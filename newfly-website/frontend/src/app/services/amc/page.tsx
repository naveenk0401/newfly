"use client";

import * as React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Star, CheckCircle, HeartHandshake, ThumbsUp } from "lucide-react";

const service = {
  title: "AMC/ASC",
  image: "/services/asc.jpg",
  bullets: [
    "Experience complete peace of mind with our maintenance contract.",
    "We offer truly unlimited on-site support, meaning you can call us whenever you need help without worrying about hidden fees or call caps.",
    "Our main priority is to ensure your systems are always running smoothly, no matter how often you need us. We understand that your business can't afford lengthy downtime.",
    "That's why we guarantee an expert technician will be on-site to address your issue within just one hour of your call.",
    "Our agile team is structured to provide swift, effective solutions, minimizing disruption and getting you back to work fast."
  ],
  whyChoose: [
    { icon: <Star color="#fbc02d" size={26} />, text: "As a fresh and dynamic company, we are built on a foundation of modern IT expertise and a commitment to building strong client partnerships." },
    { icon: <CheckCircle color="#4caf50" size={26} />, text: "Our technicians are highly skilled in the latest technologies, and we are dedicated to earning your trust by delivering consistent, reliable, and transparent service every single time." },
    { icon: <HeartHandshake color="#e91e63" size={26} />, text: "We provide complete, end-to-end resolutions for your technical challenges, covering a wide range of hardware and software." },
    { icon: <ThumbsUp color="#2196f3" size={26} />, text: "Our technician will not only diagnose the problem but also recommend, procure, and install any necessary parts or software, ensuring your system is fully functional before we consider the job complete." }
  ]
};

export default function AMC() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 }, backgroundColor: "#ffffff" }}>

      {/* Page Title */}
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", mb: 6, textAlign: "center", color: "#0a192f" }}
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
        <Card sx={{ maxWidth: { xs: "100%", md: 500 }, mx: "auto", boxShadow: 3, backgroundColor: "#ffffff" }}>
          <CardMedia
            component="img"
            image={service.image}
            alt={service.title}
            sx={{ width: "100%", height: 250, objectFit: "cover", borderRadius: 2 }}
          />
        </Card>

        <Card sx={{ p: { xs: 2, md: 3 }, boxShadow: "none", flex: 1, backgroundColor: "#ffffff" }}>
          <CardContent>
            {service.bullets.map((bullet, index) => (
              <Typography key={index} variant="body1" sx={{ mb: 2, color: "#333" }}>
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
            color: "#0a192f"
          }}
        >
          Why You Should Choose This Service
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          flexWrap={{ xs: "wrap", md: "wrap" }}
          gap={{ xs: 1, md: 4 }}
          justifyContent="center"
        >
          {service.whyChoose.map((item, index) => (
            <Card
              key={index}
              sx={{
                flex: { xs: "1 1 100%", md: "1 1 350px" },
                p: { xs: 1, md: 3 },
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#ffffff",
                height: "auto",
              }}
            >
              <Box display="flex" alignItems="flex-start" mb={0.5}>
                <Box mr={1}>{item.icon}</Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#333",
                      fontSize: { xs: "0.75rem", md: "1rem" },
                      lineHeight: { xs: 1.2, md: 1.5 },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
