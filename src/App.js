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
import "./App.css";
import Virtulazitacio from "./pages/public/Virtualizacio";
import Szerverkonszolidacio from "./pages/public/Szerverkonszolidacio";
import Cegbemutato from "./pages/public/Cegbemutato";
import AdminOldalak from "./pages/admin/AdminOldalak";
import AdminEsemeny from "./pages/admin/AdminEsemeny";
import AdminRovatok from "./pages/admin/AdminRovatok";
import AdminCikk from "./pages/admin/AdminCikk";
import AdminPartner from "./pages/admin/AdminPartner";

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
          <Route path="/bemutato" element={<Cegbemutato />} />
          <Route path="/kapcsolat" element={<Kapcsolat />} />
          <Route path="/letoltesek" element={<Letoltes />} />
          <Route path="/kapcsolat" element={<Kapcsolat />} />
          <Route path="/virtualizacio" element={<Virtulazitacio />} />
          <Route
            path="/szerverkonszolidacio"
            element={<Szerverkonszolidacio />}
          />
        </Route>
      )}

      {/* Admin és User ugyanazon útvonalon */}
      {user && (
        <Route element={<AdminLayout />}>
          <Route path="/" element={<AdminKezdolap />} />
          <Route path="/AdminOldalak" element={<AdminOldalak />} />
          <Route path="/AdminEsemenyek" element={<AdminEsemeny />} />
          <Route path="/AdminRovatok" element={<AdminRovatok />} />
          <Route path="/AdminCikk" element={<AdminCikk />} />
          <Route path="/AdminPartner" element={<AdminPartner />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
