import image from "./../../../images/logo.jpg"
import { FaCalendar } from "react-icons/fa"
import {ItemContainer, ItemTitleContainer, UserContainer, ShowUser, ShowUserTop, ItemShowImg, ShowTopTitle,
FontWeight, ShowUserBottom, UserShowTitle, UserShowInfo, UpdateUser, UpdateTitle, UpdateForm,
UpdateItem, UpdateRight, MyPublish, ItemUpload, ItemUploadImg, ItemUpdateButton} from "./AdminProfileElements"
import { connect } from 'react-redux'

const AdminProfile = ({user}) => {
  return (
    <ItemContainer>
      <ItemTitleContainer>
        <h1>Profile</h1>
        {/* <Link to="">
          <ItemAddButton>Register</ItemAddButton>
        </Link> */}
      </ItemTitleContainer>
      <UserContainer>
      <ShowUser>
          <ShowUserTop>
            <ItemShowImg src={image} alt="User"/>
            <ShowTopTitle>
              <FontWeight bolder>{`${user.firstName} ${user.lastName}`}</FontWeight>
              <FontWeight>{`${user.email}`}</FontWeight>
            </ShowTopTitle>
          </ShowUserTop>
          <ShowUserBottom>
            <UserShowTitle>Employee Details</UserShowTitle>
            <UserShowInfo>
              <span className='showInfoTitle'>Phone:</span>
              <span className='showInfoTitle'>{user.phone}</span>
            </UserShowInfo>
            <UserShowInfo>
              <span className='showInfoTitle'>Date of Birth:</span>
              <span className='showInfoTitle'>{user.dateofbirth}</span>
            </UserShowInfo>
            <UserShowInfo>
              <span className='showInfoTitle'>Gender:</span>
              <span className='showInfoTitle'>{user.gender}</span>
            </UserShowInfo>
            <UserShowInfo>
              <span className='showInfoTitle'>Level of Education:</span>
              <span className='showInfoTitle'>{user.levelofeducation}</span>
            </UserShowInfo>
            <UserShowInfo>
              <span className='showInfoTitle'>Address:</span>
              <span className='showInfoTitle'>{user.address}</span>
            </UserShowInfo>
          </ShowUserBottom>
        </ShowUser>
        <UpdateUser>
          <UpdateTitle>Edit Information</UpdateTitle>
          <UpdateForm>
            <div>
            <UpdateItem>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" placeholder={user.firstName}/>
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" placeholder={user.lastName}/>
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder={user.email}/>
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="dateofbirth">Date of Birth</label>
                <input id="dateofbirth" type="date" placeholder={user.dateofbirth}/>
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="levelofeducation">Level of Education</label>
                <input id="levelofeducation" type="text" placeholder={user.levelofeducation}/>
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="levelofeducation">Address</label>
                <input id="levelofeducation" type="text" placeholder={user.address}/>
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="changepass">Change Password</label>
                <input id="changepass" type="password"/>
              </UpdateItem>
              <UpdateItem>
                <label htmlFor="repeatpass">Repeat Password</label>
                <input id="repeatpass" type="password"/>
              </UpdateItem>
            </div>
            <UpdateRight>
              <ItemUpload>
                <ItemUploadImg src={image} alt="User"/>
                <label htmlFor='file'>
                  <MyPublish/>
                </label>
                <input type="file" id="file" style={{display: "none"}}/>
              </ItemUpload>
              <ItemUpdateButton>Update</ItemUpdateButton>
            </UpdateRight>
          </UpdateForm>

        </UpdateUser>
      </UserContainer>
    </ItemContainer>
  )
}


const mapStateToProps = ({session}) => ({
  user: session.user
})

export default connect(mapStateToProps)(AdminProfile); 