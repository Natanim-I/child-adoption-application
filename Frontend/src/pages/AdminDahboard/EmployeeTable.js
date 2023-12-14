import React, {useState} from 'react'
import { StyledContainer, Container, DashboardHome, Tittle, RegisterButton } from './DashboardStyles'
import Menubar from '../../componenets/AdminDashboard/MenuBar'
import DashboardNavbar from "./../../componenets/AdminDashboard/DashboardNavbar"
import DashboardSidebar from '../../componenets/AdminDashboard/DashboardSidebar'
import EmployeeTableView from "../../componenets/AdminDashboard/EmployeeTable"

const EmployeeTable = () => {
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
            <br />
            <br />
            <Tittle>Employees</Tittle>
            <br />
            <RegisterButton to="/admin/employees/registeremployee">Register New Employee</RegisterButton>
            <EmployeeTableView />
        </DashboardHome>
      </Container>
    </StyledContainer>
  </>
  )
}

export default EmployeeTable