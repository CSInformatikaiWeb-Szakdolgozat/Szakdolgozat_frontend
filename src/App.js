import { Route, Routes } from "react-router-dom";
import Kezdolap from "./pages/public/Kezdolap";
import VendegLayout from "./layouts/VendegLayout";
import Bejelentkezes from "./pages/Bejelentkezes";
import NoPage from "./pages/NoPage";
import AdminLayout from "./layouts/AdminLayout";
import useAuthContext from "./contexts/AuthContext";
import AdminKezdolap from "./pages/admin/AdminKezdolap";
import Kapcsolat from "./pages/public/Kapcsolat";
import Letoltes from "./pages/public/Letoltes";
function App() {
  const { user } = useAuthContext();

  return (
    <Routes>
      <Route path="*" element={<NoPage />} />

      <Route path="admin" element={<Bejelentkezes />} />

      {/* Vendég layout */}
      {!user && (
        <Route element={<VendegLayout />}>
          <Route path="/" element={<Kezdolap />} />
          <Route path="/kapcsolat" element={<Kapcsolat />} />
          <Route path="/letöltesek" element={<Letoltes />} />
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
