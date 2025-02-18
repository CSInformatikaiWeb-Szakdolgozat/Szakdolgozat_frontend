import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import useAuthContext from "../contexts/AuthContext";
import EditorNavigacio from "../pages/editor/EditorNavigacio";


export default function EditorLayout() {
    const { user } = useAuthContext();
    return user && user.role===2  ? <>  <EditorNavigacio /> <Outlet /> </> : <Navigate to="/bejelentkezes" />;
}
