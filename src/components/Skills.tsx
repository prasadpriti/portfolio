import { Container, Typography, Box, Stack, Tooltip } from "@mui/material";
import { SiJavascript, SiReact, SiSpringboot, SiMysql } from "react-icons/si";
import { FaDatabase, FaAws, FaJava } from "react-icons/fa";

const skillGroups = [
  {
    label: "Languages",
    skills: [
      { name: "Java", icon: <FaJava color="#007396" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiJavascript color="#3178C6" /> },
      { name: "SQL", icon: <FaDatabase color="#4479A1" /> },
      { name: "HTML/CSS", icon: <SiJavascript color="#E34F26" /> },
    ],
  },
  {
    label: "Frameworks/Libraries",
    skills: [
      { name: "Spring", icon: <SiSpringboot color="#6DB33F" /> },
      { name: "ReactJS", icon: <SiReact color="#61DAFB" /> },
      { name: "AngularJS", icon: <SiReact color="#DD0031" /> },
      { name: "MUI", icon: <SiReact color="#007FFF" /> },
      { name: "JWT", icon: <SiReact color="#000000" /> },
      { name: "REST APIs", icon: <SiReact color="#00B8D9" /> },
      { name: "Bootstrap", icon: <SiReact color="#7952B3" /> },
    ],
  },
  {
    label: "Architecture",
    skills: [{ name: "Microservices", icon: <SiReact color="#2cb67d" /> }],
  },
  {
    label: "Platforms",
    skills: [
      { name: "Azure", icon: <FaAws color="#0089D6" /> },
      { name: "AWS", icon: <FaAws color="#FF9900" /> },
      { name: "ServiceNow", icon: <SiReact color="#00ADEF" /> },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiReact color="#47A248" /> },
      { name: "PostgreSQL", icon: <SiReact color="#336791" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "SQLDeveloper", icon: <SiReact color="#F80000" /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <Container sx={{ py: 6 }}>
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
        Skills
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="flex-start"
        sx={{ mt: 3 }}
      >
        {skillGroups.map((group, idx) => (
          <Box
            key={group.label}
            sx={{
              minWidth: 200,
              background: "rgba(255,255,255,0.10)",
              borderRadius: 6,
              boxShadow: "0 8px 32px #7f5af044",
              p: 3,
              mb: 2,
              border: "2px solid",
              borderImage: "linear-gradient(120deg, #7f5af0, #2cb67d) 1",
              backdropFilter: "blur(8px)",
              animation: `fadeInUp 0.8s ${0.2 + idx * 0.1}s both`,
              transition: "box-shadow 0.3s",
              "&:hover": {
                boxShadow: "0 12px 48px #2cb67d55",
              },
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight={700}
              sx={{
                mb: 2,
                color: "secondary.main",
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: 1,
              }}
            >
              {group.label}
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              {group.skills.map((skill, i) => (
                <Tooltip title={skill.name} key={skill.name} arrow>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: 1,
                      mb: 2,
                      p: 1.5,
                      borderRadius: 2,
                      background: "rgba(127,90,240,0.07)",
                      boxShadow: "0 2px 8px #7f5af022",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.15) rotate(-6deg)",
                        boxShadow: "0 4px 24px #2cb67d55",
                        background:
                          "linear-gradient(90deg, #7f5af0 10%, #2cb67d 90%)",
                      },
                      animation: `popIn 0.7s ${0.3 + i * 0.05}s both`,
                    }}
                  >
                    <Box
                      sx={{ fontSize: 36, mb: 0.5, transition: "color 0.3s" }}
                    >
                      {skill.icon}
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: "Space Grotesk, sans-serif",
                        color: "text.primary",
                        fontWeight: 600,
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                </Tooltip>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.7); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </Container>
  );
};

export default Skills;
