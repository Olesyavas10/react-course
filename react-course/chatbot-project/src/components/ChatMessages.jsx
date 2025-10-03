import { useAutoScroll } from "./AutoScroll";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
        const chatMessagesRef = useAutoScroll(chatMessages); //automaticly safe html inside

        /* const chatMessagesRef = React.useRef(null); //automaticly safe html inside
        React.useEffect(() => {
          const containerElem = chatMessagesRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight; //scroll on height
          }
        }, [chatMessages]); //array controls when to use effect */

        return (
          <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            })}
            ;
          </div>
        );
      }

      export default ChatMessages //Default export to export one thing from file
