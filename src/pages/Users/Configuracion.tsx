import CamContra from "../../Components/Users/CamContra.tsx";
import { useNavigate } from "react-router-dom";
import React from "react";
import { User, Shield, ArrowLeft, Settings } from "lucide-react";

export default function Configuracion() {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen bg-[#121212] flex flex-col md:flex-row">
            <aside className="w-full md:w-80 bg-[#1e1e1e] border-r border-zinc-800 flex flex-col p-6 gap-2">
                <div className="mb-8 px-4 flex items-center gap-3">
                    <Settings className="text-zinc-600" size={16} />
                    <h2 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">Ajustes de Cuenta</h2>
                </div>
                <button
                    onClick={() => navigate("/Perfil")}
                    className="flex items-center gap-4 px-6 py-4 rounded-xl text-zinc-400 hover:bg-zinc-800/50 hover:text-white transition-all font-bold text-xs tracking-widest group"
                >
                    <User size={18} className="group-hover:text-emerald-500 transition-colors" /> PERFIL
                </button>
                <button
                    onClick={() => navigate("/Configuracion")}
                    className="flex items-center gap-4 px-6 py-4 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 transition-all font-bold text-xs tracking-widest"
                >
                    <Shield size={18} /> SEGURIDAD
                </button>
                <div className="mt-auto">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-zinc-600 hover:text-white p-4 transition-colors text-xs font-bold"
                    >
                        <ArrowLeft size={14} /> VOLVER
                    </button>
                </div>
            </aside>
            <main className="flex-1 p-6 md:p-16 flex justify-center items-start overflow-y-auto">
                <div className="max-w-2xl w-full space-y-8 animate-in fade-in slide-in-from-right-4 duration-700">
                    <header className="border-b border-zinc-800 pb-8">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                                <Shield className="text-emerald-500" size={24} />
                            </div>
                            <div>
                                <h1 className="text-white font-bold text-3xl tracking-tight">Privacidad y Seguridad</h1>
                                <p className="text-zinc-500 text-sm mt-1">Actualiza tus credenciales para mantener tu cuenta protegida.</p>
                            </div>
                        </div>
                    </header>
                    <section className="bg-[#1e1e1e] rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden relative">
                        <div className="h-1 w-full bg-gradient-to-r from-emerald-600 to-emerald-400/20"></div>
                        <div className="p-8 md:p-12">
                            <CamContra />
                        </div>
                    </section>
                    <footer className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 mt-1.5 animate-pulse"></div>
                        <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-wider">
                            Recomendamos usar una contraseña de al menos 12 caracteres que incluya una combinación de letras, números y símbolos.
                        </p>
                    </footer>
                </div>
            </main>
        </section>
    );
}