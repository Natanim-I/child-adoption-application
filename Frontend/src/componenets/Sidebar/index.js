import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLinks, 
SidebarBtnWrapper, SidebarBtn} from './SidebarElements'

const index = ({ isOpen, toggleSidebar }) => {
  return (
        <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
            <Icon onClick={toggleSidebar}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks to="/">
                        Home
                    </SidebarLinks>
                    <SidebarLinks to="location">
                        Location
                    </SidebarLinks>
                    <SidebarLinks to="about">
                        About
                    </SidebarLinks>
                    <SidebarLinks to="service">
                        Services
                    </SidebarLinks>
                    <SidebarLinks to="contact">
                        Contact
                    </SidebarLinks>
                    <SidebarLinks to="signup">
                        Sign Up
                    </SidebarLinks>
                </SidebarMenu>
                <SidebarBtnWrapper>
                    <SidebarBtn to="/signin">Sign In</SidebarBtn>
                    <SidebarBtn to="/donate">Donate</SidebarBtn>
                </SidebarBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
  )
}

export default index