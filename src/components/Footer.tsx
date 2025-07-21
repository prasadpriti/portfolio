import React from 'react';
import { Box, IconButton, Typography, Stack } from '@mui/material';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(33,33,43,0.75)' : 'rgba(255,255,224,0.75)',
        py: 4,
        mt: 6,
        textAlign: 'center',
        borderTop: (theme) => theme.palette.mode === 'dark' ? '2.5px solid #7f5af055' : '2.5px solid #FFD60055',
        boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 -4px 32px 0 #2cb67d44' : '0 -4px 32px 0 #FFD60044',
        backdropFilter: 'blur(12px)',
        borderRadius: '32px 32px 0 0',
        overflow: 'visible',
      }}
    >
      {/* Animated gradient bar behind Footer */}
      <Box sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -10,
        height: 8,
        background: (theme) => theme.palette.mode === 'dark'
          ? 'linear-gradient(90deg, #7f5af0, #2cb67d)'
          : 'linear-gradient(90deg, #FFD600, #FF9800)',
        filter: 'blur(8px)',
        opacity: 0.7,
        zIndex: 0,
      }} />
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 1 }}>
        {/* Mode SVG */}
        {useSelector((state: RootState) => state.theme.darkMode) ? (
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <svg width="24" height="24" viewBox="0 0 18 18"><circle cx="9" cy="9" r="7" fill="#ffe066" opacity="0.7" /><circle cx="12" cy="7" r="2.5" fill="#232946" /></svg>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <svg width="24" height="24" viewBox="0 0 18 18"><circle cx="9" cy="9" r="7" fill="#FFD600" opacity="0.7" /><g stroke="#FF9800" strokeWidth="2"><line x1="9" y1="0" x2="9" y2="4"/><line x1="9" y1="14" x2="9" y2="18"/><line x1="0" y1="9" x2="4" y2="9"/><line x1="14" y1="9" x2="18" y2="9"/><line x1="3" y1="3" x2="5.5" y2="5.5"/><line x1="12.5" y1="12.5" x2="15" y2="15"/><line x1="3" y1="15" x2="5.5" y2="12.5"/><line x1="12.5" y1="5.5" x2="15" y2="3"/></g></svg>
          </Box>
        )}
        <IconButton href="https://www.linkedin.com/in/priti-prasad-82888b1a3/" target="_blank" rel="noopener" color="primary">
          <SiLinkedin />
        </IconButton>
        <IconButton href="https://github.com/pritiprasad01" target="_blank" rel="noopener" color="primary">
          <SiGithub />
        </IconButton>
        <IconButton href="mailto:pritiprasad3105@gmail.com" color="primary">
          <MdEmail />
        </IconButton>
      </Stack>
      <Typography variant="caption" color="primary" sx={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
        © {new Date().getFullYear()} Priti Prasad. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer; 