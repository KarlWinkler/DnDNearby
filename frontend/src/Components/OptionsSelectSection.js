import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Options from './Options';

function OptionsSelectSection({ onFilterChange }) {

  const [localFilters, setLocalFilters] = useState({
    edition: '',
    experienceLevel: '',
    size: '',
    campaignType: '',
    status: ''
  });

  const handleSelect = (category, value) => {
    setLocalFilters(prevFilters => ({
      ...prevFilters,
      [category]: value
    }));
  };
  
  
    const handleFindClick = () => {
        
      onFilterChange(localFilters);
    };

    const handleClearClick = () => {
      const resetFilters = {
        edition: '',
        experienceLevel: '',
        size: '',
        campaignType: '',
        status: ''
      };
      setLocalFilters(resetFilters);
      onFilterChange(resetFilters);
    };


  return (
    <Box sx={{ width: 'auto', backgroundColor: '#262D34', padding: 2, mb: 2, borderRadius: '8px', color: 'white' }}>
      <Grid container spacing={2}>
        <Options name='experienceLevel' category={'Experience LVL'} a={'Beginner'} b={'Intermediate'} c={'Expert'} onSelect={handleSelect} />
        <Options name='edition' category={'Edition'} a={'5e'} b={'3.5e'} c={'1e'} onSelect={handleSelect} />
        <Options name='size' category={'Size'} a={'small'} b={'medium'} c={'large'} onSelect={handleSelect} />
        <Options name='campaignType' category={'Campaign Type'} a={'roleplay'} b={'combat'} c={'mixed'} onSelect={handleSelect} />
        <Options name='status' category={'Status'}  b={'open'} c={'full'} onSelect={handleSelect} />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, margin: '60px 0 0 60px'}}>
          <Link className='button button-filter' onClick={handleFindClick} variant="contained" color="primary">
            Find
          </Link>
          <Link className='button' onClick={handleClearClick} variant="outlined" color="primary" sx={{ marginLeft: '10px' }}>
            Clear
          </Link>
        </Box>
      </Grid>
      </Box>
      );
    }

export default OptionsSelectSection;