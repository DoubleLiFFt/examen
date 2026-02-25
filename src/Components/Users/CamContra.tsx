import Button from "../example/Button.tsx";
import React, { useState } from "react";
import { KeyRound, Mail, ShieldCheck, Lock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CamContra() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    async function cambiar_contrasena(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);

        const data = {
            email: String(formData.get("email") || ""),
            actual: String(formData.get("actual") || ""),
            nueva: String(formData.get("newPassword") || ""),
            confirmar: String(formData.get("confirmPassword") || ""),
        };

        if (data.nueva !== data.confirmar) {
            alert("La nueva contraseña y la confirmación no coinciden.")
            setIsLoading(false)
            return
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/cambiarContrasena", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json()

            if (!response.ok) {
                alert(result.detail || "Error al actualizar")
                return
            }

            alert("Contraseña actualizada con éxito.")
            navigate("/login")
        } catch (error) {
            console.error("Error de red:", error)
            alert("No se pudo conectar con el servidor.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-4 md:p-8 font-sans text-white">
            <div className="flex bg-[#141414] border border-[#222] shadow-[0_0_50px_-12px_rgba(16,185,129,0.1)] rounded-[2.5rem] max-w-5xl w-full overflow-hidden min-h-150">
                <div className="hidden lg:flex flex-1 relative bg-[#0f0f0f] overflow-hidden">
                    <img
                        src="/Animals.jpeg"
                        alt="Security"
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#141414]"></div>
                    <div className="relative z-10 m-auto p-12 text-center">
                        <div className="inline-flex p-4 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl mb-6">
                            <Lock className="text-emerald-500" size={40} />
                        </div>
                        <h2 className="text-3xl font-black tracking-tighter mb-2 uppercase">Protocolo de Seguridad</h2>
                        <p className="text-emerald-500/60 font-mono text-[10px] tracking-[0.3em] uppercase animate-pulse">Encryption Active</p>
                    </div>
                </div>
                <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
                    <header className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-0.5 w-8 bg-emerald-500"></div>
                            <span className="text-emerald-500 font-black tracking-[0.3em] text-[10px] uppercase">Identity Verification</span>
                        </div>
                        <h1 className="text-4xl font-black text-white tracking-tighter mb-4 uppercase italic">Reset Password</h1>
                        <p className="text-zinc-500 text-sm font-medium">Actualiza tus credenciales para mantener la integridad de tu cuenta.</p>
                    </header>

                    <form onSubmit={cambiar_contrasena} className="space-y-5">
                        <div className="group">
                            <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1 mb-2 block group-focus-within:text-emerald-500">
                                Email de Usuario
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-emerald-500 transition-colors" size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="usuario@dominio.com"
                                    className="w-full bg-[#1c1c1c] border border-[#2a2a2a] text-white pl-12 pr-5 py-4 rounded-2xl focus:border-emerald-500/50 outline-none transition-all placeholder:text-zinc-800 text-sm"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1 mb-2 block group-focus-within:text-emerald-500">
                                Contraseña Actual
                            </label>
                            <div className="relative">
                                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-emerald-500 transition-colors" size={18} />
                                <input
                                    type="password"
                                    name="actual"
                                    required
                                    placeholder="Tu clave actual"
                                    className="w-full bg-[#1c1c1c] border border-[#2a2a2a] text-white pl-12 pr-5 py-4 rounded-2xl focus:border-emerald-500/50 outline-none transition-all placeholder:text-zinc-800 text-sm"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="group">
                                <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1 mb-2 block group-focus-within:text-emerald-500">
                                    Nueva Clave
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-emerald-500 transition-colors" size={18} />
                                    <input
                                        type="password"
                                        name="newPassword"
                                        required
                                        placeholder="••••••••"
                                        className="w-full bg-[#1c1c1c] border border-[#2a2a2a] text-white pl-12 pr-5 py-4 rounded-2xl focus:border-emerald-500/50 outline-none transition-all placeholder:text-zinc-800 text-sm"
                                    />
                                </div>
                            </div>
                            <div className="group">
                                <label className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-1 mb-2 block group-focus-within:text-emerald-500">
                                    Confirmar
                                </label>
                                <div className="relative">
                                    <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-emerald-500 transition-colors" size={18} />
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        required
                                        placeholder="••••••••"
                                        className="w-full bg-[#1c1c1c] border border-[#2a2a2a] text-white pl-12 pr-5 py-4 rounded-2xl focus:border-emerald-500/50 outline-none transition-all placeholder:text-zinc-800 text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl shadow-xl shadow-emerald-500/10 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50"
                            >
                                {isLoading ? "Sincronizando..." : "Actualizar Credenciales"}
                                <ArrowRight size={14} />
                            </Button>
                        </div>
                    </form>

                    <footer className="mt-8 pt-8 border-t border-[#222] text-center">
                        <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                            Secure update via <span className="text-zinc-400">AuthNode v2.0</span>
                        </p>
                    </footer>
                </div>
            </div>
        </section>
    );
}