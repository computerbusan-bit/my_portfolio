import { Box } from '@mui/material';

/**
 * Navigation 컴포넌트
 * Flexbox를 사용한 모던 네비게이션 바
 */
function Navigation() {
  const menuItems = ['홈', '소개', '상품', '연락처', '설정'];

  return (
    <Box
      component='nav'
      sx={{
        width: '100%',
        height: '60px',
        backgroundColor: '#2d3748',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 4
      }}
    >
      {/* 로고 박스 */}
      <Box
        sx={{
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '20px'
        }}
      >
        MyWebsite
      </Box>

      {/* 메뉴들 박스 */}
      <Box
        sx={{
          display: 'flex',
          gap: '15px'
        }}
      >
        {menuItems.map((item) => (
          <Box
            key={item}
            component='a'
            href='#'
            sx={{
              color: '#cbd5e0',
              fontSize: '16px',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#ffffff'
              }
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Navigation;
