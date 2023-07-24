import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Python lessons!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-1.jpg"}
              text="Introduction to Python Syntax and Variables"
              label="Beginner"
              path="Introduction to Python Syntax and Variables"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-5.jpg"}
              text="Working with Control Flow in Python (Conditional Statements and Loops)"
              label="Amateur"
              path="Working with Control Flow in Python (Conditional Statements and Loops)"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-3.jpg"}
              text="Object-Oriented Programming in Python"
              label="Intermediate"
              path="Object-Oriented Programming in Python"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-2.jpg"}
              text="Advanced Python Libraries and Frameworks (NumPy and Django)"
              label="Advanced"
              path="Advanced Python Libraries and Frameworks (NumPy and Django)"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-4.jpg"}
              text="Design Patterns and Best Practices in Python"
              label="Expert"
              path="Design Patterns and Best Practices in Python"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
