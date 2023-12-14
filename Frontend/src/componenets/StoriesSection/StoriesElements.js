import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../colors";

export const StoryContainer = styled.div`
  display: flex;
  height: 900px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.primary};

  @media screen and (max-width: 1100px) {
    height: 1000px;
  }
  @media screen and (max-width: 1000px) {
    height: 1200px;
  }
  @media screen and (max-width: 880px) {
    height: 1300px;
  }

  @media screen and (max-width: 700px) {
    height: 1350px;
  }

  @media screen and (max-width: 550px) {
    height: 2300px;
    padding: 0 20px;
  }
  @media screen and (max-width: 400px) {
    height: 2400px;
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
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  border-radius: 10px;
  max-height: 400px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const StoryImg = styled.img`
  height: 230px;
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  transition: all 2s ease-out;

  &:hover {
    transform: scale(0.8) rotate(4deg);
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
  font-size: 1.5rem;
  color: ${colors.black};
  margin-bottom: 5px;
  text-align: center;
  @media screen and (max-width: 325px) {
    font-size: 1rem;
  }
`;

export const StoryP = styled.p`
  font-size: 0.8rem;
  color: ${colors.black};
  text-align: center;
  padding: 5px;
  @media screen and (max-width: 325px) {
    font-size: 0.6rem;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2%;
`;
