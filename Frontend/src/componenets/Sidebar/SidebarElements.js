import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import { colors } from "../../colors"
import { Link as LinkR } from "react-router-dom"

export const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #111;
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
    text-align: center;

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

export const SidebarBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10%;
`

export const SidebarBtn = styled(LinkR)`
    border-radius: 50px;
    background: ${colors.theme};
    color: ${colors.primary};
    text-decoration: none;
    white-space: nowrap;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    padding: 2%;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${colors.primary};
        color: ${colors.theme}; 
    }
`