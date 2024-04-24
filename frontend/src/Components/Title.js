import React from 'react';
import Typography from '@mui/material/Typography';

const Title = ({ title }) => {
  return (
    <div className='title'>
      <Typography component="h1" variant="h4" gutterBottom>
        {title}
      </Typography>  
    </div>
  );
};

export default Title;