import React, { useState } from "react";
import CardItem from "./CardItem";
import "./LessonList.css";

function LessonList() {
  const [language, setLanguage] = useState("English");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "English" ? "French" : "English"
    );
  };

  return (
    <div className="cards">
      <h1>
        {language === "English" ? "Featured Lessons" : "Leçons en Vedette"}
      </h1>
      <button onClick={toggleLanguage}>
        {language === "English" ? "Switch to French" : "Passer à l'anglais"}
      </button>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-1.jpg"}
              text={
                language === "English"
                  ? "Introduction to Python Syntax and Variables"
                  : "Introduction à la Syntaxe Python et aux Variables"
              }
              label={
                language === "English"
                  ? "Beginner (Interactive Lesson)"
                  : "Débutant (Leçon interactive)"
              }
              path="Introduction to Python Syntax and Variables"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-5.jpg"}
              text={
                language === "English"
                  ? "Working with Control Flow in Python (Conditional Statements and Loops)"
                  : "Utilisation du flux de contrôle en Python (instructions conditionnelles et boucles)"
              }
              label={
                language === "English"
                  ? "Amateur (Video Lesson)"
                  : "Amateur (leçon vidéo)"
              }
              path="Working with Control Flow in Python (Conditional Statements and Loops)"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-1.jpg"}
              text={
                language === "English"
                  ? "Object-Oriented Programming in Python 1"
                  : "Programmation orientée objet en Python 1"
              }
              label={
                language === "English"
                  ? "Amateur (Interactive Lesson)"
                  : "Amateur (leçon vidéo)"
              }
              path="Working with Control Flow in Python (Conditional Statements and Loops)"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-3.jpg"}
              text={
                language === "English"
                  ? "Object-Oriented Programming in Python 2"
                  : "Programmation orientée objet en Python 1"
              }
              label={
                language === "English"
                  ? "Intermediate (Video Lesson)"
                  : "Intermédiaire (leçon vidéo)"
              }
              path="Working with Control Flow in Python (Conditional Statements and Loops)"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-2.jpg"}
              text={
                language === "English"
                  ? "Advanced Python Libraries and Frameworks (NumPy and Django)"
                  : "Bibliothèques et frameworks Python avancés (NumPy et Django)"
              }
              label={
                language === "English"
                  ? "Advanced (Video Lesson)"
                  : "Avancé (leçon vidéo)"
              }
              path="Working with Control Flow in Python (Conditional Statements and Loops)"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/img-4.jpg"}
              text={
                language === "English"
                  ? "Design Patterns and Best Practices in Python"
                  : "Modèles de conception et meilleures pratiques en Python"
              }
              label={
                language === "English"
                  ? "Expert (Interactive Lesson)"
                  : "Expert (leçon interactive)"
              }
              path="Working with Control Flow in Python (Conditional Statements and Loops)"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LessonList;
