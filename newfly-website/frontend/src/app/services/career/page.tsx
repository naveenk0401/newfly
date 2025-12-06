"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useState } from "react";

export default function CareerPage() {
  const [search, setSearch] = useState("");

  // Future-ready: Add job listings here
  const jobs: { title: string; location: string; type: string; description: string }[] = [];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 8 },
        backgroundColor: "#ffffff", // ✅ Always light
      }}
    >
      {/* Page Title */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#0072e5",
            fontSize: { xs: "1.8rem", md: "2.4rem" },
          }}
        >
          Careers at Newfly Tech Solutions
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#444",
            mt: 2,
            maxWidth: "700px",
            mx: "auto",
            fontSize: { xs: "0.9rem", md: "1rem" },
            fontStyle: "italic",
            lineHeight: { xs: 1.4, md: 1.6 },
          }}
        >
          Join a passionate and innovative team shaping the digital future.
          Explore career opportunities and grow with us.
        </Typography>
      </Box>

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 6,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for a role (e.g., Web Developer)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: { xs: "100%", sm: "60%", md: "50%" },
            backgroundColor: "white",
            borderRadius: 2,
            "& .MuiInputBase-input": {
              color: "#111", // ✅ Dark input text while typing
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#777", // ✅ Light placeholder
              opacity: 1,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ccc",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#0072e5",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#0072e5",
            },
          }}
        />
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          sx={{
            px: { xs: 3, md: 4 },
            py: 1.2,
            backgroundColor: "#0072e5",
            borderRadius: 2,
            "&:hover": { backgroundColor: "#0059b2" },
            fontSize: { xs: "0.85rem", md: "1rem" },
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Search
        </Button>
      </Box>

      {/* Job Listings */}
      <Box
        display="flex"
        flexDirection="column"
        gap={{ xs: 2, md: 4 }}
        alignItems="center"
      >
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: "100%", md: "700px" },
                p: { xs: 2, md: 3 },
                borderRadius: 3,
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                backgroundColor: "white",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 22px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1,
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    color: "#0072e5",
                  }}
                >
                  <WorkOutlineIcon color="primary" fontSize="small" /> {job.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                    mb: 1,
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
                  }}
                >
                  {job.location} • {job.type}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#333",
                    fontSize: { xs: "0.85rem", md: "1rem" },
                    lineHeight: { xs: 1.4, md: 1.6 },
                  }}
                >
                  {job.description}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Box sx={{ textAlign: "center", mt: 8 }}>
            <WorkOutlineIcon sx={{ fontSize: 60, color: "#a0aec0" }} />
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                color: "#2d3748",
                fontWeight: 600,
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              No current openings
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#4a5568",
                mt: 1,
                fontSize: { xs: "0.85rem", md: "1rem" },
                lineHeight: { xs: 1.4, md: 1.6 },
              }}
            >
              We’re not hiring right now, but we’re always looking for talented
              individuals. Stay tuned for future opportunities!
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
