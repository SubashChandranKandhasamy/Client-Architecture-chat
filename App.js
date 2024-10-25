// App.js
import React, { useState } from 'react';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import './App.css';

function ChatApp() {
  const [selectedChat, setSelectedChat] = useState(null); // State to determine which chat box to display
  const [clientMessages, setClientMessages] = useState([]);
  const [architectMessages, setArchitectMessages] = useState([]);

  // Handlers to add messages to each chat
  const handleSendClientMessage = (text) => {
    setClientMessages([...clientMessages, { text, sender: 'Client', timestamp: new Date() }]);
  };

  const handleSendArchitectMessage = (text) => {
    setArchitectMessages([...architectMessages, { text, sender: 'Architect', timestamp: new Date() }]);
  };

  // Landing Page for chat selection
  const renderLandingPage = () => (
    <div className="landing-page">
      <h1>Select Chat</h1>
      <button onClick={() => setSelectedChat('client')}>Client Chat</button>
      <button onClick={() => setSelectedChat('architect')}>Architect Chat</button>
    </div>
  );

  return (
    <div className="chat-app">
      {selectedChat === null && renderLandingPage()}

      {selectedChat === 'client' && (
        <div className="chat-box client-box">
          <h2>Client Chat</h2>
          <MessageList messages={clientMessages} />
          <MessageInput onSendMessage={handleSendClientMessage} placeholder="Client message..." />
          <button onClick={() => setSelectedChat(null)}>Back to Selection</button>
        </div>
      )}

      {selectedChat === 'architect' && (
        <div className="chat-box architect-box">
          <h2>Architect Chat</h2>
          <MessageList messages={architectMessages} />
          <MessageInput onSendMessage={handleSendArchitectMessage} placeholder="Architect message..." />
          <button onClick={() => setSelectedChat(null)}>Back to Selection</button>
        </div>
      )}
    </div>
  );
}

export default ChatApp;
