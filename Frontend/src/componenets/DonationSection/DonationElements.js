import styled from "styled-components"
import { colors } from "../../colors"
import background from "./../../images/bg.jpg"

export const DonationContainer = styled.div`
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover; 
    width: 100%;
    color: ${colors.primary};
    border: none;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const Heading = styled.h1`
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

export const Description = styled.p`
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

export const SubHeading = styled.h2`
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

export const Motivation = styled.p`
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
export const BtnWrap = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 2%;
`