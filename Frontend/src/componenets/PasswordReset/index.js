import React from "react";

import { StyledContainer, StyledFormArea, StyledFormButton, Avatar, StyledTitle,
     ButtonGroup } from "./PasswordResetElements";
import { colors } from "../../colors";

import Logo from "../../images/logo.jpg";

import { Formik, Form } from "formik";
import {TextInput} from "./../FormLib";

import {FiLock} from "react-icons/fi";

import * as Yup from "yup";

import {ThreeDots} from "react-loader-spinner"; 

import { connect } from "react-redux";
import { resetAdopterPassword } from "./../../auth/actions/userActions";
import { useNavigate, useParams } from "react-router-dom";

const PasswordReset = ({resetAdopterPassword}) => {
    const navigate = useNavigate();
    const {userId, resetString} = useParams();
    return (
        <StyledContainer>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>
                   Adopter Password Reset
                </StyledTitle>
                <Formik 
                initialValues={{
                    newPassword: "",
                    confirmNewPassword: "",
                    userId,
                    resetString
                }}
                validationSchema={Yup.object({
                    newPassword: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required"),
                    confirmNewPassword: Yup.string().required("Required").oneOf([Yup.ref("newPassword")], "Passwords must match!")
                })} 
                onSubmit={(values, {setSubmitting, setFieldError}) => {
                    resetAdopterPassword(values, navigate, setFieldError, setSubmitting);
                }}>
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput name="newPassword" type="password" label="New password" placeholder="********" icon={<FiLock/>}/>
                            <TextInput name="confirmNewPassword" type="password" label="Confirm new password" placeholder="********" icon={<FiLock/>}/>
                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton 
                                type="submit">Submit</StyledFormButton>}
                                {isSubmitting && (
                                    <ThreeDots
                                        color={colors.theme}
                                        height={49}
                                        width={100}
                                    />
                                    )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
            </StyledFormArea>
        </StyledContainer>
    );
}

export default connect(null, {resetAdopterPassword})(PasswordReset);