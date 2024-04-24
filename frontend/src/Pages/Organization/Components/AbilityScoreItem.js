import { Typography } from '@mui/material';
import React from 'react';

import StyledStandardTextField from '../../../Components/StyledStandardTextField';

function AbilityScoreItem({name, score, onChange}) {
  return (
    <div className='ability-score'>
      <Typography>{name}</Typography>
      <div className='score'>
        <StyledStandardTextField variant="standard" defaultValue={score} onChange={onChange} />
      </div>
      <div className='modifier'>
        {score ? Math.floor((score - 10) / 2) : 0}
      </div>
    </div>
  );
}

export default AbilityScoreItem;