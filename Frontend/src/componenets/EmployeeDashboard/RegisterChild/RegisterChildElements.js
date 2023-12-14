import styled from "styled-components"
import { colors } from "../../../colors"

export const RegisterChildContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const RegisterTop = styled.div`
    display: flex;
    background-color: transparent;
    padding: 2% 3%;
    border-radius: 10px;
`

export const RegisterTitle = styled.h1`
    color: ${colors.primary};
    font-size: 25px;
`
export const RegisterBottom = styled.div`
    display: flex;
    box-shadow: 15px 15px 10px 2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 15px 15px 10px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 15px 10px 2px rgba(0,0,0,0.75);
    background-color: ${colors.widgetBg};
    padding: 5%;
    margin: 5%;
    border-radius: 10px;
`
export const RegisterLeft = styled.div`
    flex: 1;
    text-align: center;
`

export const EmployeeImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
`

export const RegisterRight = styled.div`
    flex: 2;
`

export const RegisterForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-around;
`

export const RegisterFormInput = styled.div`
    width: 40%;
    label{
        display: flex;
        align-items: center;
        gap: 10px;
        .icon{    
            cursor: pointer;
        }
    }
    input{
        width: 100%;
        padding: 5px;
        border: none;
        border-bottom: 1px solid ${colors.dark1};
        background-color: transparent;
        outline: none;
    }
`

export const RegisterButton = styled.button`
    width: 120px;
    height: 40px;
    padding: 10px;
    border: none; 
    font-size: 16px;
    font-weight: bolder;
    color: white;
    border-radius: 8px;
    background-color: ${colors.theme};
`