import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import { colors } from "../../../colors"
import { Link as LinkR } from "react-router-dom"
import { ChildCareOutlined, Dashboard, EngineeringOutlined, FamilyRestroom, GroupOutlined, SettingsApplicationsOutlined, VolunteerActivismOutlined,  } from "@mui/icons-material"
import { css } from "styled-components"
import background from "./../../../images/bg.jpg"

export const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? "100%" : "0")};
    top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
`

export const CloseIcon = styled(FaTimes)`
    color: ${colors.primary};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: ${colors.primary};
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLinks = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: ${colors.primary};
    cursor: pointer;

    &:hover{
        color: ${colors.theme};
        transition: 0.2s ease-in-out;
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

export const StyledButton = styled(LinkR)`
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
        cursor: pointer;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;
