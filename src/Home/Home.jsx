import About from "../pages/About/About";
import Footer from "../Component/Footer";
import Packages from "../pages/Packages/Packages";
import Services from "../pages/Services";
import Reviews from "../pages/Review/Reviews";
import { GoSponsorTiers } from "react-icons/go";
import ShowImages from "../Component/HomePageImages/ShowImages";
import { useEffect, useState } from "react";
import Images from "../Component/Marquee/Images";
import Marquee from "react-fast-marquee";
import OurWork from "../Component/Work/OurWork";
import WhyUs from "../pages/About/WhyUs";

const Home = () => {
    const [images, setImages] = useState([])
    const [images2, setImages2] = useState([])

    useEffect(() => {
        fetch('/images.json')
            .then(res => res.json())
            .then(data => setImages(data))

        fetch('/images2.json')
            .then(res => res.json())
            .then(data => setImages2(data))
    }, [])
    return (
        <div>

            <div className=" top-0 -z-20">

                <figure className="relative">
                    <img src="/lovelife-banner.jpg" className="bg-blend-normal" alt="" />
                    <div className="hidden lg:inline-block absolute h-full top-0 opacity-50  w-full bg-black"></div>
                    
                </figure>
                <ShowImages></ShowImages>
                
                <WhyUs></WhyUs>
                <OurWork></OurWork>
                {/* <div data-aos="fade-up">
                    <About></About>
                </div>
                <Services></Services>
                <Packages></Packages> */}
                <Reviews></Reviews>
                {/* <Footer></Footer> */}
            </div>

        </div>
    );
};

export default Home;