import { Container, Typography, Box, TextField, Button, Snackbar, Paper, Stack, IconButton } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const formik = useFormik<FormValues>({
    initialValues: { name: '', email: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      message: Yup.string().min(10, 'Min 10 characters').required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setSnackbarOpen(true);
      resetForm();
    },
  });
  return (
    <Container sx={{ py: 6, maxWidth: 600, position: 'relative' }}>
      {/* Animated SVG background */}
      <Box sx={{
        position: 'absolute',
        top: -30,
        right: -40,
        width: 180,
        height: 120,
        zIndex: 0,
        opacity: 0.16,
        pointerEvents: 'none',
      }}>
        <svg width="180" height="120" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="contactGrad" x1="0" y1="0" x2="180" y2="120" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7f5af0" />
              <stop offset="1" stop-color="#2cb67d" />
            </linearGradient>
          </defs>
          <ellipse cx="90" cy="60" rx="80" ry="40" fill="url(#contactGrad)">
            <animate attributeName="rx" values="80;60;80" dur="6s" repeatCount="indefinite" />
            <animate attributeName="ry" values="40;60;40" dur="6s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </Box>
      <Typography variant="h5" fontWeight={600} gutterBottom sx={{ fontFamily: 'Space Grotesk, sans-serif', color: 'primary.main', textAlign: 'center', mb: 4, letterSpacing: 2, textShadow: '0 2px 16px #7f5af044' }}>
        Contact
      </Typography>
      <Paper
        elevation={6}
        sx={{
          p: { xs: 2, sm: 4 },
          mt: 3,
          borderRadius: 6,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(33, 33, 43, 0.75)'
              : 'rgba(255,255,255,0.75)',
          boxShadow: '0 8px 32px #7f5af044',
          backdropFilter: 'blur(8px)',
          border: '2px solid',
          borderImage: 'linear-gradient(120deg, #7f5af0, #2cb67d) 1',
          animation: 'fadeInUp 0.8s 0.2s both',
          transition: 'box-shadow 0.3s',
          '&:hover': {
            boxShadow: '0 16px 48px #2cb67d55',
          },
        }}
      >
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          <IconButton href="https://www.linkedin.com/in/priti-prasad-82888b1a3/" target="_blank" rel="noopener" color="primary" size="large" sx={{ transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'scale(1.2) rotate(-8deg)', boxShadow: '0 4px 24px #7f5af0' } }}>
            <SiLinkedin />
          </IconButton>
          <IconButton href="https://github.com/PritiPrasad01" target="_blank" rel="noopener" color="primary" size="large" sx={{ transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'scale(1.2) rotate(8deg)', boxShadow: '0 4px 24px #2cb67d' } }}>
            <SiGithub />
          </IconButton>
          <IconButton href="mailto:pritiprasad3105@gmail.com" color="primary" size="large" sx={{ transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'scale(1.2) rotate(-8deg)', boxShadow: '0 4px 24px #7f5af0' } }}>
            <MdEmail />
          </IconButton>
        </Stack>
        <Box component="form" onSubmit={formik.handleSubmit} noValidate>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{ mb: 2 }}
            InputProps={{ sx: { borderRadius: 2 } }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ mb: 2 }}
            InputProps={{ sx: { borderRadius: 2 } }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            multiline
            minRows={4}
            sx={{ mb: 2 }}
            InputProps={{ sx: { borderRadius: 2 } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{
              fontWeight: 700,
              fontFamily: 'Space Grotesk, sans-serif',
              borderRadius: 2,
              boxShadow: '0 2px 16px #7f5af044',
              py: 1.2,
              mt: 1,
              transition: 'all 0.2s',
              '&:hover': {
                background: 'linear-gradient(90deg, #7f5af0, #2cb67d)',
                color: '#fff',
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        message="Message sent!"
      />
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Container>
  );
};

export default Contact; 