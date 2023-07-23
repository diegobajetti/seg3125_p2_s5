import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  const [text] = useTypewriter({
    words: ["filename", "datafile", "inputfile", "PyCodeX"],
    loop: 3,
    delaySpeed: 2000,
  });

  return (
    <div className="hero-container">
      <video
        src={process.env.PUBLIC_URL + "/videos/video-1.mp4"}
        autoPlay="autoPlay"
        loop="loop"
        muted="muted"
        playsInline="playsInline"
      />
      <h1>PyCodeX</h1>
      <p>
        with open('<span>{text}</span>
        .txt', 'r') as file:
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          if clicked_button == 'GET STARTED':
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          learn_more = file.readlines()
          <FontAwesomeIcon
            icon={faPlayCircle}
            className="fa-play-circle"
          ></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
