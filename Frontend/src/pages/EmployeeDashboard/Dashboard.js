import React, {useState} from 'react'
import { StyledContainer, Container, DashboardHome, Tittle } from './DashboardStyles'
import DashboardNavbar from "./../../componenets/EmployeeDashboard/DashboardNavbar"
import DashboardSidebar from '../../componenets/EmployeeDashboard/DashboardSidebar'
import Widget from '../../componenets/EmployeeDashboard/Widget'
import AdopterTableOverview from '../../componenets/EmployeeDashboard/AdopterOverview'
import AdoptionTableOverview from '../../componenets/EmployeeDashboard/AdoptionOverview'
import ChildrenTableOverView from '../../componenets/EmployeeDashboard/ChildrenOverview'
import EmployeeMenubar from '../../componenets/EmployeeDashboard/EmployeeMenubar'

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
                <Widget />
                <br />
                <Tittle>Adopter</Tittle>
                <AdopterTableOverview />
                <br />
                <Tittle>Children</Tittle>
                <ChildrenTableOverView />
                <br/>
                <Tittle>Adoptions</Tittle>
                <AdoptionTableOverview />
                <br />
            </DashboardHome>
          </Container>
        </StyledContainer>
      </>
  )
}

export default Dashboard