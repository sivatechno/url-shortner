import React from "react";
import { Navigate,Outlet } from "react-router-dom";

export const ProtectedRoute = () => {

    const hasToken = JSON.parse(sessionStorage.getItem('token'));

    return hasToken ? <Outlet/> : <Navigate to="/login"/>

}