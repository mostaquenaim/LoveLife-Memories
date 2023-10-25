import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const CustomDrawer = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const liClass = `text-black bg-white hover:bg-primary border-red-100 border-2 ${!drawerOpen && 'opacity-0'}`
    const parentLiClass = `text-black bg-white rounded-lg relative group`
    const ulClass = `ml-4 absolute z-50 top-4 left-12 lg:top-7 left-0 mt-2 hidden hover:block group-hover:block`

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleLinkClick = () => {
        // Close the drawer when any link is clicked
        setDrawerOpen(false);
    };

    const links = <>
        <li><NavLink className={liClass} to='/'>Home</NavLink></li>
        <li tabIndex={0} className={parentLiClass}>
            <button className={liClass}>
                About
            </button>
            <ul className={ulClass} onClick={handleLinkClick}>
                <li >
                    <NavLink className={liClass} to='/about/why-us'>
                        Why Us
                    </NavLink>
                </li>
                <li onClick={handleLinkClick}>
                    <NavLink className={liClass} to='/about/achievements'>
                        Achievements
                    </NavLink>
                </li>
                <li onClick={handleLinkClick}>
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
            <ul className={ulClass} onClick={handleLinkClick}>
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

        <li onClick={handleLinkClick}><NavLink className='lg:hidden text-black bg-white hover:bg-primary' to='/join-as-investor'>Join as Investor</NavLink></li>

        <li onClick={handleLinkClick}><button className='lg:hidden text-black bg-white mt-1 hover:bg-primary' >Collaborate as a Partner</button></li>
        <li onClick={handleLinkClick}><button className='lg:hidden text-black bg-white mt-1 hover:bg-primary' >Referral Marketing</button></li>
        <li onClick={handleLinkClick}><button className='lg:hidden text-black bg-white mt-1 hover:bg-primary' >Franchise Available</button></li>
    </>

    return (
        <div>
            <div className={`drawer z-50 lg:hidden relative ${drawerOpen ? 'open' : ''}`}>
                {/* drawer open close  */}
                <input
                    type="checkbox"
                    id="panel-toggle"
                    className="relative sr-only peer"
                    checked={drawerOpen} 
                    onChange={toggleDrawer}
                    // defaultChecked
                />
                {/* drawer icon  */}
                <label
                    htmlFor="panel-toggle"
                    className="fixed top-0 left-0 inline-block p-4 bg-neutral transition-all duration-500 rounded-lg peer-checked:rotate-180 peer-checked:left-64"
                    
                >
                    <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
                    <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
                </label>
                <div
                    className="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0"
                >
                    <div className="px-6 py-4">
                    <ul className={`menu p-4 min-h-full bg-base-200 text-base-content`} >
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomDrawer;