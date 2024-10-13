import React, { useState } from 'react';

function MessageInput({ onSendMessage }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    onSendMessage(text);
    setText('');
  };

  return (
    <div className="message-input">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        onKeyPress={(e) => e.key === 'Enter' ? handleSend() : null} 
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default MessageInput;
