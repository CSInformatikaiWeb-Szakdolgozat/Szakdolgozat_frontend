import { Route, Routes } from "react-router-dom";
import Kezdolap from "./pages/public/Kezdolap";
import VendegLayout from "./layouts/VendegLayout";
import Bejelentkezes from "./pages/Bejelentkezes";
import NoPage from "./pages/NoPage";
import useAuthContext from "./contexts/AuthContext";

import Kapcsolat from "./pages/public/Kapcsolat";
import Letoltes from "./pages/public/Letoltes";
import "./App.css";
import Virtulazitacio from "./pages/public/Virtualizacio";
import Szerverkonszolidacio from "./pages/public/Szerverkonszolidacio";
import Cegbemutato from "./pages/public/Cegbemutato";
import EditorKezdolap from "./pages/editor/EditorKezdolap";
import EditorLayout from "./layouts/EditorLayout";

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
        <Route element={<EditorLayout />}>
          <Route path="/" element={<EditorKezdolap />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
