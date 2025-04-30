
import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";
import { toast } from "sonner";
import SEOMetaTags from "@/components/common/SEOMetaTags";

// Define message type for better type safety
interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

// Website data used to train the AI responses
const websiteData = {
  companyName: "Mosivant",
  services: [
    {
      title: "Website Development",
      description: "Creating powerful, responsive websites that drive business growth",
      features: [
        "Custom website design and development",
        "E-commerce solutions",
        "Content management systems",
        "Website maintenance and support",
        "SEO optimization",
        "Performance optimization",
      ]
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs",
      features: [
        "Custom application development",
        "Enterprise software solutions",
        "API development and integration",
        "Mobile app development",
        "Cloud-native applications",
        "Legacy system modernization",
      ]
    },
    {
      title: "IT Support",
      description: "Reliable technical support to keep your business running smoothly",
      features: [
        "24/7 helpdesk support",
        "Network monitoring and management",
        "Security management",
        "Data backup and recovery",
        "Hardware and software troubleshooting",
        "IT infrastructure maintenance",
      ]
    },
    {
      title: "IT Consulting",
      description: "Strategic technology guidance to drive business transformation",
      features: [
        "IT strategy development",
        "Digital transformation planning",
        "Technology roadmap creation",
        "IT audit and assessment",
        "Vendor selection and management",
        "Project management and implementation",
      ]
    }
  ],
  whyChooseUs: [
    "Enterprise Experience",
    "Innovation-First Approach",
    "Industry Expertise",
    "Global Talent Network",
    "Proven Methodologies",
    "Strategic Partnerships"
  ],
  contact: {
    email: "info@mosivant.com",
    phone: "+1 (555) 123-4567"
  }
};

const LiveChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: "Hi there! How can we help you today?", isUser: false, timestamp: new Date() },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatMessagesRef = useRef<HTMLDivElement>(null);
  
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    // If opening the chat, mark it as seen
    if (!isChatOpen) {
      localStorage.setItem("chatSeen", "true");
    }
  };

  // Check if this is the user's first visit in this session
  useEffect(() => {
    const hasSeenChat = localStorage.getItem("chatSeen");
    
    // If user hasn't seen chat this session, show a notification after 30 seconds
    if (!hasSeenChat) {
      const timer = setTimeout(() => {
        if (!isChatOpen) {
          toast("Need help? Our chat support is available!", {
            action: {
              label: "Open Chat",
              onClick: () => setIsChatOpen(true),
            },
          });
        }
      }, 30000); // 30 seconds
      
      return () => clearTimeout(timer);
    }
  }, [isChatOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = { text: newMessage, isUser: true, timestamp: new Date() };
    setMessages([...messages, userMessage]);
    setNewMessage("");

    // Simulate typing indicator
    setIsTyping(true);

    // Process the message and generate an AI response
    setTimeout(() => {
      const botResponse = generateResponse(newMessage, messages);
      
      setMessages((currentMessages) => [
        ...currentMessages,
        { text: botResponse, isUser: false, timestamp: new Date() },
      ]);
      
      setIsTyping(false);
    }, 1500);
  };

  // Function to generate responses based on the website content
  const generateResponse = (query: string, previousMessages: ChatMessage[]): string => {
    // Convert query to lowercase for easier matching
    const q = query.toLowerCase();
    
    // Check for service-related queries
    if (q.includes("service") || q.includes("offer") || q.includes("provide") || q.includes("help with")) {
      return `At Mosivant, we offer a range of IT services including: ${websiteData.services.map(s => s.title).join(", ")}. Would you like to know more about any specific service?`;
    }
    
    // Check for specific service inquiries
    for (const service of websiteData.services) {
      if (q.includes(service.title.toLowerCase())) {
        return `Our ${service.title} service focuses on ${service.description}. Key features include: ${service.features.slice(0, 3).join(", ")} and more. Would you like to schedule a consultation about this service?`;
      }
    }
    
    // Check for "why choose us" questions
    if (q.includes("why choose") || q.includes("why should i") || q.includes("difference") || q.includes("better than")) {
      return `Mosivant stands out because of our ${websiteData.whyChooseUs.slice(0, 3).join(", ")} and more. Would you like to learn more about our approach?`;
    }
    
    // Check for consultation or booking questions
    if (q.includes("book") || q.includes("schedule") || q.includes("appointment") || q.includes("consultation")) {
      return "You can schedule a consultation with our experts by clicking on 'Schedule Consultation' in the navigation menu, or I can help you get started right away. Would you like me to guide you through the process?";
    }
    
    // Check for contact information requests
    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("call") || q.includes("reach")) {
      return `You can reach us at ${websiteData.contact.email} or by phone at ${websiteData.contact.phone}. Our team is available during business hours to assist you.`;
    }
    
    // Check for pricing questions
    if (q.includes("price") || q.includes("cost") || q.includes("rate") || q.includes("fee") || q.includes("pricing")) {
      return "Our pricing varies based on project scope and requirements. We offer competitive rates and flexible payment options. Would you like to discuss your project so we can provide a customized quote?";
    }
    
    // Check for greetings
    if (q.includes("hello") || q.includes("hi ") || q.includes("hey") || q.includes("greetings") || q.match(/^hi$/)) {
      return "Hello! Welcome to Mosivant. How can we assist you with your IT needs today?";
    }
    
    // Check for thanks
    if (q.includes("thank") || q.includes("thanks") || q.includes("appreciate")) {
      return "You're welcome! Is there anything else I can help you with today?";
    }
    
    // Check for goodbye
    if (q.includes("bye") || q.includes("goodbye") || q.includes("see you") || q.includes("later")) {
      return "Thank you for chatting with us! Feel free to return if you have more questions. Have a great day!";
    }
    
    // Default response if no specific pattern is matched
    return "Thank you for your message! Can you please provide more details about your inquiry so we can better assist you? We offer services in website development, software development, IT support, and IT consulting.";
  };

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <>
      {/* Chat Button with notification indicator */}
      <Button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg p-0 z-50 flex items-center justify-center ${
          isChatOpen ? "bg-gray-700" : "bg-teal-600 hover:bg-teal-700"
        }`}
        aria-label={isChatOpen ? "Close chat" : "Open chat"}
      >
        {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>

      {/* Chat Widget */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-lg shadow-2xl overflow-hidden z-50 border border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="bg-teal-700 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1.5 rounded-full">
                  <div className="bg-teal-500 h-2 w-2 rounded-full relative">
                    <div className="absolute top-0 left-0 h-full w-full bg-teal-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Mosivant Support</h3>
                  <p className="text-xs text-teal-200">We typically reply in a few minutes</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-teal-600 h-8 w-8 p-0"
              >
                <X size={18} />
              </Button>
            </div>
          </div>

          {/* Chat Messages */}
          <div
            id="chat-messages"
            ref={chatMessagesRef}
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
                      ? "bg-teal-600 text-white rounded-br-none"
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
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <Button 
              type="submit" 
              disabled={!newMessage.trim()}
              className="bg-teal-600 hover:bg-teal-700 text-white"
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
