// import React, { useState } from 'react'
// import Footer from '../componenets/Footer';

// import Navbar from "./../componenets/Navbar"
// import Sidebar from "./../componenets/Sidebar"

// const About = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleSidebar = () => {
    //     setIsOpen(!isOpen);
    // }
//   return (
//       <>
//         <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
//         <Navbar toggleSidebar={toggleSidebar}/>
//         <Footer />
//     </>
//   )
// }

// export default About

import React, {useState} from 'react'
import StoriesSection from "../componenets/StoriesSection"
import DonationSection from '../componenets/DonationSection';
import InfoSection from '../componenets/InfoSection';
import { InfoObjOne, InfoObjThree, InfoObjTwo } from '../componenets/InfoSection/Data';
import Welcome from '../componenets/WlcomeSection';

import Navbar from "./../componenets/Navbar"
import Sidebar from "./../componenets/Sidebar"
import Footer from '../componenets/Footer';

// const Home = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     }

//   return (
//     <>
//         <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
//         <Navbar toggleSidebar={toggleSidebar}/>
//         <Welcome />
//         <InfoSection {...InfoObjOne} {...InfoObjTwo} {...InfoObjThree}/>
//         <StoriesSection />
//         <DonationSection />
//         <Footer />
//     </>
//   )
// }

// export default Home

import styled from "styled-components"
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md"
import { colors } from "../colors"
import{ Link as LinkR } from "react-router-dom"

//From stories index

// import { StoryContainer, StoryH1, StoryWrapper, StoryCard, StoryImg, StoryH2, StoryP, BtnWrap } from './StoriesElements'
// import { Button, ArrowRight, ArrowForward } from '../WlcomeSection/WelcomeElements'
import Img from "../images/bg.jpg"
import background from "../images/bg.jpg"


// import { WelcomeContainer, WelcomeBg, VideoBg, WelcomeContent, WelcomeH1, WelcomeP, WelcomeBtnWrapper,
// Button, ArrowForward, ArrowRight } from './WelcomeElements'

import video from "../videos/adoption.mp4"

const About = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
      setIsOpen(!isOpen);
  }

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <AboutContainer>
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Navbar toggleSidebar={toggleSidebar}/>

    <WelcomeContainer id="welcome">
        <WelcomeBg>
            {/* <VideoBg autoPlay={true} loop muted src={video} type='video/mp4' /> */}
        </WelcomeBg>
        <WelcomeContent>
            <WelcomeH1>About Us</WelcomeH1>
            <WelcomeP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus leo vel leo molestie tristique. Fusce eget varius felis. Donec eros lacus, sodales ut porttitor at, pharetra a velit. Donec tincidunt ligula massa, at interdum felis aliquet eu. Nam viverra imperdiet dui, vitae tristique turpis venenatis sed. Phasellus scelerisque ornare urna, in vestibulum mauris euismod sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec non porttitor lacus. Cras lorem ante, placerat et ultricies efficitur, semper a est. Curabitur efficitur neque a massa ullamcorper varius. Morbi at risus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </WelcomeP>
            <WelcomeBtnWrapper>
                <Button to="/donate" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get Involved {hover ? 
                    <ArrowForward /> :
                    <ArrowRight />}
                </Button>
            </WelcomeBtnWrapper>
        </WelcomeContent>
    </WelcomeContainer>

    {/* //StoriesSectionVibes */}

    <StoryContainer>
        <StoryH1>Types of Adoption We Offer</StoryH1>
        <StoryWrapper>
            <StoryCard to="/Story">
                <StoryImg src={Img}></StoryImg>
                <StoryH2>Open Adoption</StoryH2>
                <StoryP>Description<br/>
                <TextLink to="/stories">Learn More</TextLink>
                </StoryP>
            </StoryCard>
            
            <StoryCard to="/Story">
                <StoryImg src={Img}></StoryImg>
                <StoryH2>Closed Adoption</StoryH2>
                <StoryP>Description<br/>
                <TextLink to="/stories">Learn More</TextLink>
                </StoryP>
            </StoryCard>
            <StoryCard to="/Story">
                <StoryImg src={Img}></StoryImg>
                <StoryH2>Foster Care</StoryH2>
                <StoryP>Description<br/>
                <TextLink to="/stories">Learn More</TextLink>
                </StoryP>
                
            </StoryCard>
            
        </StoryWrapper>
        <BtnWrap>
            <Button to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}
                style={{color: `${colors.dark1}`}}>
                Apply For Adoption {hover ? <ArrowForward /> :
                     <ArrowRight />}
            </Button>
        </BtnWrap>
    </StoryContainer>
    
    <TextWrapperMid> <Heading>We are a fully accredited organization</Heading>
