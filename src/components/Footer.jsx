import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; 

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const navLinks = [
    { label: "Home", path: "/DashBoard" },
    { label: "Users", path: "/users" },
    { label: "Logout", path: "/" },
    { label: "Privacy", path: "/privacy" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #0d47a1, #164370)",
        color: "#fff",
        textAlign: "center",
        py: 5,
        px: 2,
        mt: 6,
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, letterSpacing: 1 }}>
        The New World
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>
        The discovery that opened the door to exploration, trade, and colonization,
        linking Europe, Africa, and the Americas for the first time.
      </Typography>

      {/* ✅ Navigation Links with working navigation */}
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={3} sx={{ mb: 3 }}>
        {navLinks.map(({ label, path }) => (
          <Typography
            key={label}
            variant="body2"
            onClick={() => handleNavigation(path)}
            sx={{
              cursor: "pointer",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline", color: "#bbdefb" },
            }}
          >
            {label}
          </Typography>
        ))}
      </Stack>

      <Divider
        sx={{
          bgcolor: "rgba(255,255,255,0.3)",
          width: "70%",
          mx: "auto",
          mb: 3,
        }}
      />

      {/* Newsletter Signup */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Enter your email"
          size="small"
          sx={{
            bgcolor: "rgba(255,255,255,0.9)",
            borderRadius: "8px",
            width: { xs: "90%", sm: "300px" },
          }}
        />
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(135deg, #1976d2, #0d47a1)",
            textTransform: "none",
            px: 3,
            py: 1,
            borderRadius: "8px",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(13, 71, 161, 0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #1565c0, #0d47a1)",
            },
          }}
        >
          Subscribe
        </Button>
      </Box>

      {/* Social Icons */}
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
        {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, i) => (
          <IconButton
            key={i}
            sx={{
              color: "#fff",
              "&:hover": { color: "#bbdefb", transform: "scale(1.2)" },
              transition: "0.3s ease",
            }}
          >
            <Icon />
          </IconButton>
        ))}
      </Stack>

      <Typography variant="body2" sx={{ opacity: 0.8, fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} The New World. All rights reserved. Built with ❤️ by{" "}
        <b>Opara Chibuike Justine</b>
      </Typography>
    </Box>
  );
};

export default Footer;
