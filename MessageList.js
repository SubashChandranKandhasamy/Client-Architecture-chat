// components/MessageList.js
import React from 'react';
import './MessageList.css';

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          <span>{msg.sender}:</span> {msg.text}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
