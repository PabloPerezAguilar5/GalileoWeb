import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto Mono", "Dancing Script", "Eagle Lake", "Sevillana", sans-serif',
    h1: {
      fontFamily: '"Dancing Script", cursive',
    },
    h2: {
      fontFamily: '"Dancing Script", cursive',
    },
    h3: {
      fontFamily: '"Dancing Script", cursive',
    },
    h4: {
      fontFamily: '"Dancing Script", cursive',
    },
    h5: {
      fontFamily: '"Dancing Script", cursive',
    },
    h6: {
      fontFamily: '"Dancing Script", cursive',
    },
    body1: {
      fontFamily: '"Roboto Mono", monospace',
    },
    body2: {
      fontFamily: '"Roboto Mono", monospace',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: '#086482' }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Servicios />
                <Box sx={{ bgcolor: '#999' }}>
                  <Galeria />
                </Box>
                <Contacto />
              </>
            } />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/galeria" element={<Box sx={{ bgcolor: '#999' }}><Galeria /></Box>} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
