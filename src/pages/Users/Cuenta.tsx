import {useNavigate} from "react-router-dom";
import React from "react";

export default function Cuenta() {
    const accountUsername = sessionStorage.getItem("username");
    const accountRole = sessionStorage.getItem("userRole");
    const accountEmail = sessionStorage.getItem("email");
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
            <div className="grid col-span-3 bg-[#121212] gap-12 items-center justify-center w-full">
                <div className="flex flex-col items-center">
                    <h1 className="text-white font-bold text-9xl">IMAGEN</h1>
                    <span className="text-white font-bold text-6xl tracking-widest">{accountUsername?.toUpperCase()}</span>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <h1 className="text-white font-bold text-4xl">Datos de la Cuenta</h1>
                    <table>
                        <tbody className="text-white border">
                            <tr className="border">
                                <td className="border px-12 py-4">Usuario :</td>
                                <td className="px-12 py-4 font-bold tracking-widest">{accountUsername?.toUpperCase()}</td>
                            </tr>
                            <tr className="border">
                                <td className="border px-12 py-4">Correo :</td>
                                <td className="px-12 py-4 font-bold tracking-widest">{accountEmail?.toUpperCase()}</td>
                            </tr>
                            <tr className="border">
                                <td className="border px-12 py-4">Rol :</td>
                                <td className="px-12 py-4 font-bold tracking-widest">{accountRole?.toUpperCase()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}