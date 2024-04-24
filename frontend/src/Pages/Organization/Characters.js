import React from 'react';

import Grid from '@mui/material/Grid';
import StyledTextField from '../../Components/StyledTextField';
import Character from './Components/Character';

import { Link } from 'react-router-dom';

import characters from '../../Data/characters.json';
import CustomBreadcrumbs from '../../Components/Breadcrumbs';

import '../../Styles/Characters.css';
import HelperNav from '../../Components/HelperNav';

function Characters() {
  return (
    <div>
      <CustomBreadcrumbs links={[{href: '/', text: 'Home'}, {href: '/organize', text: 'Organize'}]} current='Characters' />
      <HelperNav links={[{href: '/', text: 'Home'}, {href: '/organize', text: 'Organize'}]} current='Characters' helpPath='/learn/player-characters' />
      <div className='characters-container'>
        <Link to='/organize/characters/new' className='button button-add'>+ New Character</Link>
        <Grid container>
          {
            characters.characters.map(character => (
              <Grid item xs={3} key={character.id}>
                <Character character={character} />
              </Grid>
            ))
          }
        </Grid>
      </div>
    </div>
  );
}

export default Characters;
