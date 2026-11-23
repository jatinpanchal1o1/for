// src/components/Input.js
import React, { useState } from 'react';

const Input = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div className="flex p-4 fixed bottom-0 left-0 right-0">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow border rounded-lg p-2 outline-none"
        placeholder="Type a message..."
      />
      <button onClick={handleSend} className="bg-gray-400 text-white hover:bg-gray-300 rounded-lg px-4 ml-2">Send</button>
    </div>
  );
};

export default Input;