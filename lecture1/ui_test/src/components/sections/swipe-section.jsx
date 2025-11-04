import { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';

/**
 * SwipeSection 컴포넌트
 * 터치 이벤트를 처리하여 좌우 스와이프를 감지하는 섹션
 */
function SwipeSection() {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [swipeCount, setSwipeCount] = useState({ left: 0, right: 0 });

  // 최소 스와이프 거리 (픽셀)
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setSwipeDirection('left');
      setSwipeCount((prev) => ({ ...prev, left: prev.left + 1 }));
    } else if (isRightSwipe) {
      setSwipeDirection('right');
      setSwipeCount((prev) => ({ ...prev, right: prev.right + 1 }));
    }

    // 방향 표시를 1초 후 제거
    setTimeout(() => {
      setSwipeDirection(null);
    }, 1000);
  };

  // 마우스 이벤트 처리 (데스크톱 테스트용)
  const handleMouseDown = (e) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (touchStart === null) return;
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setSwipeDirection('left');
      setSwipeCount((prev) => ({ ...prev, left: prev.left + 1 }));
    } else if (isRightSwipe) {
      setSwipeDirection('right');
      setSwipeCount((prev) => ({ ...prev, right: prev.right + 1 }));
    }

    setTouchStart(null);
    setTouchEnd(null);

    setTimeout(() => {
      setSwipeDirection(null);
    }, 1000);
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Typography
        variant='h4'
        component='h2'
        sx={{
          mb: 3,
          fontWeight: 600,
          fontSize: { xs: '1.5rem', md: '2rem' }
        }}
      >
        Swipe 섹션
      </Typography>

      <Typography
        variant='body1'
        sx={{
          mb: 4,
          color: 'text.secondary',
          fontSize: { xs: '0.9rem', md: '1rem' }
        }}
      >
        터치 이벤트를 처리하여 좌우 스와이프를 감지합니다
      </Typography>

      {/* 스와이프 영역 */}
      <Paper
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          setTouchStart(null);
          setTouchEnd(null);
        }}
        elevation={3}
        sx={{
          width: '100%',
          minHeight: { xs: 250, md: 300 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: swipeDirection === 'left' ? '#fef3c7' : swipeDirection === 'right' ? '#dbeafe' : '#f3f4f6',
          transition: 'background-color 0.3s ease',
          cursor: 'grab',
          userSelect: 'none',
          border: '2px dashed #9ca3af',
          borderRadius: 2,
          '&:active': {
            cursor: 'grabbing'
          }
        }}
      >
        {swipeDirection === 'left' && (
          <SwipeLeftIcon
            sx={{
              fontSize: { xs: 60, md: 80 },
              color: '#f59e0b',
              mb: 2
            }}
          />
        )}
        {swipeDirection === 'right' && (
          <SwipeRightIcon
            sx={{
              fontSize: { xs: 60, md: 80 },
              color: '#3b82f6',
              mb: 2
            }}
          />
        )}

        <Typography
          variant='h5'
          sx={{
            fontWeight: 600,
            color: swipeDirection ? 'primary.main' : 'text.secondary',
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            mb: 1
          }}
        >
          {swipeDirection === 'left' && '← 왼쪽으로 스와이프!'}
          {swipeDirection === 'right' && '오른쪽으로 스와이프! →'}
          {!swipeDirection && '여기를 스와이프하세요'}
        </Typography>

        <Typography
          variant='body2'
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.85rem', md: '1rem' }
          }}
        >
          {!swipeDirection && '(모바일: 터치 / 데스크톱: 마우스 드래그)'}
        </Typography>
      </Paper>

      {/* 스와이프 카운터 */}
      <Box
        sx={{
          mt: 3,
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <Paper
          elevation={1}
          sx={{
            px: 3,
            py: 2,
            backgroundColor: '#dbeafe',
            minWidth: 150,
            textAlign: 'center'
          }}
        >
          <Typography variant='body2' sx={{ color: 'text.secondary', mb: 1 }}>
            오른쪽 스와이프
          </Typography>
          <Typography variant='h4' sx={{ fontWeight: 700, color: '#3b82f6' }}>
            {swipeCount.right}
          </Typography>
        </Paper>

        <Paper
          elevation={1}
          sx={{
            px: 3,
            py: 2,
            backgroundColor: '#fef3c7',
            minWidth: 150,
            textAlign: 'center'
          }}
        >
          <Typography variant='body2' sx={{ color: 'text.secondary', mb: 1 }}>
            왼쪽 스와이프
          </Typography>
          <Typography variant='h4' sx={{ fontWeight: 700, color: '#f59e0b' }}>
            {swipeCount.left}
          </Typography>
        </Paper>
      </Box>

      {/* 안내 메시지 */}
      <Box
        sx={{
          mt: 3,
          p: 2,
          backgroundColor: 'grey.100',
          borderRadius: 1
        }}
      >
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          💡 모바일에서는 손가락으로 스와이프하고, 데스크톱에서는 마우스를 드래그하세요.
          최소 50px 이상 이동해야 스와이프로 인식됩니다.
        </Typography>
      </Box>
    </Box>
  );
}

export default SwipeSection;
