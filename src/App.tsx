import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import AdminView from "./pages/Admin/AdminView";
import UserView from "./pages/Users/UserView";
import Navbar from "./Components/layout/Navbar.tsx";
import GeneralView from "./pages/General/GeneralView.tsx";
import Login from "./Components/General/Login.tsx";
import Register from "./Components/General/Register.tsx";
import ConfirCorreo from "./Components/General/confirCorreo.tsx";

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
        </Routes>
    </Router>
  )
}

export default App
