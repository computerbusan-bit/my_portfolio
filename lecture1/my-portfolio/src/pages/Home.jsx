/**
 * Home 페이지 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <Home />
 */
import { Box, Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box>
      {/* Hero 섹션 */}
      <Box
        sx={{
          width: '100%',
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: { xs: 4, md: 8 },
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        }}
      >
        <Container maxWidth='md'>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant='h1'
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 3,
                color: 'white'
              }}
            >
              여기는 Hero 섹션입니다
            </Typography>
            <Typography
              variant='h5'
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                mb: 4,
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.6
              }}
            >
              메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
            </Typography>
            <Button
              variant='contained'
              size='large'
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)'
                }
              }}
            >
              더 알아보기
            </Button>
          </Box>
        </Container>
      </Box>

      {/* About Me 섹션 */}
      <Box
        sx={{
          width: '100%',
          minHeight: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: { xs: 6, md: 10 },
          backgroundColor: 'background.default'
        }}
      >
        <Container maxWidth='md'>
          <Card sx={{ p: { xs: 3, md: 5 } }}>
            <CardContent>
              <Typography variant='h2' sx={{ mb: 3, textAlign: 'center' }}>
                About Me
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  color: 'text.secondary',
                  mb: 4
                }}
              >
                여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈
                예정입니다.
              </Typography>
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  component={Link}
                  to='/about'
                  variant='contained'
                  color='primary'
                  size='large'
                >
                  더 알아보기
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Skill Tree 섹션 */}
      <Box
        sx={{
          width: '100%',
          minHeight: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: { xs: 6, md: 10 },
          backgroundColor: 'background.paper'
        }}
      >
        <Container maxWidth='lg'>
          <Typography variant='h2' sx={{ mb: 5, textAlign: 'center' }}>
            Skill Tree
          </Typography>
          <Card sx={{ p: { xs: 3, md: 5 } }}>
            <CardContent>
              <Typography
                variant='body1'
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  color: 'text.secondary'
                }}
              >
                여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할
                예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Projects 섹션 */}
      <Box
        sx={{
          width: '100%',
          minHeight: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: { xs: 6, md: 10 },
          backgroundColor: 'background.default'
        }}
      >
        <Container maxWidth='lg'>
          <Typography variant='h2' sx={{ mb: 5, textAlign: 'center' }}>
            Projects
          </Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {[1, 2, 3].map((project) => (
              <Grid key={project} item xs={12} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant='h5' sx={{ mb: 2 }}>
                      프로젝트 {project}
                    </Typography>
                    <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                      대표작 썸네일이 들어갈 예정입니다.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={Link}
              to='/projects'
              variant='outlined'
              color='primary'
              size='large'
            >
              더 보기
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact 섹션 */}
      <Box
        sx={{
          width: '100%',
          minHeight: '50vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: { xs: 6, md: 10 },
          backgroundColor: 'background.paper'
        }}
      >
        <Container maxWidth='md'>
          <Typography variant='h2' sx={{ mb: 5, textAlign: 'center' }}>
            Contact
          </Typography>
          <Card sx={{ p: { xs: 3, md: 5 } }}>
            <CardContent>
              <Typography
                variant='body1'
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  color: 'text.secondary'
                }}
              >
                여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈
                예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
