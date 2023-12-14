import React from 'react'
import { SidebarConatiner, SidebarWrapper, SidebarMenu, SidebarTitle, SidebarList, SidebarListItem, 
    DashboardIcon, AdopterIcon, ChildIcon, AdoptionIcon, SettingIcon, 
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
                        <SidebarListItem to="/employee/dashboard">
                            <DashboardIcon />
                            Home
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Users</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem to="/employee/adopters">
                            <AdopterIcon />
                            Adopter
                        </SidebarListItem>
                        <SidebarListItem to="/employee/children">
                            <ChildIcon />
                            Children
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Operations</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem to="/employee/adoptions">
                            <AdoptionIcon />
                            Adoptions
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Setting</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem to="/employee/profile">
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