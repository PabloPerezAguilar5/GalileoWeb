import { Container, Box } from '@mui/material';
import serviciosImage from '../assets/Servicios.png';

const Servicios = () => {
  return (
    <Container id="servicios" sx={{ py: 8 }}>
      <Box
        component="img"
        src={serviciosImage}
        alt="Nuestros Servicios"
        sx={{
          width: '100%',
          height: 'auto',
          display: 'block',
          margin: '0 auto'
        }}
      />
    </Container>
  );
};

export default Servicios; 