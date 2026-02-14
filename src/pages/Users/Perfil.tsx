import { useNavigate } from "react-router-dom";
import React from "react";
import {User, Lock, Mail, Shield, ArrowLeft, Settings} from "lucide-react";

export default function Perfil() {
    const accountUsername = sessionStorage.getItem("username");
    const accountRole = sessionStorage.getItem("userRole");
    const accountEmail = sessionStorage.getItem("email");
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
                    className="flex items-center gap-4 px-6 py-4 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 transition-all font-bold text-xs tracking-widest"
                >
                    <User size={18} /> PERFIL
                </button>
                <button
                    onClick={() => navigate("/Configuracion")}
                    className="flex items-center gap-4 px-6 py-4 rounded-xl text-zinc-400 hover:bg-zinc-800/50 hover:text-white transition-all font-bold text-xs tracking-widest"
                >
                    <Lock size={18} /> SEGURIDAD
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
                <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-3 gap-12 animate-in fade-in duration-700">
                    <div className="lg:col-span-1 flex flex-col items-center gap-6 bg-[#1e1e1e] p-10 rounded-3xl border border-zinc-800 shadow-2xl h-fit">
                        <div className="relative">
                            <img
                                src="../../../public/Animals.jpeg"
                                alt="Profile"
                                className="rounded-full h-40 w-40 object-cover border-4 border-[#2a2a2a] shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                            />
                            <div className="absolute bottom-2 right-2 bg-emerald-500 h-6 w-6 rounded-full border-4 border-[#1e1e1e]"></div>
                        </div>
                        <div className="text-center">
                            <span className="text-white font-black text-2xl tracking-tighter block uppercase">
                                {accountUsername}
                            </span>
                            <span className="text-emerald-500 text-[10px] font-bold tracking-[0.2em] uppercase mt-2 block">
                                {accountRole === "admin" ? "Administrador" : "Usuario Estándar"}
                            </span>
                        </div>
                    </div>
                    <div className="lg:col-span-2 space-y-8">
                        <header>
                            <h1 className="text-white font-bold text-3xl tracking-tight">Detalles de la Cuenta</h1>
                            <p className="text-zinc-500 text-sm mt-2 font-medium">Gestiona tu información personal y de contacto.</p>
                        </header>

                        <div className="grid gap-4">
                            <InfoCard label="Nombre de Usuario" value={accountUsername} icon={<User className="text-emerald-500" size={20} />} />
                            <InfoCard label="Correo Electrónico" value={accountEmail} icon={<Mail className="text-emerald-500" size={20} />} />
                            <InfoCard label="Nivel de Acceso" value={accountRole} icon={<Shield className="text-emerald-500" size={20} />} />
                        </div>

                        <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                            <p className="text-emerald-500/60 text-[10px] uppercase font-bold tracking-widest text-center">
                                Miembro de la plataforma desde 2025
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}
function InfoCard({ label, value, icon }: { label: string, value: string | null, icon: React.ReactNode }) {
    return (
        <div className="flex items-center justify-between bg-[#1e1e1e] p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors group">
            <div className="flex items-center gap-6">
                <div className="p-3 bg-[#2a2a2a] rounded-xl group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <div>
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{label}</p>
                    <p className="text-white font-bold tracking-wide mt-1 uppercase">{value || "No definido"}</p>
                </div>
            </div>
        </div>
    );
}