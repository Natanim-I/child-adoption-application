import React, {useState} from 'react'
import { StyledContainer, Container, DashboardHome} from './DashboardStyles'
import Menubar from '../../componenets/AdminDashboard/MenuBar'
import DashboardNavbar from "./../../componenets/AdminDashboard/DashboardNavbar"
import DashboardSidebar from '../../componenets/AdminDashboard/DashboardSidebar'
import AdminProf from "../../componenets/AdminDashboard/AdminProfile"

const AdminProfile = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleSidebar = () => {
            setIsOpen(!isOpen);
        }      
        const [isDark, setIsDark] = useState(false);

        const toggleDarkTheme = () => {
            setIsDark(!isDark);
        }
  return (
    <>
    <StyledContainer isDark={isDark} toggleDarkTheme={toggleDarkTheme}>
      <Menubar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <DashboardNavbar toggleSidebar={toggleSidebar} toggleDarkTheme={toggleDarkTheme}/>
      <Container>
        <DashboardSidebar/>
        <DashboardHome>
          <AdminProf />
        </DashboardHome>
      </Container>
    </StyledContainer>
  </>
  )
}

export default AdminProfile