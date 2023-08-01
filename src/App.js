import React, { useState, useEffect } from 'react';
import './App.css';
import { Layout } from 'antd';
import NoteList from './components/NoteList';
import NoteDisplay from './components/NoteDisplay';
import MarkdownInput from './components/MarkdownInput';

const { Header, Content, Sider } = Layout;

const App = () => {
  const [notes, setNotes] = useState([]);
  const [markdownText, setMarkdownText] = useState('');

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
    setMarkdownText(note.content);
  };

  const handleAddNote = (newNoteTitle) => {
    const newNote = {
      id: Date.now(),
      title: newNoteTitle,
      content: '',
    };
    setNotes([...notes, newNote]);
    setMarkdownText('');
  };

  const handleSave = (markdownValue) => {
    // Find the current note being edited
    const updatedNote = notes.find((note) => note.content === markdownText);
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
          <NoteDisplay markdownText={markdownText} />
          <MarkdownInput markdownText={markdownText} setMarkdownText={setMarkdownText} onSave={handleSave} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
