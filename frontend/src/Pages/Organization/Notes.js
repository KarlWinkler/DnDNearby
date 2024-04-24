import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// import note from "../../Data/notes.json";
import '../../Styles/Notes.css';
import StyledTextField from '../../Components/StyledTextField';
import Note from './Components/Note';
import TextArea from '../../Components/TextArea';

import { Link, useParams } from 'react-router-dom';
import HelperNav from '../../Components/HelperNav';
import Hint from '../../Components/Hint';

const Notes = ({ notes, setNotes, id, setId }) => {
  let { noteId } = useParams();
  let newNotes = [...notes];
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [note, setNote] = useState(newNotes.find((e) => e.id == noteId));

  useEffect(() => {
    setNote(newNotes.find((e) => e.id == noteId));
    setTitle(newNotes.find((e) => e.id == noteId)?.title || '');
    setContent(newNotes.find((e) => e.id == noteId)?.content || '');
  }, [noteId]);

  let displayNotes = () => note?.notes.map((note, index) => {
    let n = newNotes.find((e) => e.id == note);
    return (
      <>
        {n ? <Note note={n} key={index} /> : null}
      </>
    );
  });

  let editNote = () => {
    return (
      <div className='note-edit'>
        <StyledTextField
          value={title}
          fontSize="48px"
          onChange={(event) => {
            note.title = event.target.value;
            setTitle(event.target.value);
            setNotes(newNotes);
          }}
        />
        <TextArea 
          value={content} 
          onChange={(event) => {
            note.content = event.target.value;
            setContent(event.target.value);
            setNotes(newNotes);
          }}
          placeholder='Write you notes here!'
        />
      </div>
    )
  }

  const parentPaths = () => {
    let paths = [];
    note.parents.forEach((parent) => {
      let title = newNotes.find((e) => e.id == parent).title || 'untitled';
      paths.push({href: `/organize/notes/${parent}`, text: title})
    });

    return paths.filter((e) => e.text);
  }

  return (
    <div>
      <HelperNav
        links={[
          {href: '/', text: 'Home'},
          {href: '/organize', text: 'Organize'},
          {href: '/organize?type=2', text: 'Notes'},
          ...parentPaths()
        ]}
        current={note.title}
        helpPath='/learn/taking-notes'
      />

      <div className="note">
        <div className='note-main'>
          <div className='parent-note'>
            {editNote()}
          </div>
          <Hint className={'hint-column'} >
            Notes are saved automatically!
          </Hint>
          <Link to='/organize/' className='button button-save'>Done</Link>
        </div>

        <div className='note-children'>
          <h2>Child Notes</h2>
          <Link to={`/organize/notes/${id + 1}`} className='button button-add' onClick={() => {
            newNotes.push({
              id: id + 1,
              title: `New note ${id + 1}`,
              content: '',
              notes: [],
              parents: [...note.parents, note.id]
            });
            note.notes.push(id + 1);
            setNotes(newNotes);
            setId(id + 1);
          }}>+ Add Note</Link>
          <div className='children'>
            {displayNotes()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
