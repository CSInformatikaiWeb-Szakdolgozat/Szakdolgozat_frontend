import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import useAuthContext from "../contexts/AuthContext";
import Navigacio from "../pages/vendeg/Navigacio";

export default function VendegLayout() {
    const { user } = useAuthContext(); 
      return !user ? <>    <Navigacio /> <Outlet /> </>  : <Navigate to="/" />;
}