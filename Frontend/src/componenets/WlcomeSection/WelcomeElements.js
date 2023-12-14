import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import { colors } from "../../colors";
import { Link as LinkR } from "react-router-dom";

export const WelcomeContainer = styled.div`
  background: ${colors.dark1};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 600px;
  position: relative;
  z-index: 1;
`;

export const WelcomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: ${colors.dark1};
`;

export const WelcomeContent = styled.div`
  z-index: 3;
  max-width: 100%;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeH1 = styled.h1`
  color: ${colors.primary};
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const WelcomeP = styled.div`
  margin-top: 24px;
  color: ${colors.primary};
  font-size: 22px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const WelcomeBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Button = styled(LinkR)`
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
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
