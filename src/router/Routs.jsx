import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "../pages/home/Home";
import Donation from "../pages/donation/Donation";
import Statistic from "../pages/statistic/Statistic";
import CardDetails from "../components/card/CardDetails";
import DonatedCard from "../components/donatedCard/DonatedCard";
import ErrorPage from "../pages/errorPage/ErrorPage";


const Routs =createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element:<Home></Home>,
                loader: () => fetch('blog.json')
            },
            {
                path: "/donation",
                element:<Donation></Donation>
            },
            {
                path:"/statistic",
                element: <Statistic></Statistic>
            },
            {
                path: "/cards/:id",
                element: <CardDetails></CardDetails>,
                loader: () => fetch('/blog.json')
            },
            {
                path: '/donatedCard',
                element: <DonatedCard></DonatedCard>,
            }
        ]
    }
])

export default Routs;