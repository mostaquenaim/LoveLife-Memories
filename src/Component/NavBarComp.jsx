import { Link, NavLink } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import SocialLinks from "./SocialLinks";
const NavBarComp = () => {
    const { loading, user, logOut } = useContext(AuthContext)

    console.log("user-", user)
    const navLinks = <>
        <li><NavLink className='text-black bg-white' to='/'>Home</NavLink></li>
        <li><NavLink className='text-black bg-white' to='/services'>Services</NavLink></li>
        <li><NavLink className='text-black bg-white' to='/packages'>Packages</NavLink></li>
        {/* <li><NavLink className='text-black bg-white' to='/portfolio'>Portfolio</NavLink></li> */}
        <li><NavLink className='text-black bg-white' to='/contact'>Contact</NavLink></li>
        <li><NavLink className='text-black bg-white' to='/reviews'>Reviews</NavLink></li>
    </>

    // const phoneNumber = '+8801720087583';

    const handleLogOut = () => {
        try {
            logOut();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    return (
        <>
            <div className="text-center bg-transparent">
                <div className="mx-auto">
                    <Link className="md:hidden lg:inline-block btn bg-transparent hover:bg-transparent border-transparent shadow-transparent outline-none normal-case text-xl">
                        <img src="/lovelife-logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="navbar bg-transparent">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-transparent">
                                {navLinks}
                                {/* <Link to='login'>Login</Link> */}
                            </ul>
                        </div>
                        <div className="hidden group text-3xl lg:flex gap-3">
                            <SocialLinks />
                        </div>
                    </div>
                    <div className="navbar-center ">
                        <ul className="hidden lg:flex menu menu-horizontal px-1 gap-5">
                            {navLinks}
                        </ul>
                        <Link className="hidden md:inline-block lg:hidden btn bg-transparent hover:bg-transparent border-transparent shadow-transparent outline-none normal-case text-xl">
                            <img src="lovelife-logo.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="navbar-end md:text-3xl gap-3">
                        {/* <a href={`tel:${phoneNumber}`} className="">
                            <BsFillTelephoneFill />
                        </a> */}
                        {
                            loading ?
                                <span className="loading loading-spinner loading-lg"></span>
                                :
                                user ?
                                    <div className="flex items-center gap-2">
                                        <div className="">
                                            <img className="mx-auto h-10 rounded-full" src={user?.photoURL} alt="" />
                                            <small className="text-sm">{user?.displayName}</small>
                                        </div>
                                        <button onClick={handleLogOut} className="btn rounded-lg lg:flex bg-red-600">
                                            <TbLogout className="text-black"></TbLogout>
                                        </button>
                                    </div>
                                    : <Link to='/login' className="btn lg:flex">
                                        Login
                                    </Link>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBarComp;