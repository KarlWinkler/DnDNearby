import React, { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';

import { styled } from '@mui/material';

import { TextareaAutosize } from '@mui/base/TextareaAutosize';


const CustomTab = styled(Tab)({
  color: 'var(--text-color-dark)',

  '&.Mui-selected': {
    color: 'var(--text-color)',
  }
});

const StyledTextArea = styled(TextareaAutosize)({
  padding: 'var(--spacing-2)',
  backgroundColor: 'var(--primary-color)',
  color: 'var(--text-color)',
  borderRadius: '4px',
  transition: 'all 0.1s ease',

  border: '1px solid var(--text-color-dark)',

  width: '80%',
});

const Information = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <CustomTab label="Weapons" value="1" />
          <CustomTab label="Spells" value="2" />
          <CustomTab label="Abilities" value="3" />
          <CustomTab label="Inventory" value="4" />
        </TabList>
      </Box>
      <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
      <TabPanel value="4"><StyledTextArea minRows={16} /></TabPanel>
    </TabContext>
  );
};

export default Information;