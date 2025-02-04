import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import useAuthContext from "../contexts/AuthContext";
import AdminNavigacio from "../pages/admin/AdminNavigacio";


export default function AdminLayout() {
    const { user } = useAuthContext();
    return user && user.role===2  ? <>  <AdminNavigacio /> <Outlet /> </> : <Navigate to="/bejelentkezes" />;
}
