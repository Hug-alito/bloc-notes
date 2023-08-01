import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const NoteDisplay = ({ selectedNote }) => {
  return (
    <div className="note-display">
      {selectedNote ? (
        <div>
          <Title level={3}>{selectedNote.title}</Title>
          <Paragraph
            dangerouslySetInnerHTML={{ __html: selectedNote.content }}
          />
        </div>
      ) : (
        <div className="empty-note">
          <Title level={3}>No Note Selected</Title>
          <Paragraph>Select a note from the list or create a new one.</Paragraph>
        </div>
      )}
    </div>
  );
};

export default NoteDisplay;