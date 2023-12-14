import React from 'react'
import { ChatBubbleOutlineOutlined, DarkModeOutlined } from '@mui/icons-material'

import { NavbarContainer, NavbarWrapper, TopLeft, TopRight, Logo, LogoText, IconContainer, Avatar, 
        IconBadge, MobileIcon } from "./DahboardNavbarElements"

import LogoImg from "./../../../images/logo.jpg"
import { FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom'

const DashboardNavbar = ({ toggleSidebar, toggleDarkTheme }) => {
  return (
    <NavbarContainer>
        <NavbarWrapper>
            <TopLeft>
                <Logo image={LogoImg}/>
                <LogoText>Child Adoption <br/> Management System</LogoText>
            </TopLeft>
            <TopRight>
                <MobileIcon onClick={toggleSidebar}>
                    <FaBars />
                </MobileIcon>
                <IconContainer>
                    <DarkModeOutlined onClick={toggleDarkTheme}/>
                </IconContainer>
                <IconContainer>
                    <ChatBubbleOutlineOutlined />
                    <IconBadge>5</IconBadge>
                </IconContainer>
                <Link to="/employee/profile"><Avatar image={LogoImg}/></Link>
            </TopRight>        
        </NavbarWrapper>
    </NavbarContainer>
  )
}

export default DashboardNavbar