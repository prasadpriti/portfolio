import React from "react";
import {
  Container,
  Typography,
  Box,
  Stack,
  Avatar,
  Paper,
} from "@mui/material";
import { SiReact } from "react-icons/si";
import { FaUserTie } from "react-icons/fa";

interface ExperienceItem {
  label: string;
  description: string;
  icon: React.ReactNode;
  company: string;
  period: string;
}

const experience: ExperienceItem[] = [
  {
    label: "Analyst",
    description:
      "Improved backend performance by 40%, scalability by 35%, and efficiency by 30%. Mentored 5+ junior team members.",
    icon: <FaUserTie color="#7f5af0" />,
    company: "Capgemini Technology Services India Ltd., Bangalore",
    period: "Dec 2023 – Present",
  },
  {
    label: "Software Developer",
    description:
      "Specialized in React, improved UX and efficiency by 25%. Built 10+ workflows, 15 UI pages integrated with ServiceNow backend. Followed design patterns and best practices.",
    icon: <SiReact color="#61DAFB" />,
    company: "Auctopus Technologies Pvt. Ltd.",
    period: "May 2023 – Dec 2023",
  },
];

const Experience: React.FC = () => {
  return (
    <Container sx={{ py: 6, position: "relative" }}>
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
        Experience
      </Typography>
      <Box sx={{ position: "relative", maxWidth: 700, mx: "auto", mt: 5 }}>
        {/* Animated vertical timeline */}
        <Box
          sx={{
            position: "absolute",
            left: 32,
            top: 0,
            bottom: 0,
            width: 6,
            bgcolor: "primary.main",
            borderRadius: 3,
            zIndex: 0,
            boxShadow: "0 0 32px #7f5af044",
            animation: "timelinePulse 2.5s infinite alternate",
          }}
        />
        <Stack spacing={5} sx={{ position: "relative", zIndex: 1 }}>
          {experience.map((exp, idx) => (
            <Box
              key={exp.label}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                position: "relative",
                animation: `fadeInUp 0.8s ${0.2 + idx * 0.1}s both`,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "background.paper",
                  color: "primary.main",
                  border: "3px solid",
                  borderColor: "primary.main",
                  width: 56,
                  height: 56,
                  boxShadow: "0 2px 12px #7f5af033",
                  mr: 3,
                  zIndex: 2,
                  fontSize: 32,
                  transition: "box-shadow 0.3s",
                  "&:hover": {
                    boxShadow: "0 4px 24px #2cb67d55",
                  },
                }}
              >
                {exp.icon}
              </Avatar>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  bgcolor: "rgba(255,255,255,0.10)",
                  minWidth: 0,
                  flex: 1,
                  boxShadow: "0 8px 32px #7f5af044",
                  borderLeft: "4px solid",
                  borderColor: "primary.main",
                  borderImage: "linear-gradient(180deg, #7f5af0, #2cb67d) 1",
                  position: "relative",
                  transition: "box-shadow 0.3s",
                  "&:hover": {
                    boxShadow: "0 16px 48px #2cb67d55",
                  },
                }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  sx={{
                    fontFamily: "Space Grotesk, sans-serif",
                    color: "primary.main",
                  }}
                >
                  {exp.label}{" "}
                  <span style={{ color: "#2cb67d", fontWeight: 600 }}>
                    @ {exp.company}
                  </span>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1, fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {exp.period}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {exp.description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Stack>
      </Box>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes timelinePulse {
          0% { box-shadow: 0 0 32px #7f5af044; }
          100% { box-shadow: 0 0 64px #2cb67d88; }
        }
      `}</style>
    </Container>
  );
};

export default Experience;
