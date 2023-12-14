import React from "react";

import {
  StyledFormArea,
  StyledFormButton,
  Avatar,
  StyledTitle,
  ButtonGroup,
  ExtraText,
  TextLink,
  StyledContainer,
} from "./SignUpElements";
import { colors } from "../../colors";

import Logo from "../../images/logo.jpg";

import { Formik, Form } from "formik";
import { TextInput } from "./../FormLib/Signup";

import { FiMail, FiLock, FiUser, FiCalendar } from "react-icons/fi";

import * as Yup from "yup";

import { ThreeDots } from "react-loader-spinner";

import { connect } from "react-redux";
import { signupAdopter } from "./../../auth/actions/userActions";
import { useNavigate } from "react-router-dom";

const Signup = ({ signupAdopter }) => {
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          Signup Adopter
        </StyledTitle>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            dateofbirth: "",
            password: "",
            repeatPass: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            dateofbirth: Yup.string().required("Required"),
            password: Yup.string()
              .min(8, "Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
            repeatPass: Yup.string()
              .required("Required")
              .oneOf([Yup.ref("password")], "Passwords must match"),
          })}
          onSubmit={(values, { setFieldError, setSubmitting }) => {
            signupAdopter(values, navigate, setFieldError, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <TextInput
                name="firstName"
                type="text"
                label="First Name"
                placeholder="first name"
                icon={<FiUser />}
              />
              <TextInput
                name="lastName"
                type="text"
                label="Last Name"
                placeholder="last name"
                icon={<FiUser />}
              />
              <TextInput
                name="email"
                type="text"
                label="Email address"
                placeholder="someone@example.com"
                icon={<FiMail />}
              />
              <TextInput
                name="dateofbirth"
                type="text"
                label="Date of Birth"
                placeholder="dd/mm/yyyy"
                icon={<FiCalendar />}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                icon={<FiLock />}
              />
              <TextInput
                name="repeatPass"
                type="password"
                label="Repeat Password"
                placeholder="********"
                icon={<FiLock />}
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit">Signup</StyledFormButton>
                )}
                {isSubmitting && (
                  <ThreeDots color={colors.theme} height={49} width={150} />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          Already have an account? <TextLink to="/signin">Login</TextLink>
        </ExtraText>
      </StyledFormArea>
    </StyledContainer>
  );
};

export default connect(null, { signupAdopter })(Signup);
