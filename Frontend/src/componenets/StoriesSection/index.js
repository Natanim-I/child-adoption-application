import React, { useState } from "react";
import {
  StoryContainer,
  StoryH1,
  StoryWrapper,
  StoryCard,
  StoryImg,
  StoryH2,
  StoryP,
  BtnWrap,
} from "./StoriesElements";
import {
  Button,
  ArrowRight,
  ArrowForward,
} from "../WlcomeSection/WelcomeElements";
import Img1 from "./../../images/adoption1.jpg";
import Img2 from "./../../images/adoption2.jpg";
import Img3 from "./../../images/adoption3.avif";
import Img4 from "./../../images/adoption4.avif";
import Img5 from "./../../images/adoption5.jpg";
import Img6 from "./../../images/adoption6.jpg";
import { colors } from "../../colors";
const Stories = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <StoryContainer>
      <StoryH1>Read Stories about our Work and Impact</StoryH1>
      <StoryWrapper>
        <StoryCard to="/Story">
          <StoryImg src={Img4}></StoryImg>
          <StoryH2>International Bonding</StoryH2>
          <StoryP>
            After years of longing for a child, Sarah and David embarked on an
            emotional journey to China, where they met and adopted their
            daughter, Lily. Overcoming cultural barriers, they formed an
            unbreakable bond, enriching their lives with shared experiences and
            cherished memories.
          </StoryP>
        </StoryCard>
        <StoryCard to="/Story">
          <StoryImg src={Img5}></StoryImg>
          <StoryH2>Foster Care Triumph</StoryH2>
          <StoryP>
            Jackson, a resilient teenager, found solace and a sense of belonging
            when John and Emily welcomed him into their home through the foster
            care system. Despite initial challenges, their unwavering support
            provided Jackson with stability and love, transforming his life
            forever.
          </StoryP>
        </StoryCard>
        <StoryCard to="/Story">
          <StoryImg src={Img1}></StoryImg>
          <StoryH2>Sibling Reunion</StoryH2>
          <StoryP>
            Emma and Lucas joyfully welcomed not one but three siblings into
            their family, reuniting them after years of separation in the foster
            care system. Witnessing the siblings' bond rekindle and thrive in
            their new home was a testament to the power of keeping families
            together.
          </StoryP>
        </StoryCard>
        <StoryCard to="/Story">
          <StoryImg src={Img2}></StoryImg>
          <StoryH2>Single Parent Resilience</StoryH2>
          <StoryP>
            Against societal norms, Rachel, a single mother, embarked on a
            fulfilling adoption journey, bringing home her son, Ethan, and
            providing him with a nurturing and loving environment. Her
            unwavering dedication and love proved that family comes in all
            shapes and sizes.
          </StoryP>
        </StoryCard>
        <StoryCard to="/Story">
          <StoryImg src={Img3}></StoryImg>
          <StoryH2>Special Needs Support</StoryH2>
          <StoryP>
            Brian and Maria embraced the complexities of raising a child with
            special needs when they adopted their daughter, showering her with
            love and support. Through their dedication and advocacy, Sophia
            thrived, proving that every child deserves a loving home regardless
            of their challenges.
          </StoryP>
        </StoryCard>
        <StoryCard to="/Story">
          <StoryImg src={Img6}></StoryImg>
          <StoryH2>Second Chance</StoryH2>
          <StoryP>
            Mark and Lisa welcomed baby Mia into their lives through open
            adoption, offering her a loving home after her birth parents chose
            them to be her forever family. They showered Mia with unconditional
            love, creating a bond that beautifully merged two families into one.
          </StoryP>
        </StoryCard>
      </StoryWrapper>
      <BtnWrap>
        <Button
          to="/donate"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          style={{ color: `${colors.dark1}` }}
        >
          Read More Stories {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </BtnWrap>
    </StoryContainer>
  );
};

export default Stories;
