import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLinks, DashboardIcon, 
    AdopterIcon, ChildIcon, AdoptionIcon, SettingIcon,
    ButtonGroup, StyledButton } from './MenubarElements'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../../auth/actions/userActions';
import { connect } from "react-redux" 

const EmployeeMenubar = ({ isOpen, toggleSidebar, logout }) => {
    const navigate = useNavigate();
  return (
        <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
            <Icon onClick={toggleSidebar}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks to="/employee/dashboard">
                        <DashboardIcon />
                        Dashboard
                    </SidebarLinks>
                    <SidebarLinks to="/employee/adopters">
                        <AdopterIcon />
                        Adopter
                    </SidebarLinks>
                    <SidebarLinks to="/employee/children">
                        <ChildIcon />
                        Child
                    </SidebarLinks>
                    <SidebarLinks to="/employee/adoptions">
                        <AdoptionIcon />
                        Adoption
                    </SidebarLinks>
                    <SidebarLinks to="/employee/profile">
                        <SettingIcon />
                        Profile
                    </SidebarLinks>
                    <ButtonGroup>
                        <StyledButton to="/signin/organizationUser" onClick={() => logout(navigate)}>Logout</StyledButton>
                    </ButtonGroup>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
  )
}

const mapStateToProps = ({session}) => ({
    user: session.user
})

export default connect(mapStateToProps, {logout})(EmployeeMenubar); 