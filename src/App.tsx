import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Box, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import type { RootState } from './store';

const App: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
    <BrowserRouter>
      <Box sx={{ bgcolor: darkMode ? 'background.default' : '#fafafa', minHeight: '100vh' }}>
        <CssBaseline />
        <Navbar />
        <Box component="main" sx={{ minHeight: '70vh' }}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App; 