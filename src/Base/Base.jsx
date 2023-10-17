import { Outlet } from "react-router-dom";
import NavBarComp from "../Component/NavBarComp";
import Footer from "../Component/Footer";

const Base = () => {
    return (
        <div>
            <NavBarComp></NavBarComp>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Base;