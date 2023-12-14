import React, { useState, useEffect } from "react";
import {
  ItemContainer,
  ItemTitleContainer,
  UserContainer,
  ShowUser,
  ShowUserTop,
  ShowTopTitle,
  FontWeight,
  ShowUserBottom,
  UserShowTitle,
  UserShowInfo,
  ButtonGroup,
  StyledFormButton,
  UpdateForm,
  UpdateItem,
  UpdateRight,
  UpdateTitle,
  UpdateUser,
} from "./AdoptionViewElements";
import { useParams } from "react-router-dom";
import {
  approveApplication,
  declineApplication,
} from "../../../auth/actions/userActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdoptionView = ({ approveApplication, declineApplication }) => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [rows, setRows] = useState([
    {
      id: "",
      fullName: "",
      email: "",
      phone: "",
      address: "",
      dateofbirth: "",
      maritalStatus: "",
      gender: "",
      adoptiveFatherName: "",
      adoptiveFatherbirth: "",
      adoptiveFatherphone: "",
      adoptiveFatherbirthplace: "",
      adoptiveFatherNationality: "",
      adoptiveFatherEducation: "",
      adoptiveFatherOccupation: "",
      adoptiveFatherIncome: "",
      adoptiveMotherName: "",
      adoptiveMotherbirth: "",
      adoptiveMotherphone: "",
      adoptiveMotherbirthplace: "",
      adoptiveMotherNationality: "",
      adoptiveMotherEducation: "",
      adoptiveMotherOccupation: "",
      adoptiveMotherIncome: "",
      currentMarriageDate: "",
      currentMarriagePlace: "",
      fatherFormerSpouseName: "",
      fatherFormerMarriageDate: "",
      fatherFormerMarriagePlace: "",
      fatherDivorceDate: "",
      fatherDivorcePlace: "",
      motherFormerSpouseName: "",
      motherFormerMarriageDate: "",
      motherFormerMarriagePlace: "",
      motherDivorceDate: "",
      motherDivorcePlace: "",
      criminalarrest: "",
      criminalreport: "",
      stage: "",
      status: "",
    },
  ]);

  useEffect(() => {
    fetch(`http://localhost:5000/displayusers/adoptions/${userId}`).then(
      (res) => {
        res
          .json()
          .then((result) => setRows(result.data))
          .catch((error) => console.error(error));
      }
    );
  });

  return (
    <ItemContainer>
      <ItemTitleContainer>
        <h1>View Adoption Detail</h1>
        {/* <Link to="">
          <ItemAddButton>Register</ItemAddButton>
        </Link> */}
      </ItemTitleContainer>
      <UserContainer>
        <ShowUser>
          <ShowUserTop>
            <ShowTopTitle>
              <FontWeight bolder>{`${rows.fullName}`}</FontWeight>
              <FontWeight>{`${rows.email}`}</FontWeight>
            </ShowTopTitle>
          </ShowUserTop>
          <UpdateUser>
            <UpdateTitle>Adoption application details</UpdateTitle>
            <UpdateForm>
              <div>
                <UpdateItem>
                  <label htmlFor="firstName">Phone</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder={`${rows.phone}`}
                    readOnly
                  />
                </UpdateItem>
                <UpdateItem>
                  <label htmlFor="lastName">Address</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder={`${rows.address}`}
                    readOnly
                  />
                </UpdateItem>
                <UpdateItem>
                  <label htmlFor="firstName">Date of Birth</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder={`${rows.dateofbirth}`}
                    readonly
                  />
                </UpdateItem>
                <UpdateItem>
                  <label htmlFor="firstName">Gender</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder={`${rows.gender}`}
                    readonly
                  />
                </UpdateItem>
                <UpdateItem>
                  <label htmlFor="firstName">Marital Status</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder={`${rows.maritalStatus}`}
                  />
                </UpdateItem>
                <UpdateItem>
                  <label htmlFor="firstName">FirstName</label>
                  <input id="firstName" type="text" placeholder="Natanim" />
                </UpdateItem>
              </div>
            </UpdateForm>
          </UpdateUser>
          <ButtonGroup>
            <StyledFormButton
              onClick={() => {
                approveApplication(rows, navigate);
              }}
            >
              Approve Application
            </StyledFormButton>
            <StyledFormButton
              onClick={() => {
                declineApplication(rows, navigate);
              }}
            >
              Decline
            </StyledFormButton>
          </ButtonGroup>
        </ShowUser>
      </UserContainer>
    </ItemContainer>
  );
};

export default connect(null, { approveApplication, declineApplication })(
  AdoptionView
);
