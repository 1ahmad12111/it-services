
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
        fill: #FFFFFF !important; /* White color for better visibility */
      }
      
      /* Dark mode adjustments */
      .dark .voiceflow-chat-button {
        background-color: #B9FF66 !important; /* Positivus Green */
      }
      
      .dark .voiceflow-chat-button svg {
        fill: #191A23 !important; /* Dark color for contrast */
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
        color: #FFFFFF !important; /* Ensure text is visible */
      }
      
      /* Active message elements */
      .voiceflow-chat-message-active {
        background-color: #9b87f5 !important; /* Primary Purple */
        color: #FFFFFF !important; /* White */
      }
      
      /* Dark mode adjustments */
      .dark .voiceflow-chat-container {
        border: 1px solid #B9FF66 !important;
        box-shadow: 0 4px 20px rgba(185, 255, 102, 0.2) !important;
      }
      
      /* Ensure all text in chat is visible in dark mode */
      .dark .voiceflow-chat-message,
      .dark .voiceflow-chat-title,
      .dark .voiceflow-chat-subtitle {
        color: #FFFFFF !important;
      }

      /* Ensure button text is visible in dark mode */
      .dark .voiceflow-chat-button-text {
        color: #191A23 !important;
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
