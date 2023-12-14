import React, { useState, useEffect } from "react";
import image from "./../../../images/logo.jpg";
import { FaUser } from "react-icons/fa";
import {
  ItemContainer,
  ItemTitleContainer,
  UserContainer,
  ShowUser,
  ShowUserTop,
  ItemShowImg,
  ShowTopTitle,
  FontWeight,
  ShowUserBottom,
  UserShowTitle,
  UserShowInfo,
  UpdateUser,
  UpdateTitle,
  UpdateForm,
  UpdateItem,
  UpdateRight,
  MyPublish,
  ItemUpload,
  ItemUploadImg,
  ItemUpdateButton,
} from "./ViewElements";
import { useParams } from "react-router-dom";

const EmployeeView = () => {
  const { userId } = useParams();
  const [rows, setRows] = useState([
    {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      levelofeducation: "",
      dateofbirth: "",
      pone: "",
    },
  ]);

  useEffect(() => {
    fetch(`http://localhost:5000/displayusers/employee/${userId}`).then(
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
        <h1>View Employee</h1>
        {/* <Link to="">
          <ItemAddButton>Register</ItemAddButton>
        </Link> */}
      </ItemTitleContainer>
      <UserContainer>
        <ShowUser>
          <ShowUserTop>
            <ItemShowImg src={image} alt="User" />
            <ShowTopTitle>
              <FontWeight
                bolder
              >{`${rows.firstName} ${rows.lastName}`}</FontWeight>
              <FontWeight>{`${rows.email}`}</FontWeight>
            </ShowTopTitle>
          </ShowUserTop>
          <ShowUserBottom>
            <UserShowTitle>Employee Details</UserShowTitle>
            <UserShowInfo>
              <span className="showInfoTitle">Phone:</span>
              <span className="showInfoTitle">{rows.phone}</span>
            </UserShowInfo>
            <UserShowInfo>
              <span className="showInfoTitle">Date of Birth:</span>
              <span className="showInfoTitle">{rows.dateofbirth}</span>
            </UserShowInfo>
            <UserShowInfo>
              <span className="showInfoTitle">Gender:</span>
              <span className="showInfoTitle">{rows.gender}</span>
            </UserShowInfo>
            <UserShowInfo>
              <span className="showInfoTitle">Level of Education:</span>
              <span className="showInfoTitle">{rows.levelofeducation}</span>
            </UserShowInfo>
          </ShowUserBottom>
        </ShowUser>
        <UpdateUser>
          <UpdateTitle>Edit Information</UpdateTitle>
          <UpdateForm>
            <div>
              <UpdateItem>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder={rows.firstName}
                />
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" placeholder={rows.lastName} />
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder={rows.email} />
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="dateofbirth">Date of Birth</label>
                <input
                  id="dateofbirth"
                  type="date"
                  placeholder={rows.dateofbirth}
                />
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="levelofeducation">Level of Education</label>
                <input
                  id="levelofeducation"
                  type="text"
                  placeholder={rows.levelofeducation}
                />
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="changepass">Change Password</label>
                <input id="changepass" type="password" />
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="repeatpass">Repeat Password</label>
                <input id="repeatpass" type="password" />
              </UpdateItem>
            </div>
            <UpdateRight>
              <ItemUpload>
                <ItemUploadImg src={image} alt="User" />
                <label htmlFor="file">
                  <MyPublish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </ItemUpload>
              <ItemUpdateButton>Update</ItemUpdateButton>
            </UpdateRight>
          </UpdateForm>
        </UpdateUser>
      </UserContainer>
    </ItemContainer>
  );
};

export default EmployeeView;
