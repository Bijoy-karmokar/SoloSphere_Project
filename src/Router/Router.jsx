import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Register from './../Pages/Register/Register';
import Login from './../Pages/Login/Login';
import JobDetails from "../components/JobRelated/JobDetails";
import axios from "axios";
import MyBids from "../Pages/MyBids/MyBids";
import ErrorPage from "../Pages/ErrorPage";
import AddJob from "../components/JobRelated/AddJob";


const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayouts,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                Component:Home
            },
            {
               path:"/add-job",
               Component:AddJob
            },
            {
                path:"/login",
                Component:Login
            },
            {
                path:"/register",
                Component:Register
            },
            {
                path:"jobs/:jobId",
                Component:JobDetails,
                loader:({params})=>axios(`${import.meta.env.VITE_API_KEY}/jobs/${params.jobId}`)
            },
            {
                path:'bids/:bidId',
                Component:MyBids,
                loader:({params})=> axios(`${import.meta.env.VITE_API_KEY}/bids/${params.bidId}`)
            },
        ]
    }
])
export default router;