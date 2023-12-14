import React from "react";

import { StyledFormArea, StyledFormButton, Avatar, StyledTitle, ButtonGroup, StyledContainer } from "./ForgotPassElements";
import { colors } from "../../colors";

import Logo from "../../images/logo.jpg";

import { Formik, Form } from "formik";
import {TextInput} from "./../FormLib";

import {FiMail} from "react-icons/fi";

import * as Yup from "yup";

import {ThreeDots} from "react-loader-spinner";

import { connect } from "react-redux";
import { forgottenAdopterPassword } from "./../../auth/actions/userActions";
import { useNavigate, useParams } from "react-router-dom";

const ForgotAdopter = ({forgottenAdopterPassword}) => {
    const navigate = useNavigate();
    const {userEmail} = useParams();
    return (
        <StyledContainer>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>
                    Password Reset
                </StyledTitle>
                <Formik 
                initialValues={{
                    email: userEmail,
                    redirectUrl: "http://localhost:3000/passwordreset"
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email("Invalid email address").required("Required"),
                })} 
                onSubmit={(values, {setSubmitting, setFieldError}) => {
                    forgottenAdopterPassword(values, navigate, setFieldError, setSubmitting);
                }}>
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput name="email" type="text" label="Enter email address" placeholder="someone@example.com" icon={<FiMail/>}/>
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

export default connect(null, {forgottenAdopterPassword})(ForgotAdopter);