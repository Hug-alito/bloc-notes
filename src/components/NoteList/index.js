import React, { useState } from 'react';
import { List, Button, Input } from 'antd';

const NoteList = ({ notes, onSelect, onNewNote, onAddNote }) => {
  const [newNoteTitle, setNewNoteTitle] = useState('');

  const handleClick = (note) => {
    onSelect(note);
  };

  const handleAddNote = () => {
    if (newNoteTitle) {
      onAddNote(newNoteTitle);
      setNewNoteTitle('');
    }
  };
  
  return (
    <div className="note-list">
      <h2>Your Notes</h2>
      <Input
        placeholder="Enter note title"
        value={newNoteTitle}
        onChange={(e) => setNewNoteTitle(e.target.value)}
      />
      <Button onClick={handleAddNote}>Add Note</Button>
      <List
        dataSource={notes}
        renderItem={(note) => (
          <List.Item className="note-item" onClick={() => handleClick(note)}>
            <h3>{note.title}</h3>
            <p>{note.content.slice(0, 15)}...</p>
          </List.Item>
        )}
      />
    </div>
  );
};

export default NoteList;
