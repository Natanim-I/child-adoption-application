import image from "./../../../images/logo.jpg"
import { FaCalendar } from "react-icons/fa"
import {ItemContainer, ItemTitleContainer, UserContainer, ShowUser, ShowUserTop, ItemShowImg, ShowTopTitle,
FontWeight, ShowUserBottom, UserShowTitle, UserShowInfo, UpdateUser, UpdateTitle, UpdateForm,
UpdateItem, UpdateRight, MyPublish, ItemUpload, ItemUploadImg, ItemUpdateButton} from "./EmployeeProfileElements"
import { connect } from 'react-redux'

const EmployeeProfile = ({user}) => {
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
              <FontWeight bolder>{user.firstName} {user.lastName}</FontWeight>
              <FontWeight>{user.email}</FontWeight>
            </ShowTopTitle>
          </ShowUserTop>
          <ShowUserBottom>
            <UserShowTitle>Account Details</UserShowTitle>
            <UserShowInfo>
              <FaCalendar className='showIcon'/>
              <span className='showInfoTitle'>Date of Birth:</span>
              <span className='showInfoTitle'>{user.dateofbirth}</span>
            </UserShowInfo>
          </ShowUserBottom>
        </ShowUser>
        <UpdateUser>
          <UpdateTitle>Edit Information</UpdateTitle>
          <UpdateForm >
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
                <label htmlFor="dateofbirth">Date of Birth</label>
                <input id="dateofbirth" type="date"/>
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

export default connect(mapStateToProps)(EmployeeProfile); 