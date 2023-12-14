import styled from "styled-components";
import { colors } from "../../../colors";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 90px;
    background: ${colors.dark1};
    position: sticky;
    top: 0;
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
`

export const TopLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TopRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const Logo = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
    @media screen and (max-width: 650px){
        width: 60px;
        height: 60px;
    }
    @media screen and (max-width: 450px){
        width: 40px;
        height: 40px;
    }
    @media screen and (max-width: 450px){
        display: none;
    }
`;

export const LogoText = styled.span`
    font-weight: bold;
    font-size: 26px;
    color: ${colors.primary};
    cursor: pointer;
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
export const MobileIcon = styled.div`
    display: none;
    color: ${colors.primary};
    
    @media screen and (max-width: 550px){
        display: block;
        position: absolute;
        top: 0;
        right: 90%;
        transform: translate(-100%, 60%);
        font-size: 1.4rem;
        cursor: pointer;
    }
    @media screen and (max-width: 450px){
        top: -10px;
    }
`
export const IconContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 15%;
    color: ${colors.primary};
    @media screen and (max-width: 700px){
        margin-right: 10%;
    }
    @media screen and (max-width: 450px){
        margin-right: 8%;
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
        width: 70px;
    }
    @media screen and (max-width: 650px){
        width: 70px;
        height: 60px;
    }
    @media screen and (max-width: 450px){
        width: 40px;
        height: 35px;
    }
`