import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { colors } from "./../../colors";

export const Nav = styled.div`
  background: ${colors.dark1};
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: flext-start;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 90px;
  z-index: 1;
  width: 100%;
  padding: 0 24x;

  @media screen and (max-width: 960px) {
    justify-content: space-between;
  }
`;

export const NavLogo = styled(LinkR)`
  color: ${colors.primary};
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bolder;
  text-decoration: none;
`;

export const Logo = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: auto;

  @media screen and (max-width: 960px) {
    margin-left: 10px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: ${colors.primary};
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: ${colors.primary};
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    display: none;
  }

  &:hover {
    color: ${colors.theme};
  }
  &.active {
    border-bottom: 3px solid ${colors.theme};
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: transparent;
  white-space: nowrap;
  padding: 10px 20px;
  color: ${colors.primary};
  font-size: 14px;
  text-decoration: none;
  outline: none;
  border: 1px solid ${colors.primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;

  &:hover {
    border: 1px solid ${colors.theme};
    color: ${colors.theme};
    font-weight: bold;
  }
`;
