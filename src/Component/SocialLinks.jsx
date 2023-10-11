import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

const SocialLinks = () => {
    const FBLink = 'https://www.facebook.com/LovelifeMemoriesBD'
    const InstagramLink = 'https://www.instagram.com/lovelifememories_bd/'
    const TikTokLink = 'https://www.tiktok.com/@lovelifememories_bd'
    return (
        <>
            <a href={FBLink} target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href={InstagramLink} target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href={TikTokLink} target="_blank" rel="noreferrer"><FaTiktok /></a>
        </>
    );
};

export default SocialLinks;