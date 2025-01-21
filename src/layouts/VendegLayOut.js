import React from "react";

import { Outlet } from "react-router-dom";
import Navigacio from "../pages/public/Navigacio";

export default function VendegLayout() {
  return (
    <>
      <Navigacio />
      <Outlet />
    </>
  );
}
