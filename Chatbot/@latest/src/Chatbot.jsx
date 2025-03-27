
import { useState, useEffect, useRef } from "react";
import "./App.css"; 

const defaultOptions = {
  hello: "Hello! How can I Help you? ",
  Mathsdoubt: "Don't Worry I will try to Solve Your Doubts Regarding Maths Operators",
  Thanksforhelp:"I am always ready to help you!!",
  GoodJob:"Thanks For Your Compliment!!",
  default:"I can Solve Your Maths Doubts"
};

export default function App() {
  const [messages, setMessages] = useState([
    { text: "Hello! I am here to Help You.", sender: "chatbot" },
  ]);
  const [userInput, setUserInput] = useState("");
  const chatEndRef = useRef(null);

  const handleSendMessage = () => {
    if (!userInput.trim()) 
      {
        return;
      }

    const userMessage = { text: userInput, sender: "User" };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const lowerCaseInput = userInput.toLowerCase();
      const botReply = defaultOptions[lowerCaseInput] || defaultOptions.default;
      setMessages((prev) => [...prev, { text: botReply, sender: "chatbot" }]);
    }, 2000);

    setUserInput("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={styles.chatArea}>
      <h2 style={styles.chatHeader}>Chatbot Application</h2>
      <div style={styles.chatBox} >
        {messages.map((msg, index) => (
          <div className={`w-fit px-10 ${msg.sender === "User" && 'ml-auto my-3'}`}
            key={index}
            style={{
              ...styles.message,
              ...(msg.sender === "User" ? styles.userMessage : styles.botMessage),
            }}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div style={styles.chatInput}>
        <input
          type="text"
          placeholder="Type Your Message.."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>
          Send Message
        </button>
      </div>
    </div>
  );
}

const styles = {
  chatArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#ADD8E6",
  },
  chatHeader: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  chatBox: {
    width: "400px",
    height: "500px",
    background: "white",
    borderRadius: "10px",
    padding: "8px",
  },
  message: {
    padding: "10px",
    borderRadius: "10px",
    wordWrap: "break-word",
  },
  userMessage: {
    backgroundColor: "#007bff",
    color: "white",
    marginLeft:"auto",
    alignSelf: "flex-end",
    textAlign: "right",
  },
  botMessage: {
    backgroundColor: "#e0e0e0",
    alignSelf: "flex-start",
  },
  chatInput: {
    display: "flex",
    width: "90%",
    maxWidth: "400px",
    marginTop: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "4px",
  },
  sendButton: {
    padding: "8px",
    background: "#007bff",
    color: "white",
    cursor: "pointer",
    marginLeft: "4px",
    borderRadius: "3px",
  },
};

