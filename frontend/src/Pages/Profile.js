import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Card, CardContent, Avatar, Typography, Button, LinearProgress, TextField, } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import avatar from '../Art/avatar.png';
import Title from '../Components/Title';
import HelperNav from '../Components/HelperNav';
import DarkModeToggle from '../Components/DarkModeToggle';

const theme = createTheme({
  palette: {
    background: {
      paper: '#262D34',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

const ProfileCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'var(--primary-color)',
  color: 'var(--text-color)',
  boxShadow: 'none',
}));

const ProgressLabel = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: 'var(--text-color)', 
});

const InfoLabel = styled(Typography)(({ theme }) => ({
  color: 'var(--text-color)',
  paddingBottom: theme.spacing(0.5),
}));

export default function Profile({ user, colorTheme, setColorTheme }) {
  const [editMode, setEditMode] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    username: user.username,
    password: '*****************',
    memberSince: 'October 27th 1917',
  });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };


  const EditableTextField = ({ name, label, value, readOnly }) => (
    <TextField
      key={name}
      name={name}
      fullWidth
      variant="outlined"
      label={label}
      value={value}
      onChange={handleChange}
      InputProps={{
        readOnly: !editMode || readOnly,
        style: { color: 'var(--text-color)' },
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': { borderColor: 'var(--text-color)' },
          '&:hover fieldset': { borderColor: editMode && !readOnly ? 'var(--blue-100)' : 'var(--text-color)' },
          '&.Mui-focused fieldset': { borderColor: 'var(--blue-100)' },
        },
        '& label': {
          color: editMode ? 'var(--blue-100)' : 'var(--text-color)', 
        },
        '& label.Mui-focused': {
          color: 'var(--blue-100)', 
        },
        marginBottom: '20px',
      }}
    />
  );
  return (
    <div>
      <HelperNav links={[{ href: '/', text: 'Home' }]} current='Profile' helpPath='/learn/profile' />
      <Title title={'Profile'} />
      <DarkModeToggle colorTheme={colorTheme} setColorTheme={setColorTheme} />
      <ThemeProvider theme={theme}>
        <Box sx={{ padding: '2rem', bgcolor: 'none' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <ProfileCard>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                  <Avatar
                    src={avatar}
                    sx={{ width: 150, height: 150, margin: 'auto', bgcolor: 'var(--primary-color)'}}
                  />
                  <Typography variant="h6" component="div" sx={{ my: 2 }}>
                    {user.username}
                  </Typography>
                  <Typography variant="body2">
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                  </Typography>
                  <Link className='button button-filter stop-being-long' variant="contained" color="primary">
                    Edit Avatar
                  </Link>
                </CardContent>
              </ProfileCard>
            </Grid>
            <Grid item xs={12} md={8}>
            <ProfileCard>
                <CardContent>
                  <InfoLabel>Profile Description:</InfoLabel>
                  <TextField
                    fullWidth
                    multiline
                    rows={8.25}
                    placeholder="Tell us about yourself..."
                    variant="outlined"
                    InputProps={{
                      style: {
                        color: 'var(--text-color)',
                        borderColor: 'var(--text-color)'
                      },
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'var(--text-color)' },
                        '&:hover fieldset': { borderColor: 'var(--text-color)' },
                        '&.Mui-focused fieldset': { borderColor: 'var(--primary-color)' },
                      },
                    }}
                  />
                </CardContent>
              </ProfileCard>
            </Grid>
            <Grid item xs={12} md={12}>
            <ProfileCard>
                <CardContent>
                  {Object.entries(profileInfo).map(([key, value]) => (
                    <EditableTextField
                      key={key}
                      name={key}
                      label={key.charAt(0).toUpperCase() + key.slice(1)}
                      value={value}
                      readOnly={key === 'memberSince'} // Make 'Member Since' read-only
                    />
                  ))}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Link className='button button-filter stop-being-long' onClick={editMode ? handleSave : handleEdit} variant="contained" color="primary">
                      {editMode ? 'Save' : 'Edit'}
                    </Link>
                  </Box>
                </CardContent>
              </ProfileCard>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h4" component="div">
                Achievement Progress
              </Typography>
              <ProfileCard>
                <CardContent>
                  <ProgressLabel>Post-Master</ProgressLabel>
                  <LinearProgress variant="determinate" value={80} />
                  <ProgressLabel>Artist From The Gods</ProgressLabel>
                  <LinearProgress variant="determinate" value={72} />
                  <ProgressLabel>Group Jumper</ProgressLabel>
                  <LinearProgress variant="determinate" value={89} />
                  <ProgressLabel>Forum Poster</ProgressLabel>
                  <LinearProgress variant="determinate" value={55} />
                  <ProgressLabel>Dwarf Lover</ProgressLabel>
                  <LinearProgress variant="determinate" value={66} />
                </CardContent>
              </ProfileCard>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}