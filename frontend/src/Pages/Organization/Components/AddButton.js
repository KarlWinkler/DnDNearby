import React from 'react';
import Grid from '@mui/material/Grid';

function AddButton() {
  return (
    <Grid item xs={4}>
      <div className='add'>
        <p>+</p>
      </div>
    </Grid>
  );
}

export default AddButton;