<DescriptionMid>
Bethany is reviewed by the Council of Accreditation on a regular basis to receive its reaccreditation. The accreditation process is designed to identify providers that have set high performance standards for themselves and have made a commitment to their constituents to deliver the highest quality services. COA continually recognizes Bethany Christian Services as one of these outstanding providers.

The Council on Accreditation partners with human service organizations worldwide to improve service delivery outcomes by developing, applying, and promoting accreditation standards
</DescriptionMid> </TextWrapperMid>
  {/* DonationSection vibes */}

  <DonationContainer>
        <TextWrapper>
            <Heading>
                The World Can Be Difficult and Unjust
            </Heading>
            <Description>
                Today, 140 million kids don't have a permanent home. That's unacceptable. 
                At Bethany, we witness what happens when people choose love. 
                Not theoretical, unblemished love, but the real, messy, imperfect kind.

                Love that empowers vulnerable kids and families everywhere.  
                The children hurting at home, and the ones unprotected at a border. 
                The orphans and vulnerable children who feel alone, and the refugees 
                living in a world of uncertainty. Everyone deserves to be loved. 
                Together, we can change the world through family.

            </Description>
            <BtnWrap>
                <Button to="/donate" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Donate {hover ? <ArrowForward /> :
                         <ArrowRight />}
                </Button>
            </BtnWrap>
            <SubHeading>
                140 million reasons to help
            </SubHeading>
            <Motivation>
                Today, 140 million kids don't have a permanent home. To us, that's simply unacceptable.
                Together, we can change the world through family.
            </Motivation>
        </TextWrapper>
    </DonationContainer>

    <Footer />
  </AboutContainer>)
}

export default About

const AboutContainer = styled.div`
    background: url (${background});
    background-position: center;
    background-size:cover;
    background-repeat: repeat;
    background-attachment:fixed;
`

const WelcomeContainer = styled.div`
background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
background-size: cover;
background-attachment:fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 600px;
    position: relative;
    z-index: 1;
`

const WelcomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: ${colors.dark1};
`

const WelcomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
` 

const WelcomeH1 = styled.h1`
    color: ${colors.primary};
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 32px;
    }
    @media screen and (max-width: 480px){
        font-size: 28px;
    }
`

const WelcomeP = styled.div`
    margin-top: 24px;
    color: ${colors.primary};
    font-size: 22px;
    text-align: center;
    max-width: 900px;

    @media screen and (max-width: 768px){
        font-size: 20px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

const WelcomeBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Button = styled(LinkR)`
    border-radius: 50px;
    background: transparent;
    border: 2px solid ${colors.theme};
    text-decoration: none;
    white-space: nowrap;
    padding: ${({big}) => (big ? "14px 48px" : "12px 30px")};
    color: ${colors.primary};
    font-size: 1.4rem;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${colors.theme};
    }
