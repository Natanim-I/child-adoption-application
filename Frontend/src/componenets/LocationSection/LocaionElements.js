import styled from "styled-components"
import { colors } from "../../colors"

export const LocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
    padding: 0 30px;   
`

export const Heading = styled.h1`
    font-size: 34px;
    font-weight: bolder;
    color: ${colors.dark1};
    margin-top: 50px;
`
export const LocationTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 15px;
    width: 90%;
    text-align: start;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.33);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.33);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.33);
    border-top: 1px solid ${colors.dark3};
    border-left: 1px solid ${colors.dark3};
    @media screen and (max-width: 750px){
        flex-direction: column;
        justify-content: center;
    }
`

export const LocationInfo = styled.div`
    color: ${colors.dark2};
    display: flex;
`

export const LocationLeft = styled.div`
    flex: 1;
    padding: 5px;
`

export const InfoIcon = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    color: ${colors.theme};
    background: 
    border-radius: 50%;
`

export const LocationRight = styled.div`
    flex: 4;
    padding: 5px;   
`
export const InfoTitle = styled.h3`
    color: ${colors.theme};
    font-weight: 600;
    font-size: 18px;
`
export const InfoItem = styled.p`
    color: ${colors.dark1};
    font-weight: 400;
    font-size: 16px;
`

export const LocationBottom = styled.iframe`
    margin: 10px;
    margin-bottom: 50px;
    width: 100%;
    height: 400px;
`