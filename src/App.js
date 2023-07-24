import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom/dist/index.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Challenges from "./components/pages/Challenges";
import Discuss from "./components/pages/Discuss";
import Home from "./components/pages/Home";
import Lessons from "./components/pages/Lessons";
import SignUp from "./components/pages/SignUp";
import LessonPage from "./components/pages/LessonPage";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/lessons" exact element={<Lessons />}></Route>
        <Route path="/challenges" exact element={<Challenges />}></Route>
        <Route path="/discuss" exact element={<Discuss />}></Route>
        <Route path="/sign-up" exact element={<SignUp />}></Route>
        <Route path="/lesson/:name" exact element={<LessonPage />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
