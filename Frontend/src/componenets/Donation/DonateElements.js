import styled from "styled-components";
import { colors } from "../../colors";
import Img from "./../../images/bg.jpg";
import { Link } from "react-router-dom";

export const RegisterEmpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url(${Img});
  background-size: cover;

  // background-position: center;

  // background-repeat: repeat;
  background-attachment: fixed;
`;

export const RegisterTop = styled.div`
  display: flex;
  background-color: transparent;
  padding: 2% 3%;
  border-radius: 10px;
`;

export const RegisterTitle = styled.h1`
  color: ${colors.primary};
  font-size: 25px;
`;
export const RegisterBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  box-shadow: 15px 15px 10px 2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 15px 15px 10px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 15px 15px 10px 2px rgba(0, 0, 0, 0.75);
  background-color: rgba(0, 0, 0, 0.65);
  padding: 5%;
  margin: 5%;
  border-radius: 10px;
  max-width: 50%;
`;
export const RegisterLeft = styled.div`
  flex: 2;
  min-width: 50%;
  text-align: left;
`;

export const EmployeeImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const RegisterRight = styled.div`
  flex: 2;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
`;

export const RegisterFormInput = styled.div`
  width: 40%;
  label {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    .icon {
      cursor: pointer;
    }
  }
  input {
    width: 100%;
    padding: 5px;
    border: none;
    //border-bottom: 1px solid ${colors.dark1};
    border-bottom: 1px solid white;
    background-color: transparent;
  }
`;

export const RegisterButton = styled.button`
  width: 120px;
  height: 40px;
  padding: 10px;
  margin-top: 1rem;
  border: none;
  font-size: 16px;
  font-weight: bolder;
  color: white;
  border-radius: 8px;
  background-color: rgba(0, 128, 0, 0.562);
`;
//midsection mejemerya

export const StoryContainer = styled.div`
  display: flex;
  height: 450px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  @media screen and (max-width: 1000px) {
    height: 1000px;
  }
  @media screen and (max-width: 900px) {
    height: 1100px;
  }
  @media screen and (max-width: 768px) {
    height: 1000px;
  }

  @media screen and (max-width: 700px) {
    height: 900px;
  }

  @media screen and (max-width: 600px) {
    height: 800px;
  }

  @media screen and (max-width: 550px) {
    height: 2200px;
    padding: 0 20px;
  }
  @media screen and (max-width: 525px) {
    height: 2100px;
    padding: 0 20px;
  }
  @media screen and (max-width: 500px) {
    height: 2000px;
    padding: 0 20px;
  }
  @media screen and (max-width: 468px) {
    height: 1900px;
    padding: 0 20px;
  }
  @media screen and (max-width: 450px) {
    height: 1800px;
    padding: 0 20px;
  }
  @media screen and (max-width: 425px) {
    height: 1700px;
    padding: 0 20px;
  }
  @media screen and (max-width: 400px) {
    height: 1600px;
    padding: 0 20px;
  }
  @media screen and (max-width: 380px) {
    height: 1500px;
    padding: 0 20px;
  }
  @media screen and (max-width: 350px) {
    height: 1400px;
    padding: 0 20px;
  }
  @media screen and (max-width: 300px) {
    height: 1150px;
    padding: 0 20px;
  }
`;
export const StoryWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const StoryCard = styled(Link)`
  background: ${colors.primary};
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  text-decoration: none;
  border-radius: 10px;
  max-height: 340px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const StoryImg = styled.img`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: rotate(4deg);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const StoryH1 = styled.h1`
  font-size: 2.5rem;
  color: ${colors.dark1};
  margin-bottom: 30px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

export const StoryH2 = styled.h2`
  font-size: 2rem;
  position: absolute;

  left: 30%;
  color: ${colors.primary};
  margin-bottom: 10px;
  text-align: center;

  @media screen and (max-width: 325px) {
    font-size: 1.4rem;
  }
`;

export const StoryP = styled.p`
  font-size: 1.2rem;
  position: absolute;

  left: 10%;
  color: ${colors.primary};
  text-align: center;

  @media screen and (max-width: 325px) {
    font-size: 0.8rem;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2%;
`;
//ke wlcome yetewesedu
export const Button = styled(Link)`
  border-radius: 50px;
  background: transparent;
  border: 2px solid ${colors.theme};
  text-decoration: none;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${colors.primary};
  font-size: 1.4rem;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.theme};
  }
`;
export const QuoteContainer = styled.div`
  background: blue;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 2rem;
  padding: 40px 30px 40px 30px;
`;
export const Quote = styled.h1`
  color: white;
  font-size: 2.85 rem;

  @media screen and (max-width: 325px) {
    font-size: 1.4rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;

export const StyledFormButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 2px solid ${colors.theme};
  border-radius: 25px;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;
  outline: 0;

  &:hover {
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
  }
`;
