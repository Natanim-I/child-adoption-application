import React from "react";
import { TextInput } from "./../FormLib/Form";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { donate } from "./../../auth/actions/userActions";
import { connect } from "react-redux";
import Img from "./../../images/bg.jpg";
import Img2 from "./../../images/adoption1.jpg";
import Img3 from "./../../images/adoption2.jpg";
import Img6 from "./../../images/adoption3.avif";
import { colors } from "../../colors";
import { ThreeDots } from "react-loader-spinner";
import {
  RegisterEmpContainer,
  RegisterTop,
  RegisterTitle,
  RegisterBottom,
  RegisterRight,
  ButtonGroup,
  StyledFormButton,
} from "./DonateElements";
import {
  StoryContainer,
  StoryWrapper,
  StoryCard,
  StoryH1,
  StoryH2,
  StoryImg,
  StoryP,
} from "./../StoriesSection/StoriesElements";
const Donate = ({ donate }) => {
  const navigate = useNavigate();
  return (
    <>
      <RegisterEmpContainer>
        <RegisterTop>
          <RegisterTitle>Donate</RegisterTitle>
        </RegisterTop>
        <RegisterBottom>
          <RegisterRight>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                dateofbirth: "",
                phone: "",
                address: "",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string().required("Required"),
                lastName: Yup.string().required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                dateofbirth: Yup.string().required("Required"),
                phone: Yup.string().required("Required"),
                address: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting, setFieldError }) => {
                donate(values, navigate, setFieldError, setSubmitting);
              }}
            >
              {({ isSubmitting }) => (
                <Form
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    color: `${colors.primary}`,
                    gap: "10%",
                  }}
                >
                  <TextInput
                    name="firstName"
                    type="text"
                    label="First Name"
                    placeholder="first name"
                  />
                  <TextInput
                    name="lastName"
                    type="text"
                    label="Last Name"
                    placeholder="last name"
                  />
                  <TextInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="someone@gmail.com"
                  />
                  <TextInput
                    name="dateofbirth"
                    type="date"
                    label="Date of Birth"
                    placeholder="dd/mm/yyyy"
                  />
                  <TextInput
                    name="phone"
                    type="text"
                    label="Phone"
                    placeholder="phone number"
                  />
                  <TextInput
                    name="address"
                    type="text"
                    label="Address"
                    placeholder="address"
                  />
                  <ButtonGroup>
                    {!isSubmitting && (
                      <StyledFormButton type="submit">Donate</StyledFormButton>
                    )}
                    {isSubmitting && (
                      <ThreeDots color={colors.theme} height={49} width={100} />
                    )}
                  </ButtonGroup>
                </Form>
              )}
            </Formik>
          </RegisterRight>
        </RegisterBottom>
      </RegisterEmpContainer>
      <StoryContainer>
        <StoryH1>Ways You Donation Can Impact</StoryH1>
        <StoryWrapper>
          <StoryCard to="/Story">
            <StoryImg src={Img2}></StoryImg>
            <StoryH2>Single Parent Resilience</StoryH2>
            <StoryP>
              Against societal norms, Rachel, a single mother, embarked on a
              fulfilling adoption journey, bringing home her son, Ethan, and
              providing him with a nurturing and loving environment. Her
              unwavering dedication and love proved that family comes in all
              shapes and sizes.
            </StoryP>
          </StoryCard>
          <StoryCard to="/Story">
            <StoryImg src={Img3}></StoryImg>
            <StoryH2>Special Needs Support</StoryH2>
            <StoryP>
              Brian and Maria embraced the complexities of raising a child with
              special needs when they adopted their daughter, showering her with
              love and support. Through their dedication and advocacy, Sophia
              thrived, proving that every child deserves a loving home
              regardless of their challenges.
            </StoryP>
          </StoryCard>
          <StoryCard>
            <StoryImg src={Img6}></StoryImg>
            <StoryH2>Second Chance</StoryH2>
            <StoryP>
              Mark and Lisa welcomed baby Mia into their lives through open
              adoption, offering her a loving home after her birth parents chose
              them to be her forever family. They showered Mia with
              unconditional love, creating a bond that beautifully merged two
              families into one.
            </StoryP>
          </StoryCard>
        </StoryWrapper>
      </StoryContainer>
    </>
  );
};

export default connect(null, { donate })(Donate);
