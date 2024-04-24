import React from 'react';
import StyledCard from '../../../Components/StyledCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactComponent as DeleteIcon } from '../../../Art/deleteIcon.svg';
import { Link } from 'react-router-dom';


import { ReactComponent as NoteIcon } from '../../../Art/noteIcon.svg';



const Note = ({ note, handleDelete }) => {
  console.log(handleDelete);


  return (
    <Link className='link' to={`/organize/notes/${note.id}`} key={note.id}>
      <StyledCard scale className="note child-note">
        <DeleteIcon className='delete-icon' onClick={(e) => handleDelete(e, note.id)} />
        <Box sx={{ color: 'var(--text-color)', padding: 'var(--spacing-3)'}}>
          <NoteIcon style={{ marginBottom: 'var(--spacing-1)' }} className='icon-large' />
          <Typography variant='h3'>{note.title}</Typography>
          <p className='child-content'>{note.content}</p>
        </Box>
      </StyledCard>
    </Link>
  );
};

export default Note;
