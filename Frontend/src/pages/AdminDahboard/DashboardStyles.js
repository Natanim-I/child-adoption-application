import styled from "styled-components"
import { colors } from '../../colors'
import background from "./../../images/bg.jpg"
import {Link} from "react-router-dom"

export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    background: ${({isDark}) => (isDark ? `${colors.darkTheme}` : `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background})`)};
    background-size: cover;
`;

export const Container = styled.div`
    margin: 0;
    display: flex;
`

export const DashboardHome = styled.div`
    flex: 4;
    position: relative;
`

export const Tittle = styled.h2`
    color: ${colors.primary};
`

export const RegisterButton = styled(Link)`
    color: ${colors.primary};
    border: 2px solid green;
    background: rgba(0, 128, 0, 0.4);;
    padding: 1%;
    font-weight: bold;
    font-size: 18px;
    border-radius: 5px;
    text-decoration: none;
    position: absolute;
    top: 5%;
    right: 2%;
`