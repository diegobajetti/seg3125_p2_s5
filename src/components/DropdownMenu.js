import React, { useState } from "react";
import "./DropdownMenu.css";

const DropdownMenu = ({ title, topics }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleMenu = (index) => {
    setExpandedIndex(index);
  };

  return (
    <div className="dropdown-menu">
      <div
        className="dropdown-header"
        onClick={() => toggleMenu(expandedIndex === -1 ? 0 : -1)}
      >
        <h2>{title}</h2>
        <div className="progress-bar">
          {/* Your circular progress bar goes here */}
        </div>
      </div>
      {expandedIndex !== -1 && (
        <ul className="topics-list">
          {topics.map((topic, index) => (
            <li
              key={index}
              onClick={() => toggleMenu(index)}
              className={index === expandedIndex ? "active" : ""}
            >
              {topic}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
