import SocialLinks from "./SocialLinks";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
    AiOutlineMail
} from "react-icons/ai";
const Footer = () => {
    const phoneNumber = '+8801720087583';
    const email = "lovelifememoriesbd@gmail.com"
    return (
        <div>
            <footer className="footer footer-center p-10 bg-primary text-primary-content">
                <aside>
                    <img src="lovelife-logo.png" alt="" />
                    <p className="font-bold">
                        LoveLife Memories Ltd. <br />Spreading Happiness since 2012
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <div>
                    Contact us
                    <div className="flex items-center gap-2">
                        <BsFillTelephoneFill />
                        <a href={`tel:${phoneNumber}`} className="font-semibold">
                            {phoneNumber}
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <AiOutlineMail />
                        <a href={`mailto:${email}`} className="font-semibold">
                            {email}
                        </a>
                    </div>
                </div>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <SocialLinks />
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;