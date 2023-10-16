import { Link } from 'react-router-dom';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import SocialLinks2 from './Socials/SocialLinks2';
import SocialLinks from './Socials/SocialLinks';

const Footer = () => {
    const phoneNumber = '+8801720087583';
    const email = "lovelifememoriesbd@gmail.com"
    const LoveLifeFooter = <>
        <img src="/LLM-White-logo.png"
            alt=""
            className="h-14"
        />
        {/* <p className='text-lg'>LoveLife Memories Ltd.</p> */}
        <p className='text-lg italic font-bold'>Make Your Memories Last Forever</p>
        <p className='opacity-80'>Mastering Candid, Glamorous & Photojournalistic Moments.</p>
    </>
    return (
        <footer className="
        footer p-10 bg-neutral 
        text-neutral-content flex flex-col 
        lg:flex-row justify-between items-center lg:items-start">
            {/* lovelife  */}
            <div className='lg:hidden flex flex-col 
            items-center text-center justify-center'>
                {LoveLifeFooter}
            </div>
            {/* contact  */}
            <div className='flex flex-col items-center'>
                <header className="footer-title text-base-100 text-lg">Contact</header>
                <Link to={`tel:${phoneNumber}`} className="flex gap-3 items-center">
                    <BsTelephone></BsTelephone>
                    {phoneNumber}
                </Link>
                <Link to={`mailto:${email}`} className="flex gap-3 items-center">
                    <AiOutlineMail></AiOutlineMail>
                    {email}
                </Link>
            </div>
            {/* lovelife middle  */}
            <div className='hidden lg:flex flex-col 
            items-center text-center justify-center'>
                {LoveLifeFooter}
            </div>
            {/* social medias  */}
            <div className='flex flex-col items-center'>
                <header className="footer-title text-base-100 text-lg">Our Socials</header>
                <div className="grid grid-flow-col gap-4">
                    <SocialLinks></SocialLinks>
                    <SocialLinks2></SocialLinks2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;