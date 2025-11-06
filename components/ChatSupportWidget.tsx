'use client';

import { useState } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function FloatingChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);

  // Simple fake AI responses
  const fakeResponses: Record<string, string> = {
    hello: 'Hi there! How can I help you today?',
    pricing: 'Our prices are very reasonable!',
    default: "Sorry, I didn't understand that.",
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    // Generate fake bot response
    const responseText =
      fakeResponses[input.toLowerCase()] || fakeResponses['default'];
    const botMessage: Message = { text: responseText, sender: 'bot' };

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 500); // small delay for realism

    setInput('');
  };

  return (
    <>
      {/* Floating chat button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 z-50 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary transition"
        >
          Support
        </button>
      )}

      {/* Chat box */}
      {open && (
        <div className="fixed bottom-4 right-4 z-50 w-80 h-96 bg-white border rounded-lg shadow-lg flex flex-col">
          {/* Header */}
          <div className="bg-primary text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
            <span>Support Chat</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1 border rounded px-2 py-1"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="bg-primary text-white px-4 py-1 rounded hover:bg-primary transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
