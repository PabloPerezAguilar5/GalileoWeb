import { Box, Typography, Button, Container } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import heroImage from '../assets/Hero.png';

const Hero = () => {
  return (
    <Box id="hero" sx={{ position: 'relative' }}>
      <Box
        component="img"
        src={heroImage}
        alt="Hero"
        sx={{
          width: '100%',
          height: 'auto',
          display: 'block',
          margin: '0 auto'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: 1,
        }}
      />
      <Container 
        sx={{ 
          position: 'absolute', 
          zIndex: 2, 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' }
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{
            fontSize: { xs: '1.5rem', sm: '3rem', md: '4rem' },
            textAlign: { xs: 'center', md: 'left' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          
        
         
        </Typography>
      </Container>
      <Button
        variant="contained"
        size="large"
        component="a"
        href="https://wa.me/541160593156"
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<WhatsAppIcon />}
        sx={{
          position: 'absolute',
          bottom: { xs: '15%', md: '25%' },
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#109010',
          color: 'white',
          fontSize: { xs: '0.875rem', md: '1.2rem' },
          padding: { xs: '6px 20px', md: '12px 40px' },
          borderRadius: '30px',
          zIndex: 2,
          '&:hover': {
            backgroundColor: '#0d700d',
          },
        }}
      >
        Pedidos
      </Button>
    </Box>
  );
};

export default Hero; 