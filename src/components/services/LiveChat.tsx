
import React from "react";

/**
 * LiveChat component that uses Voiceflow for chat functionality
 * The actual chat functionality is loaded via the script in index.html
 * Styling has been updated to match the Mosivant design system
 */
const LiveChat = () => {
  // The Voiceflow widget is loaded directly from the script in index.html
  
  // Apply custom styling to the chat widget
  React.useEffect(() => {
    // Add custom CSS to style the chat widget to match our theme
    const style = document.createElement('style');
    style.textContent = `
      /* Chat button styling */
      .voiceflow-chat-button {
        background-color: #9b87f5 !important; /* Primary Purple */
        transform: scale(0.85) !important; /* Make button slightly smaller */
      }
      
      /* Chat icon color */
      .voiceflow-chat-button svg {
        fill: #1A1F2C !important; /* Dark Purple */
      }
      
      /* Chat container styling */
      .voiceflow-chat-container {
        border: 1px solid #9b87f5 !important;
        box-shadow: 0 4px 20px rgba(155, 135, 245, 0.2) !important;
        max-width: 380px !important; /* Limit maximum width */
      }
      
      /* Header styling */
      .voiceflow-chat-header {
        background-color: #1A1F2C !important; /* Dark Purple */
      }
      
      /* Active message elements */
      .voiceflow-chat-message-active {
        background-color: #9b87f5 !important; /* Primary Purple */
        color: #FFFFFF !important; /* White */
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return null;
};

export default LiveChat;
