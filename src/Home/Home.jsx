import About from "../pages/About";
import Footer from "../Component/Footer";
import Packages from "../pages/Packages";
import Services from "../pages/Services";
import Reviews from "../pages/Reviews";

const Home = () => {
    return (
        <div>
            <div className="absolute top-0 -z-20">
                <img src="lovelife-banner.jpg" className="bg-blend-normal" alt="" />
                {/* <div className="absolute inset-0 bg-white opacity-40"></div> */}
                <div data-aos="fade-up">
                <About></About></div>
                <Services></Services> 
                <Packages></Packages>
                <Reviews></Reviews>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Home;