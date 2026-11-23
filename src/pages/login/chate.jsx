import React, {useState} from 'react';
import Header from '../chat/chatheader';
import Chat from '../chat/chatc';
import Input from '../chat/chatinput';

const Chate = () => {
    const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    setMessages([...messages, { text, isUser: true }]);
    // Simulate receiving a message
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: 'Hello!', isUser: false }]);
    }, 1000);
  };

    return (
    <div className="h-screen flex flex-col">
      <Header />
      <Chat messages={messages} />
      <Input onSend={handleSend} />
    </div>
    );
}

export default Chate;
