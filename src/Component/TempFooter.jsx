import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import SocialLinks2 from './Socials/SocialLinks2';

const TempFooter = () => {
    const phoneNumber = '+8801720087583';
    const email = "lovelifememoriesbd@gmail.com"
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            {/* lovelife  */}
            <div>
                <img src="/LLM-Black-logo.png"
                    alt=""
                    className="h-14"
                />
                <p>LoveLife Memories Ltd.</p>
                <p>Make Your Memories Last Forever</p>
                <p>Mastering Candid, Glamorous & Photojournalistic Moments.</p>
            </div>
            {/* contact  */}
            <div>
                <header className="footer-title text-black text-lg">Contact</header>
                <Link to={`tel:${phoneNumber}`} className="flex gap-3 items-center">
                    <BsTelephone></BsTelephone>
                    {phoneNumber}
                </Link>
                <Link to={`mailto:${email}`} className="flex gap-3 items-center">
                    <AiOutlineMail></AiOutlineMail>
                    {email}
                </Link>
            </div>
            {/* social medias  */}
            <div>
                <header className="footer-title text-black text-lg">Social</header>
                <div className="grid grid-flow-col gap-4">
                    <SocialLinks></SocialLinks>
                    <SocialLinks2></SocialLinks2>
                </div>
            </div>
        </footer>
    );
};

export default TempFooter;