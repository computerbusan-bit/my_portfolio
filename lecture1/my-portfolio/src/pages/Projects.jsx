/**
 * Projects 페이지 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <Projects />
 */
import { Box, Container, Typography, Card, CardContent } from '@mui/material';

function Projects() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 4, md: 8 },
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth='md'>
        <Card sx={{ p: { xs: 3, md: 6 } }}>
          <CardContent>
            <Typography
              variant='h2'
              sx={{
                mb: 4,
                textAlign: 'center',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Projects
            </Typography>
            <Typography
              variant='body1'
              sx={{
                textAlign: 'center',
                fontSize: { xs: '1rem', md: '1.25rem' },
                color: 'text.secondary',
                lineHeight: 1.8
              }}
            >
              Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Projects;
