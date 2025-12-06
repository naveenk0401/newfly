"use client";

import { Box, Typography, Card, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  ShieldCheck,
  Star,
  CheckCircle,
  HeartHandshake,
  ThumbsUp,
  Award,
} from "lucide-react";

export default function About() {
  const visionPoints = [
    {
      icon: <Lightbulb size={26} color="#00bcd4" />,
      text: "To be a leading IT solutions provider offering innovative, efficient, and secure technology services across India.",
    },
    {
      icon: <TrendingUp size={26} color="#00bcd4" />,
      text: "To empower businesses through technology that enhances productivity and sustainability.",
    },
    {
      icon: <Users size={26} color="#00bcd4" />,
      text: "To build long-lasting relationships with clients through trust, transparency, and excellence.",
    },
    {
      icon: <ShieldCheck size={26} color="#00bcd4" />,
      text: "To ensure data safety and reliability in every solution we deliver.",
    },
    {
      icon: <Target size={26} color="#00bcd4" />,
      text: "To continuously innovate and adapt to the latest digital advancements.",
    },
  ];

  const missionPoints = [
    {
      icon: <Target size={26} color="#8bc34a" />,
      text: "We provide IT services that focus on your needs, making sure the job is done well and quickly.",
    },
    {
      icon: <Lightbulb size={26} color="#8bc34a" />,
      text: "Leverage modern technologies to streamline business operations for long-term success.",
    },
    {
      icon: <Users size={26} color="#8bc34a" />,
      text: "Foster a collaborative culture within our team and partners to achieve excellence.",
    },
    {
      icon: <TrendingUp size={26} color="#8bc34a" />,
      text: "Enable small and medium businesses to grow digitally and sustainably.",
    },
    {
      icon: <ShieldCheck size={26} color="#8bc34a" />,
      text: "Maintain high standards of security, reliability, and service delivery.",
    },
  ];

  const advantages = [
    {
      icon: <Star color="#fbc02d" size={26} />,
      title: "Trusted Expertise",
      text: "With 20+ companies tie up of consistent growth, Newfly Tech Solutions has built a strong reputation in Tiruppur and Coimbatore by delivering reliable IT and hardware services to businesses.",
    },
    {
      icon: <CheckCircle color="#4caf50" size={26} />,
      title: "End-to-End Services",
      text: "From hardware to software, CCTV, Microsoft license renewals, Cloud Mail Service, and antivirus — we provide a complete IT ecosystem under one trusted partner.",
    },
    {
      icon: <HeartHandshake color="#e91e63" size={26} />,
      title: "Customer-Centric Approach",
      text: "We prioritize transparency, fast response, and personalized support, ensuring customer satisfaction and long-term partnerships.",
    },
    {
      icon: <ThumbsUp color="#2196f3" size={26} />,
      title: "Top Brand Partnerships",
      text: "Partnering with Canon, Dell, Hikvision, Epson, and Microsoft allows us to provide top-quality services and guaranteed reliability.",
    },
    {
      icon: <Award color="#ff9800" size={26} />,
      title: "Commitment to Growth",
      text: "We aim to expand across South India while maintaining innovation, affordability, and customer trust as our core values.",
    },
  ];

  const team = [
    { name: "Harini R", role: "Founder" },
    { name: "Ramesh", role: "Co-Founder" },
    { name: "Naveen", role: "IT Department Head" },
    { name: "Manoj", role: "Managing Department Head" },
    { name: "Hemanth", role: "Accounts Department Head" },
  ];

  return (
    <Box sx={{ py: 8, px: { xs: 3, md: 10 }, backgroundColor: "#ffffff" }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <img
          src="/logo.png"
          alt="Newfly Tech Solutions"
          style={{
            width: "100px",
            height: "auto",
            borderRadius: "12px",
            marginBottom: "1rem",
          }}
        />
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#0a192f", mb: 2 }}
        >
          About Newfly Tech Solutions
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#444", maxWidth: 700, mx: "auto" }}
        >
          A fast-growing IT service company based in Tiruppur, providing hardware,
          software, networking, and digital support solutions. We empower industries
          and institutions through technology-driven growth.
        </Typography>
      </Box>

      {/* Who We Are */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        gap={5}
        mb={10}
      >
        <motion.img
          src="/about.jpg"
          alt="Who We Are"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 2, color: "#0a192f" }}
          >
            Who We Are
          </Typography>
          <Typography variant="body1" sx={{ color: "#333", mb: 2 }}>
            Newfly Tech Solutions is a trusted IT service provider operating for the
            20+ companies. We provide end-to-end digital solutions including hardware
            support, software setup, CCTV installations, and Microsoft licensing.
          </Typography>
          <Typography variant="body1" sx={{ color: "#333" }}>
            Our professional team combines innovation, technical precision, and
            customer focus to deliver consistent, high-quality results.
          </Typography>
        </motion.div>
      </Box>

      {/* Vision & Mission */}
      <Box textAlign="center" mb={8}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 6, color: "#0a192f" }}
        >
          Our Vision & Mission
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          flexWrap="wrap"
          justifyContent="center"
          gap={4}
        >
          {/* Vision Card */}
          <Card
            sx={{
              flex: "1 1 auto",
              p: { xs: 2, md: 3 },
              borderRadius: 3,
              boxShadow: 4,
              background: "linear-gradient(180deg, #e0f7fa, #ffffff)",
              minWidth: { xs: "100%", md: 350 },
              maxWidth: 400,
              color: "#0a192f",
            }}
          >
            <Typography
              variant="h5"
              sx={{ mb: 3, fontWeight: "bold", color: "#00bcd4" }}
            >
              Vision
            </Typography>
            {visionPoints.map((v, i) => (
              <Box key={i} display="flex" alignItems="flex-start" mb={2}>
                <Box mr={2}>{v.icon}</Box>
                <Typography
                  variant="body1"
                  sx={{ color: "#333", fontSize: { xs: "0.85rem", md: "1rem" } }}
                >
                  {v.text}
                </Typography>
              </Box>
            ))}
          </Card>

          {/* Mission Card */}
          <Card
            sx={{
              flex: "1 1 auto",
              p: { xs: 2, md: 3 },
              borderRadius: 3,
              boxShadow: 4,
              background: "linear-gradient(180deg, #f1f8e9, #ffffff)",
              minWidth: { xs: "100%", md: 350 },
              maxWidth: 400,
              color: "#0a192f",
            }}
          >
            <Typography
              variant="h5"
              sx={{ mb: 3, fontWeight: "bold", color: "#8bc34a" }}
            >
              Mission
            </Typography>
            {missionPoints.map((m, i) => (
              <Box key={i} display="flex" alignItems="flex-start" mb={2}>
                <Box mr={2}>{m.icon}</Box>
                <Typography
                  variant="body1"
                  sx={{ color: "#333", fontSize: { xs: "0.85rem", md: "1rem" } }}
                >
                  {m.text}
                </Typography>
              </Box>
            ))}
          </Card>
        </Box>
      </Box>

      {/* Team Members */}
      <Box textAlign="center" mb={10}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 4, color: "#0a192f" }}
        >
          Our Team
        </Typography>
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={4}>
          {team.map((member, i) => (
            <Card
              key={i}
              sx={{
                flex: "1 1 auto",
                maxWidth: 250,
                py: 4,
                boxShadow: 4,
                borderRadius: 4,
                textAlign: "center",
                backgroundColor: "#ffffff",
              }}
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 2,
                  bgcolor: "#00bcd4",
                  color: "white",
                  fontSize: 28,
                }}
              >
                {member.name.charAt(0)}
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0a192f" }}>
                {member.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                {member.role}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Advantages / Why Choose */}
      <Box>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            fontWeight: "bold",
            mb: 6,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            color: "#0a192f",
          }}
        >
          Why Choose Newfly Tech Solutions
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          flexWrap="wrap"
          gap={4}
          justifyContent="center"
        >
          {advantages.map((adv, i) => (
            <Card
              key={i}
              sx={{
                flex: "1 1 auto",
                p: { xs: 2, md: 3 },
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "#ffffff",
                minWidth: { xs: "100%", md: 350 },
                maxWidth: 400,
              }}
            >
              <Box display="flex" alignItems="flex-start" mb={1}>
                <Box mr={2}>{adv.icon}</Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "#0a192f",
                    }}
                  >
                    {adv.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#333",
                      fontSize: { xs: "0.85rem", md: "1rem" },
                    }}
                  >
                    {adv.text}
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
