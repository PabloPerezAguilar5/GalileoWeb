import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = isMobile ? 56 : 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      if (sectionId === 'hero') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { text: 'Inicio', id: 'hero' },
    { text: 'Servicios', id: 'servicios' },
    { text: 'Galería', id: 'galeria' },
    { text: 'Contacto', id: 'contacto' }
  ];

  const drawer = (
    <Box 
      sx={{ 
        width: '100%',
        height: '100%',
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
      }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Dancing Script", cursive',
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            fontWeight: 'bold',
            color: '#333'
          }}
        >
          Galileo Sueños
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem 
            key={item.text} 
            button
            onClick={() => scrollToSection(item.id)}
            sx={{ 
              py: 2,
              px: 3,
              color: 'text.primary',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.08)',
              }
            }}
          >
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                fontWeight: 'medium',
                fontFamily: '"Dancing Script", cursive'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: scrolled ? 'white' : 'transparent',
        boxShadow: scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Toolbar sx={{ 
        minHeight: { xs: '56px', md: '64px' },
        px: { xs: 2, md: 4 },
        justifyContent: 'space-between'
      }}>
        <Typography
          variant="h6"
          onClick={() => scrollToSection('hero')}
          sx={{
            cursor: 'pointer',
            color: scrolled ? 'black' : 'white',
            fontWeight: 'bold',
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            fontFamily: '"Dancing Script", cursive'
          }}
        >
          Galileo Sueños
        </Typography>
        
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Typography
                key={item.text}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  cursor: 'pointer',
                  color: scrolled ? 'text.primary' : 'rgba(255, 255, 255, 0.8)',
                  fontSize: { xs: '1rem', md: '1.3rem' },
                  fontFamily: '"Dancing Script", cursive',
                  '&:hover': {
                    color: scrolled ? 'primary.main' : 'white',
                  }
                }}
              >
                {item.text}
              </Typography>
            ))}
          </Box>
        )}

        {isMobile && (
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ 
              color: scrolled ? 'black' : 'white',
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: '300px',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 