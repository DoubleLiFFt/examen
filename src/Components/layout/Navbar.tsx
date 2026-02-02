import Button from "../example/Button.tsx";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import NotificationBell from './NotificationBell';

export default function Navbar() {
    const navigate = useNavigate();
    const isLoggedIn = sessionStorage.getItem("userRole");
    const handleLogout = () => {
        sessionStorage.removeItem("userRole");
        navigate("/Login");
    };
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="flex flex-row justify-between h-32 items-center bg-gray-400 px-28">
            <div>
                <Link to="/">
                    <h1 className="text-3xl font-bold hover:scale-125 transition-all">
                        CUIDATE<span className="text-emerald-600">$</span>
                    </h1>
                </Link>
            </div>
            <div className="flex gap-8 items-center">
                <NotificationBell />
                {!isLoggedIn? (
                    <>
                        <Link to="/Login">
                            <Button type="submit" variant="primary" className="border-none hover:scale-125 h-18">
                                Iniciar Sesion
                            </Button>
                        </Link>
                        <Link to="/Register">
                            <Button type="submit" variant="primary" className="border-none hover:scale-125 h-18">
                                Crear Cuenta
                            </Button>
                        </Link>
                    </>
                ) : (
                    <div className="flex flex-row gap-12 items-center">
                        <div className="flex items-center gap-4 bg-emerald-400 px-8 py-6 rounded-full">
                            <div className="w-2 h-2 rounded-full bg-emerald-800 animate-pulse"></div>
                            <span className="font-bold text-sky-800 ">{isLoggedIn.toUpperCase()}</span>
                        </div>
                        <Button type="submit" variant="primary" onClick={ handleLogout } className="border-none hover:scale-125 h-18">
                            Cerrar Sesión
                        </Button>
                        <button onClick={toggle}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                className="h-12 w-12 hover:scale-110 transition-all hover:cursor-pointer"
                            >
                                <path d="M480 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                                <path d="M480 138.7H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                                <path d="M480 437.3H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                            </svg>
                        </button>
                        <div>
                            <div className={`fixed w-96 top-0 right-0 h-full bg-[#1e1e1e] z-50 p-6 flex flex-col gap-8 text-white shadow-2xl transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                                <button onClick={toggle} className="self-end m-12">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        fill="currentColor"
                                        className="h-6 w-6 hover:scale-125 transition-all hover:cursor-pointer text-white"
                                    >
                                        <path d="M480 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                                        <path d="M480 138.7H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                                        <path d="M480 437.3H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                                    </svg>
                                </button>
                                <div className="flex flex-col gap-4 mt-8 text-white">
                                    <span onClick={() => navigate("/UserView")} className="relative px-6 py-4 text-white hover:bg-gray-800/50 transition-colors group hover:cursor-pointer">
                                        <div className="absolute left-0 top-0 h-full w-1 bg-emerald-500 scale-y-0 group-hover:scale-y-100 transition-all origin-bottom"></div>
                                        <span className="font-bold tracking-widest">INICIO</span>
                                    </span>
                                    <span onClick={() => navigate("/Perfil")} className="relative px-6 py-4 text-white hover:bg-gray-800/50 transition-colors group hover:cursor-pointer">
                                        <div className="absolute left-0 top-0 h-full w-1 bg-emerald-500 scale-y-0 group-hover:scale-y-100 transition-all origin-bottom"></div>
                                        <span className="font-bold tracking-widest">PERFIL</span>
                                    </span>
                                </div>
                            </div>
                            <div onClick={toggle} className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 ${isOpen? "opacity-100 visible" : "opacity-0 invisible"}`} />
                        </div>
                    </div>
                    )}
            </div>
        </nav>
    );
}