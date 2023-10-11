import { Outlet } from "react-router-dom";
import NavBarComp from "../Component/NavBarComp";

const Base = () => {
    return (
        <div>
            <NavBarComp></NavBarComp>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Base;