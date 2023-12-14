import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages";
import About from "./pages/About";
import Location from "./pages/Location";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Donate from "./pages/Donate";
import SignInAdmin from "./pages/AdminSignIn";
import SignInEmployee from "./pages/EmployeeSignIn";
import SignInUser from "./pages/SignInUser";
import ForgotPass from "./pages/ForgotPass";
import EmailSent from "./pages/EmailSent";
import Dahboard from "./pages/AdminDahboard/Dahboard";
import AuthRoute from "./componenets/Authentication/AuthRoute";
import EmployeeTable from "./pages/AdminDahboard/EmployeeTable";
import AdopterTable from "./pages/AdminDahboard/AdopterTable";
import DonationTable from "./pages/AdminDahboard/DonationTable";
import AdoptionTable from "./pages/AdminDahboard/AdoptionTable";
import ChildrenTable from "./pages/AdminDahboard/ChildrenTable";
import AdopterView from "./pages/AdminDahboard/AdopterView";
import EmployeeView from "./pages/AdminDahboard/EmployeeView";
import ChildView from "./pages/AdminDahboard/ChildView";
import RegisterEmployee from "./pages/AdminDahboard/RegisterEmployee";
import AdminProfile from "./pages/AdminDahboard/AdminProfile";
import EmployeeDashboard from "./pages/EmployeeDashboard/Dashboard";
import ForgotEmpPass from "./pages/ForgotEmpPass";
import ForgotAdopterPass from "./pages/ForgotAdopterPass";
import EmpRoute from "./componenets/Authentication/EmpRoute";
import EmpChildrenTable from "./pages/EmployeeDashboard/ChildrenTable";
import EmpAdopterTable from "./pages/EmployeeDashboard/AdopterTable";
import EmpAdopterView from "./pages/EmployeeDashboard/AdopterView";
import EmployeeProfile from "./pages/EmployeeDashboard/EmployeeProfile";
import EmpAdoptionTable from "./pages/EmployeeDashboard/AdoptionTable";
import RegisterChild from "./pages/EmployeeDashboard/RegisterChild";
import AdopterPasswordRes from "./pages/AdopterPassReset";
import EmployeePasswordRes from "./pages/EmployeePassReset";
import AdminPasswordRes from "./pages/AdminPassReset";
import AdopterDashboard from "./pages/AdopterDashboard/Dashboard";
import AdopterRoute from "./componenets/Authentication/AdopterRoute";
import AdopterAdoptionTable from "./pages/AdopterDashboard/AdoptionTable";
import Stage1 from "./pages/AdopterDashboard/AdoptionStage1";
import ApplicationSubmit from "./pages/AdopterDashboard/ApplicationSubmit";
import AdoptionView from "./pages/AdminDahboard/AdoptionView";
import EmpAdoptionView from "./pages/EmployeeDashboard/AdoptionView";
import ApplicationSubm from "./pages/EmployeeDashboard/ApplicationSubmit";
import ApplicationDecl from "./pages/EmployeeDashboard/ApplicationDecline";
import AdopterAdoptionView from "./pages/AdopterDashboard/AdoptionView";

