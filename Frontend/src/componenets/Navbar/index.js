import React from 'react'
import LogoImage from "./../../images/logo.jpg"
import {Nav, NavbarContainer, NavLogo, Logo, MobileIcon, NavMenu, NavItem, NavLinks, 
    NavBtn, NavBtnLink} from "./NavbarElements"
import { FaBars } from "react-icons/fa"

const index = ({ toggleSidebar }) => {
  return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <Logo image={LogoImage} />
                    Child Adoption
                </NavLogo>
                <MobileIcon onClick={toggleSidebar}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/location">Location</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/stories">Stories</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/contact">Contact</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/signup">Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Singn In</NavBtnLink>
                    <NavBtnLink to="/donate">Donate</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
  )
}

export default index