import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Character from './../Components/Character';
import Search from '../../../Components/Search';
// import characters from '../../../Data/characters.json';

import '../../../Styles/Characters.css';

function CharacterTab({ characters, handleDelete }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Search placeholder={'Search Characters'} onChange={event => setSearchQuery(event.target.value)} />
      <div className='characters-tab-container'>
        <Grid container>
          {
            filteredCharacters.map(character => (
              <Grid item xs={3} key={character.id}>
                <Character character={character} handleDelete={handleDelete} />
              </Grid>
            ))
          }
        </Grid>
      </div>
    </div>
  );
}

export default CharacterTab;
