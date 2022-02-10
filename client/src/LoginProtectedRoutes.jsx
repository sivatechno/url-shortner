import React from "react";
import { Navigate,Outlet } from "react-router-dom";

export const LoginProtectedRoutes = () => {

    const hasToken = JSON.parse(sessionStorage.getItem('token'));

    return hasToken ? <Navigate to="/"/> : <Outlet/>

}