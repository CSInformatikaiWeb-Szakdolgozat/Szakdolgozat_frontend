import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Bejelentkezes from "./pages/admin/Bejelentkezes";
import Kezdolap from "./pages/public/Kezdolap";
import VendegLayOut from "./layouts/VendegLayOut";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <Routes>
      <Route path="/bejelentkezes" element={<Bejelentkezes />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="*" element={<NoPage />} />
      </Route>
      <Route path="/" element={<VendegLayOut />}>
        <Route index element={<Kezdolap />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
