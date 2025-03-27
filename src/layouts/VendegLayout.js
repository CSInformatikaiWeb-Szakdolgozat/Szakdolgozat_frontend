import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import useAuthContext from "../contexts/AuthContext";
import Navigacio from "../pages/public/Navigacio";
import NavJobbOldal from "../pages/public/NavJobbOldal";
import NavigacioTeszt from "../pages/public/dinamikus/NavigacioTeszt"

export default function VendegLayout() {
    const { user } = useAuthContext(); 
      return !user ? <>  <NavigacioTeszt /> {/* <NavJobbOldal/> */} <Outlet /> </>  : <Navigate to="/" />;
}
