import React from 'react';

import { styled } from '@mui/system';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

const StyledTextArea = styled(TextareaAutosize)({
  padding: 'var(--spacing-2)',
  backgroundColor: 'var(--primary-color)',
  color: 'var(--text-color)',
  borderRadius: '4px',
  transition: 'all 0.1s ease',

  border: '1px solid var(--text-color-dark)',
});

function TextArea(props) {
  return (
    <StyledTextArea 
      aria-label={props.ariaLabel || ''} 
      placeholder={props.placeholder || ''}
      {...props}
    />
  );
}

export default TextArea;
