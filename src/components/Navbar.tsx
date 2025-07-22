import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/themeSlice";
import type { RootState } from "../store";

const navLinks = [
  { label: "About", to: "/" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: darkMode
          ? "linear-gradient(90deg, #232946cc 0%, #7f5af099 100%)"
          : "linear-gradient(90deg, #e3f0facc 0%, #1976d299 100%)",
        backdropFilter: "blur(18px)",
        borderBottom: darkMode
          ? "2.5px solid #7f5af055"
          : "2.5px solid #1976d255",
        boxShadow: darkMode
          ? "0 4px 32px 0 #7f5af044"
          : "0 4px 32px 0 #1976d244",
        borderRadius: "0 0 32px 32px",
        overflow: "visible",
        zIndex: 1200,
        transition: "background 0.5s",
        "&:before": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 6,
          background: darkMode
            ? "linear-gradient(90deg, #7f5af0, #2cb67d)"
            : "linear-gradient(90deg, #1976d2, #1565c0)",
          filter: "blur(8px)",
          opacity: 0.7,
          zIndex: -1,
        },
      }}
    >
      <Toolbar>
        {/* Monogram/Logo + Mode SVG */}
        <Box
          sx={{
            mr: 2,
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            position: "relative",
          }}
          onClick={handleHomeClick}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: darkMode ? "#232946" : "#1976d2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: darkMode ? "0 0 12px #7f5af0" : "0 0 12px #1976d2",
              mr: 1,
              position: "relative",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: darkMode ? "#fff" : "#232946",
                fontWeight: 700,
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              PP
            </Typography>
            {/* Mode SVG */}
            {darkMode ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                style={{ position: "absolute", right: -8, top: 2 }}
              >
                <circle cx="9" cy="9" r="7" fill="#ffe066" opacity="0.7" />
                <circle cx="12" cy="7" r="2.5" fill="#232946" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                style={{ position: "absolute", right: -8, top: 2 }}
              >
                <circle cx="9" cy="9" r="7" fill="#FFD600" opacity="0.7" />
                <g stroke="#FF9800" strokeWidth="2">
                  <line x1="9" y1="0" x2="9" y2="4" />
                  <line x1="9" y1="14" x2="9" y2="18" />
                  <line x1="0" y1="9" x2="4" y2="9" />
                  <line x1="14" y1="9" x2="18" y2="9" />
                  <line x1="3" y1="3" x2="5.5" y2="5.5" />
                  <line x1="12.5" y1="12.5" x2="15" y2="15" />
                  <line x1="3" y1="15" x2="5.5" y2="12.5" />
                  <line x1="12.5" y1="5.5" x2="15" y2="3" />
                </g>
              </svg>
            )}
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              fontFamily: "Space Grotesk, sans-serif",
              color: darkMode ? "text.primary" : "#232946",
            }}
          >
            Priti Prasad
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {navLinks.map((link) => (
            <Button
              key={link.label}
              component={Link}
              to={link.to}
              color="inherit"
              sx={{
                position: "relative",
                fontWeight: location.pathname === link.to ? 700 : 400,
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: 0.5,
                px: 2,
                py: 1,
                transition: "color 0.2s",
                color:
                  location.pathname === link.to
                    ? darkMode
                      ? "primary.main"
                      : "#1976d2"
                    : darkMode
                    ? "text.primary"
                    : "#232946",
                "&:after": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 4,
                  borderRadius: 2,
                  background:
                    location.pathname === link.to
                      ? darkMode
                        ? "linear-gradient(90deg, #7f5af0, #2cb67d)"
                        : "linear-gradient(90deg, #1976d2, #1565c0)"
                      : "transparent",
                  boxShadow:
                    location.pathname === link.to
                      ? darkMode
                        ? "0 0 16px #7f5af0"
                        : "0 0 16px #1976d2"
                      : "none",
                  transition: "background 0.3s",
                  animation:
                    location.pathname === link.to
                      ? "underlineGlow 2s infinite alternate"
                      : "none",
                },
                "&:hover": {
                  color: darkMode ? "primary.main" : "#1565c0",
                  background: "transparent",
                  "&:after": {
                    background: darkMode
                      ? "linear-gradient(90deg, #7f5af0, #2cb67d)"
                      : "linear-gradient(90deg, #1976d2, #1565c0)",
                  },
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            variant="outlined"
            color="inherit"
            href="/resume.pdf"
            download
            sx={{
              ml: 2,
              borderColor: darkMode ? "primary.main" : "#1976d2",
              color: darkMode ? "primary.main" : "#1976d2",
              fontWeight: 600,
              fontFamily: "Space Grotesk, sans-serif",
              letterSpacing: 0.5,
              transition: "all 0.2s",
              "&:hover": {
                borderColor: darkMode ? "secondary.main" : "#1565c0",
                color: darkMode ? "secondary.main" : "#1565c0",
                background: darkMode
                  ? "rgba(127,90,240,0.08)"
                  : "rgba(25,118,210,0.08)",
              },
            }}
          >
            Download Resume
          </Button>
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => dispatch(toggleDarkMode())}
            color="inherit"
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
      <style>{`
        @keyframes underlineGlow {
          0% { box-shadow: 0 0 8px #7f5af0; }
          100% { box-shadow: 0 0 24px #2cb67d; }
        }
      `}</style>
    </AppBar>
  );
};

export default Navbar;
