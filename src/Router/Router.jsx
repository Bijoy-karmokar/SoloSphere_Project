import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Register from './../Pages/Register/Register';
import Login from './../Pages/Login/Login';


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
            // {
            //     path:"add-job",
            //     Component:Home
            // },
            // {
            //     path:true,
            //     Component:Home
            // },
        ]
    }
])
export default router;