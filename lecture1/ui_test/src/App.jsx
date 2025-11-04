import { Box, Container, Typography } from '@mui/material';
import Navigation from './components/ui/navigation';
import ButtonSection from './components/sections/button-section';
import MenuSection from './components/sections/menu-section';
import SwipeSection from './components/sections/swipe-section';
import AnimationSection from './components/sections/animation-section';

function App() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <Box
        sx={{
          width: '100%',
          minHeight: 'calc(100vh - 60px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: { xs: 2, md: 4 }
        }}
      >
        <Container maxWidth='lg' sx={{ py: 4 }}>
          <Typography
            variant='h2'
            component='h1'
            sx={{
              mb: 6,
              fontWeight: 700,
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            UI Test - 16개 UI 요소
          </Typography>

          <ButtonSection />
          <MenuSection />
          <SwipeSection />
          <AnimationSection />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
