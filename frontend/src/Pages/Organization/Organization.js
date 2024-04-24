import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Recent from './Components/Recent';


import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';

import { styled } from '@mui/material';
import CharacterTab from './Components/CharacterTab';
import NotesTab from './Components/NoteTab';
import HelperNav from '../../Components/HelperNav';
import Title from '../../Components/Title';

import { ReactComponent as RecentIcon } from '../../Art/recentIcon.svg';
import { ReactComponent as DownIcon } from '../../Art/downIcon.svg';
import { ReactComponent as UpIcon } from '../../Art/upIcon.svg';
import { ReactComponent as NoteIcon } from '../../Art/noteIcon.svg'
import { ReactComponent as CharacterIcon } from '../../Art/characterIcon.svg'

import '../../Styles/Organization.css';


const CustomTab = styled(Tab)({
  color: 'var(--text-color-dark)',
  fontSize: '1.5rem',
  margin: '0 var(--spacing-1)',
  alignItems: 'center',
  height: 'fit-content',

  '&.Mui-selected': {
    color: 'var(--text-color)',
  }
});


function Organization({ characters, setCharacters, notes, setNotes, id, setId }) {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const [showRecent, setShowRecent] = useState(type ? false : true);
  const [value, setValue] = useState(type || '1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addCharacter = () => {
    let character = {
      id: id + 1,
      name: '',
      features: {
        level: 1,
        class: '',
        race: '',
        background: '',
      },
      abilityScores: {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
      },
      skills: [],
      saves: [],
      stats: {
        maxHp: 0,
        currentHp: 0,
        tempHp: 0,
        ac: 0,
        speed: 0,
        initiative: 0,
        proficiency: 0,
        deathSaves: {
          successes: 0,
          failures: 0,
        },
      },
      weapons: [],
      spells: [],
      ablities: [],
      inventory: [],
      image: '',
    }

    setCharacters([...characters, character]);
    setId(id + 1);
  }

  const addNote = () => {
    let note = {
      id: id + 1,
      title: `New note ${id + 1}`,
      content: '',
      notes: [],
      parents: [],
    }

    setNotes([...notes, note]);
    setId(id + 1);
  }

  const handleDeleteCharacter = (e, id) => {
    e.preventDefault()
    if (window.confirm("Are you sure you want to delete this Character?")) {
      setCharacters(characters.filter(character => character.id !== id))
    }
  }

  const handleDeleteNote = (e, id) => {
    console.log(id)
    e.preventDefault()
    if (window.confirm("Are you sure you want to delete this Note?")) {
      setNotes(notes.filter(note => note.id != id))
    }
  }

  return (
    <div>
      <HelperNav links={[{href: '/', text: 'Home'}]} current='Organize' helpPath='/learn/organizing-characters-and-notes' />
      <Title title={'Organize'} />

      {showRecent ? (
        <div className='recent'>
          <div className='recent-title' onClick={() => setShowRecent(false)} title='Shows your 5 most recently edited items' >
            <RecentIcon className='icon' />
            <h2>Recent</h2>
            <UpIcon className='icon' />
          </div>
          <Recent
            notes={notes}
            characters={characters}
            addCharacter={addCharacter}
            handleDeleteCharacter={handleDeleteCharacter}
            handleDeleteNote={handleDeleteNote}
            addNote={addNote}
            id={id}
          />
        </div>
      ) :
      (
        <div className='minimized-recent' onClick={() => setShowRecent(true)}>
          <div className='recent-title'>
            <RecentIcon className='icon' />
            <h2>Show Recent</h2>
            <DownIcon className='icon' />
          </div>
        </div>
      )
      }
      <div className='links'>
          <TabContext value={value}>
          <Box sx={{
              border: '4px solid var(--primary-color)',
              padding: 'var(--spacing-2)',
              paddingBottom: '0',
              borderRadius: 'var(--spacing-1)',
              width: '100%',
            }}>
            <TabList sx={{padding: '0 var(--spacing-4)'}} onChange={handleChange} aria-label="lab API tabs example">
              <CustomTab icon={<CharacterIcon className='icon-large' style={{ marginTop: '-3px' }} />} iconPosition={'start'} label="Characters" value="1" />
              <CustomTab icon={<NoteIcon className='icon' style={{ marginTop: '-1px', paddingTop: '8px' }} />} iconPosition={'start'} label="Notes" value="2" />
              <div className='add-container' style={{padding: 'var(--spacing-1) 0', display: 'flex', alignItems: 'center' }}>
                {
                  value === '1' ?
                    <Link to={`/organize/character/${id + 1}`} className='button button-add' onClick={addCharacter}>+ New Character</Link>
                  :
                    <Link to={`/organize/notes/${id + 1}`} className='button button-add' onClick={addNote}>+ New Note</Link>
                }
              </div>
            </TabList>
            <TabPanel value="1">
              <CharacterTab characters={characters} handleDelete={handleDeleteCharacter} />
            </TabPanel>
            <TabPanel value="2">
              <NotesTab notes={notes} handleDelete={handleDeleteNote} />
            </TabPanel>
          </Box>
        </TabContext>
      </div>
    </div>
  );
}

export default Organization;
