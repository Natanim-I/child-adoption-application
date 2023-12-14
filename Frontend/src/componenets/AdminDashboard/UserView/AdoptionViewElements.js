import styled from "styled-components"
import { colors } from "../../../colors"

export const ItemContainer = styled.div`
    padding: 3%;
    color: ${colors.primary};
`

export const ItemTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
`
export const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
`
export const ShowUser = styled.div`
    flex: 1;
    padding: 3%;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0 ,0.75);
    background: ${colors.widgetBg};
    border-radius: 10px;
`

export const ShowUserTop = styled.div`
    display: flex;
    align-items: center; 
`

export const ShowTopTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3%;
`

export const UserShowTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: ${colors.dark2};
    margin-left: 3%;
`
export const UserShowInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 2% 0px;
    color: ${colors.primary};
    .showInfoTitle{
        margin-left: 5%;
    }
`
export const FontWeight = styled.span`
    font-size: ${props => props.bolder ? "24px" : "16px"};
    font-weight: ${props => props.bolder ? "600" : "300"};
`
export const ShowUserBottom = styled.div`
    margin-top: 5%;
`
