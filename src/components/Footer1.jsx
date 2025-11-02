import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Divider,
  Link,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
        mt: 8,
        pt: 6,
        pb: 3,
        px: { xs: 3, sm: 6, md: 10 },
      }}
    >
      {/* Top Section */}
      <Grid container spacing={4}>
        {/* Brand Info */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: "#60a5fa", mb: 1 }}
          >
           The New World
          </Typography>
          <Typography variant="body2" color="gray">
            The discovery that opened the door to exploration, trade, and colonization, <br /> linking Europe, Africa, and the Americas for the first time.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 1, color: "#93c5fd" ,gap:2}}
          >
            Quick Links
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.8,
            }}
          >
            <Link href="/" color="inherit" underline="none" sx={{ "&:hover": { color: "#60a5fa" } }}>
              Home
            </Link>
            <Link href="/about" color="inherit" underline="none" sx={{ "&:hover": { color: "#60a5fa" } }}>
              About Us
            </Link>
            <Link href="/contact" color="inherit" underline="none" sx={{ "&:hover": { color: "#60a5fa" } }}>
              Contact
            </Link>
            <Link href="/register" color="inherit" underline="none" sx={{ "&:hover": { color: "#60a5fa" } }}>
              Register
            </Link>
          </Box>
        </Grid>

        {/* Social Links */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 1, color: "#93c5fd" }}
          >
            Follow Us
          </Typography>
          <Box>
            <IconButton
              sx={{ color: "#60a5fa", "&:hover": { color: "#3b82f6" } }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{ color: "#60a5fa", "&:hover": { color: "#3b82f6" } }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              sx={{ color: "#60a5fa", "&:hover": { color: "#3b82f6" } }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              sx={{ color: "#60a5fa", "&:hover": { color: "#3b82f6" } }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Divider Line */}
      <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

      {/* Bottom Section */}
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography variant="body2" color="gray">
          © {new Date().getFullYear()} Learnify. All rights reserved.
        </Typography>

        <Typography variant="body2" color="gray">
          Built with ❤️ by <b style={{ color: "#60a5fa" }}>Opara Justine</b>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
