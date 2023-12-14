import styled from "styled-components";
import { colors } from "../../../colors";
import { Link } from "react-router-dom"

export const NavbarContainer = styled.div`
    width: 100%;
    height: 90px;
    position: sticky;
    top: 0;
    background: ${colors.dark1};
    z-index: 999;
    border-bottom: 1px solid ${colors.light1};
    @media screen and (max-width: 650px){
        height: 70px;
    }
`

export const NavbarWrapper = styled.div`
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 550px){
        justify-content: center;
    }
`

export const TopLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 550px){
        display: none;
    }
`

export const TopRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 5%;
`
export const Logo = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin-left: auto;
    @media screen and (max-width: 700px){
        display: none;
    }
`;

export const LogoText = styled.span`
    font-weight: bold;
    font-size: 26px;
    color: ${colors.primary};
    cursor: pointer;
    margin-left: 10px;
    @media screen and (max-width: 650px){
        font-size: 20px;
    }
    @media screen and (max-width: 450px){
        font-size: 15px;
    }
    @media screen and (max-width: 300px){
        font-size: 11px;
    }
`

export const IconContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 5%;
    color: ${colors.primary};
    @media screen and (max-width: 700px){
        margin-right: 3%;
    }
    @media screen and (max-width: 450px){
        margin-right: 3%;
        width: 25px;
        height: 25px;
    }
    
`
export const IconBadge = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: 0;
    background-color: ${colors.red};
    color: ${colors.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px; 
    font-weight: bolder;   
`
export const Avatar = styled.div`
    width: 80px;
    height: 70px;
    border-radius: 50%;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
    @media screen and (max-width: 700px){
        width: 60px;
        height: 50px;
    }
    @media screen and (max-width: 450px){
        width: 40px;
        height: 35px;
    }
    
`

export const LinkContainer = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};
    border: 2px solid green;
    background: rgba(0, 128, 0, 0.4);;
    border-radius: 10px;
    padding: 2%;
    font-size: 18px;
    font-weight: bold;
    margin-right: 4%;

    @media screen and (max-width: 570px){
        margin-right: 2%;
    }
`