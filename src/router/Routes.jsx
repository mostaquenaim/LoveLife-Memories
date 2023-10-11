import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../LoginAndReg/Login";
import About from "../pages/About";
import Services from "../pages/Services";
import PrivateRouteComp from "../PrivateRoutes/PrivateRouteComp";
import ServiceDetails from "../PrivateRoutes/ServiceDetails";
import Packages from "../pages/Packages";
import CheckSession from "../Auth/CheckSession";
import NotFound from "../Component/NotFound";
import Base from "../Base/Base";
import Contact from "../PrivateRoutes/Contact/Contact";
import Reviews from "../pages/Reviews";
import Portfolio from "../pages/Portfolio";
import PostReview from "../PrivateRoutes/Review/PostReview";

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
                        element: <PrivateRouteComp><ServiceDetails></ServiceDetails></PrivateRouteComp>,
                        loader: () => fetch('/services.json')
                    },
                    {
                        path: '/contact',
                        element: <PrivateRouteComp><Contact></Contact></PrivateRouteComp>,
                    },
                    {
                        path: '/reviews',
                        element: <Reviews></Reviews>,
                        // loader: () => fetch('/reviews.json')
                    },
                    {
                        path: '/postReview',
                        element: <PrivateRouteComp><PostReview></PostReview></PrivateRouteComp>,
                    },
                ]
            },
            {
                path: '/login',
                element: <CheckSession><Login></Login></CheckSession>,
            },
            // {
            //     path: '/about',
            //     element: <About></About>,
            // },
            // {
            //     path: '/services',
            //     element: <Services></Services>,
            // },
            // {
            //     path: '/packages',
            //     element: <Packages></Packages>,
            // },
            // {
            //     path: '/service/:id',
            //     element: <PrivateRouteComp><ServiceDetails></ServiceDetails></PrivateRouteComp>,
            //     loader: () => fetch('/services.json')
            // },

        ]
    }
]);

export default router;