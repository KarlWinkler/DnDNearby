import React from 'react';
import StyledCard from '../../../Components/StyledCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

const Note = ({ note }) => {
  return (
    <Link className='link' to={`/organize/notes/${note.id}`} key={note.id}>
      <StyledCard className="note child-note">
        <Box sx={{ color: 'var(--text-color)', padding: 'var(--spacing-1)', display: 'flex', gap: 'var(--spacing-2)'}}>
          <Typography variant='h3'>{note.title}</Typography>
          <p className='child-content'>{note.content}</p>
        </Box>
      </StyledCard>
    </Link>
  );
};

export default Note;
