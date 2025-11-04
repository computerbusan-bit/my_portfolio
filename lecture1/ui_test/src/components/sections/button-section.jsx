import { Box, Typography, Button, Grid } from '@mui/material';

/**
 * ButtonSection 컴포넌트
 * MUI Button의 다양한 variant와 color 조합을 보여주는 섹션
 */
function ButtonSection() {
  const handleClick = (variant, color) => {
    alert(`${variant} - ${color} 버튼이 클릭되었습니다!`);
  };

  const variants = ['contained', 'outlined', 'text'];
  const colors = ['primary', 'secondary', 'error'];

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
        Button 섹션
      </Typography>

      <Typography
        variant='body1'
        sx={{
          mb: 4,
          color: 'text.secondary',
          fontSize: { xs: '0.9rem', md: '1rem' }
        }}
      >
        MUI Button 컴포넌트의 다양한 variant와 color 조합
      </Typography>

      {variants.map((variant) => (
        <Box key={variant} sx={{ mb: 4 }}>
          <Typography
            variant='h6'
            sx={{
              mb: 2,
              fontWeight: 500,
              textTransform: 'capitalize',
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            {variant}
          </Typography>

          <Grid container spacing={2}>
            {colors.map((color) => (
              <Grid item xs={12} sm={6} md={4} key={color}>
                <Button
                  variant={variant}
                  color={color}
                  onClick={() => handleClick(variant, color)}
                  fullWidth
                  sx={{
                    textTransform: 'capitalize',
                    py: { xs: 1, md: 1.5 }
                  }}
                >
                  {color}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default ButtonSection;
