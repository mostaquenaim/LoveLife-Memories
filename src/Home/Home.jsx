import Reviews from "../pages/Review/Reviews";
import ShowImages from "../Component/HomePageImages/ShowImages";
import OurWork from "../Component/Work/OurWork";
import WhyUs from "../pages/About/WhyUs";
import { useLoaderData } from "react-router-dom";
import TwoCompSwiper from "../Component/Swiper/TwoCompSwiper";
import ChatBot from "../Component/Bots/ChatBot";
import Location from "../Component/SimpleMap";
import SimpleMap from "../Component/SimpleMap";

const Home = () => {
    const banners = useLoaderData()

    return (
        <div>

            <div className=" top-0 -z-20">

                <figure className="relative">
                    <TwoCompSwiper images={banners}></TwoCompSwiper>
                    <div className="hidden lg:inline-block absolute h-full top-0 opacity-50  w-full bg-black"></div>
                </figure>
                <section className="shadow-md">
                    <ShowImages></ShowImages>
                </section>

                <section className=" shadow-md">
                    <WhyUs></WhyUs>
                </section>

                <section className="shadow-md">
                    <OurWork></OurWork>
                </section>
                {/* <div data-aos="fade-up">
                    <About></About>
                </div>
                <Services></Services>
                <Packages></Packages> */}
                <section className="shadow-md">
                    <Reviews></Reviews>
                </section>
                {/* <section>
                    <SimpleMap></SimpleMap>
                </section> */}
                {/* <Footer></Footer> */}
            </div>

        </div>
    );
};

export default Home;