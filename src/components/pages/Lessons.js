import React from "react";
import "../../App.css";
import LessonList from "../LessonList";

export default function Lessons() {
  return (
    <div>
      <h1 className="lessons">LESSONS</h1>
      <div>
        <LessonList />
      </div>
    </div>
  );
}
