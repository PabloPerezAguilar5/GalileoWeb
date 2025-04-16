import { Container, Typography, Box, IconButton } from '@mui/material';
import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import imagen1 from '../assets/1.jpg';
import imagen2 from '../assets/2.jpg';
import imagen3 from '../assets/3.jpg';
import imagen4 from '../assets/4.jpg';
import imagen5 from '../assets/5.jpg';
import imagen6 from '../assets/6.jpg';
import imagen7 from '../assets/7.jpg';
import imagen8 from '../assets/8.jpg';
import imagen9 from '../assets/9.jpg';
import imagen10 from '../assets/10.jpg';

const Galeria = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { img: imagen1, title: 'Imagen 1' },
    { img: imagen2, title: 'Imagen 2' },
    { img: imagen3, title: 'Imagen 3' },
    { img: imagen4, title: 'Imagen 4' },
    { img: imagen5, title: 'Imagen 5' },
    { img: imagen6, title: 'Imagen 6' },
    { img: imagen7, title: 'Imagen 7' },
    { img: imagen8, title: 'Imagen 8' },
    { img: imagen9, title: 'Imagen 9' },
    { img: imagen10, title: 'Imagen 10' },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container id="galeria" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography 
        variant="h3" 
        component="h2" 
        gutterBottom 
        align="center"
        sx={{ 
          mb: { xs: 3, md: 6 },
          fontWeight: 'bold',
          color: '#333',
          fontSize: { xs: '2rem', md: '3rem' }
        }}
      >
        Nuestra Galería
      </Typography>
      
      <Box
        sx={{
          position: 'relative',
          maxWidth: { xs: '100%', md: '800px' },
          margin: '0 auto',
          height: { xs: '300px', md: '500px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton
          onClick={handlePrevious}
          sx={{
            position: 'absolute',
            left: { xs: 0, md: -40 },
            zIndex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: { xs: '2rem', md: '3rem' } }} />
        </IconButton>

        <Box
          component="img"
          src={images[currentIndex].img}
          alt={images[currentIndex].title}
          sx={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }}
        />

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: { xs: 0, md: -40 },
            zIndex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
          }}
        >
          <ChevronRightIcon sx={{ fontSize: { xs: '2rem', md: '3rem' } }} />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Galeria; 