import React, {useState} from 'react'
import { StyledContainer, Container, DashboardHome, Tittle } from './DashboardStyles'
import DashboardNavbar from "./../../componenets/EmployeeDashboard/DashboardNavbar"
import DashboardSidebar from '../../componenets/EmployeeDashboard/DashboardSidebar'
import AdopterTableView from "../../componenets/EmployeeDashboard/AdopterTable"
import EmployeeMenubar from '../../componenets/EmployeeDashboard/EmployeeMenubar'

const AdopterTable = () => {
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
            <br />
            <Tittle>Adopters</Tittle>
            <AdopterTableView />
        </DashboardHome>
      </Container>
    </StyledContainer>
  </>
  )
}

export default AdopterTable