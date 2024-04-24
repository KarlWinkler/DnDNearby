import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';

import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import '../Styles/Options.css';

const CustomTab = styled(Tab)({
  color: 'var(--text-color-dark)',

  '&.Mui-selected': {
    color: 'var(--text-color)',
  }
});

const Options = ({ name, category, a, b, c, d, onSelect }) => {
  const [value, setValue] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onSelect(name, newValue); 
  };
  
  return (
    <Grid item xs={12} sm={6} md={6} key={category}> {}
      <TabContext value={value}>
        <div className='options'>
          <Typography variant="subtitle1">{category}</Typography>
          <Tabs sx={{marginLeft: '50px'}} onChange={handleChange} value={value} aria-label={`${category} options`} variant="scrollable" scrollButtons="auto">
            {a ? <CustomTab value={a} label={a} /> : null}
            {b ? <CustomTab value={b} label={b} /> : null}
            {c ? <CustomTab value={c} label={c} /> : null}
            {d ? <CustomTab value={d} label={d} /> : null} {}
          </Tabs>
        </div>
      </TabContext>
    </Grid>

  );
};

export default Options;