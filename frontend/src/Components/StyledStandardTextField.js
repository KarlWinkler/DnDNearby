import React from 'react';
import { TextField } from '@mui/material';
import styled from '@mui/material/styles/styled';

const StyledTextField = styled(TextField)(({ fontSize }) => ({
  margin: 'var(--spacing-1) 0',
  color: 'var(--text-color)',
  width: '48px',

  borderColor: 'var(--text-color)',
  '& label': {
    color: 'var(--text-color)',
  },
  '& label.Mui-focused': {
    color: 'var(--text-color)',
  },
  '& input': {
    color: 'var(--text-color)',
    textAlign: 'center',
  },
  '& .MuiInput-input': {
    color: 'var(--text-color)',
    fontSize: fontSize || 'inherit',
  },
  '& .MuiInput-root': {
    '&::before': {
      borderBottom: '2px solid var(--text-color-dark)',
    },
    '&::after': {
      borderBottom: '2px solid var(--text-color)',
    },
    '&:hover:not(.Mui-disabled, .Mui-error):before': {
      borderBottom: '2px solid var(--text-color-dark)',
    },
    '& fieldset': {
      borderColor: 'var(--text-color-dark)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--text-color-dark)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--text-color)',
    },
  },
}));

const StyledStandardTextField = (props) => {
  return (
    <div>
      <StyledTextField variant="standard" {...props} />
    </div>
  );
};

export default StyledStandardTextField;