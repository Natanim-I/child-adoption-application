import { ChildCareOutlined, Dashboard, EngineeringOutlined, FamilyRestroom, GroupOutlined, SettingsApplicationsOutlined, VolunteerActivismOutlined,  } from "@mui/icons-material"
import styled from "styled-components"
import { css } from "styled-components"
import { colors } from "../../../colors"
import { Link } from "react-router-dom"

export const SidebarConatiner = styled.div`
    flex: 1;
    background: transparent;
    position: sticky;
    top: 100px;
    align-self: flex-start;
    border-right: 1px solid ${colors.light1};
    @media screen and (max-width: 550px){
        display: none;
    } 
`

export const SidebarWrapper = styled.div`
    padding: 20px;
    color: ${colors.primary};
`
export const SidebarMenu = styled.div`
    margin-bottom: 10px;
`

export const SidebarTitle = styled.h3`
    font-size: 13px;
    margin-left: 25%; 
    color: ${colors.dark3};
`

export const SidebarList = styled.ul`
    list-style: none;
    padding: 10px 5px;
`

export const SidebarListItem = styled(Link)`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 25%;
    text-decoration: none;
    color: ${colors.primary};

    &:hover{
        background: linear-gradient(90deg,${colors.theme},20%,transparent);
    }

    @media screen and (max-width: 768px){
        margin-left: 20%;
    }
    @media screen and (max-width: 680px){
        margin-left: 10%;
    }
`

export const SharedStyle = css`
    margin-right: 4%;
    font-size: 30px;
`

export const DashboardIcon = styled(Dashboard)`
    ${SharedStyle};
`

export const EmployeeIcon = styled(EngineeringOutlined)`
    ${SharedStyle};
`

export const AdopterIcon = styled(GroupOutlined)`
    ${SharedStyle};
`

export const ChildIcon = styled(ChildCareOutlined)`
    ${SharedStyle};
`

export const AdoptionIcon = styled(FamilyRestroom)`
    ${SharedStyle};
`

export const DonationIcon = styled(VolunteerActivismOutlined)`
    ${SharedStyle};
`

export const SettingIcon = styled(SettingsApplicationsOutlined)`
    ${SharedStyle};
`


export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        backround-color: ${colors.primary};
        color: ${colors.theme};
        border: 3px solid ${colors.theme};
        cursor: pointer;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;
