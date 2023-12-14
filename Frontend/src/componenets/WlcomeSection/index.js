import React, { useState } from "react";

import {
  WelcomeContainer,
  WelcomeBg,
  VideoBg,
  WelcomeContent,
  WelcomeH1,
  WelcomeP,
  WelcomeBtnWrapper,
  Button,
  ArrowForward,
  ArrowRight,
} from "./WelcomeElements";

import video from "./../../videos/adoption.mp4";

const Welcome = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <WelcomeContainer id="welcome">
      <WelcomeBg>
        <VideoBg autoPlay={true} loop muted src={video} type="video/mp4" />
      </WelcomeBg>
      <WelcomeContent>
        <WelcomeH1>Child Adoption Management System</WelcomeH1>
        <WelcomeP>
          Welcome, this is a child adoption management system! Every child
          deserve a loving family and home. So let's work together to give every
          child a happy, joyful, caring, and loving family.
        </WelcomeP>
        <WelcomeBtnWrapper>
          <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Involved {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </WelcomeBtnWrapper>
      </WelcomeContent>
    </WelcomeContainer>
  );
};

export default Welcome;
