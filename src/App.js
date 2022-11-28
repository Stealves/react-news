import React from 'react';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import { Navigation } from './components/Navigation';
import { AppRoutes } from './routes/AppRoutes';
import { categories } from './services/categories';
import { Footer } from './components/Footer';

function App() {
  return (
    <Container maxWidth='lg'>
      <Header categories={categories} />
      <Box sx={{ border: 3, borderRadius: '15px', borderColor: 'primary.main', backgroundColor: 'custom.light' }}>
        <Navigation categories={categories} />
        <AppRoutes />
      </Box>
      <Footer />
    </Container>
  );
}

export default App;
