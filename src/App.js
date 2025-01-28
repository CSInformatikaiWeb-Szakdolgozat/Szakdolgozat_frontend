import { Route, Routes } from "react-router-dom";
import Kezdolap from "./pages/vendeg/Kezdolap";
import VendegLayout from "./layouts/VendegLayout";
import Bejelentkezes from "./pages/Bejelentkezes";
import NoPage from "./pages/NoPage";
import AdminLayout from "./layouts/AdminLayout";
import useAuthContext from "./contexts/AuthContext";
import AdminKezdolap from "./pages/admin/AdminKezdolap";

function App() {
  const { user } = useAuthContext();

  return (
    <Routes>
      <Route path="*" element={<NoPage />} />

      <Route path="admin" element={<Bejelentkezes />}/>

      {/* Vendég layout */}
      {!user && (
                    <Route element={<VendegLayout />}>
                        <Route path="/" element={<Kezdolap />} />
                    </Route>
      )}

       {/* Admin és User ugyanazon útvonalon */}
       {user && (
                    <Route element={<AdminLayout />}>
                        <Route path="/" element={<AdminKezdolap />} />

                    </Route>
      )}

    </Routes>
  );
}

export default App;
