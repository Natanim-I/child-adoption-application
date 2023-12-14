import React, {useState} from 'react'
import { StyledContainer, Container, DashboardHome } from './DashboardStyles'
import DashboardNavbar from "./../../componenets/EmployeeDashboard/DashboardNavbar"
import DashboardSidebar from '../../componenets/EmployeeDashboard/DashboardSidebar'
import EmployeeMenubar from '../../componenets/EmployeeDashboard/EmployeeMenubar'
import ApplicationSub from "../../componenets/EmployeeDashboard/ApplicationSubmitted"

const Dashboard = () => {
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
          <EmployeeMenubar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
          <DashboardNavbar toggleSidebar={toggleSidebar} toggleDarkTheme={toggleDarkTheme}/>
          <Container>
            <DashboardSidebar/>
            <DashboardHome>
                <ApplicationSub/>
            </DashboardHome>
          </Container>
        </StyledContainer>
      </>
  )
}

export default Dashboard