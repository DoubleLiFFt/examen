import Button from "../example/Button.tsx";
import { useNavigate } from "react-router-dom";
import * as React from "react";

export default function Register() {
    const navigate = useNavigate();
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Nueva cuenta creada");
        navigate("/CorreoConfirm");
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-4 md:p-8 font-sans">
            <div className="flex flex-row-reverse bg-[#141414] border border-[#222] shadow-[0_0_60px_-15px_rgba(16,185,129,0.15)] rounded-[2.5rem] max-w-6xl w-full overflow-hidden min-h-[750px]">

                <div className="flex-1 p-8 md:p-16 flex flex-col justify-center bg-gradient-to-b from-[#141414] to-[#0f0f0f]">
                    <header className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-emerald-500 rounded-lg rotate-12 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                                <span className="text-black font-black text-xl">+</span>
                            </div>
                            <span className="text-emerald-500 font-bold tracking-[0.2em] text-xs uppercase">New Account</span>
                        </div>
                        <h1 className="text-5xl font-black text-white tracking-tighter mb-4">ÚNETE AHORA</h1>
                        <p className="text-zinc-500 font-medium text-lg">Gestiona tus finanzas con precisión milimétrica.</p>
                    </header>

                    <form onSubmit={submit} className="space-y-5">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="group">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-600 ml-1 mb-2 block group-focus-within:text-emerald-500 transition-colors">Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    required
                                    placeholder="username"
                                    className="w-full bg-[#1c1c1c] border border-[#2a2a2a] text-white p-4 rounded-2xl focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all placeholder:text-zinc-800 font-medium"
                                />
                            </div>

                            <div className="group">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-600 ml-1 mb-2 block group-focus-within:text-emerald-500 transition-colors">Correo Electrónico</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="email"
                                    className="w-full bg-[#1c1c1c] border border-[#2a2a2a] text-white p-4 rounded-2xl focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all placeholder:text-zinc-800 font-medium"
                                />
                            </div>

                            <div className="group">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-600 ml-1 mb-2 block group-focus-within:text-emerald-500 transition-colors">Contraseña</label>
                                <input
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="password"
                                    className="w-full bg-[#1c1c1c] border border-[#2a2a2a] text-white p-4 rounded-2xl focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all placeholder:text-zinc-800 font-medium"
                                />
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button
                                variant="primary"
                                type="submit"
                                className="w-full py-5 rounded-2xl bg-white hover:bg-emerald-500 text-black font-black uppercase tracking-widest transition-all duration-300 transform active:scale-95 shadow-xl hover:shadow-emerald-500/25"
                            >
                                Crear mi cuenta
                            </Button>
                        </div>

                        <div className="text-center pt-6 border-t border-[#222] mt-4">
                            <p className="text-sm text-zinc-500 font-medium">
                                ¿Ya eres parte del sistema?{" "}
                                <span
                                    onClick={() => navigate("/Login")}
                                    className="text-white hover:text-emerald-500 font-black cursor-pointer transition-colors underline underline-offset-8 decoration-emerald-500/30 hover:decoration-emerald-500"
                                >
                                    LOG IN
                                </span>
                            </p>
                        </div>
                    </form>
                </div>

                <div className="hidden lg:flex flex-1 relative bg-[#0f0f0f] overflow-hidden">
                    <img
                        src="../../../public/Animals.jpeg"
                        alt="Img"
                        className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12 p-8 backdrop-blur-md bg-black/20 border border-white/5 rounded-3xl">
                        <p className="text-white font-black text-2xl tracking-tighter leading-none mb-2">SEGURIDAD NIVEL ALPHA</p>
                        <p className="text-emerald-500/80 text-xs font-bold uppercase tracking-[0.3em]">Encriptación de grado militar activa</p>
                    </div>
                </div>
            </div>
        </section>
    );
}