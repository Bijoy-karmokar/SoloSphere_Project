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
import MyPostedJobs from "../components/JobRelated/MyPostedJobs";
import UpdatePostedJob from "../components/JobRelated/UpdatePostedJob";
import Bid_Request from "../Pages/MyBids/Bid_Request";
import PrivateRoute from './../components/Routes/PrivateRoute';


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
               element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
               path:"/my-posted-jobs",
               loader:()=>axios(`${import.meta.env.VITE_API_KEY}/jobs`),
               element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
              path:"/updateJob/:id",
              loader:({params})=>axios(`${import.meta.env.VITE_API_KEY}/jobs/${params.id}`),
              element:<PrivateRoute><UpdatePostedJob></UpdatePostedJob></PrivateRoute>
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
                element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader:({params})=>axios(`${import.meta.env.VITE_API_KEY}/jobs/${params.jobId}`)
            },
            {
                path:'/my-bids',
                element:<PrivateRoute><MyBids></MyBids></PrivateRoute>,
            },
            {
                path:'/bid-request',
                element:<PrivateRoute><Bid_Request></Bid_Request></PrivateRoute>,
            },

        ]
    }
])
export default router;