import Button from "../example/Button.tsx";
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import NotificationBell from './NotificationBell';

export default function Navbar() {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("username"))
    const [useRole, setUseRole] = useState(sessionStorage.getItem("userrole"))
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleStorageChange = () => {
            setIsLoggedIn(sessionStorage.getItem("username"))
            setUseRole(sessionStorage.getItem("userrole"))
        }

        window.addEventListener("storage", handleStorageChange)

        return () => {
            window.removeEventListener("storage", handleStorageChange)
        }
    }, [])

    const handleLogout = () => {
        sessionStorage.clear()
        setIsLoggedIn(null)
        setUseRole(null)
        navigate("/Login")
    };

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    const currentRole = useRole || "";

    return (
        <nav className="flex flex-row justify-between h-24 items-center bg-[#1e1e1e] px-8 md:px-28 border-b border-[#2a2a2a] sticky top-0 z-60 shadow-2xl">
            <div>
                <Link to="/">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-white">
                        CUIDATE<span className="text-emerald-500 font-black">$</span>
                    </h1>
                </Link>
            </div>

            <div className="flex gap-8 items-center">
                {!isLoggedIn ? (
                    <div className="flex gap-4">
                        <Link to="/Login"><Button variant="primary">Iniciar Sesión</Button></Link>
                        <Link to="/Register"><Button variant="primary">Crear Cuenta</Button></Link>
                    </div>
                ) : (
                    <div className="flex flex-row gap-4 md:gap-8 items-center">
                        <div className="p-2 bg-[#2a2a2a] rounded-lg border border-[#3a3a3a] text-emerald-400">
                            <NotificationBell />
                        </div>
                        <div
                            onClick={() => navigate("/Perfil")}
                            className="hidden md:flex items-center gap-3 bg-[#2a2a2a] border border-[#3a3a3a] px-4 py-2 rounded-xl cursor-pointer hover:border-emerald-500 transition-colors"
                        >
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                            <span className="font-bold text-xs tracking-widest text-zinc-200 uppercase">{isLoggedIn}</span>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="hidden lg:block p-2 bg-red-900/10 border border-red-900/20 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest hover:cursor-pointer"
                        >
                            Cerrar Sesión
                        </button>
                        <button onClick={toggle} className="text-white hover:text-emerald-400 transition-colors p-2 bg-[#2a2a2a] rounded-lg border border-[#3a3a3a] hover:cursor-pointer">
                            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <aside className={`fixed w-80 md:w-96 top-0 right-0 h-full bg-[#242424] z-70 p-8 flex flex-col gap-10 text-white shadow-[-15px_0_40px_rgba(0,0,0,0.7)] border-l border-[#333] transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                            <div className="flex justify-between items-center border-b border-[#3a3a3a] pb-6">
                                <span className="text-xs font-bold tracking-widest text-emerald-500 uppercase">Navegación</span>
                                <button onClick={toggle} className="text-zinc-400 hover:text-white transition-colors bg-[#333] p-2 rounded-lg">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <nav className="flex flex-col w-full gap-4">
                                <NavItem
                                    label="PANEL PRINCIPAL"
                                    onClick={() => {
                                        navigate(currentRole === "ADMIN" ? "/AdminView" : "/UserView");
                                        toggle();
                                    }}
                                />
                                <NavItem label="MI PERFIL" onClick={() => { navigate("/Perfil"); toggle(); }} />

                                {currentRole === "admin" && (
                                    <div className="mt-6 pt-6 border-t border-[#3a3a3a] w-full flex flex-col">
                                        <p className="text-[10px] font-black text-emerald-500/60 tracking-[0.3em] mb-4 ml-6 uppercase">Seguridad Avanzada</p>
                                        <NavItem label="FILTRO DE ACCESOS" onClick={() => { navigate("/HistorialAccesosView"); toggle(); }} />
                                    </div>
                                )}

                                {currentRole === "user" && (
                                    <div className="mt-6 pt-6 border-t border-[#3a3a3a] w-full flex flex-col">
                                        <p className="text-[10px] font-black text-emerald-500/60 tracking-[0.3em] mb-4 ml-6 uppercase">Planificación</p>
                                        <NavItem label="MIS GASTOS" onClick={() => { navigate("/PlanificacionGastosView"); toggle(); }} />
                                    </div>
                                )}
                            </nav>

                            <button onClick={handleLogout} className="lg:hidden mt-auto w-full py-4 bg-red-900/10 border border-red-900/30 text-red-400 font-bold text-xs tracking-widest rounded-xl">
                                FINALIZAR SESIÓN
                            </button>
                        </aside>
                        {isOpen && (
                            <div onClick={toggle} className="fixed inset-0 bg-black/80 z-65 transition-opacity duration-500 opacity-100" />
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}

function NavItem({ label, onClick }: { label: string, onClick: () => void }) {
    return (
        <span
            onClick={onClick}
            className="px-6 py-4 text-zinc-300 hover:text-white bg-[#2a2a2a] hover:bg-emerald-600 transition-all cursor-pointer rounded-xl font-bold text-xs tracking-widest border border-[#3a3a3a] hover:border-emerald-400"
        >
            {label}
        </span>
    );
}