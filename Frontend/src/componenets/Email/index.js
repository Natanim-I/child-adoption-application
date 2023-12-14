import React from 'react';

import {StyledTitle, StyledSubtitle, Avatar, StyledButton, ButtonGroup, 
    StyledFormArea, ExtraText, StyledContainer} from "./EmailSentElements";
import { colors } from '../../colors';

import Logo from "./../../images/logo.jpg"

import { useParams } from 'react-router-dom';

const EmailSent = () => {
    const { userEmail, reset } = useParams();
    return (
        <StyledContainer>
            <div style={{
                position: "absolute",
                top: 50,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start"
            }}> 
                <Avatar image={Logo}/>
            </div>
            {!reset && userEmail && (
                <StyledFormArea bg={colors.dark2}>
                    <StyledTitle size={35}>
                        Child Adoption Management System
                    </StyledTitle>
                    <StyledSubtitle size={25}>
                        Account confirmation!
                    </StyledSubtitle>
                    <ExtraText size={20} color={colors.light1}>
                        An email with your account confirmation link has been sent to your email: 
                        <b style={{color: colors.primary}}>{userEmail}</b>
                    </ExtraText>
                    <ButtonGroup>
                        <StyledButton to={"/signin"}>Proceed</StyledButton>
                    </ButtonGroup>
                </StyledFormArea>
            )}
            {reset && userEmail && (
                <StyledFormArea bg={colors.dark2}>
                    <StyledTitle size={35}>
                        Child Adoption Management System
                    </StyledTitle>
                    <StyledSubtitle size={25}>
                        Password Reset!
                    </StyledSubtitle>
                    <ExtraText size={20} color={colors.light1}>
                        An email with a password reset link has been sent to your email: 
                        <b style={{color: colors.primary}}>{userEmail}</b>
                    </ExtraText>
                    <ExtraText size={20} color={colors.light1}>
                         Check your email and click on the link to proceed!
                    </ExtraText>
                </StyledFormArea>    
            )}
            {!reset &&  !userEmail && (
                <StyledFormArea bg={colors.dark2}>
                    <StyledTitle size={35}>
                        Child Adoption Management System
                    </StyledTitle>
                    <StyledSubtitle size={25}>
                        Password Reset!
                    </StyledSubtitle>
                    <ExtraText size={20} color={colors.light1}>
                        Your password has been reset successfully.
                    </ExtraText>
                    <ExtraText size={20} color={colors.light1}>
                        Your may now login!
                    </ExtraText>
                    <ButtonGroup>
                        <StyledButton to={"/signin"}>Login</StyledButton>
                    </ButtonGroup>
                </StyledFormArea>
            )}
        </StyledContainer>
    );
}

export default EmailSent; 