function App({ checked }) {
  return (
    <Router>
      {checked && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/signin">
            <Route index element={<SignInUser />} />
            <Route path="users" element={<SignInUser />} />
            <Route path="organizationUsers" element={<SignInEmployee />} />
            <Route path="organizationUsers/admin" element={<SignInAdmin />} />
          </Route>

          <Route path="/donate" element={<Donate />} />
          <Route path="/forgotpassword" element={<ForgotPass />} />
          <Route path="/forgotEmppassword" element={<ForgotEmpPass />} />
          <Route
            path="/forgotadopterpassword"
            element={<ForgotAdopterPass />}
          />

          <Route
            path="/passwordreset/:userId/:resetString"
            element={<AdopterPasswordRes />}
          />
          <Route
            path="/passwordreset/employee/:userId/:resetString"
            element={<EmployeePasswordRes />}
          />
          <Route
            path="/passwordreset/admin/:userId/:resetString"
            element={<AdminPasswordRes />}
          />

          <Route path="/emailsent">
            <Route index element={<EmailSent />} />
            <Route path=":userEmail" element={<EmailSent />} />
            <Route path=":userEmail/:reset" element={<EmailSent />} />
          </Route>

          <Route path="/admin">
            <Route
              index
              element={
                <AuthRoute>
                  <Dahboard />
                </AuthRoute>
              }
            />
            <Route
              path="dashboard"
              element={
                <AuthRoute>
                  <Dahboard />
                </AuthRoute>
              }
            />

            <Route path="employees">
              <Route
                index
                element={
                  <AuthRoute>
                    <EmployeeTable />
                  </AuthRoute>
                }
              />
              <Route
                path="employees"
                element={
                  <AuthRoute>
                    <EmployeeTable />
                  </AuthRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <AuthRoute>
                    <EmployeeView />
                  </AuthRoute>
                }
              />
              <Route
                path="registeremployee"
                element={
                  <AuthRoute>
                    <RegisterEmployee />
                  </AuthRoute>
                }
              />
            </Route>

            <Route path="adopters">
              <Route
                index
                element={
                  <AuthRoute>
                    <AdopterTable />
                  </AuthRoute>
                }
              />
              <Route
                path="adopters"
                element={
                  <AuthRoute>
                    <AdopterTable />
                  </AuthRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <AuthRoute>
                    <AdopterView />
                  </AuthRoute>
                }
              />
            </Route>

            <Route path="children">
              <Route
                index
                element={
                  <AuthRoute>
                    <ChildrenTable />
                  </AuthRoute>
                }
              />
              <Route
                path="children"
                element={
                  <AuthRoute>
                    <ChildrenTable />
                  </AuthRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <AuthRoute>
                    <ChildView />
                  </AuthRoute>
                }
              />
            </Route>

            <Route path="adoptions">
              <Route
                index
                element={
                  <AuthRoute>
                    <AdoptionTable />
                  </AuthRoute>
                }
              />
              <Route
                path="adopters"
                element={
                  <AuthRoute>
                    <AdoptionTable />
                  </AuthRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <AuthRoute>
                    <AdoptionView />
                  </AuthRoute>
                }
              />
            </Route>

            <Route
              path="donations"
              element={
                <AuthRoute>
                  <DonationTable />
                </AuthRoute>
              }
            />

            <Route
              path="profile"
              element={
                <AuthRoute>
                  <AdminProfile />
                </AuthRoute>
              }
            />
          </Route>

          <Route path="/employee">
            <Route
              index
              element={
                <EmpRoute>
                  <EmployeeDashboard />
                </EmpRoute>
              }
            />
            <Route
              path="dashboard"
              element={
                <EmpRoute>
                  <EmployeeDashboard />
                </EmpRoute>
              }
            />

            <Route path="adopters">
              <Route
                index
                element={
                  <EmpRoute>
                    <EmpAdopterTable />
                  </EmpRoute>
                }
              />
              <Route
                path="adopters"
                element={
                  <EmpRoute>
                    <EmpAdopterTable />
                  </EmpRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <EmpRoute>
                    <EmpAdopterView />
                  </EmpRoute>
                }
              />
            </Route>

            <Route path="children">
              <Route
                index
                element={
                  <EmpRoute>
                    <EmpChildrenTable />
                  </EmpRoute>
                }
              />
              <Route
                path="children"
                element={
                  <EmpRoute>
                    <EmpChildrenTable />
                  </EmpRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <EmpRoute>
                    <EmpChildrenTable />
                  </EmpRoute>
                }
              />
              <Route
                path="registerchild"
                element={
                  <EmpRoute>
                    <RegisterChild />
                  </EmpRoute>
                }
              />
            </Route>

            <Route path="adoptions">
              <Route
                index
                element={
                  <EmpRoute>
                    <EmpAdoptionTable />
                  </EmpRoute>
                }
              />
              <Route
                path="adoptions"
                element={
                  <EmpRoute>
                    <EmpAdoptionTable />
                  </EmpRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <EmpRoute>
                    <EmpAdoptionView />
                  </EmpRoute>
                }
              />
            </Route>

            <Route
              path="applicationApproved"
              element={
                <EmpRoute>
                  <ApplicationSubm />
                </EmpRoute>
              }
            />
            <Route
              path="applicationDeclined"
              element={
                <EmpRoute>
                  <ApplicationDecl />
                </EmpRoute>
              }
            />

            <Route
              path="profile"
              element={
                <EmpRoute>
                  <EmployeeProfile />
                </EmpRoute>
              }
            />
          </Route>

          <Route path="/adopter">
            <Route
              index
              element={
                <AdopterRoute>
                  <AdopterDashboard />
                </AdopterRoute>
              }
            />
            <Route
              path="dashboard"
              element={
                <AdopterRoute>
                  <AdopterDashboard />
                </AdopterRoute>
              }
            />

            <Route path="adoptions">
              <Route
                index
                element={
                  <AdopterRoute>
                    <AdopterAdoptionTable />
                  </AdopterRoute>
                }
              />
              <Route
                path="adoptions"
                element={
                  <AdopterRoute>
                    <AdopterAdoptionTable />
                  </AdopterRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <AdopterRoute>
                    <AdopterAdoptionView />
                  </AdopterRoute>
                }
              />
            </Route>

            <Route path="newadoption">
              <Route
                index
                element={
                  <AdopterRoute>
                    <Stage1 />
                  </AdopterRoute>
                }
              />
              <Route
                path="stage1"
                element={
                  <AdopterRoute>
                    <Stage1 />
                  </AdopterRoute>
                }
              />
              <Route
                path="stage2"
                element={
                  <AdopterRoute>
                    <Stage1 />
                  </AdopterRoute>
                }
              />
              <Route
                path="registerchild"
                element={
                  <AdopterRoute>
                    <Stage1 />
                  </AdopterRoute>
                }
              />
            </Route>

            <Route
              path="stage2"
              element={
                <AdopterRoute>
                  <Stage1 />
                </AdopterRoute>
              }
            />

            <Route
              path=":email"
              element={
                <AdopterRoute>
                  <ApplicationSubmit />
                </AdopterRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </Router>
  );
}

const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});

export default connect(mapStateToProps)(App);
