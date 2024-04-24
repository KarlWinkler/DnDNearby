import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import CustomBreadcrumbs from '../Components/Breadcrumbs';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Title from '../Components/Title';
import HelperNav from '../Components/HelperNav';



export default function MakeNewGroup() {
  const navigate = useNavigate();
  const [groupData, setGroupData] = useState({
    groupName: '',
    groupDescription: '',
    experienceLevel: '',
    edition: '',
    campaignType: '',
  });
  const [groupSize, setGroupSize] = useState(1);
  const [imagePreview, setImagePreview] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const isFormValid =
      groupData.groupName.trim() &&
      groupData.groupDescription.trim() &&
      groupData.experienceLevel &&
      groupData.edition &&
      groupData.campaignType &&
      groupSize > 0 &&
      imagePreview;
    setIsButtonDisabled(!isFormValid);
  }, [groupData, groupSize, imagePreview]);


  const handleCreateClick = () => {
    if (!isButtonDisabled) {
      const newGroup = {
        id: Date.now(),
        ...groupData,
        size: `${groupSize} / 10`, 
        backgroundImage: imagePreview,
      };
  
      const existingGroups = JSON.parse(localStorage.getItem('groups')) || [];
      const updatedGroups = [...existingGroups, newGroup];
      localStorage.setItem('groups', JSON.stringify(updatedGroups));
  
      setSnackbarOpen(true);
      setTimeout(() => navigate('/groups'), 2000); 
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGroupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

const incrementGroupSize = () => {
  setGroupSize((prevSize) => prevSize + 1);
};

const decrementGroupSize = () => {
  setGroupSize((prevSize) => (prevSize > 1 ? prevSize - 1 : 1));
};

return (
  <div>
    <HelperNav links={[{ href: '/', text: 'Home' }]} current='Create New Group' helpPath='/learn/create-new-group' />

    <Title title={'Create New Group'} />

    <Box sx={{ bgcolor: 'var(--primary-color)', p: 3, borderRadius: 2 }}>
        <Box component="form" noValidate autoComplete="off">
        <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            message="Your Group Creation Request Has Been Sent For Approval! Thank You For Using D&D Nearby"
            ContentProps={{
              style: { backgroundColor: 'var(--primary-color)', color: 'var(--text-color)' },
            }}
          />
          <Stack direction="column" spacing={2} alignItems="center">
            <TextField
              fullWidth
              required
              id="groupName"
              label="Group Name"
              variant="outlined"
              value={groupData.groupName}
              onChange={handleInputChange}
              name="groupName"
              InputLabelProps={{ style: { color: 'var(--text-color)' } }}
              sx={{
                '& label.Mui-focused': { color: 'var(--text-color)' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'var(--text-color)' },
                  '&:hover fieldset': { borderColor: '#000000' },
                  '&.Mui-focused fieldset': { borderColor: '#2962ff' },
                  '& .MuiInputBase-input': { color: 'var(--text-color)' },
                },
              }}
            />
            <label htmlFor="upload-button-file">
              <span className='button button-filter' variant="contained" component="span" align ='center'>
                Upload Image
              </span>
            </label>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-button-file"
              type="file"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <Avatar alt="Group" src={imagePreview} sx={{ width: 100, height: 100, mt: 2 }} />
            )}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ width: '100%' }}>
        <FormControl fullWidth sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'var(--text-color)' },
                '&:hover fieldset': { borderColor: '#000000' },
                '&.Mui-focused fieldset': { borderColor: '#2962ff' },
              },
              '& .MuiInputBase-input': { color: 'var(--text-color)' },
              '& .MuiInputLabel-root': { color: 'var(--text-color)' },
              '& label.Mui-focused': { color: 'var(--text-color)' },
              '& .MuiSvgIcon-root': { color: 'var(--text-color)' },
            }}>
              <InputLabel id="Experience-level-label">Experience LvL</InputLabel>
              <Select
                labelId="Experience-level-label"
                id="Experience-level"
                value={groupData.experienceLevel}
                label="Experience Level"
                onChange={handleInputChange}
                name="experienceLevel"
              >
                  <MenuItem value="beginner">Beginner</MenuItem>
                  <MenuItem value="intermediate">Intermediate</MenuItem>
                  <MenuItem value="expert">Expert</MenuItem>
                </Select>
              </FormControl>
            </Stack>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ width: '100%' }}>
        <FormControl fullWidth sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'var(--text-color)' },
                '&:hover fieldset': { borderColor: '#000000' },
                '&.Mui-focused fieldset': { borderColor: '#2962ff' },
              },
              '& .MuiInputBase-input': { color: 'var(--text-color)' },
              '& .MuiInputLabel-root': { color: 'var(--text-color)' },
              '& label.Mui-focused': { color: 'var(--text-color)' },
              '& .MuiSvgIcon-root': { color: 'var(--text-color)' },
            }}>
              <InputLabel id="edition-label">Edition</InputLabel>
              <Select
                labelId="edition-label"
                id="edition"
                value={groupData.edition}
                label="Edition"
                onChange={handleInputChange}
                name="edition"
              >
                  <MenuItem value="3.5e">3.5e</MenuItem>
                  <MenuItem value="5e">5e</MenuItem>
                  <MenuItem value="1e">1e</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ width: '100%' }}>
            <FormControl fullWidth sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'var(--text-color)' },
                '&:hover fieldset': { borderColor: '#000000' },
                '&.Mui-focused fieldset': { borderColor: '#2962ff' },
              },
              '& .MuiInputBase-input': { color: 'var(--text-color)' },
              '& .MuiInputLabel-root': { color: 'var(--text-color)' },
              '& label.Mui-focused': { color: 'var(--text-color)' },
              '& .MuiSvgIcon-root': { color: 'var(--text-color)' },
            }}>
              <InputLabel id="Campaign-type-label">Campaign Type</InputLabel>
              <Select
                labelId="Campaign-type-label"
                id="type"
                value={groupData.campaignType}
                label="Type"
                onChange={handleInputChange}
                name="campaignType"
              >
                  <MenuItem value="Roleplay">Roleplay</MenuItem>
                  <MenuItem value="Combat">Combat</MenuItem>
                  <MenuItem value="Mixed">Mixed</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ width: '100%' }}>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ width: '100%', mt: 2 }}>
          <Typography variant="subtitle1" gutterBottom color="var(--text-color)" sx={{ marginRight: 2 }}>
            Group Size
          </Typography>
          <Button
            variant="outlined"
            onClick={decrementGroupSize}
            sx={{
              minWidth: '40px',
              borderColor: 'var(--text-color)',
              color: 'var(--text-color)',
              '&:hover': {
                borderColor: 'var(--text-color)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slight highlight on hover
              },
            }}
          >
            -
          </Button>
          <TextField
            id="groupSize"
            variant="outlined"
            type="text"
            value={groupSize}
            inputProps={{ readOnly: true, style: { textAlign: 'center' } }}
            sx={{
              '& .MuiOutlinedInput-input': { color: 'var(--text-color)' },
              '& .MuiOutlinedInput-root': { maxWidth: '60px', '& fieldset': { borderColor: 'var(--text-color)' } },
              '&:hover fieldset': { borderColor: 'var(--text-color)' },
            }}
          />
          <Button
            variant="outlined"
            onClick={incrementGroupSize}
            sx={{
              minWidth: '40px',
              borderColor: 'var(--text-color)',
              color: 'var(--text-color)',
              '&:hover': {
                borderColor: 'var(--text-color)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              },
            }}
          >
            +
          </Button>
        </Stack>
            </Stack>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ width: '100%' }}>
            </Stack>
            <TextField
              fullWidth
              id="groupDescription"
              label="Group Description"
              multiline
              rows={8}
              variant="outlined"
              value={groupData.groupDescription}
              onChange={handleInputChange}
              name="groupDescription"
              InputLabelProps={{ style: { color: 'var(--text-color)' } }}
              sx={{
                '& label.Mui-focused': { color: 'var(--text-color)' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'var(--text-color)' },
                  '&:hover fieldset': { borderColor: '#000000' },
                  '&.Mui-focused fieldset': { borderColor: '#2962ff' },
                  '& .MuiInputBase-input': { color: 'var(--text-color)' },
                },
              }}
            />
            <Stack direction="row" spacing={2} justifyContent="center">
              <Link
                className={`button button-add ${isButtonDisabled ? 'button-disabled' : ''}`}
                variant="contained"
                color="primary"
                onClick={handleCreateClick}
              >
                Create
              </Link>
              <Link className='button' to="/groups" style={{ textDecoration: 'none' }}>
                Cancel
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}