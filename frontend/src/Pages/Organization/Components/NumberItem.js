import React from 'react';

import { Typography } from '@mui/material';
import StyledStandardTextField from '../../../Components/StyledStandardTextField';

const NumberItem = ({value, placeholder, title}) => {
  return (
    <div className='number-item'>
      <Typography>{title}</Typography>
      <StyledStandardTextField defaultValue={value} placeholder={placeholder} title={title} />
    </div>
  );
};

export default NumberItem;