import React from 'react';
import Message from './Message';

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
}

export default MessageList;
