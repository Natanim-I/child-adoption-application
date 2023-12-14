import styled from "styled-components";
import { colors } from "../../colors";

export const StyledTextInput = styled.input`
    width: 100%;
    padding: 15px;
    padding-bottom: 5px;
    padding-left: 5%;
    font-size: 16px;
    letter-spacing: 1px;
    color: ${colors.primary};
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${colors.dark3};
    outline: none;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.red}; color: "transparent"`}

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
`;

export const ErrorMsg = styled.div`
    font-size: 12px;
    color: ${colors.red};
    margin-top: -5px;
    margin-botton: 10px;
    text-align: left;
    margin-left: 5%;
`;

export const StyledSelect = styled.select`
    width: 100%;
    padding: 15px;
    padding-bottom: 5px;
    padding-left: 5%;
    font-size: 16px;
    letter-spacing: 1px;
    color: ${colors.primary};
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${colors.dark3};
    outline: none;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.red}; color: "transparent"`}

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
`