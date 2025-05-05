import React from "react";
import useAuthContext from "../contexts/AuthContext";
import EditorNavigacio from "../pages/editor/EditorNavigacio";
import { Navigate, Outlet } from "react-router-dom";

export default function EditorLayout() {
    const { user } = useAuthContext();
    return user && user.role===2  ? <>  <EditorNavigacio /> <Outlet /> </> : <Navigate to="/bejelentkezes" />;
}
