import styled from "styled-components"
import { colors } from "../../../colors"

export const AdoptionContainer = styled.div`
    margin: 0;
    width: 90%;
    min-height: 100vh;
    background-size: cover;
    background-attachement: fixed;   
`

export const AdoptionForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${colors.dark3};
    h3 {
        margin-left: 4%; 
        margin-bottom: 10px;
    }
    h4 {
        margin-left: 4%;
        margin-top: 15px;
        margin-bottom: 10px; 
    }
    h5 {
        margin-left: 5%;
        margin-top: 15px;
        margin-bottom: 10px; 
    }
`
export const Topic = styled.h1`
    color: ${colors.primary};
    font-size: 26px;
    margin: 3%;
    width: 100%;
    text-align: start;
    @media screen and (max-width: 700px){
        font-size: 22px;
    }
`

export const ItemContainer1 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 80px;
`
export const FormInfos = styled.div`
    display: flex;
    margin-left: 5%;
`

export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 2px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        color: ${colors.theme};
        cursor: pointer;
    }    
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;
