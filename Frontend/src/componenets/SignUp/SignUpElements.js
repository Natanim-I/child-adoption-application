import styled from "styled-components";
import background from "./../../images/bg.jpg";
import { Link } from "react-router-dom";
import { colors } from "../../colors";

export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background});
  background-size: cover;
  background-attachement: fixed;
`;

export const Container = styled.div`
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background});
  background-size: cover;
  background-attachement: fixed;
`;

export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

export const StyledSubtitle = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 25px;
`;

export const Avatar = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: auto;
`;

export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 3px solid ${colors.primary};
  border-radius: 25px;
  color: ${colors.primary};
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.3s;
  outline: 0;

  &:hover {
    backround-color: ${colors.primary};
    color: ${colors.theme};
    cursor: pointer;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;

export const StyledLabel = styled.p`
  text-align: left;
  font-size: 13px;
  font-weight: bold;
`;

export const StyledFormArea = styled.div`
  background-color: ${(props) => props.bg || colors.light1};
  text-align: center;
  padding: 10px 10px;
  width: 40%;
  margin: 30px 0;
  border-radius: 10px;

  @media screen and (max-width: 1200px) {
    width: 50%;
  }

  @media screen and (max-width: 960px) {
    width: 60%;
  }

  @media screen and (max-width: 790px) {
    width: 70%;
  }

  @media screen and (max-width: 680px) {
    width: 80%;
  }
`;

export const StyledFormButton = styled.button`
  padding: 10px;
  width: 200px;
  margin: 5px 15px;
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

export const StyledIcons = styled.p`
  color: ${colors.dark1};
  position: absolute;
  font-size: 21px;
  top: 35px;
  ${(props) => props.right && `right: 15px`};
  ${(props) => !props.right && `left: 15px`};
`;

export const ErrorMsg = styled.div`
  font-size: 11px;
  color: ${colors.red};
  margin-top: -5px;
  margin-botton: 10px;
  text-align: left;
`;

export const ExtraText = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.dark2)};
  padding: 2px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;

  &:hover {
    text-decoration: underline;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;
