import React, { useState } from 'react';
import { Input, Button } from 'antd';

const MarkdownInput = ({ onSave }) => {
  const [markdownValue, setMarkdownValue] = useState('');

  const handleInputChange = (event) => {
    setMarkdownValue(event.target.value);
  };

  const handleSaveClick = () => {
    onSave(markdownValue);
  };

  return (
    <div className="markdown-input">
      <Input.TextArea
        rows={10}
        value={markdownValue}
        onChange={handleInputChange}
        placeholder="Enter your note in Markdown..."
      />
      <Button type="primary" onClick={handleSaveClick}>
        Save
      </Button>
    </div>
  );
};

export default MarkdownInput;
