import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[900],
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Galileo
            </Typography>
            <Typography variant="body2">
              Soluciones graficas para tu negocio o regalo personalizado
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body2">
              Gustavo: +54 9 11 6059-3156
            </Typography>
            <Typography variant="body2">
              Rosana:  +54 9 11 6734-4971
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' Galileo Sueños. Todos los derechos reservados.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 