`
const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
//Story Section Elements

const StoryContainer = styled.div`
    display: flex;
    height: 800px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colors.primary};

    @media screen and (max-width: 1000px){
        height: 1000px;
    }
    @media screen and (max-width: 900px){
        height: 1100px;
    }
    @media screen and (max-width: 768px){
        height: 1000px;
    }

    @media screen and (max-width: 700px){
        height: 900px;
    }

    @media screen and (max-width: 600px){
        height: 800px;
    }

    @media screen and (max-width: 550px){
        height: 2200px;
        padding: 0 20px;
    }
    @media screen and (max-width: 525px){
        height: 2100px;
        padding: 0 20px;
    }
    @media screen and (max-width: 500px){
        height: 2000px;
        padding: 0 20px;
    }
    @media screen and (max-width: 468px){
        height: 1900px;
        padding: 0 20px;
    }
    @media screen and (max-width: 450px){
        height: 1800px;
        padding: 0 20px;
    }
    @media screen and (max-width: 425px){
        height: 1700px;
        padding: 0 20px;
    }
    @media screen and (max-width: 400px){
        height: 1600px;
        padding: 0 20px;
    }
    @media screen and (max-width: 380px){
        height: 1500px;
        padding: 0 20px;
    }
    @media screen and (max-width: 350px){
        height: 1400px;
        padding: 0 20px;
    }
    @media screen and (max-width: 300px){
        height: 1150px;
        padding: 0 20px;
    }
`
const StoryWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    margin-top: 0 1rem;
    
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
        
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 550px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
` 

const StoryCard = styled(LinkR)`
    background: ${colors.primary};
    display: flex;
    flex-direction: flex-start;
    align-items: center;
    text-decoration: none;
    border-radius: 10px;
    max-height: 340px;
    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.03);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

const StoryImg = styled.img`
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: rotate(4deg);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

const StoryH1 = styled.h1`
    font-size: 2.5rem;
    color: ${colors.dark1};
    margin-bottom: 30px;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 1.7rem;
    }
`

const StoryH2 = styled.h2`
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 30%;
    color: ${colors.primary};
    margin-bottom: 10px;
    text-align: center;
    
    @media screen and (max-width: 325px){
        font-size: 1.4rem;    
    }
`

const StoryP = styled.p`
    font-size: 1.2rem;
    position: absolute;
    top: 75%;
    left: 10%;
    color: ${colors.primary};
    text-align: center;

    @media screen and (max-width: 325px){
        font-size: 0.8rem;
    }
`
const BtnWrap = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 2%;
`

//were were
const TextWrapperMid= styled.div`
align-items:center;
align:center;
color: ${(props) => (props.color ? props.color : colors.dark2)};
`
const DescriptionMid= styled.h3`
    text-align: center;
    font-weight: 300;
width: 80%;
padding: 30px 5%;
margin-bottom: 25px;
@media screen and (max-width: 768px){
  font-size: 18px;
}
@media screen and (max-width: 480px){
  font-size: 16px;



}
`
//Read more links

const ExtraText = styled.p`
    font-size: 1.5em;
    text-align: center;
    color: ${(props) => (props.color ? props.color : colors.dark2)};
    padding: 2px;
    margin-top: 10px;
    margin-bottom: 30px;
`;

const TextLink = styled(LinkR)`
    text-decoration: none;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;
    
    &:hover {
        text-decoration: underline;
        letter-spacing: 1px;
        font-weight: bold;
    }
`;

//Donation section vibes


const DonationContainer = styled.div`
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover; 
    background-attachment:fixed;
    width: 100%;
    color: ${colors.primary};
    border: none;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin: auto;
`

const Heading = styled.h1`
    font-size: 40px;
    font-weight: 700;
    margin: 3%;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 32px;
    }
    @media screen and (max-width: 480px){
        font-size: 28px;
    }
`

const Description = styled.p`
    font-size: 22px;
    font-weight: 300;
    width: 80%;
    background: rgba(241, 232, 232, 0.5);
    border-radius: 10px;
    padding: 30px 5%;
    margin-bottom: 25px;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }
    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`

const SubHeading = styled.h2`
    font-size: 36px;
    font-weight: 700;
    margin: 2%;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`

const Motivation = styled.p`
    font-size: 24px;
    font-weight: 400;
    width: 60%;
    text-align: center;
    margin-bottom: 30px;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }
    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`
// const BtnWrap = styled.div`
//     display: flex;
//     justify-content: space-around;
//     margin: 2%;
// `