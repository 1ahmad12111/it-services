
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";

const LiveChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean; timestamp: Date }[]>([
    { text: "Hi there! How can we help you today?", isUser: false, timestamp: new Date() },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = { text: newMessage, isUser: true, timestamp: new Date() };
    setMessages([...messages, userMessage]);
    setNewMessage("");

    // Simulate typing indicator
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "Thank you for your message! A member of our team will be with you shortly.",
        "I understand you need help with that. Let me get some more information from you.",
        "Great question! Our experts specialize in this area. Would you like to schedule a consultation?",
        "We offer comprehensive solutions for that need. Would you like me to tell you more?",
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      setMessages((currentMessages) => [
        ...currentMessages,
        { text: randomResponse, isUser: false, timestamp: new Date() },
      ]);
      
      setIsTyping(false);
    }, 2000);
  };

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    const chatMessages = document.getElementById("chat-messages");
    if (chatMessages) {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg p-0 z-50 flex items-center justify-center ${
          isChatOpen ? "bg-gray-700" : "bg-consulting-600 hover:bg-consulting-700"
        }`}
        aria-label={isChatOpen ? "Close chat" : "Open chat"}
      >
        {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>

      {/* Chat Widget */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-lg shadow-2xl overflow-hidden z-50 border border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="bg-consulting-700 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1.5 rounded-full">
                  <div className="bg-consulting-500 h-2 w-2 rounded-full relative">
                    <div className="absolute top-0 left-0 h-full w-full bg-consulting-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Live Support</h3>
                  <p className="text-xs text-consulting-200">We typically reply in a few minutes</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-consulting-600 h-8 w-8 p-0"
              >
                <X size={18} />
              </Button>
            </div>
          </div>

          {/* Chat Messages */}
          <div
            id="chat-messages"
            className="p-4 flex flex-col gap-3 overflow-y-auto max-h-80 min-h-[320px]"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isUser
                      ? "bg-consulting-600 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none max-w-[80%]">
                  <div className="flex gap-1 items-center h-6">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "200ms" }}></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "400ms" }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-consulting-500"
            />
            <Button 
              type="submit" 
              disabled={!newMessage.trim()}
              className="bg-consulting-600 hover:bg-consulting-700 text-white"
            >
              Send
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default LiveChat;
