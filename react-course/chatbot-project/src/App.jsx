import { useState} from 'react'
import {ChatInput} from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css' //to import style


function App() {
        const [chatMessages, setChatMessage] = useState([]);
       
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
                setChatMessages={setChatMessage}
              />
            </div>
          </>
        );
      }

export default App
