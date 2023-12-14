import React from 'react'
import { ChatBubbleOutlineOutlined, DarkModeOutlined, LogoutOutlined } from '@mui/icons-material'
import { NavbarContainer, NavbarWrapper, TopLeft, TopRight, Logo, LogoText, IconContainer, Avatar, 
        IconBadge, LinkContainer } from "./DashboardNavbarElements"
import LogoImg from "./../../../images/logo.jpg"
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { logout } from "./../../../auth/actions/userActions"
import { useNavigate } from 'react-router-dom'

const DashboardNavbar = ({logout, toggleDarkTheme }) => {
    const navigate = useNavigate();
  return (
    <NavbarContainer>
        <NavbarWrapper>
            <TopLeft>
                <Logo image={LogoImg}/>
                <LogoText>Child Adoption <br/> Management System</LogoText>
            </TopLeft>
            <TopRight>
                <LinkContainer to="/adopter/newadoption">
                    Apply
                </LinkContainer>
                <LinkContainer to="/adopter/adoptions">
                    Adoptions
                </LinkContainer>
                <IconContainer>
                    <DarkModeOutlined onClick={toggleDarkTheme}/>
                </IconContainer>
                <IconContainer>
                    <ChatBubbleOutlineOutlined />
                    <IconBadge>5</IconBadge>
                </IconContainer>
                <IconContainer>
                    <LogoutOutlined onClick={() => logout(navigate)}/>
                </IconContainer>
                <Link to="/adopter"><Avatar image={LogoImg}/></Link> 
            </TopRight>        
        </NavbarWrapper>
    </NavbarContainer>
  )
}

const mapStateToProps = ({session}) => ({
    user: session.user
})

export default connect(mapStateToProps, {logout})(DashboardNavbar); 