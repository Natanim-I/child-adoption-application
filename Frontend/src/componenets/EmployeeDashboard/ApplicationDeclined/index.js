import React from 'react';

import {StyledTitle, StyledSubtitle, Avatar, StyledButton, ButtonGroup, 
    StyledFormArea, ExtraText, StyledContainer} from "./ApplicationDeclinedElements";
import { colors } from '../../../colors';

import Logo from "./../../../images/logo.jpg"

import { useParams } from 'react-router-dom';

const ApplicationDecline = () => {
    const { userEmail } = useParams();
    return (
        <StyledContainer>
            <div style={{
                position: "absolute",
                top: 30,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start"
            }}> 
                <Avatar image={Logo}/>
            </div>
                <StyledFormArea bg={colors.dark2}>
                    <StyledTitle size={35}>
                        Child Adoption Management System
                    </StyledTitle>
                    <StyledSubtitle size={25}>
                        Application Declined!
                    </StyledSubtitle>
                    <ExtraText size={20} color={colors.light1}>
                        An email has been sent to your adopter's email: 
                        <b style={{color: colors.primary}}>{userEmail}</b>
                    </ExtraText>
                    <ButtonGroup>
                        <StyledButton to={"/employee/adoptions"}>Proceed</StyledButton>
                    </ButtonGroup>
                </StyledFormArea>
        </StyledContainer>
    );
}

export default ApplicationDecline