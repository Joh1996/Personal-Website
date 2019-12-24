import React, { Component } from "react";
import TextLoop from "react-text-loop";
import BodyText from "react-text-loop";
// import Link from "react-text-loop";
import { Button } from "react-bootstrap";
import SplitText from "react-pose-text";

import "../css/MyStyle.scss";

// href to /Main actually doesn't work, replaced with actual link
const IntroText = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: 500
  }
};

const OutroText = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: 1000
  }
};

class SplashLoop extends Component {
  render() {
    return (
      <div className="loop-div">
        <div className="text-loop">
          <p id="intro-text">
            <SplitText initialPose="exit" pose="enter" charPoses={IntroText}>
              Justin Oh
            </SplitText>
          </p>
          <TextLoop
            className="body-text-loop"
            springConfig={{ stiffness: 250, damping: 15 }}
            interval={800}
          >
            <span> </span>
            <BodyText> </BodyText>
            <BodyText>Programmer</BodyText>
            <BodyText>Web Dev</BodyText>
            <BodyText>Artist</BodyText>
            <BodyText>Uni Graduate</BodyText>
            <BodyText>Visionary</BodyText>
            <BodyText>Traveler</BodyText>
            <BodyText>Writer</BodyText>
            <BodyText>Musician</BodyText>
            <BodyText>Photographer</BodyText>
            <BodyText>Gamer</BodyText>
            <BodyText>Scholar</BodyText>
            <BodyText>Foodie</BodyText>
          </TextLoop>
          <p id="splash-intro">
            <SplitText initialPose="exit" pose="enter" charPoses={OutroText}>
              and something more.
            </SplitText>
          </p>

          <Button id="loop-button" href="/Main">
            Enter Site
          </Button>
        </div>
      </div>
    );
  }
}

export default SplashLoop;
