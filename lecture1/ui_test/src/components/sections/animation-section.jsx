import { useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

/**
 * AnimationSection 컴포넌트
 * CSS 트랜지션 애니메이션을 재생 버튼으로 제어
 *
 * 기능:
 * - 페이드인/아웃 애니메이션
 * - 크기 변화 애니메이션
 * - 회전 효과 애니메이션
 * - 재생 버튼 클릭 시 애니메이션 실행
 */
function AnimationSection() {
  const [fadeActive, setFadeActive] = useState(false);
  const [scaleActive, setScaleActive] = useState(false);
  const [rotateActive, setRotateActive] = useState(false);

  // 페이드인/아웃 애니메이션 실행
  const handleFadeAnimation = () => {
    setFadeActive(true);
    setTimeout(() => setFadeActive(false), 2000);
  };

  // 크기 변화 애니메이션 실행
  const handleScaleAnimation = () => {
    setScaleActive(true);
    setTimeout(() => setScaleActive(false), 2000);
  };

  // 회전 효과 애니메이션 실행
  const handleRotateAnimation = () => {
    setRotateActive(true);
    setTimeout(() => setRotateActive(false), 2000);
  };

  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant='h4'
        sx={{
          mb: 4,
          fontWeight: 600,
          fontSize: { xs: '1.5rem', md: '2rem' }
        }}
      >
        Animation
      </Typography>

      {/* 페이드인/아웃 애니메이션 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
          Fade In/Out
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button
            variant='contained'
            startIcon={<PlayArrowIcon />}
            onClick={handleFadeAnimation}
            sx={{ minWidth: 120 }}
          >
            재생
          </Button>
          <Paper
            elevation={3}
            sx={{
              width: 120,
              height: 120,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'primary.main',
              color: 'white',
              opacity: fadeActive ? 0 : 1,
              transition: 'opacity 2s ease-in-out'
            }}
          >
            <Typography variant='h6'>Fade</Typography>
          </Paper>
        </Box>
      </Box>

      {/* 크기 변화 애니메이션 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
          Scale Transform
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button
            variant='contained'
            startIcon={<PlayArrowIcon />}
            onClick={handleScaleAnimation}
            sx={{ minWidth: 120 }}
          >
            재생
          </Button>
          <Paper
            elevation={3}
            sx={{
              width: 120,
              height: 120,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'secondary.main',
              color: 'white',
              transform: scaleActive ? 'scale(1.5)' : 'scale(1)',
              transition: 'transform 2s ease-in-out'
            }}
          >
            <Typography variant='h6'>Scale</Typography>
          </Paper>
        </Box>
      </Box>

      {/* 회전 효과 애니메이션 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
          Rotate Transform
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button
            variant='contained'
            startIcon={<PlayArrowIcon />}
            onClick={handleRotateAnimation}
            sx={{ minWidth: 120 }}
          >
            재생
          </Button>
          <Paper
            elevation={3}
            sx={{
              width: 120,
              height: 120,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'success.main',
              color: 'white',
              transform: rotateActive ? 'rotate(360deg)' : 'rotate(0deg)',
              transition: 'transform 2s ease-in-out'
            }}
          >
            <Typography variant='h6'>Rotate</Typography>
          </Paper>
        </Box>
      </Box>

      {/* 복합 애니메이션 예시 */}
      <Box sx={{ mb: 6 }}>
        <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
          Combined Animation
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button
            variant='contained'
            color='error'
            startIcon={<PlayArrowIcon />}
            onClick={() => {
              handleFadeAnimation();
              handleScaleAnimation();
              handleRotateAnimation();
            }}
            sx={{ minWidth: 120 }}
          >
            전체 재생
          </Button>
          <Paper
            elevation={3}
            sx={{
              width: 120,
              height: 120,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'error.main',
              color: 'white',
              opacity: fadeActive ? 0 : 1,
              transform: `scale(${scaleActive ? 1.5 : 1}) rotate(${rotateActive ? 360 : 0}deg)`,
              transition: 'all 2s ease-in-out'
            }}
          >
            <Typography variant='h6'>All</Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default AnimationSection;
