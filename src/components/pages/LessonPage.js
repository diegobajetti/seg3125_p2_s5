import React from "react";
import { useParams } from "react-router-dom";
import LessonDetail from "../LessonDetail";

export default function LessonPage() {
  const { name } = useParams();

  return (
    <div>
      <h1 className="lesson-page">{name}</h1>
      <LessonDetail />
    </div>
  );
}
