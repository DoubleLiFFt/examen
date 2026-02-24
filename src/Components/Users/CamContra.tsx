import Button from "../example/Button.tsx";
import React from "react";
import { KeyRound, Mail, ShieldCheck, Lock, ArrowRight } from "lucide-react";

export default function CamContra() {
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Se cambió la contraseña (solo front)");
        alert("Contraseña actualizada con éxito");
    };






    //----------------------------------------------------------------------------------------------------------------

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-4 md:p-8 font-sans">
            <div className="flex bg-[#141414] border border-[#222] shadow-[0_0_50px_-12px_rgba(16,185,129,0.1)] rounded-[2.5rem] max-w-5xl w-full overflow-hidden min-h-150">

                <div className="hidden lg:flex flex-1 relative bg-[#0f0f0f] overflow-hidden">
                    <img
                        src="../../../public/Animals.jpeg"
                        alt="Security Background"
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-[#141414]"></div>
                    <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay"></div>

                    <div className="relative z-10 m-auto p-12 text-center">
                        <div className="inline-flex p-4 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl mb-6">
                            <Lock className="text-emerald-500" size={40} />
                        </div>
                        <h2 className="text-white text-3xl font-black tracking-tighter mb-2 uppercase">Protocolo de Seguridad</h2>
                        <p className="text-emerald-500/60 font-mono text-xs tracking-[0.3em] uppercase">Status: Re-encrypting</p>
                    </div>
                </div>

                <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
                    <header className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-0.5 w-8 bg-emerald-500"></div>
                            <span className="text-emerald-500 font-black tracking-[0.3em] text-[10px] uppercase">Security Update</span>
                        </div>
                        <h1 className="text-4xl font-black text-white tracking-tighter mb-4">RESET PASSWORD</h1>
                        <p className="text-zinc-500 text-sm font-medium leading-relaxed">Protege tu cuenta actualizando tus credenciales de acceso periódicamente.</p>
                    </header>

                    <form onSubmit={submit} className="space-y-6">
                        <div className="space-y-5">
                            <div className="group">
                                <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1 mb-2 block group-focus-within:text-emerald-500 transition-colors">
                                    Identidad Registrada
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-emerald-500 transition-colors" size={18} />
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="admin@system.com"
                                        className="w-full bg-[#1c1c1c] border border-[#2a2a2a] text-white pl-12 pr-5 py-4 rounded-2xl focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all placeholder:text-zinc-800 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="group">
                                    <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1 mb-2 block group-focus-within:text-emerald-500 transition-colors">
                                        Nueva Contraseña
                                    </label>
                                    <div className="relative">
                                        <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-emerald-500 transition-colors" size={18} />
                                        <input
                                            type="password"
                                            name="newPassword"
                                            required
                                            placeholder="••••••••"
                                            className="w-full bg-[#1c1c1c] border border-[#2a2a2a] text-white pl-12 pr-5 py-4 rounded-2xl focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all placeholder:text-zinc-800 text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1 mb-2 block group-focus-within:text-emerald-500 transition-colors">
                                        Confirmación
                                    </label>
                                    <div className="relative">
                                        <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-emerald-500 transition-colors" size={18} />
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            required
                                            placeholder="••••••••"
                                            className="w-full bg-[#1c1c1c] border border-[#2a2a2a] text-white pl-12 pr-5 py-4 rounded-2xl focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all placeholder:text-zinc-800 text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button
                                variant="primary"
                                type="submit"
                                className="w-full py-5 hover:bg-emerald-500 font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl shadow-xl shadow-emerald-500/10 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                            >
                                Actualizar Credenciales
                                <ArrowRight size={14} />
                            </Button>
                        </div>
                    </form>

                    <footer className="mt-8 pt-8 border-t border-[#222] text-center">
                        <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                            Seguridad verificada por <span className="text-zinc-400">AuthSystem v2.4</span>
                        </p>
                    </footer>
                </div>
            </div>
        </section>
    );
}