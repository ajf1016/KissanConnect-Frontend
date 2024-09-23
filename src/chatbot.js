import { useEffect, useState } from 'react';

const ChatBot = () => {
  const [isChatBotLoaded, setIsChatBotLoaded] = useState(false);

  useEffect(() => {
    if (!isChatBotLoaded) {
      // Create a script element for the chatbot
      const script = document.createElement('script');
      script.src = 'https://www.momentcrm.com/embed';
      script.async = true;

      // Add the init script after the embed script loads
      script.onload = () => {
        try {
          window.MomentCRM('init', {
            teamVanityId: 'kisan-connect',
            doChat: true,
            doTimeTravel: true,
            quadClickForFeedback: true,
          });
          setIsChatBotLoaded(true); // Mark chatbot as loaded
        } catch (error) {
          console.error('Failed to initialize MomentCRM:', error);
        }
      };

      script.onerror = () => {
        console.error('Failed to load MomentCRM script');
      };

      // Append the script to the body
      document.body.appendChild(script);

      // Cleanup the script when component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isChatBotLoaded]);

  return null;
};

export default ChatBot;
