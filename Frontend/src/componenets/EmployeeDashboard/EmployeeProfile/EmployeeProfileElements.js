import { Publish } from "@mui/icons-material"
import styled from "styled-components"
import { colors } from "../../../colors"

export const ItemContainer = styled.div`
    flex: 2;
    padding: 2%;
    color: ${colors.primary};
`

export const ItemTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
`

export const ItemAddButton = styled.button`
    width: 90px;
    border: none;
    padding: 8px;
    background-color: ${colors.theme};
    color: ${colors.primary};
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    text-transform: uppercase;
`

export const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;

    @media screen and (max-width){
        
    }
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

export const ItemShowImg = styled.img`
    width: 20%;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: ${props => props.mr ? "20px" : " 0px"};    
`

export const ShowTopTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3%;
`

export const UserShowTitle = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: ${colors.dark1};
`
export const UserShowInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 5% 0px;
    color: ${colors.primary};
    .showIcon{
        font-size: 20px !important;
    }
    .showInfoTitle{
        margin-left: 3%;
        font-size: 20px;
    }
`
export const FontWeight = styled.span`
    font-size: ${props => props.bolder ? "24px" : "16px"};
    font-weight: ${props => props.bolder ? "600" : "300"};
`

export const UpdateUser = styled.div`
    flex: 2;
    padding: 3%;
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    margin-left: 3%;
    background: ${colors.widgetBg};
    border-radius: 15px; 
`

export const UpdateTitle = styled.span`
    font-size: 28px;
    font-weight: 600;
`

export const UpdateForm = styled.form`
    display: flex;
    justify-content: space-between:
    margin-top: 5%;
`

export const UpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 7%;
    label{
        margin-bottom: 3%;
        font-size: 16px;
        color: ${colors.dark1};
    }
    input{
        color: ${colors.primary};
        border: none;
        background: transparent;
        width: 300px;
        height: 30px;
        font-size: 18px;
        outline: none;
        border-bottom: 2px solid ${colors.dark2};

        &::placeholder{
            font-size: 18px;
            color: ${colors.primary};
        }
        @media screen and (max-width: 1000px){
            width: 240px;
        }
    }
`

export const UpdateRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const MyPublish = styled(Publish)`
    cursor: pointer;
` 

export const ItemUploadImg = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 10px;
    object-fit: cover;
    margin-left: 60%;
    margin-right: 15%;

    @media screen and (max-width: 1000px){
        width: 100px;
        height: 100px;
        margin-left: 20%;
        margin-right: 3%;
    }
`

export const ItemUpload = styled.div`
    display: flex;
    align-items: center;
`

export const ItemUpdateButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5%;
    cursor: pointer;
    background-color: ${colors.theme};
    color: ${colors.primary};
    font-weight: 600;
    font-size: 22px;
`

export const ShowUserBottom = styled.div`
    margin-top: 10%;
`
