import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import useAuthContext from "../contexts/AuthContext";
import { SuperAdminNav } from "../pages/superAdmin/SuperAdminNav";



export default function SuperAdminLayout() {
    const { user } = useAuthContext();
    return user && user.role===1  ? <>  <SuperAdminNav /> <Outlet /> </> : <Navigate to="/bejelentkezes" />;
}
