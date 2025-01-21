import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavigacio from "../pages/admin/AdminNavigacio";

function AdminLayout() {
  return (
    <>
      <AdminNavigacio />
      <Outlet />
    </>
  );
}

export default AdminLayout;
