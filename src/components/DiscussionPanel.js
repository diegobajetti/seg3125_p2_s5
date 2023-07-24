import React, { useState } from "react";
import "./DiscussionPanel.css"; // Create a corresponding CSS file for styling

const DiscussionPanel = () => {
  const [expandedDiscussions, setExpandedDiscussions] = useState([]);

  const toggleDiscussion = (index) => {
    setExpandedDiscussions((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const [newMessages, setNewMessages] = useState(Array(5).fill("")); // Initialize as an array of empty strings

  const handleInputChange = (index, value) => {
    const newMessagesCopy = [...newMessages];
    newMessagesCopy[index] = value;
    setNewMessages(newMessagesCopy);
  };

  const [_, setMessages] = useState(Array(5).fill([]));

  const handleSubmit = (index) => {
    const messageText = newMessages[index];
    if (messageText.trim() !== "") {
      const newMessagesCopy = [...newMessages];
      newMessagesCopy[index] = "";
      setNewMessages(newMessagesCopy);

      const message = {
        user: "User " + (index + 1),
        text: messageText,
      };

      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[index] = [...prevMessages[index], message];
        return updatedMessages;
      });
    }
  };

  return (
    <div className="discussion-panel">
      <h2>All Forums</h2>
      <ul className="discussion-list">
        {[1, 2, 3, 4, 5].map((discussionNumber, index) => (
          <li key={index} className="discussion-item">
            <div
              className="discussion-header"
              onClick={() => toggleDiscussion(index)}
            >
              Discussion {discussionNumber}
              {expandedDiscussions[index] ? " - Collapse" : " - Expand"}
            </div>
            {expandedDiscussions[index] && (
              <div className="discussion-content">
                <div className="chat-container">
                  <div className="chat-message user-1">
                    <img
                      src={process.env.PUBLIC_URL + "/images/img-1.jpg"}
                      alt="Walter White"
                      className="profile-picture"
                    />
                    <div className="message-details">
                      <div className="user-name">Walter White</div>
                      <div className="message-text">
                        how do you write variables in python?
                      </div>
                    </div>
                  </div>
                  <div className="chat-message user-2">
                    <img
                      src={process.env.PUBLIC_URL + "/images/img-2.jpg"}
                      alt="Gus"
                      className="profile-picture"
                    />
                    <div className="message-details">
                      <div className="user-name">Gus</div>
                      <div className="message-text">
                        Hello Walter White! As you can see in our introductory
                        lessons, declaring a variable in Python is not super
                        difficult. You can do so in the following way. x = 5.
                        Hope that helped!!!
                      </div>
                    </div>
                  </div>
                  <div className="chat-message user-1">
                    <img
                      src={process.env.PUBLIC_URL + "/images/img-1.jpg"}
                      alt="Walter White"
                      className="profile-picture"
                    />
                    <div className="message-details">
                      <div className="user-name">Walter White</div>
                      <div className="message-text">
                        oh thats amazing really. btw idk if youll be able to
                        help me on this but there's this guy called Jesse and i
                        am wondering if you know where he's at?
                      </div>
                    </div>
                  </div>
                  <div className="chat-message user-2">
                    <img
                      src={process.env.PUBLIC_URL + "/images/img-2.jpg"}
                      alt="Gus"
                      className="profile-picture"
                    />
                    <div className="message-details">
                      <div className="user-name">Gus</div>
                      <div className="message-text">
                        Hi Walter White! I'm afraid that I'm not allowed to give
                        information on users like that. It is against our
                        privacy policy. Please refrain from asking such
                        questions in the future. Maybe you can ask your friend
                        through a SMS text. Hope that helped!!!
                      </div>
                    </div>
                  </div>
                  {/* {newMessages[index].map((message, messageIndex) => (
                    <div
                      className={`chat-message user-${index + 1}`}
                      key={messageIndex}
                    >
                      <img
                        src={`profile${index + 1}.jpg`}
                        alt={`User ${index + 1}`}
                        className="profile-picture"
                      />
                      <div className="message-details">
                        <div className="user-name">{message.user}</div>
                        <div className="message-text">{message.text}</div>
                      </div>
                    </div>
                  ))} */}
                  {/* Add more chat messages here */}
                </div>
                <div className="new-message-input">
                  <input
                    type="text"
                    placeholder="Enter your message..."
                    value={newMessages[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  <button onClick={() => handleSubmit(index)}>Submit</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscussionPanel;
