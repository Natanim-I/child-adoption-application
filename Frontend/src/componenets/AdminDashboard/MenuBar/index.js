import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLinks, DashboardIcon, 
    EmployeeIcon, AdopterIcon, ChildIcon, AdoptionIcon, DonationIcon, SettingIcon,
    ButtonGroup, StyledButton } from './MenubarElements'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../../auth/actions/userActions';
import { connect } from 'react-redux';

const Menubar = ({ isOpen, toggleSidebar, logout }) => {
    const navigate = useNavigate();
  return (
        <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
            <Icon onClick={toggleSidebar}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks to="/admin/dashboard">
                        <DashboardIcon />
                        Dashboard
                    </SidebarLinks>
                    <SidebarLinks to="/admin/employees">
                        <EmployeeIcon />
                        Employee
                    </SidebarLinks>
                    <SidebarLinks to="/admin/adopters">
                        <AdopterIcon />
                        Adopter
                    </SidebarLinks>
                    <SidebarLinks to="/admin/children">
                        <ChildIcon />
                        Child
                    </SidebarLinks>
                    <SidebarLinks to="/admin/adoptions">
                        <AdoptionIcon />
                        Adoption
                    </SidebarLinks>
                    <SidebarLinks to="/admin/donations">
                        <DonationIcon />
                        Donation
                    </SidebarLinks>
                    <SidebarLinks to="admin/profile">
                        <SettingIcon />
                        Profile
                    </SidebarLinks>
                    <ButtonGroup>
                        <StyledButton to="/signin/organizationUser/admin" onClick={() => logout(navigate)}>Logout</StyledButton>
                    </ButtonGroup>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
  )
}


const mapStateToProps = ({session}) => ({
    user: session.user
})

export default connect(mapStateToProps, {logout})(Menubar); 