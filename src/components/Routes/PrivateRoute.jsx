import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} =useAuth();
    const location = useLocation();

    if(loading){
        return <span>Loading...</span>
    }
    if(!user){
        return <Navigate to="/login" state={location?.pathname} replace={true}></Navigate>
    }
    return children;
};

export default PrivateRoute;