import React, { useState, createContext, useMemo } from "react";
import axios from "axios";
import "./all.css";
import "./input.css";
import ChatArea from "./ChatArea";

const Qulist = createContext();

const MessageInput = () => {
  const [text, setText] = useState("");
  const [textlist, setTextlist] = useState([]);

  const handleSend = async () => {
    if (text.trim() !== "") {
      // Add user message to the list
      setTextlist((prevList) => [
        ...prevList,
        { sender: "User", text: text }
      ]);

      try {
        // Send the user's question to the ConvertionQue API
        await axios.post("http://127.0.0.1:8000/api/aiconverstionque/", {
          question: text,
        });

        // Fetch answers from ConvertionAns API
        const response = await axios.get("http://127.0.0.1:8000/api/aiconverstionans/");
        const answers = response.data.answers;

        // Update textlist with all answers
        const aiResponses = answers.map(answer => ({ sender: "My-Ai", text: answer.answer }));

        setTextlist((prevList) => [
          ...prevList,
          ...aiResponses
        ]);
      } catch (error) {
        console.error("Error fetching the AI response:", error);
        setTextlist((prevList) => [
          ...prevList,
          { sender: "My-Ai", text: "Sorry, there was an error." }
        ]);
      }

      setText(""); // Clear input after sending
    }
  };

  const memoizedQulist = useMemo(() => textlist, [textlist]);

  return (
    <div>
      <div className="message-input bg-light border-top py-2" style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <div className="input-group">
          {/* Replaced input with textarea */}
          <textarea
            className="form-control"
            placeholder="Enter your message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="2" // Number of visible rows initially
            style={{ resize: "none" }} // Disable manual resizing
          />
          <button type="button" className="btn btn-primary" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
      <Qulist.Provider value={memoizedQulist}>
        <ChatArea />
      </Qulist.Provider>
    </div>
  );
};

export default MessageInput;
export { Qulist };
