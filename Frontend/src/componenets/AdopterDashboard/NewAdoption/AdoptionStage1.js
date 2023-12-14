import React from 'react'
import * as Yup from "yup";
import { submitadoption } from '../../../auth/actions/userActions';
import { AdoptionContainer, Topic, FormInfos, AdoptionForm, ItemContainer1, StyledFormButton, ButtonGroup } from './AdoptionStag1Elements';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { TextInput } from "./../../FormLib/Form"
import { Select } from '../../FormLib/FormSelect';
import {ThreeDots} from "react-loader-spinner";
import { colors } from '../../../colors';
import { connect } from "react-redux"

const AdoptionSage1 = ({submitadoption}) => {
    const navigate = useNavigate();
  return (
        <AdoptionContainer>
            <AdoptionForm>
                <Formik
                    initialValues={{
                        fullName: "",
                        email: "",
                        address: "",
                        phone: "",
                        maritalStatus: "Married",
                        gender: "Male",
                        fatherName: "",
                        fatherbirth: "",
                        fatherphone: "",
                        fatherbirthplace: "",
                        fathernationality: "",
                        fathereducation: "",
                        fatheroccupation: "",
                        fatherincome: "",
                        motherName: "",
                        motherbirth: "",
                        motherphone: "",
                        motherbirthplace: "",
                        mothernationality: "",
                        mothereducation: "",
                        motheroccupation: "",
                        motherincome: "",
                        marriagedate: "",
                        marriageplace: "",
                        fatherformerspousename: "",
                        formermarriagedate: "",
                        formermarriageplace: "",
                        divorcedate: "",
                        divorceplace: "",
                        motherformerspousename: "",
                        motherformermarriagedate: "",
                        motherformermarriageplace: "",
                        motherdivorcedate: "",
                        motherdivorceplace: "",
                        criminalarrest: "No",
                        criminalreport: "No"
                    }}
                    validationSchema={Yup.object({
                        fullName: Yup.string().required("Required"),
                        address: Yup.string().required("Required"),
                        phone: Yup.string().required("Required"),
                        email: Yup.string().email("Invalid email address").required("Required"),
                        gender: Yup.string().required("Required"),
                        maritalStatus: Yup.string().required("Required"),
                        criminalarrest: Yup.string().required("Required"),
                        criminalreport: Yup.string().required("Required")
                    })}
                    onSubmit={(values, {setSubmitting, setFieldError}) => {
                        submitadoption(values, navigate, setFieldError, setSubmitting)
                    }}>
                        {({isSubmitting}) => (
                            <Form>
                                <Topic>Fill out the necessary informations to start your adoption application!</Topic>  
                                <h3>General Information</h3>
                                <ItemContainer1>
                                    <FormInfos>
                                        <TextInput name="fullName" type="text" label="Full Name" placeholder="full name"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="email" type="email" label="Email" placeholder="someone@example.com"/>
                                    </FormInfos>    
                                    <FormInfos>
                                        <TextInput name="address" type="text" label="Address" placeholder="address"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="phone" type="text" label="Phone Number" placeholder="+251-9-00-00-00-00"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <Select name="maritalStatus" label="Marital Status" value1="Married" value2="Unmarried"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <Select name="gender" label="Gender" value1="Male" value2="Female"/>
                                    </FormInfos>
                                </ItemContainer1>
                                <h3>Adopter's Basic Information</h3>
                                <h4>Adoptive Father</h4>
                                <ItemContainer1>
                                    <FormInfos>
                                        <TextInput name="fatherName" type="text" label="Father Name" placeholder="full name"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="fatherbirth" type="date" label="Date of Birth" placeholder="dd/mm/yyyy"/>
                                    </FormInfos>    
                                    <FormInfos>
                                        <TextInput name="fatherphone" type="text" label="Phone Number" placeholder="+251-9-00-00-00-00"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="fatherbirthplace" type="text" label="Place of Birth" placeholder="place of birth"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="fathernationality" type="text" label="Nationality" placeholder="nationality"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="fathereducation" type="text" label="Level of Education" placeholder="level of education"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="fatheroccupation" type="text" label="Occupation" placeholder="occupation"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="fatherincome" type="number" label="Annual Income" placeholder="income in (Etb)"/>
                                    </FormInfos>
                                </ItemContainer1>
                                <h4>Adoptive Mother</h4>
                                <ItemContainer1>
                                <FormInfos>
                                        <TextInput name="motherName" type="text" label="Mother Name" placeholder="full name"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="motherbirth" type="date" label="Date of Birth" placeholder="dd/mm/yyyy"/>
                                    </FormInfos>    
                                    <FormInfos>
                                        <TextInput name="motherphone" type="text" label="Phone Number" placeholder="+251-9-00-00-00-00"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="motherbirthplace" type="text" label="Place of Birth" placeholder="place of birth"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="mothernationality" type="text" label="Nationality" placeholder="nationality"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="mothereducation" type="text" label="Level of Education" placeholder="level of education"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="motheroccupation" type="text" label="Occupation" placeholder="occupation"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="motherincome" type="number" label="Annual Income" placeholder="income in (Etb)"/>
                                    </FormInfos>
                                </ItemContainer1>  
                                <h3>Marital History</h3>
                                <h4>Current Marriage</h4>
                                <ItemContainer1 style={{marginBottom: "25px"}}>
                                    <FormInfos>
                                        <TextInput name="marriagedate" type="date" label="Marriage Date" placeholder="dd/mm/yyyy"/>
                                    </FormInfos> 
                                    <FormInfos>
                                        <TextInput name="marriageplace" type="text" label="Marriage Place" placeholder="marriage place"/>
                                    </FormInfos> 
                                </ItemContainer1>
                                <h4>Former Marriages</h4>
                                <h5>Adoptive Father</h5>
                                <ItemContainer1 style={{marginBottom: "25px"}}>
                                    <FormInfos>
                                        <TextInput name="fatherformerspousename" type="text" label="Father former spouse name" placeholder="spouse name"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="formermarriagedate" type="date" label="Marriage Date" placeholder="dd/mm/yyyy"/>
                                    </FormInfos> 
                                    <FormInfos>
                                        <TextInput name="formermarriageplace" type="text" label="Marriage Place" placeholder="former marriage place"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="divorcedate" type="date" label="Divorce Date" placeholder="dd/mm/yyyy"/>
                                    </FormInfos> 
                                    <FormInfos>
                                        <TextInput name="divorceplace" type="text" label="Divorce Place" placeholder="divorce place"/>
                                    </FormInfos>
                                </ItemContainer1>
                                <h5>Adoptive Mother</h5>
                                <ItemContainer1>
                                    <FormInfos>
                                        <TextInput name="motherformerspousename" type="text" label="Mother former spouse name" placeholder="spouse name"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="motherformermarriagedate" type="date" label="Marriage Date" placeholder="dd/mm/yyyy"/>
                                    </FormInfos> 
                                    <FormInfos>
                                        <TextInput name="motherformermarriageplace" type="text" label="Marriage Place" placeholder="former marriage place"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <TextInput name="motherdivorcedate" type="date" label="Divorce Date" placeholder="dd/mm/yyyy"/>
                                    </FormInfos> 
                                    <FormInfos>
                                        <TextInput name="motherdivorceplace" type="text" label="Divorce Place" placeholder="divorce place"/>
                                    </FormInfos>
                                </ItemContainer1>
                                <h3>Criminal History</h3>
                                <ItemContainer1>
                                    <FormInfos>
                                        <Select name="criminalarrest" value1="No" value2="Yes" label="Have you ever been arrested for an offense other than a minor trafic violation?"/>
                                    </FormInfos>
                                    <FormInfos>
                                        <Select name="criminalreport" value1="No" value2="Yes" label="Have you ever been reported to children's protective service?"/>
                                    </FormInfos>
                                </ItemContainer1>
                                <ButtonGroup>
                                    {!isSubmitting && <StyledFormButton  
                                    type="submit">Submit Application</StyledFormButton>}
                                    {isSubmitting && (
                                        <ThreeDots
                                            color={colors.theme}
                                            height={49}
                                            width={100}
                                        />
                                    )}
                                   <StyledFormButton type='button' onClick={() => {
                                        window.print();
                                    }}>Print</StyledFormButton>
                                </ButtonGroup>
                            </Form>
                        )}
                </Formik>
            </AdoptionForm>
        </AdoptionContainer>
  )
}

export default connect (null, {submitadoption})(AdoptionSage1)