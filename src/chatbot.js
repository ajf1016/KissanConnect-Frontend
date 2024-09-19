import { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    // Create a script element for the chatbot
    const script = document.createElement('script');
    script.src = 'https://www.momentcrm.com/embed';
    script.async = true;

    // Add the init script after the embed script loads
    script.onload = () => {
      window.MomentCRM('init', {
        teamVanityId: 'kisan-connect',
        doChat: true,
        doTimeTravel: true,
        quadClickForFeedback: true,
      });
    };

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; 
};

export default ChatBot;
