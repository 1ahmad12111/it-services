
import React from "react";

/**
 * LiveChat component that uses Voiceflow for chat functionality
 * The actual chat functionality is loaded via the script in index.html
 * Styling has been updated to match the Positivus design system
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
        background-color: #B9FF66 !important; /* Positivus green */
      }
      
      /* Chat icon color */
      .voiceflow-chat-button svg {
        fill: #191A23 !important; /* Positivus dark */
      }
      
      /* Chat container styling */
      .voiceflow-chat-container {
        border: 1px solid #B9FF66 !important;
        box-shadow: 0 4px 20px rgba(185, 255, 102, 0.2) !important;
      }
      
      /* Header styling */
      .voiceflow-chat-header {
        background-color: #191A23 !important; /* Positivus dark */
      }
      
      /* Active message elements */
      .voiceflow-chat-message-active {
        background-color: #B9FF66 !important; /* Positivus green */
        color: #191A23 !important; /* Positivus dark */
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
