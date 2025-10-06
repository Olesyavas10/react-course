import { useState, useEffect} from 'react'
import {Chatbot} from 'supersimpledev'
import {ChatInput} from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css' //to import style


function App() {
        const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages'))||[], []);
       
        useEffect(()=>{
          Chatbot.addResponses({
            
              'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    })  
          }, [])

          useEffect(()=>{
            localStorage.setItem('messages', JSON.stringify(chatMessages))
          }, [chatMessages])
        return (
          <>
            <p className="welcomeText">
              Welcome to the chatbot project! Send a message using the textbox
              below
            </p>
            <div className="app-container">
              <ChatMessages chatMessages={chatMessages} />
              <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
              />
            </div>
          </>
        );
      }

export default App
