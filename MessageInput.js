// components/MessageInput.js
import React, { useState } from 'react';
import './MessageInput.css';

function MessageInput({ onSendMessage, placeholder }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSendMessage(text);
      setText('');
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default MessageInput;
