import { Link } from "react-router-dom"
import styled from "styled-components"
import { colors } from "../../../colors"

export const WidgetAll = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    padding: 1%;
`
export const WidgetContainer = styled(Link)`
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 10px;
    text-decoration: none;
    color: ${colors.primary};
    box-shadow: 15px 15px 10px 2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 15px 15px 10px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 15px 10px 2px rgba(0,0,0,0.75);
    border-radius: 5px;
    background-color: ${colors.widgethv};
    height: 120px;

    &:hover{
        background-color: ${colors.widgetBg};
    }
`

export const WidgetLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const WidgetRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const WidgetTittle = styled.span`
    font-weight: bold;
    font-size: 17px;
    color: ${colors.primary};
`

export const WidgetCounter = styled.span`
    font-size: 16px;
    font-weight: 400;
`

export const WidgetIcon = styled.div`
    align-self: center;
    border-radius: 5px;
`

export const WidgetLink = styled(Link)`
    font-size: 16px;
    border-bottom: 1px solid ${colors.light2};
    text-decoration: none;
    color: ${colors.primary};
    cursor: pointer;
`