import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import './all.css';
import { Qulist } from './MessageInput';

const ChatArea = () => {
  const qlist = useContext(Qulist) || []; // Ensure qlist is an array

  return (
    <Container className="my-4">
      <div className="chat-area border rounded p-3" style={{ height: '67vh', overflowY: 'scroll' }}>
        {qlist.map((msg, index) => (
          <div key={index} className={`message mb-2 ${msg.sender === 'User' ? 'user-message' : 'ai-message'}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ChatArea;
