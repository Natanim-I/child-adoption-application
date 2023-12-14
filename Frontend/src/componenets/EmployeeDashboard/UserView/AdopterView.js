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

const AdopterView = () => {
  const { userId } = useParams();
  const [rows, setRows] = useState([
    {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      dateofbirth: "",
    },
  ]);

  useEffect(() => {
    fetch(`http://localhost:5000/displayusers/adopter/${userId}`).then(
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
        <h1>View User</h1>
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
            <UserShowTitle>Account Details</UserShowTitle>
            <UserShowInfo>
              <FaUser className="showIcon" />
              <span className="showInfoTitle">Natanin Issa</span>
            </UserShowInfo>
            <UserShowInfo>
              <FaUser className="showIcon" />
              <span className="showInfoTitle">Natanin Issa</span>
            </UserShowInfo>
            <UserShowInfo>
              <FaUser className="showIcon" />
              <span className="showInfoTitle">Natanin Issa</span>
            </UserShowInfo>
            <UserShowInfo>
              <FaUser className="showIcon" />
              <span className="showInfoTitle">Natanin Issa</span>
            </UserShowInfo>
            <UserShowInfo>
              <FaUser className="showIcon" />
              <span className="showInfoTitle">Natanin Issa</span>
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
                  placeholder={`${rows.firstName}`}
                  readOnly
                />
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder={`${rows.lastName}`}
                />
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="firstName">FirstName</label>
                <input id="firstName" type="text" placeholder="Natanim" />
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="firstName">FirstName</label>
                <input id="firstName" type="text" placeholder="Natanim" />
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="firstName">FirstName</label>
                <input id="firstName" type="text" placeholder="Natanim" />
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="firstName">FirstName</label>
                <input id="firstName" type="text" placeholder="Natanim" />
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

export default AdopterView;
