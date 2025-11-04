/**
 * Navigation 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <Navigation />
 */
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Me', path: '/about' },
    { label: 'Projects', path: '/projects' }
  ];

  return (
    <AppBar position='sticky' sx={{ backgroundColor: 'background.paper', boxShadow: 1 }}>
      <Container maxWidth='lg'>
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Typography
            variant='h6'
            component={Link}
            to='/'
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 700,
              fontSize: { xs: '1.25rem', md: '1.5rem' }
            }}
          >
            Portfolio
          </Typography>
          <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 } }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                  fontWeight: location.pathname === item.path ? 700 : 500,
                  borderBottom: location.pathname === item.path ? 2 : 0,
                  borderColor: 'primary.main',
                  borderRadius: 0,
                  px: { xs: 1.5, md: 2 },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'primary.main'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
