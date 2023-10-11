import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";


const CheckSession = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()


    if (!user) {
        return children;
    }

    return <Navigate to={location?.state ? location.state : '/'}></Navigate>
};

export default CheckSession;