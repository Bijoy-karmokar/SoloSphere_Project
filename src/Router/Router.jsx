import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Register from './../Pages/Register/Register';
import Login from './../Pages/Login/Login';
import JobDetails from "../components/JobRelated/JobDetails";
import axios from "axios";


const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayouts,
        children:[
            {
                index:true,
                Component:Home
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
            // {
            //     path:true,
            //     Component:Home
            // },
        ]
    }
])
export default router;