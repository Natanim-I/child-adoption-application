import React from 'react'
import { Heading, LocationContainer, LocationTop, LocationInfo, InfoIcon, InfoTitle, InfoItem, LocationLeft, 
LocationRight, LocationBottom} from "./LocaionElements"
import { LocationOnOutlined, TimerOutlined, EmailOutlined, PhoneOutlined } from '@mui/icons-material'

const Location = () => {

  return (
    <LocationContainer>
        <Heading>Welcome to our Organization, You can come and Visit us.</Heading>
        <LocationTop>
            <LocationInfo>
                <LocationLeft>
                    <InfoIcon><LocationOnOutlined/></InfoIcon>
                </LocationLeft>
                <LocationRight>
                    <InfoTitle>Location</InfoTitle>
                    <InfoItem>Newyork, 1234567 street</InfoItem>
                </LocationRight>
            </LocationInfo>
            <LocationInfo>
                <LocationLeft>
                    <InfoIcon><TimerOutlined/></InfoIcon>
                </LocationLeft>
                <LocationRight>
                    <InfoTitle>Open Hours</InfoTitle>
                    <InfoItem>11:00am to 5:00pm</InfoItem>
                </LocationRight>
            </LocationInfo>
            <LocationInfo>
                <LocationLeft>
                    <InfoIcon><EmailOutlined/></InfoIcon>
                </LocationLeft>
                <LocationRight>
                    <InfoTitle>Email</InfoTitle>
                    <InfoItem>natanimissa@gmail.com</InfoItem>
                </LocationRight>
            </LocationInfo>
            <LocationInfo>
                <LocationLeft>
                    <InfoIcon><PhoneOutlined/></InfoIcon>
                </LocationLeft>
                <LocationRight>
                    <InfoTitle>Phone</InfoTitle>
                    <InfoItem>011-334-56-78</InfoItem>
                </LocationRight>
            </LocationInfo>
        </LocationTop>
        <LocationBottom src="https://maps.google.com/maps?q=2Q88+WM2,%20Tito%20St,%20Addis%20Ababa&t=&z=19&ie=UTF8&iwloc=&output=embed" 
        frameBorder="0" allowFullScreen></LocationBottom>
    </LocationContainer>
  )
}

export default Location