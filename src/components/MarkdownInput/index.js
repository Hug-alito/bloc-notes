// MarkdownInput.js

import React, { useState, useEffect } from 'react';
import { Input } from 'antd';

const MarkdownInput = ({ markdownValue, onSave }) => {
  const [currentMarkdownValue, setCurrentMarkdownValue] = useState('');

  useEffect(() => {
    // Update the local state when the parent prop `markdownValue` changes
    setCurrentMarkdownValue(markdownValue);
  }, [markdownValue]);

  const handleInputChange = (event) => {
    const newMarkdownValue = event.target.value;
    setCurrentMarkdownValue(newMarkdownValue);
    // Call the onSave callback to update the parent component state
    onSave(newMarkdownValue);
  };

  return (
    <div className="markdown-input">
      <Input.TextArea
        rows={10}
        value={currentMarkdownValue}
        onChange={handleInputChange}
        placeholder="Enter your note in Markdown..."
      />
    </div>
  );
};

export default MarkdownInput;
