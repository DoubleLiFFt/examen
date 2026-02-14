import Button from "../example/Button.tsx";
import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import { CredentialsLogin } from "../types/CredentialsLogin.ts";

export default function Login() {
    const navigate = useNavigate();

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const emailIngresado = data.get("email");
        const passwordIngresado = data.get("password");
        const usuarioEncontrado = CredentialsLogin.find(
            (u) => u.email === emailIngresado && u.password === passwordIngresado
        )
        if (usuarioEncontrado) {
            sessionStorage.setItem("email", usuarioEncontrado.email);
            sessionStorage.setItem("username", usuarioEncontrado.username)
            sessionStorage.setItem("userRole", usuarioEncontrado.userRole)
            if (usuarioEncontrado.userRole === "admin") {
                navigate("/AdminView");
            } else {
                navigate("/UserView");
            }
        } else {
            alert("Usuario o contraseña incorrectas");
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-4 md:p-8">
            <div className="flex bg-[#141414] border border-[#222] shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)] rounded-[2rem] max-w-5xl w-full overflow-hidden min-h-[650px]">

                <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
                    <header className="mb-10">
                        <h1 className="text-4xl font-black text-white tracking-tighter mb-2">LOGIN</h1>
                        <div className="h-1 w-12 bg-emerald-500 rounded-full mb-6"></div>
                        <p className="text-zinc-500 font-medium">Accede al panel de control</p>
                    </header>

                    <form onSubmit={submit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="group">
                                <label className="text-xs uppercase tracking-widest font-bold text-zinc-600 ml-1 mb-2 block group-focus-within:text-emerald-500 transition-colors">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-[#1c1c1c] border border-[#2a2a2a] text-white p-4 rounded-xl focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all placeholder:text-zinc-700 font-medium"
                                    placeholder="nombre@ejemplo.com"
                                />
                            </div>
                            <div className="group">
                                <label className="text-xs uppercase tracking-widest font-bold text-zinc-600 ml-1 mb-2 block group-focus-within:text-emerald-500 transition-colors">Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    className="w-full bg-[#1c1c1c] border border-[#2a2a2a] text-white p-4 rounded-xl focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all placeholder:text-zinc-700 font-medium"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button variant="primary" type="submit" className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20 transition-all active:scale-95">
                                Entrar
                            </Button>
                        </div>

                        <div className="text-center pt-4">
                            <Link to="/CodConfirm" className="text-sm text-zinc-500 hover:text-emerald-400 transition-colors font-medium">
                                ¿Problemas para iniciar sesión? <span className="text-emerald-500 underline underline-offset-4 decoration-2">Recuperar cuenta</span>
                            </Link>
                        </div>
                    </form>
                </div>

                <div className="hidden lg:flex flex-1 relative bg-zinc-900 overflow-hidden">
                    <img
                        src="../../../public/Animals.jpeg"
                        alt="Img"
                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#141414]/40"></div>
                </div>
            </div>
        </section>
    );
}