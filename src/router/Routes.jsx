import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import Packages from "../pages/Packages/Packages";
import NotFound from "../Component/NotFound";
import Base from "../Base/Base";
import Contact from "../pages/Contact/Contact";
import Reviews from "../pages/Reviews";
import Portfolio from "../pages/Portfolio";
import PostReview from "../pages/Review/PostReview";
import Team from "../pages/Team";
import JoinTeam from "../pages/Team/JoinTeam";
import Investor from "../pages/Investor";
import Crew from "../pages/Team/Crew";
import BOD from "../pages/Team/BOD";
import WhyUs from "../pages/About/WhyUs";
import Achievements from "../pages/About/Achievements";
import SisterConcerns from "../pages/About/SisterConcerns";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Base></Base>,
                children: [
                    {
                        path: '/',
                        element: <Home></Home>,
                    },
                    {
                        path: '/about',
                        element: <About></About>,
                    },
                    {
                        path: '/about/why-us',
                        element: <WhyUs></WhyUs>,
                    },
                    {
                        path: '/about/sister-concerns',
                        element: <SisterConcerns></SisterConcerns>,
                    },
                    {
                        path: '/about/achievements',
                        element: <Achievements></Achievements>,
                    },
                    {
                        path: '/services',
                        element: <Services></Services>,
                    },
                    {
                        path: '/packages',
                        element: <Packages></Packages>,
                    },
                    {
                        path: '/portfolio',
                        element: <Portfolio></Portfolio>,
                    },
                    {
                        path: '/service/:id',
                        element: <ServiceDetails></ServiceDetails>,
                        loader: () => fetch('/services.json')
                    },
                    {
                        path: '/contact',
                        element: <Contact></Contact>,
                    },
                    {
                        path: '/reviews',
                        element: <Reviews></Reviews>,
                        // loader: () => fetch('/reviews.json')
                    },
                    {
                        path: '/postReview',
                        element: <PostReview></PostReview>,
                    },
                    {
                        path: '/team',
                        element: <Team></Team>,
                    },
                    {
                        path: '/team/join-our-team',
                        element: <JoinTeam></JoinTeam>,
                    },
                    {
                        path: '/team/our-crew',
                        element: <Crew></Crew>,
                    },
                    {
                        path: '/team/board-of-directors',
                        element: <BOD></BOD>,
                    },
                    {
                        path: '/join-as-investor',
                        element: <Investor></Investor>,
                    },
                ]
            },

        ]
    }
]);

export default router;