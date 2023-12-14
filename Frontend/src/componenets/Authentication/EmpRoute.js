import { Navigate} from "react-router-dom";
import { connect } from "react-redux";

const AuthRoute = ({children, authenticated}) => {
            return authenticated ? (children) : (
                    <Navigate 
                        to={{
                            pathname: "/signin/organizationUsers",
                        }}
                    />
                ) 
            }

const mapStateToProps = ({session}) =>({
    authenticated: session.authenticated
}) 

export default connect(mapStateToProps)(AuthRoute);