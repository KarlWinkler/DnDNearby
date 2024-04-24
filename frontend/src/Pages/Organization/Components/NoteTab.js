import React, { useState } from 'react';

// import note from "../../../Data/notes.json";
import '../../../Styles/Notes.css';
import Note from './../Components/Note';
import Search from '../../../Components/Search';

function NoteTab({ notes, handleDelete }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  let displayNotes = () => filteredNotes.map((note, index) => {
    return (
      <Note note={note} key={index} handleDelete={handleDelete} />
    );
  });

  return (
    <div>
      <Search placeholder={'Search Notes'} onChange={event => setSearchQuery(event.target.value)} />
      <div className='children tab-children'>
        {displayNotes()}
      </div>
    </div>
  );
}

export default NoteTab;
