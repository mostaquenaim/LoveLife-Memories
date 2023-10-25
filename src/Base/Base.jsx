import { Outlet } from "react-router-dom";
import NavBarComp from "../Component/Navigation/NavBarComp";
import Footer from "../Component/Footer";
import ChatBot from "../Component/Bots/ChatBot";
import PhoneBot from "../Component/Bots/PhoneBot";

const Base = () => {
    return (
        <div>
            <NavBarComp></NavBarComp>
            <ChatBot></ChatBot>
            <PhoneBot></PhoneBot>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Base;