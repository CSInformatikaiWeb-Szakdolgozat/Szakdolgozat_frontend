import React from 'react'

function AdminLayout() {
  return (
    <div>AdminLayout</div>
  )
}

export default function AdminLayout() {
    const { user } = useAuthContext();
    return user && user.role===1  ? <>  <AdminNavigacio /> <Outlet /> </> : <Navigate to="/bejelentkezes" />;
}