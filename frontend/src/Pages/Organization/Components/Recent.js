import React from 'react';
import { Link } from 'react-router-dom';

import Note from './Note';
import Character from './Character';
import Hint from '../../../Components/Hint';

const Recent = ({ notes, characters, addCharacter, addNote, id, handleDeleteCharacter, handleDeleteNote }) => {
  let items = () => {
    let all = [...characters, ...notes];

    all.sort((a, b) => {
      return b.id - a.id;
    });

    return all.slice(0, 5);
  }

  return (
    <div className='recent-cards'>
      {
        items().length > 0 ?
          (
            items()?.map((item, index) => {
              if (item.notes) {
                return (<Note note={item} key={index} handleDelete={handleDeleteNote} />)
              }
              else {
                return (<Character character={item} key={index} handleDelete={handleDeleteCharacter} />)
              }
            })
          ) : (
            <div className='recent-empty'>
              <div className='recent-empty-text'>
                <h2>No recent items found.</h2>
                <Hint className={'hint-column'}>Create a new character or note!</Hint>
              </div>
              <Link to={`/organize/character/${id + 1}`} className='button button-add' onClick={addCharacter}>+ New Character</Link>
              <Link to={`/organize/notes/${id + 1}`} className='button button-add' onClick={addNote}>+ New Note</Link>
            </div>
          )
      }
    </div>
  );
};

export default Recent;
