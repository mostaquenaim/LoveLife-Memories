import About from "../pages/About/About";
import Footer from "../Component/Footer";
import Packages from "../pages/Packages";
import Services from "../pages/Services";
import Reviews from "../pages/Reviews";
import PauseOnHovering from "../Flow-Bite-Components/PauseOnHovering";
import { Carousel } from 'flowbite-react';
import { GoSponsorTiers } from "react-icons/go";

const Home = () => {
    return (
        <div>

            <div className=" top-0 -z-20">

                <figure className="relative">
                    <img src="/lovelife-banner.jpg" className="bg-blend-normal" alt="" />
                    <div className="absolute h-full top-0 opacity-50 w-full bg-black"></div>
                    <button className="hidden absolute btn rounded-lg top-0 right-0 m-3 bg-neutral text-white border-white hover:bg-base-100 hover:text-black z-50 lg:flex gap-3">
                        <GoSponsorTiers className="text-lg"></GoSponsorTiers>
                        Join as an Investor
                        </button>
                </figure>
                {/* <div className="absolute inset-0 bg-white opacity-40"></div> */}
                <div data-aos="fade-up">
                    <About></About>
                </div>
                <Services></Services>
                <Packages></Packages>
                <Reviews></Reviews>
                {/* <PauseOnHovering></PauseOnHovering> */}
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;