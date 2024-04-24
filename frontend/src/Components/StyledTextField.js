import { styled } from '@mui/system';
import { TextField } from '@mui/material';

const CustomTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "fontSize"
})(( props ) => ({
  margin: 'var(--spacing-2) 0',
  color: 'var(--text-color)',
  borderColor: 'var(--text-color)',
  '& label': {
    color: 'var(--text-color)',
  },
  '& label.Mui-focused': {
    color: 'var(--text-color)',
  },
  '& input': {
    color: 'var(--text-color)',
  },
  '& .MuiOutlinedInput-input': {
    color: 'var(--text-color)',
    fontSize: props.fontSize || 'inherit',
  },
  '& .MuiOutlinedInput-root': {
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

const StyledTextField = (props) => {
  return (
    <CustomTextField {...props} />
  );
}

export default StyledTextField;

