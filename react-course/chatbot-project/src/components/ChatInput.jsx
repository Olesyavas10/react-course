import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import LoadingImage from '../assets/loading-icon.jpeg'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
        //component name must start with the Uppercase

        const [inputText, setInputText] = useState("");
        const [isLoading, setIsLoading] = useState(false);

        function saveInputText(event) {
          setInputText(event.target.value); //get the text
        }
        async function sendMessage() {
          if (isLoading || inputText === "") {
            return;
          }
          setIsLoading(true); //переключаем
          setInputText("");

          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID(), //code thats generate a unique id
            },
          ]; //копируем старый массив и добавляем к нему новый объект
          setChatMessages(newChatMessages);
          setInputText(""); //чтоб убрать все из placeholder
          setChatMessages([
            ...newChatMessages,
            {
              message: (
                <img
                  src={LoadingImage}
                  className="loading-img"
                  alt="loading"
                />
              ),
              sender: "robot",
              id: crypto.randomUUID(),
            },
          ]);

          const response = await Chatbot.getResponseAsync(inputText); //получение ответа от бота через библиотеку готовую
          //async возвращает промиз и через 1 секунду функция срабатывает
          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID(),
            },
          ]);
          setIsLoading(false);
        }

        function handleKeyDown(event) {
          if (event.key === "Enter") {
            sendMessage();
          } else if (event.key === "Escape") {
            setInputText("");
          }
        }

        return (
          <div className="chat-input-container">
            <input
              className="chat-input"
              placeholder="Send a message to Chatbot"
              size="30"
              onChange={saveInputText}
              value={inputText} //чтоб в placeholder html было пусто
              onKeyDown={handleKeyDown}
            />
            <button className="send-button" onClick={sendMessage}>
              Send
            </button>
          </div>
        );
      }