import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export default function UserProfile() {
  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#2D3748', height: '100vh' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
            <Avatar sx={{ width: 56, height: 56, mb: 1 }} src="/broken-image.jpg" />
            <Typography variant="h6">USERNAME</Typography>
            <Button color="inherit">Change Username</Button>
            <Button color="inherit">Change Password</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
