import React from 'react'
import { SidebarConatiner, SidebarWrapper, SidebarMenu, SidebarTitle, SidebarList, SidebarListItem, 
    DashboardIcon, EmployeeIcon, AdopterIcon, ChildIcon, AdoptionIcon, DonationIcon, SettingIcon, 
    StyledButton, ButtonGroup } from "./DashboardSidebarElements"
 import { useNavigate } from 'react-router-dom';
 import { logout } from '../../../auth/actions/userActions';
 import { connect } from 'react-redux';

const DashboardSidebar = ({logout}) => {
    const navigate = useNavigate();
  return (
        <SidebarConatiner>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarTitle>Dashboard</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem to="/admin/dashboard">
                            <DashboardIcon />
                            Home
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Users</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem to="/admin/employees">
                            <EmployeeIcon /> 
                            Emoloyees
                        </SidebarListItem>
                        <SidebarListItem to="/admin/adopters">
                            <AdopterIcon />
                            Adopter
                        </SidebarListItem>
                        <SidebarListItem to="/admin/children">
                            <ChildIcon />
                            Children
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Operations</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem to="/admin/adoptions">
                            <AdoptionIcon />
                            Adoptions
                        </SidebarListItem>
                        <SidebarListItem to="/admin/donations">
                            <DonationIcon />
                            Donations
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Setting</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem to="/admin/profile">
                            <SettingIcon />
                            Setting
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <ButtonGroup>
                    <StyledButton to="/signin/organizationUsers/admin" onClick={() => logout(navigate)}>Logout</StyledButton>
                </ButtonGroup>
            </SidebarWrapper>
        </SidebarConatiner>
  )
}

const mapStateToProps = ({session}) => ({
    user: session.user
})

export default connect(mapStateToProps, {logout})(DashboardSidebar); 