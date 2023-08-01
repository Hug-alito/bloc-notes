import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const NoteDisplay = ({ selectedNote }) => {
  return (
    <div className="note-display">
      {selectedNote ? (
        <div>
          <Title level={3}>{selectedNote.title}</Title>
          <div dangerouslySetInnerHTML={{ __html: selectedNote.content }} />
        </div>
      ) : (
        <div className="empty-note">
          <Title level={3}>No Note Selected</Title>
          <p>Select a note from the list or create a new one.</p>
        </div>
      )}
    </div>
  );
};

export default NoteDisplay;
