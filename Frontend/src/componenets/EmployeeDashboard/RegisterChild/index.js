import React from 'react'
import { RegisterChildContainer, RegisterTop, RegisterTitle, RegisterBottom, RegisterLeft,
 RegisterRight, RegisterForm } from './RegisterChildElements'
import { registerChild } from '../../../auth/actions/userActions'
import { StyledFormButton, ButtonGroup } from "./../../SignUp/SignUpElements";
import { colors } from '../../../colors'

import * as Yup from "yup";

import {ThreeDots} from "react-loader-spinner";

import { Formik, Form } from "formik";
import {TextInput} from "./../../FormLib/Signup";

import {FiCalendar, FiUser} from "react-icons/fi";
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux"

const ChildRegister = ({registerChild}) => {
    // const [file,setFile] = useState(""); 
    const navigate = useNavigate();
  return (
    <RegisterChildContainer>
        <RegisterTop>
          <RegisterTitle>Register Child</RegisterTitle>
        </RegisterTop>
        <RegisterBottom>
          {/* <RegisterLeft>
            <EmployeeImg src={file ? URL.createObjectURL(file) : Logo} alt="User" />
            <label htmlFor="imgFile">
              Image: <DriveFolderUploadOutlined className='icon'/>
            </label>
            <input type="file" id='imgFile' style={{display: "none"}}
            onChange={(e)=>setFile(e.target.files[0])}/>                             
          </RegisterLeft> */}
          <RegisterRight>
            <RegisterForm>
              <Formik 
                  initialValues={{
                      firstName: "",
                      lastName: "",
                      dateofbirth: "",
                  }}
                  validationSchema={Yup.object({
                      firstName: Yup.string().required("Required"),
                      lastName: Yup.string().required("Required"),
                      dateofbirth: Yup.string().required("Required"),
                  })} 
                  onSubmit={(values, {setFieldError, setSubmitting}) => {
                    registerChild(values, navigate, setFieldError, setSubmitting);
                  }}>

                      {({isSubmitting}) => (
                          <Form style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                              <TextInput name="firstName" type="text" label="First Name" placeholder="first name" icon={<FiUser/>}/>
                              <TextInput name="lastName" type="text" label="Last Name" placeholder="last name" icon={<FiUser/>}/>
                              <TextInput name="dateofbirth" type="text" label="Date of Birth" placeholder="dd/mm/yyyy" icon={<FiCalendar/>}/>
                              <div style={{color: "transparent"}}>F</div>
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
      </RegisterChildContainer> 
  )
}

export default connect (null, {registerChild})(ChildRegister)