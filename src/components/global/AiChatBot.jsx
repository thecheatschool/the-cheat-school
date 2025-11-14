import React, { useState } from 'react';
import { Send, User, Bot, X, Paperclip, Mic, MessageCircle } from 'lucide-react';

const AIChatbot = ({ isOpen, setIsOpen }) => { // Accept props instead of internal state
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hi there! 👋',
      time: new Date()
    },
    {
      id: 2,
      type: 'bot',
      text: 'I\'m your AI assistant. How can I help you learn more about our website today?',
      time: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user',
        text: inputValue,
        time: new Date()
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          type: 'bot',
          text: 'Thanks for your message! I\'m here to help you navigate and understand our website better. What would you like to know?',
          time: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Desktop Floating Chat Button - Hidden on Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:flex fixed bottom-6 right-6 w-16 h-16 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        aria-label="Open AI Assistant"
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>

      {/* Chatbot Window - Responsive */}
      {isOpen && (
        <>
          {/* Mobile Overlay */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Chat Window */}
          <div className="fixed z-50 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300 inset-x-2 bottom-2 top-[100px] md:bottom-28 md:right-6 md:left-auto md:top-auto md:w-96 md:h-[600px]">
            {/* Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-semibold font-primary">AI Assistant</h2>
                  <p className="text-xs text-white/80">Online • Here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-2 bg-light-grey">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-end gap-2 ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.type === 'bot' && (
                    <div className="w-6 h-6 md:w-7 md:h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                  )}
                  
                  <div
                    className={`space-y-1 max-w-[75%] ${
                      message.type === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`rounded-2xl px-3 py-2 md:px-4 ${
                        message.type === 'bot'
                          ? 'bg-white text-secondary'
                          : 'bg-primary text-white'
                      }`}
                    >
                      <p className="text-xs md:text-sm font-secondary">{message.text}</p>
                    </div>
                  </div>

                  {message.type === 'user' && (
                    <div className="w-6 h-6 md:w-7 md:h-7 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-3 bg-white flex-shrink-0">
              <div className="flex items-center gap-2 bg-light-grey rounded-full px-3 md:px-4 py-2">
                <button className="text-primary hover:text-primary/80 transition-colors hidden md:block">
                  <Paperclip className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent outline-none text-sm font-secondary placeholder:text-muted-foreground"
                />
                <button className="text-primary hover:text-primary/80 transition-colors hidden md:block">
                  <Mic className="w-5 h-5" />
                </button>
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2 font-secondary">
                Ask me anything about our website!
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AIChatbot;