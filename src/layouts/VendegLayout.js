import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import useAuthContext from "../contexts/AuthContext";
import Navigacio from "../pages/public/Navigacio";
import NavJobbOldal from "../pages/public/NavJobbOldal";

export default function VendegLayout() {
    const { user } = useAuthContext(); 
      return !user ? <>  <Navigacio /> {/* <NavJobbOldal/> */} <Outlet /> </>  : <Navigate to="/" />;
}
