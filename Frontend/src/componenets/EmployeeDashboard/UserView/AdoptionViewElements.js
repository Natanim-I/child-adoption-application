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
    font-size: 16px;
    font-weight: 600;
    color: ${colors.dark2};
`
export const UserShowInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 10% 0px;
    color: ${colors.primary};
    .showIcon{
        font-size: 18px !important;
    }
    .showInfoTitle{
        margin-left: 5%;
    }
`
export const FontWeight = styled.span`
    font-size: ${props => props.bolder ? "24px" : "16px"};
    font-weight: ${props => props.bolder ? "600" : "300"};
`

export const UpdateUser = styled.div`
    padding: 3%;
`

export const UpdateTitle = styled.span`
    font-size: 28px;
    font-weight: 600;
`

export const UpdateForm = styled.form`
    display: flex;
    justify-content: space-between:
    margin-top: 5%;
    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
`

export const UpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 7%;
    label{
        margin-bottom: 3%;
        font-size: 17px;
        color: ${colors.dark1};
    }
    input{
        margin-left: 1%;
        border: none;
        background: transparent;
        width: 300px;
        height: 30px;
        outline: none;
        border-bottom: 2px solid ${colors.dark2};

        &::placeholder{
            color: ${colors.primary};
            font-size: 20px;
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