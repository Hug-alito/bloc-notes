// App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import { Layout } from 'antd';
import NoteList from './components/NoteList';
import NoteDisplay from './components/NoteDisplay';
import MarkdownInput from './components/MarkdownInput';

const { Header, Content, Sider } = Layout;

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    // Load notes from localStorage on app load
    const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    // Save notes to localStorage whenever notes change
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleNoteSelect = (note) => {
    setSelectedNote(note);
  };

  const handleAddNote = (newNoteTitle) => {
    const newNote = {
      id: Date.now(),
      title: newNoteTitle,
      content: '',
    };
    setNotes([...notes, newNote]);
    setSelectedNote(newNote);
  };

  const handleSave = (markdownValue) => {
    // Find the current note being edited
    const updatedNote = notes.find((note) => note === selectedNote);
    if (updatedNote) {
      // Update the note content with the new markdown value
      updatedNote.content = markdownValue;
      setNotes([...notes]);
    }
  };

  return (
    <Layout className="app-layout">
      <Header className="app-header">Bloc Notes</Header>
      <Layout>
        <Sider className="app-sider">
          <NoteList notes={notes} onSelect={handleNoteSelect} onAddNote={handleAddNote} />
        </Sider>
        <Content className="app-content">
          <NoteDisplay selectedNote={selectedNote} />
          <MarkdownInput
            markdownValue={selectedNote?.content}
            onSave={handleSave}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
