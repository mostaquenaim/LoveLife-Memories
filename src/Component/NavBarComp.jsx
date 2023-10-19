import { Link, NavLink } from "react-router-dom";
import SocialLinks from "./Socials/SocialLinks";
import { GoSponsorTiers } from "react-icons/go";
const NavBarComp = () => {

    const liClass = "text-black bg-white hover:bg-primary border-red-100 border-2"
    const parentLiClass = 'text-black bg-white rounded-lg relative group'
    const ulClass = 'ml-4 absolute z-50 top-0 mt-2 hidden hover:block group-hover:block'
    const navLinks = <>
        <li><NavLink className={liClass} to='/'>Home</NavLink></li>
        <li tabIndex={0} className={parentLiClass}>
            <NavLink className={liClass} to='/about'>
                About
            </NavLink>
            <ul className={ulClass}>
                <li>
                    <NavLink className={liClass} to='/about/why-us'>
                        Why Us
                    </NavLink>
                </li>
                <li>
                    <NavLink className={liClass} to='/about/achievements'>
                        Achievements
                    </NavLink>
                </li>
                <li>
                    <NavLink className={liClass} to='/about/sister-concerns'>
                        Sister Concerns
                    </NavLink>
                </li>
            </ul>
        </li>

        <li><NavLink className={liClass} to='/packages'>Packages</NavLink></li>
        <li><NavLink className={liClass} to='/portfolio'>Portfolio</NavLink></li>

        <li tabIndex={0} className={parentLiClass}>
            <NavLink className={liClass} to='/team'>
                Our Team
            </NavLink>
            <ul className={ulClass}>
                <li className="w-36">
                    <NavLink className={liClass} to='/team/our-crew'>
                        Our Crew
                    </NavLink>
                </li>
                <li>
                    <NavLink className={liClass} to='/team/join-our-team'>
                        Join Our Team
                    </NavLink>
                </li>
                <li>
                    <NavLink className={liClass} to='/team/board-of-directors'>
                        Board of Directors (BOD)
                    </NavLink>
                </li>
            </ul>
        </li>

        <li><NavLink className='lg:hidden text-black bg-white hover:bg-primary' to='/join-as-investor'>Join as Investor</NavLink></li>
    </>
    const image = "/LLM-White-logo.png"

    return (
        <>
            <div className="text-center bg-neutral fixed w-full z-50">
                <div className="mx-auto">
                    <Link className="hidden lg:inline-block bg-transparent hover:bg-transparent border-transparent shadow-transparent outline-none normal-case text-xl">
                        <img src={image} alt="logo" className="h-16 mx-auto" />
                        {/* <span className="font-luxurious font-bold text-base-100 text-5xl relative">
                            <span className="absolute top-0 left-0 text-neutral -z-1">LoveLife Memories</span>
                            LoveLife Memories
                        </span> */}
                        {/* <span className="font-luxurious font-medium text-base-100 text-5xl">LoveLife Memories</span> */}
                    </Link>
                </div>
                <div className="navbar bg-neutral fixed">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden hover:bg-neutral">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#f2eded">
                                    <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-transparent">
                                {navLinks}
                            </ul>
                        </div>
                        <div className="hidden group text-3xl lg:flex gap-3">
                        </div>
                    </div>
                    <div className="navbar-center ">
                        <ul className="hidden lg:flex menu menu-horizontal px-1 gap-5">
                            {navLinks}
                        </ul>
                        <Link className=" md:inline-block lg:hidden btn bg-transparent hover:bg-transparent border-transparent shadow-transparent outline-none normal-case text-xl">
                            <img src={image} alt="logo" className="h-10 md:h-16" />
                        </Link>
                    </div>
                    <div className="navbar-end md:text-3xl gap-3">
                        <SocialLinks />
                    </div>
                </div>
                <Link to='/join-as-investor' className="hidden absolute btn rounded-lg top-0 right-0 m-3 bg-neutral text-white border-white hover:bg-base-100 hover:text-black z-50 lg:flex gap-3">
                    <GoSponsorTiers className="text-lg"></GoSponsorTiers>
                    Join as an Investor
                </Link>
            </div>
        </>
    );
};

export default NavBarComp;