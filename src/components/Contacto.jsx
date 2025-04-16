import { Container, Typography, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contacto = () => {
  return (
    <Container id="contacto" sx={{ py: { xs: 4, md: 8 } }}>
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
        Hablemos
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: { xs: 2, md: 4 },
          mt: { xs: 2, md: 4 }
        }}
      >
        <IconButton
          component="a"
          href="https://www.facebook.com/galileo.suenos"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: '#1877F2',
            color: 'white',
            width: { xs: 48, md: 64 },
            height: { xs: 48, md: 64 },
            '&:hover': {
              backgroundColor: '#166FE5',
            },
          }}
        >
          <FacebookIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.instagram.com/galileosuenos/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)',
            color: 'white',
            width: { xs: 48, md: 64 },
            height: { xs: 48, md: 64 },
            '&:hover': {
              opacity: 0.9,
            },
          }}
        >
          <InstagramIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
        </IconButton>

        <IconButton
          component="a"
          href="https://wa.me/541160593156"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: '#25D366',
            color: 'white',
            width: { xs: 48, md: 64 },
            height: { xs: 48, md: 64 },
            '&:hover': {
              backgroundColor: '#128C7E',
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Contacto; 