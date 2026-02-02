import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import AdminView from "./pages/Admin/AdminView";
import UserView from "./pages/Users/UserView";
import Navbar from "./Components/layout/Navbar.tsx";
import GeneralView from "./pages/General/GeneralView.tsx";
import Login from "./Components/General/Login.tsx";
import Register from "./Components/General/Register.tsx";
import ConfirCorreo from "./Components/General/confirCorreo.tsx";
import CamContra from "./Components/Users/CamContra.tsx"
import CodConfirm from "./Components/General/CodConfirm.tsx";
import CorreoConfirm from "./Components/General/CorreoConfirm.tsx";
import Perfil from "./pages/Users/Perfil.tsx";
import Cuenta from "./pages/Users/Cuenta.tsx";
import Configuracion from "./pages/Users/Configuracion.tsx";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<GeneralView />} />
            <Route path="/AdminView" element={<AdminView />} />
            <Route path="/UserView" element={<UserView />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/confirCorreo" element={<ConfirCorreo />} />
            <Route path="/CamContra" element={<CamContra />} />
            <Route path="/CodConfirm" element={<CodConfirm />} />
            <Route path="/CorreoConfirm" element={<CorreoConfirm />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/Cuenta" element={<Cuenta />} />
            <Route path="/Configuracion" element={<Configuracion />} />
        </Routes>
    </Router>
  )
}

export default App
