import React from 'react';
import StyledCard from '../../../Components/StyledCard';
import Typography from '@mui/material/Typography';

import { ReactComponent as DeleteIcon } from '../../../Art/deleteIcon.svg';
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';

const Character = ({ character, handleDelete }) => {
  const navigate = useNavigate();

  return (
    <Link className='link' to={`/organize/character/${character.id}`} key={character.id}>
      <StyledCard scale sx={{padding: '0', margin: '0' }}>
        <DeleteIcon className='delete-icon' onClick={(e) => handleDelete(e, character.id)} />
        <div className='card-image' style={{
          backgroundImage: `url(${character.image})`,
          height: '200px',
          backgroundSize: 'cover',
          borderRadius: '4px 4px 0 0',
          marginBottom: 'var(--spacing-1)',
        }}></div>
        <div className='card-content'>
          <Typography variant='h3' sx={{ color: 'var(--text-color)' }}>{character.name}</Typography>
          <p className='child-content'>Class: <span>{character.features.class}</span> Level: <span>{character.features.level}</span></p>
          <p className='child-content'>Race: <span>{character.features.race}</span></p>
          <p className='child-content'>Background: <span>{character.features.background}</span></p>
        </div>
      </StyledCard>
    </Link>
  );
};

export default Character;
