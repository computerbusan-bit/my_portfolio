import { useState } from 'react';
import { Box, Typography, Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

/**
 * MenuSection 컴포넌트
 * MUI Menu 컴포넌트를 사용한 드롭다운 메뉴
 */
function MenuSection() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const menuItems = [
    { label: '프로필 보기', value: 'profile' },
    { label: '설정', value: 'settings' },
    { label: '도움말', value: 'help' },
    { label: '로그아웃', value: 'logout' }
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item) => {
    alert(`${item.label} 메뉴를 선택했습니다!`);
    handleClose();
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
        Menu 섹션
      </Typography>

      <Typography
        variant='body1'
        sx={{
          mb: 4,
          color: 'text.secondary',
          fontSize: { xs: '0.9rem', md: '1rem' }
        }}
      >
        MUI Menu 컴포넌트를 사용한 드롭다운 메뉴
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {/* 기본 메뉴 */}
        <Button
          variant='contained'
          onClick={handleClick}
          endIcon={<ArrowDropDownIcon />}
          sx={{
            textTransform: 'none',
            px: 3,
            py: 1.5
          }}
        >
          메뉴 열기
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.value}
              onClick={() => handleMenuItemClick(item)}
              sx={{
                minWidth: 200,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'primary.contrastText'
                }
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Box
        sx={{
          mt: 3,
          p: 2,
          backgroundColor: 'grey.100',
          borderRadius: 1
        }}
      >
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          💡 버튼을 클릭하면 메뉴가 열립니다. 메뉴 항목을 선택하면 알림이 표시됩니다.
        </Typography>
      </Box>
    </Box>
  );
}

export default MenuSection;
