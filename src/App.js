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
import EditorLayout from "./layouts/EditorLayout";
import CikkTable from "./components/CikkTable";
import MenuTable from "./components/MenuTable";
import PartnerTable from "./components/PartnerTable";
import BesorolasTable from "./components/BesorolasTable";
import CeginfoTable from "./components/CeginfoTable";
import EsemenyTable from "./components/EsemenyTable";
import TaroloKonszolidacio from "./pages/public/TaroloKonszolidacio";
import Megoldasok from "./pages/public/Megoldasok";
import Rendezvenyek from "./pages/public/Rendezvenyek";
import { useContext } from "react";
import AdatokContext from "./contexts/AdatokContext";
import General from "./pages/public/General";

function App() {
  const { user, loading } = useAuthContext();
  const {cikkLista} = useContext(AdatokContext);

  if (loading) {
    return (
      <div className="loading-body">
        <div className="center-loader">Az oldal betöltése folyamatban...</div>
      </div>
    );
  }
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
          <Route path="/virtualizacio" element={<Virtulazitacio />} />
          <Route path="/szerverkonszolidacio" element={<Szerverkonszolidacio />} />
          <Route path="/tarolokonszolidacio" element={<TaroloKonszolidacio />}/>
          <Route path="/megoldasok" element={<Megoldasok />}/>
          <Route path="/rendezvenyek" element={<Rendezvenyek />} />
          <Route path="/letoltesek" element={<Letoltes />} />
          
          {
            cikkLista.map((elem, index) => {
              console.log(elem.page_link);
              return (
                <Route path={elem.page_link} element={<General elem={elem} key={index} index={index} />} />
              )
            })
          }
        </Route>
        
        
        
      )}

      {/* Admin és User ugyanazon útvonalon */}
      {user && (
        <Route element={<EditorLayout />}>
          <Route path="/cikkoldal" element={<CikkTable />} />
          <Route path="/ceginfooldal" element={<CeginfoTable />} />
          <Route path="/menuoldal" element={<MenuTable />} />
          <Route path="/esemenyekoldal" element={<EsemenyTable />} />
          <Route path="/besorolasoldal" element={<BesorolasTable />} />
          <Route path="/partneroldal" element={<PartnerTable />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
