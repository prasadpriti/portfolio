import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles } from '@mui/material';
import App from './App.tsx';
import type { RootState } from './store';

// Import Google Fonts
const fontUrl = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap';

// FloatingParticles component for animated SVG particles and parallax
const FloatingParticles: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Particle settings for night (stars) and day (suns)
    const numParticles = darkMode ? 48 : 18;
    let particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: darkMode ? (1.2 + Math.random() * 1.8) : (10 + Math.random() * 10),
      dx: -0.08 + Math.random() * 0.16,
      dy: -0.08 + Math.random() * 0.16,
      color: darkMode
        ? (Math.random() > 0.7 ? '#ffe066' : '#fff')
        : (Math.random() > 0.5 ? '#FFD600' : '#FF9800'),
      opacity: darkMode ? (0.7 + Math.random() * 0.3) : (0.18 + Math.random() * 0.18),
      twinkle: Math.random() * Math.PI * 2,
    }));

    function draw() {
      if (!ctx) return;
      // Night sky or day sky background
      ctx.clearRect(0, 0, width, height);
      if (darkMode) {
        ctx.fillStyle = '#181b2a';
        ctx.globalAlpha = 1;
        ctx.fillRect(0, 0, width, height);
      } else {
        ctx.fillStyle = '#f7fafc';
        ctx.globalAlpha = 1;
        ctx.fillRect(0, 0, width, height);
      }
      for (const p of particles) {
        ctx.save();
        ctx.beginPath();
        if (darkMode) {
          // Draw star (circle, twinkle)
          const twinkle = 0.7 + 0.3 * Math.sin(Date.now() / 600 + p.twinkle);
          ctx.arc(p.x, p.y, p.r * twinkle, 0, 2 * Math.PI);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.opacity * twinkle;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8 * twinkle;
          ctx.fill();
        } else {
          // Draw sun (circle with rays)
          ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.opacity;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 32;
          ctx.fill();
          // Sun rays
          for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * 2 * Math.PI;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, p.r + 10 + Math.sin(Date.now() / 800 + p.twinkle + i) * 2);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = 0.18;
            ctx.lineWidth = 2;
            ctx.shadowBlur = 0;
            ctx.stroke();
            ctx.restore();
          }
        }
        ctx.restore();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }
    }

    function animate() {
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      }
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [darkMode]);

  // Parallax effect on mouse move
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const canvas = ref.current;
      if (canvas) {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        canvas.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
      }
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        transition: 'background 0.7s',
      }}
    />
  );
};

const Theme: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#7f5af0', // Techy purple accent
      },
      secondary: {
        main: '#2cb67d', // Green accent
      },
      background: {
        default: darkMode ? '#16161a' : '#fafafa',
        paper: darkMode ? '#21212b' : '#fff',
      },
    },
    typography: {
      fontFamily: 'Space Grotesk, sans-serif',
    },
  });

  return (
    <>
      <link rel="stylesheet" href={fontUrl} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FloatingParticles />
        <GlobalStyles styles={{
          body: {
            background: darkMode
              ? 'linear-gradient(120deg, #232946 0%, #7f5af0 50%, #2cb67d 100%)'
              : 'linear-gradient(120deg, #fafafa 0%, #7f5af0 50%, #2cb67d 100%)',
            backgroundSize: '200% 200%',
            animation: 'gradientMove 12s ease-in-out infinite',
            minHeight: '100vh',
            transition: 'background 0.6s',
          },
          '@keyframes gradientMove': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }} />
        <App />
      </ThemeProvider>
    </>
  );
};

export default Theme;
