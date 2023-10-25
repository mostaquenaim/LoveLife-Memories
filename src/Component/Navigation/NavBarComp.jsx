import { Link, NavLink } from "react-router-dom";
import SocialLinks from "../Socials/SocialLinks";
import { GoSponsorTiers } from "react-icons/go";
import Drawer from "./Drawer";
import { useContext } from "react";
import { ProjectContext } from "../Context/Provider";
import Spinner from "../Spinner/Spinner";
import CustomDrawer from "./CustomDrawer";
const NavBarComp = () => {

    const liClass = "text-black bg-white hover:bg-primary border-red-100 border-2"
    const parentLiClass = 'text-black bg-white rounded-lg relative group'
    const ulClass = 'ml-4 absolute z-50 top-3 lg:top-7 left-0 mt-2 hidden hover:block group-hover:block'

    const navLinks = <>
        <li><NavLink className={liClass} to='/'>Home</NavLink></li>
        <li tabIndex={0} className={parentLiClass}>
            <button className={liClass}>
                About
            </button>
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
            <button className={liClass}>
                Team
            </button>
            <ul className={ulClass}>
                <li className="">
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

    const { loading } = useContext(ProjectContext)

    return (
        <>
            <div className="text-center bg-neutral fixed w-full z-50">
                <div className="absolute top-0 left-0 m-5 gap-1 flex text-white  text-sm">
                    <button className="opacity-80 hover:opacity-90 text-xs">Collaborate as a Partner</button>
                    <span className="opacity-50">|</span>
                    <button className="opacity-80 hover:opacity-90 text-xs">Referral Marketing</button>
                    <span className="opacity-50">|</span>
                    <button className="opacity-80 hover:opacity-90 text-xs">Franchise Available</button>
                </div>
                <div className="mx-auto">
                    <Link className="hidden lg:inline-block bg-transparent hover:bg-transparent border-transparent shadow-transparent outline-none normal-case text-xl">
                        <img src={image} alt="logo" className="h-16 mx-auto" />
                    </Link>

                </div>
                <div className="navbar bg-neutral fixed">
                    <div className="navbar-start">
                        {
                            loading ?
                                <Spinner></Spinner>
                                :
                                <CustomDrawer></CustomDrawer>
                        }
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