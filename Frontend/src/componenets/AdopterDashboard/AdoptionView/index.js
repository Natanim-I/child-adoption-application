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
} from "./AdoptionViewElements";
import { useParams } from "react-router-dom";

const AdoptionView = () => {
  const { userId } = useParams();
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

          <ShowUserBottom>
            <UserShowTitle>Adoption Detail</UserShowTitle>
            <div>
              <UserShowInfo>
                <span className="showInfoTitle">Phone:</span>
                <span className="showInfoTitle">{rows.phone}</span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Address:</span>
                <span className="showInfoTitle">{rows.address}</span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Gender:</span>
                <span className="showInfoTitle">{rows.gender}</span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Marital Status:</span>
                <span className="showInfoTitle">{rows.maritalStatus}</span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Adoptive Father Name:</span>
                <span className="showInfoTitle">{rows.adoptiveFatherName}</span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Adoptive Father birth date:
                </span>
                <span className="showInfoTitle">
                  {rows.adoptiveFatherbirth}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Adoptive Father Place og birth:
                </span>
                <span className="showInfoTitle">
                  {rows.adoptiveFatherbirthplace}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Adoptive Father Nationality:
                </span>
                <span className="showInfoTitle">
                  {rows.adoptiveFatherNationality}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Adoptive Father Level of Education:
                </span>
                <span className="showInfoTitle">
                  {rows.adoptiveFatherEducation}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Adoptive Father Occupation:
                </span>
                <span className="showInfoTitle">
                  {rows.adoptiveFatherOccupation}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Adoptive Father Annual Income:
                </span>
                <span className="showInfoTitle">
                  {rows.adoptiveFatherIncome} Etb
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Adoptive Mother Name:</span>
                <span className="showInfoTitle">{rows.adoptiveMotherName}</span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Adoptive Mother birth date:
                </span>
                <span className="showInfoTitle">
                  {rows.adoptiveMotherbirth}
                </span>
              </UserShowInfo>
            </div>
            <div>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Adoptive Mother Place og birth:
                </span>
                <span className="showInfoTitle">
                  {rows.adoptiveMotherbirthplace}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Adoptive Mother Nationality:
                </span>
                <span className="showInfoTitle">
                  {rows.adoptiveMotherNationality}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Adoptive Mother Level of Education:
                </span>
                <span className="showInfoTitle">
                  {rows.adoptiveMotherEducation}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Adoptive Mother Occupation:
                </span>
                <span className="showInfoTitle">
                  {rows.adoptiveMotherOccupation}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Adoptive Mother Annual Income:
                </span>
                <span className="showInfoTitle">
                  {rows.adoptiveMotherIncome} Etb
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Adoptive Mother Level of Education:
                </span>
                <span className="showInfoTitle">
                  {rows.adoptiveMotherEducation}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Current Marriage Date:</span>
                <span className="showInfoTitle">
                  {rows.currentMarriageDate}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Current current Marriage Place:
                </span>
                <span className="showInfoTitle">
                  {rows.currentMarriagePlace}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Father Former Spuse Name:</span>
                <span className="showInfoTitle">
                  {rows.fatherFormerSpouseName}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Father Former Marriage Date:
                </span>
                <span className="showInfoTitle">
                  {rows.fatherFormerMarriageDate}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Father Marriage Place:</span>
                <span className="showInfoTitle">
                  {rows.fatherFormerMarriagePlace}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Father Divorce Date:</span>
                <span className="showInfoTitle">{rows.fatherDivorceDate}</span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Father Divorce Place:</span>
                <span className="showInfoTitle">{rows.fatherDivorcePlace}</span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Mother Former Spuse Name:</span>
                <span className="showInfoTitle">
                  {rows.motherFormerSpouseName}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">
                  Mother Former Marriage Date:
                </span>
                <span className="showInfoTitle">
                  {rows.motherFormerMarriageDate}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Mother Marriage Place:</span>
                <span className="showInfoTitle">
                  {rows.motherFormerMarriagePlace}
                </span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Mother Divorce Date:</span>
                <span className="showInfoTitle">{rows.motherDivorceDate}</span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Mother Divorce Place:</span>
                <span className="showInfoTitle">{rows.motherDivorcePlace}</span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Criminal Arrest:</span>
                <span className="showInfoTitle">{rows.criminalarrest}</span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">criminalreport:</span>
                <span className="showInfoTitle">{rows.criminalreport}</span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Stage:</span>
                <span className="showInfoTitle">{rows.stage}</span>
              </UserShowInfo>
              <UserShowInfo>
                <span className="showInfoTitle">Status:</span>
                <span className="showInfoTitle">{rows.status}</span>
              </UserShowInfo>
            </div>
          </ShowUserBottom>
        </ShowUser>
      </UserContainer>
    </ItemContainer>
  );
};

export default AdoptionView;
