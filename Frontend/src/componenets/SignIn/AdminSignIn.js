import React from "react";

import { StyledContainer, StyledFormArea, StyledFormButton, Avatar, StyledTitle, ButtonGroup, ExtraText, 
    TextLink } from "./LoginElements";
import { colors } from "../../colors";

import Logo from "./../../images/logo.jpg";

import { Formik, Form } from "formik";
import {TextInput} from "../FormLib";

import {FiMail, FiLock} from "react-icons/fi";

import * as Yup from "yup";

import {ThreeDots} from "react-loader-spinner";

import { connect } from "react-redux";
import { loginAdmin } from "../../auth/actions/userActions";
import { useNavigate, useParams } from "react-router-dom";

const AdminSignIn = ({loginAdmin}) => {
    const navigate = useNavigate();
    const {userEmail} = useParams();
    return (
        <StyledContainer>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>
                    Administrative Login
                </StyledTitle>
                <ExtraText>
                    <TextLink to="/signin/organizationUsers">Organizational User Access</TextLink>
                </ExtraText>
                <Formik 
                initialValues={{
                    email: userEmail,
                    password: "",
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email("Invalid email address").required("Required"),
                    password: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required"),
                })} 
                onSubmit={(values, {setSubmitting, setFieldError}) => {
                    loginAdmin(values, navigate, setFieldError, setSubmitting);
                }}>
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput name="email" type="text" label="Email address" placeholder="someone@example.com" icon={<FiMail/>}/>
                            <TextInput name="password" type="password" label="Password" placeholder="********" icon={<FiLock/>}/>
                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton 
                                type="submit">Login</StyledFormButton>}
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
                <ExtraText>
                    Forgotten password? <TextLink to="/forgotpassword">Reset it</TextLink>
                </ExtraText>
            </StyledFormArea>
        </StyledContainer>
    );
}

export default connect(null, {loginAdmin})(AdminSignIn);