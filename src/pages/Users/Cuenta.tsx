import CamContra from "../../Components/Users/CamContra.tsx";
import {useNavigate} from "react-router-dom";
import React from "react";

export default function Cuenta() {
    const navigate = useNavigate();
    return(
        <section className="bg-gray-700 h-screen grid grid-cols-4">
            <div className="flex flex-col gap-4 mt-8 text-white">
                <span onClick={() => navigate("/Cuenta")} className="relative px-6 py-4 text-white hover:bg-gray-800/50 transition-colors group hover:cursor-pointer">
                    <div className="absolute left-0 top-0 h-full w-1 bg-emerald-500 scale-y-0 group-hover:scale-y-100 transition-all origin-bottom"></div>
                    <span className="font-bold tracking-widest">CUENTA</span>
                </span>
                <span onClick={() => navigate("/Configuracion")} className="relative px-6 py-4 text-white hover:bg-gray-800/50 transition-colors group hover:cursor-pointer">
                    <div className="absolute left-0 top-0 h-full w-1 bg-emerald-500 scale-y-0 group-hover:scale-y-100 transition-all origin-bottom"></div>
                    <span className="font-bold tracking-widest">CONFIGURACIÓN</span>
                </span>
            </div>
            <div className="col-span-3">
                <CamContra />
            </div>
        </section>
    )
}