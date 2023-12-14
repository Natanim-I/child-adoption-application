import React, {useState} from 'react'
import { StyledContainer, Container, DashboardHome, Tittle, RegisterButton } from './DashboardStyles'
import Menubar from '../../componenets/AdminDashboard/MenuBar'
import DashboardNavbar from "./../../componenets/EmployeeDashboard/DashboardNavbar"
import DashboardSidebar from '../../componenets/EmployeeDashboard/DashboardSidebar'
import ChildrenTableView from "../../componenets/EmployeeDashboard/ChildrenTable"

const ChildrenTable = () => {
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
            <Tittle>Children</Tittle>
            <br />
            <RegisterButton to="/employee/children/registerchild">Register New Child</RegisterButton>
            <ChildrenTableView />
        </DashboardHome>
      </Container>
    </StyledContainer>
  </>
  )
}

export default ChildrenTable