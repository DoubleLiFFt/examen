import Button from "../example/Button.tsx";
import { Link, useNavigate } from 'react-router-dom';
import NotificationBell from './NotificationBell';

export default function Navbar() {
    const navigate = useNavigate();
    const isLoggedIn = sessionStorage.getItem("userRole");
    const handleLogout = () => {
        sessionStorage.removeItem("userRole");
        navigate("/Login");
    };

    return (
        <nav className="sticky top-0 z-50 flex justify-between px-4 md:px-10 bg-[#1e1e1e]/80 backdrop-blur-md h-auto min-h-[5rem] py-4 md:py-0 items-center border-b border-[#2a2a2a] shadow-xl">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-black text-black shrink-0">
                    $
                </div>
                <Link to="/" className="text-lg md:text-xl font-bold tracking-tighter text-white hover:text-emerald-400 transition-colors">
                    FINANZAS<span className="text-emerald-500">APP</span>
                </Link>
            </div>
            <div className="flex items-center gap-3 md:gap-6">
                {!isLoggedIn ? (
                    <>
                        <Link to="/Login" className="text-gray-400 hover:text-white text-sm md:text-base font-medium transition-colors">
                            Iniciar Sesión
                        </Link>
                        <Link to="/Register">
                            <Button variant="primary" className="text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2">
                                Crear Cuenta
                            </Button>
                        </Link>
                    </>
                ) : (
                    <div className="flex flex-row items-center gap-3 md:gap-8">
                        <NotificationBell />
                        <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-[#2a2a2a] rounded-full border border-[#3a3a3a]">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-300">
                                {isLoggedIn.toUpperCase()}
                            </span>
                        </div>
                        <Button
                            variant="primary"
                            type="button"
                            onClick={handleLogout}
                            className="text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2"
                        >
                            Cerrar Sesión
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
}