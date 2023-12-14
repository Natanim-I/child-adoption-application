import React from 'react'
import { RegisterEmpContainer, RegisterTop, RegisterTitle, RegisterBottom,
 RegisterRight, RegisterForm } from './RegisterEmployeeElements'
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { registerEmployee } from '../../../auth/actions/userActions'
import { StyledFormButton, ButtonGroup } from "./../../SignUp/SignUpElements";
import { colors } from '../../../colors'
import { useState } from 'react';
import * as Yup from "yup";
import { EmployeeImg } from '../../EmployeeDashboard/RegisterChild/RegisterChildElements';
import {ThreeDots} from "react-loader-spinner";

import { Formik, Form } from "formik";
import {TextInput} from "./../../FormLib/Signup";

import {FiMail, FiUser, FiCalendar} from "react-icons/fi";
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux"
import Logo from "./../../../images/logo.jpg"

const EmployeeRegister = ({registerEmployee}) => {
    const [file,setFile] = useState(""); 
    const navigate = useNavigate();
  return (
    <RegisterEmpContainer>
        <RegisterTop>
          <RegisterTitle>Register Employee</RegisterTitle>
        </RegisterTop>
        <RegisterBottom>
          <RegisterRight>
            <RegisterForm>
              <Formik 
                  initialValues={{
                      firstName: "",
                      lastName: "",
                      email: "",
                      dateofbirth: "",
                      gender: "",
                      levelofeducation: "",
                  }}
                  validationSchema={Yup.object({
                      firstName: Yup.string().required("Required"),
                      lastName: Yup.string().required("Required"),
                      email: Yup.string().email("Invalid email address").required("Required"),
                      dateofbirth: Yup.string().required("Required"),
                      gender: Yup.string().required("Required"),
                      levelofeducation: Yup.string().required("Required"),
                  })} 
                  onSubmit={(values, {setFieldError, setSubmitting}) => {
                    registerEmployee(values, navigate, setFieldError, setSubmitting);
                  }}>

                      {({isSubmitting}) => (
                          <Form style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                              <TextInput name="firstName" type="text" label="First Name" placeholder="first name" icon={<FiUser/>}/>
                              <TextInput name="lastName" type="text" label="Last Name" placeholder="last name" icon={<FiUser/>}/>
                              <TextInput name="email" type="text" label="Email address" placeholder="someone@example.com" icon={<FiMail/>}/>
                              <TextInput name="dateofbirth" type="text" label="Date of Birth" placeholder="dd/mm/yyyy" icon={<FiCalendar/>}/>
                              <TextInput name="gender" type="text" label="Gender" placeholder="male/female" icon={<FiUser/>}/>
                              <TextInput name="levelofeducation" type="text" label="Level of Education" placeholder="level of education" icon={<FiUser/>}/>
                              <ButtonGroup>
                                  {!isSubmitting && <StyledFormButton 
                                  type="submit">Register</StyledFormButton>}
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
            </RegisterForm>
          </RegisterRight>
        </RegisterBottom>
      </RegisterEmpContainer> 
  )
}

export default connect (null, {registerEmployee})(EmployeeRegister)