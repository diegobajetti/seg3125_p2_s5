import React, { useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  const [text] = useTypewriter({
    words: ["filename", "datafile", "inputfile", "PyCodeX"],
    loop: 3,
    delaySpeed: 2000,
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth <= 960;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

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
          buttonSize={isMobile ? "btn--medium" : "btn--large"}
        >
          if clicked_button == 'GET STARTED':
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize={isMobile ? "btn--medium" : "btn--large"}
        >
          learn_more = file.readlines()
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
