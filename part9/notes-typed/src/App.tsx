import { useState, useEffect } from 'react';
import {Note} from './types'
import { getAllNotes, createNote } from './noteService';

const App = () => {
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState<Note[]>( [{ id: 1, content: 'testing' }]);


  const addNote = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const createdNote = await createNote({ content: newNote});
   
    setNotes(notes.concat(createdNote));
    setNewNote('');
  }

  useEffect(() => {
    (async function () {
      const data = await getAllNotes();
      setNotes(data)
    })();
  }, [])

  return (
    <div>
      <form onSubmit={addNote}>
        <input
          value={newNote} 
          onChange={({ target }) => setNewNote(target.value)}
        />
        <button type="submit">add</button>
      </form>
      <ul>
        {notes.map(note =>  <li key={note.id}>{note.content}</li>)}
      </ul>
   </div>
  )
}

export default App;
