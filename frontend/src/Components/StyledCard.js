import React, { Children } from 'react';

import Card from '@mui/material/Card';
import { styled } from '@mui/system';

const StyledComponent = styled(Card, { shouldForwardProp: (prop) => prop !== "scale"
})(({ scale }) => ({
  padding: 'var(--spacing-1)',
  margin: '0 var(--spacing-1)',
  backgroundColor: 'var(--primary-color)',
  color: 'var(--text-color-dark)',
  borderRadius: 'var(--spacing-1)',
  boxShadow: 'var(--shadow)',
  boxSizing: 'border-box',
  transition: 'all 0.1s ease',

  '&:hover': {
    scale: scale ? '1.04' : '1',
    backgroundColor: scale ? 'var(--blue-20)' : 'var(--primary-color)',
  }
}));

const StyledCard = ({ scale, children }) => {
  return (
    <StyledComponent scale={scale} sx={{ height: 1 }}>
      {children}
    </StyledComponent>
  );
};

export default StyledCard;
