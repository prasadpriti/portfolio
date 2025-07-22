import { Typography, Container, Box, Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const typing = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;
const blink = keyframes`
  0%, 100% { border-color: transparent }
  50% { border-color: #7f5af0 }
`;

const About: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "100vh", md: "120vh" },
        width: "100%",
        overflow: "hidden",
        pb: 0,
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}
    >
      {/* Full-page SVG background */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {darkMode ? (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 900"
            fill="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="nightGrad" cx="70%" cy="30%" r="1">
                <stop offset="0%" stopColor="#7f5af0" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#232946" stopOpacity="0.9" />
              </radialGradient>
            </defs>
            <rect width="1440" height="900" fill="url(#nightGrad)" />
            {/* No moon or stars */}
          </svg>
        ) : (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 900"
            fill="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="dayGrad" cx="30%" cy="20%" r="1">
                <stop offset="0%" stopColor="#1976d2" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#e3f0fa" stopOpacity="0.9" />
              </radialGradient>
            </defs>
            <rect width="1440" height="900" fill="url(#dayGrad)" />
            {/* No blue accent ellipses */}
          </svg>
        )}
      </Box>
      {/* Main content (zIndex 1+) */}
      {/* 1. Hero Section: Animated Name, Title, Vertex SVG */}
      <Box
        sx={{
          position: "relative",
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 10 },
          zIndex: 2,
        }}
      >
        <Typography
          variant="h2"
          fontWeight={700}
          sx={{
            fontFamily: "Space Grotesk, sans-serif",
            color: "primary.main",
            mb: 1,
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            borderRight: "3px solid",
            borderColor: "primary.main",
            width: "fit-content",
            margin: "0 auto",
            animation: `${typing} 1.6s cubic-bezier(0.4,0,0.2,1) forwards, ${blink} 1s step-end infinite alternate 1.8s`,
            textShadow: "0 2px 16px #7f5af044",
            zIndex: 2,
            textAlign: "center",
            opacity: 0,
          }}
        >
          Priti Prasad
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          fontWeight={600}
          sx={{
            mb: 2,
            fontFamily: "Space Grotesk, sans-serif",
            letterSpacing: 1,
            textShadow: "0 1px 8px #2cb67d33",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          Analyst | Software Developer | React, Java, Spring Boot, Microservices
        </Typography>
      </Box>
      {/* 2. Highlighted Summary Section */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: 700,
          background: darkMode
            ? "rgba(33,33,43,0.85)"
            : "rgba(255,255,255,0.85)",
          borderRadius: 6,
          boxShadow: darkMode ? "0 8px 48px #7f5af044" : "0 8px 48px #FFD60044",
          p: { xs: 2, md: 5 },
          backdropFilter: "blur(8px)",
          mt: -6,
        }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth={600}
          mx="auto"
          sx={{ mb: 4, fontSize: 20, lineHeight: 1.7, fontWeight: 500 }}
        >
          Experienced Analyst and Software Developer with a demonstrated history
          at Capgemini and Auctopus. Specialized in backend (Java, Spring Boot,
          Microservices) and frontend (React, MUI) development. Improved backend
          performance, mentored teams, and delivered scalable solutions.
          Passionate about building efficient, user-centric products.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Box
            sx={{
              flex: 1,
              background: darkMode
                ? "rgba(127,90,240,0.10)"
                : "rgba(25,118,210,0.10)",
              borderRadius: 4,
              p: 2,
              boxShadow: darkMode
                ? "0 2px 16px #7f5af044"
                : "0 2px 16px #1976d244",
              mb: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              color={darkMode ? "primary" : "primary"}
            >
              Backend Impact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Improved backend performance by 40%, scalability by 35%, and
              efficiency by 30% at Capgemini.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              background: darkMode
                ? "rgba(44,182,125,0.10)"
                : "rgba(255,255,255,0.10)",
              borderRadius: 4,
              p: 2,
              boxShadow: darkMode
                ? "0 2px 16px #2cb67d44"
                : "0 2px 16px #FFD60022",
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              color={darkMode ? "secondary" : "primary"}
            >
              Frontend & Mentorship
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Specialized in React, improved UX and efficiency by 25%, mentored
              5+ junior team members, and built 10+ workflows.
            </Typography>
          </Box>
        </Box>
      </Container>
      {/* 3. Call-to-Action Card */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: 700,
          mt: 6,
          mb: 8,
        }}
      >
        <Box
          sx={{
            background: darkMode
              ? "linear-gradient(90deg, #232946 0%, #7f5af0 100%)"
              : "linear-gradient(90deg, #e3f0fa 0%, #1976d2 100%)",
            borderRadius: 6,
            boxShadow: darkMode
              ? "0 8px 48px #7f5af044"
              : "0 8px 48px #1976d244",
            p: { xs: 2, md: 5 },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            color={darkMode ? "primary" : "primary"}
            sx={{ flex: 1, mb: { xs: 2, sm: 0 } }}
          >
            Want to collaborate or know more?
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/resume.pdf"
              download
              sx={{
                fontWeight: 700,
                fontFamily: "Space Grotesk, sans-serif",
                px: 4,
                boxShadow: darkMode
                  ? "0 2px 16px #7f5af044"
                  : "0 2px 16px #1976d244",
                background: darkMode
                  ? "linear-gradient(90deg, #7f5af0, #2cb67d)"
                  : "linear-gradient(90deg, #1976d2, #1565c0)",
                color: "#fff",
                transition: "background 0.3s",
                "&:hover": {
                  background: darkMode
                    ? "linear-gradient(90deg, #2cb67d, #7f5af0)"
                    : "linear-gradient(90deg, #1565c0, #1976d2)",
                  color: "#fff",
                },
              }}
            >
              Download Resume
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={handleContactClick}
              sx={{
                fontWeight: 700,
                fontFamily: "Space Grotesk, sans-serif",
                px: 4,
                borderWidth: 2,
                borderColor: darkMode ? "primary.main" : "#1976d2",
                color: darkMode ? "primary.main" : "#1976d2",
                background: darkMode
                  ? "rgba(44,182,125,0.08)"
                  : "rgba(25,118,210,0.08)",
                transition: "all 0.3s",
                "&:hover": {
                  borderColor: darkMode ? "secondary.main" : "#1565c0",
                  color: darkMode ? "secondary.main" : "#1565c0",
                  background: darkMode
                    ? "rgba(127,90,240,0.08)"
                    : "rgba(227,240,250,0.18)",
                },
              }}
            >
              Contact Me
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
