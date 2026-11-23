// src/components/Chat.js
import React from 'react';

const Chat = ({ messages }) => {
  return (
    <div className="flex flex-col p-4 overflow-y-auto h-96 z-10">
      {messages.map((msg, index) => (
        <div key={index} className={`my-2 p-2 rounded-lg ${msg.isUser  ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'}`}>
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default Chat;