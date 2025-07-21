import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image?: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "IKEA Payments",
    description:
      "Integrated TP.Net Tills with IKEA systems. Built a log parser tool that reduced POS transaction recovery time by 40%. (Java, Spring Boot, Microservices, Spring Cloud, Spring Security)",
    github: "",
    demo: "",
  },
  {
    title: "NetPeace",
    description:
      "Developed AI-powered, self-healing network automation interface. Improved UX by 25%, onboarding time by 15%, and resolution time by 50%. (React, JavaScript)",
    github: "",
    demo: "",
  },
];

const Projects: React.FC = () => {
  return (
    <Container sx={{ py: 6, position: "relative" }}>
      {/* Animated SVG background */}
      <Box
        sx={{
          position: "absolute",
          top: -40,
          left: "10%",
          width: 320,
          height: 180,
          zIndex: 0,
          opacity: 0.18,
          pointerEvents: "none",
        }}
      >
        <svg
          width="320"
          height="180"
          viewBox="0 0 320 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="projGrad"
              x1="0"
              y1="0"
              x2="320"
              y2="180"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7f5af0" />
              <stop offset="1" stop-color="#2cb67d" />
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="90" rx="140" ry="60" fill="url(#projGrad)">
            <animate
              attributeName="rx"
              values="140;120;140"
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="ry"
              values="60;80;60"
              dur="6s"
              repeatCount="indefinite"
            />
          </ellipse>
        </svg>
      </Box>
      <Typography
        variant="h5"
        fontWeight={600}
        gutterBottom
        sx={{
          fontFamily: "Space Grotesk, sans-serif",
          color: "primary.main",
          textAlign: "center",
          mb: 4,
          letterSpacing: 2,
          textShadow: "0 2px 16px #7f5af044",
        }}
      >
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          position: "relative",
          zIndex: 1,
        }}
      >
        {projects.map((project, idx) => (
          <Box
            key={project.title}
            sx={{
              width: { xs: "100%", md: "33.3333%" },
              display: "flex",
            }}
          >
            <Card
              sx={{
                p: 0,
                minHeight: 320,
                borderRadius: 6,
                boxShadow: "0 8px 32px #7f5af044",
                background: "rgba(255,255,255,0.10)",
                border: "2px solid",
                borderImage: "linear-gradient(120deg, #7f5af0, #2cb67d) 1",
                transition: "transform 0.3s, box-shadow 0.3s",
                display: "flex",
                flexDirection: "column",
                animation: `fadeInUp 0.8s ${0.2 + idx * 0.1}s both`,
                "&:hover": {
                  transform: "translateY(-10px) scale(1.04)",
                  boxShadow: "0 16px 48px #2cb67d55",
                  background:
                    "linear-gradient(120deg, #7f5af0 0%, #2cb67d 100%)",
                  color: "#fff",
                  ".MuiTypography-root": { color: "#fff" },
                },
              }}
            >
              {project.image && (
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: 140,
                    objectFit: "cover",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                  }}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ fontFamily: "Space Grotesk, sans-serif", mb: 1 }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end", px: 2, pb: 2 }}>
                {project.github && (
                  <Button
                    size="small"
                    color="inherit"
                    href={project.github}
                    target="_blank"
                    startIcon={<SiGithub />}
                    sx={{
                      fontWeight: 600,
                      fontFamily: "Space Grotesk, sans-serif",
                      textTransform: "none",
                      "&:hover": {
                        color: "#fff",
                        background: "rgba(0,0,0,0.08)",
                      },
                    }}
                  >
                    GitHub
                  </Button>
                )}
                {project.demo && (
                  <Button
                    size="small"
                    color="secondary"
                    href={project.demo}
                    target="_blank"
                    endIcon={<FaExternalLinkAlt />}
                    sx={{
                      fontWeight: 600,
                      fontFamily: "Space Grotesk, sans-serif",
                      textTransform: "none",
                      "&:hover": {
                        color: "#fff",
                        background: "rgba(44,182,125,0.12)",
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Container>
  );
};

export default Projects;
