"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [anchorElServices, setAnchorElServices] = useState<null | HTMLElement>(null);
  const [anchorElAbout, setAnchorElAbout] = useState<null | HTMLElement>(null);
  const [hideNav, setHideNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setHideNav(currentScrollY > lastScrollY && currentScrollY > 100);
    setScrolled(currentScrollY > 50);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const servicesLinks = [
    { name: "Hardware/Software Support", href: "/services/hardware" },
    { name: "Printers & Cartridge", href: "/services/printer" },
    { name: "CCTV", href: "/services/cctv" },
    { name: "EPR & Payroll", href: "/services/epr" },
    { name: "Microsoft Support", href: "/services/microsoft" },
    { name: "Antivirus", href: "/services/antivirus" },
    { name: "Cloud-Mail Support", href: "/services/cloudmail" },
    { name: "Firewall Support", href: "/services/firewall" },
    { name: "AMC/ASC", href: "/services/amc" },
  ];

  const aboutLinks = [
    { name: "About Us", href: "/services/about" },
    { name: "Career", href: "/services/career" },
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawerContent = (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "linear-gradient(180deg, #0a192f 0%, #000000 100%)",
        color: "#fff",
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(90deg, #00d9ff, #dfe52e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Newfly Tech
        </Typography>
        <IconButton color="inherit" onClick={handleDrawerToggle}>
          <CloseIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", mb: 1 }} />

      {/* Menu Links */}
      <List sx={{ flexGrow: 1 }}>
        <Link href="/" passHref>
          <ListItemButton onClick={handleDrawerToggle} sx={{ color: "#00d9ff" }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </Link>

        <Typography variant="subtitle2" sx={{ pl: 2, mt: 1, opacity: 0.8 }}>
          Sales & Services
        </Typography>
        {servicesLinks.map((item) => (
          <Link key={item.name} href={item.href} passHref>
            <ListItemButton onClick={handleDrawerToggle} sx={{ pl: 4, color: "#fff" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </Link>
        ))}

        <Typography variant="subtitle2" sx={{ pl: 2, mt: 2, opacity: 0.8 }}>
          About & Career
        </Typography>
        {aboutLinks.map((item) => (
          <Link key={item.name} href={item.href} passHref>
            <ListItemButton onClick={handleDrawerToggle} sx={{ pl: 4, color: "#fff" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </Link>
        ))}
      </List>

      <Divider sx={{ my: 1, borderColor: "rgba(255,255,255,0.2)" }} />

      {/* Contact & Inquiry */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Link href="/contact" passHref>
          <ListItemButton onClick={handleDrawerToggle} sx={{ color: "#00d9ff" }}>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </Link>

        <Link href="/inquiry" passHref>
          <ListItemButton
            onClick={handleDrawerToggle}
            sx={{
              color: "#00d9ff",
              border: "1px solid #00d9ff",
              borderRadius: "25px",
              px: 2,
              textAlign: "center",
            }}
          >
            <ListItemText primary="Inquiry" />
          </ListItemButton>
        </Link>
      </Box>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: hideNav ? -100 : 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 25 }}
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 999 }}
    >
      <AppBar
        elevation={scrolled ? 10 : 0}
        sx={{
          background: scrolled
            ? "rgba(10,25,47,0.95)"
            : "linear-gradient(180deg, #0a192f 0%, #000000 100%)",
          backdropFilter: "blur(10px)",
          transition: "all 0.4s ease-in-out",
          color: "#fff",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 2, sm: 3, md: 6 },
            py: { xs: 1, md: 1.5 },
          }}
        >
          {/* Logo */}
          <Link href="/" passHref>
            <Box display="flex" alignItems="center" gap={1.2} sx={{ cursor: "pointer" }}>
              <Image src="/logo.png" alt="Newfly Tech Logo" width={38} height={38} unoptimized />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  background: "linear-gradient(90deg, #00d9ff, #dfe52e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Newfly Tech Solutions
              </Typography>
            </Box>
          </Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Link href="/" passHref>
                <Button color="inherit">Home</Button>
              </Link>

              <Box
                onMouseEnter={(e) => setAnchorElServices(e.currentTarget)}
                onMouseLeave={() => setAnchorElServices(null)}
              >
                <Button color="inherit">Sales & Services</Button>
                <Menu
                  anchorEl={anchorElServices}
                  open={Boolean(anchorElServices)}
                  onClose={() => setAnchorElServices(null)}
                  sx={{ mt: 1 }}
                >
                  {servicesLinks.map((service) => (
                    <Link key={service.name} href={service.href} passHref>
                      <MenuItem onClick={() => setAnchorElServices(null)}>{service.name}</MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>

              <Box
                onMouseEnter={(e) => setAnchorElAbout(e.currentTarget)}
                onMouseLeave={() => setAnchorElAbout(null)}
              >
                <Button color="inherit">About & Career</Button>
                <Menu
                  anchorEl={anchorElAbout}
                  open={Boolean(anchorElAbout)}
                  onClose={() => setAnchorElAbout(null)}
                  sx={{ mt: 1 }}
                >
                  {aboutLinks.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                      <MenuItem onClick={() => setAnchorElAbout(null)}>{item.name}</MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>

              <Link href="/contact">
                <Button color="inherit">Contact Us</Button>
              </Link>
              <Link href="/inquiry">
                <Button
                  variant="outlined"
                  sx={{ borderColor: "#00d9ff", color: "#00d9ff", borderRadius: "25px", px: 2.5 }}
                >
                  Inquiry
                </Button>
              </Link>
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        transitionDuration={400}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100vh",
            background: "linear-gradient(180deg, #0a192f 0%, #000000 100%)",
            color: "#fff",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </motion.div>
  );
}
