import styled from "styled-components";
import { colors } from "./../../colors";

export const StyledTextInput = styled.input`
    width: 80%;
    padding: 15px;
    padding-left: 10%;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    background-color: ${colors.light2};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary};`}

    &:focus {
        background-color: ${colors.dark2};
        color: ${colors.primary};
    }
    @media screen and (max-width: 450px){
        padding-left: 15%;
    }
    @media screen and (max-width: 400px){
        padding-left: 18%;
    }
    
`;

export const StyledLabel = styled.p`
    text-align: left;
    font-size: 15px;
    font-weight: bold;
    margin-left: 10%;
`;
export const StyledIcons = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 35px;
    ${(props) => props.right && `right: 50px`};
    ${(props) => !props.right && `left: 50px`};

    @media screen and (max-width: 590px){
        ${(props) => props.right && `right: 40px`};
        ${(props) => !props.right && `left: 40px`};            
    }
    @media screen and (max-width: 520px){
        ${(props) => props.right && `right: 30px`};
        ${(props) => !props.right && `left: 30px`};            
    }
    @media screen and (max-width: 450px){
        ${(props) => props.right && `right: 30px`};
        ${(props) => !props.right && `left: 30px`};            
    }
    @media screen and (max-width: 420px){
        ${(props) => props.right && `right: 30px`};
        ${(props) => !props.right && `left: 30px`};            
    }
`;

export const ErrorMsg = styled.div`
    font-size: 12px;
    color: ${colors.red};
    margin-top: -5px;
    margin-botton: 10px;
    text-align: left;
    margin-left: 10%;
`;