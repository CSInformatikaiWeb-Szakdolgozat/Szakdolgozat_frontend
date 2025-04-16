import React from 'react'
import useAuthContext from '../contexts/AuthContext';
import AdminNavigacio from '../pages/admin/AdminNavigacio';
import { Navigate, Outlet } from 'react-router-dom';

export default function AdminLayout() {
    const { user } = useAuthContext();
    return user && user.role===1  ? <>  <AdminNavigacio /> <Outlet /> </> : <Navigate to="/bejelentkezes" />;
}