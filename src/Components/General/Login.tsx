import Button from "../example/Button.tsx";
import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        const data = new FormData(e.currentTarget);
        const email = data.get("email");
        const password = data.get("password");

        try {
            const response = await fetch(`http://127.0.0.1:8000/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json()

            if (response.ok) {
                sessionStorage.setItem("email", result.user.email)
                sessionStorage.setItem("username", result.user.username)

                const role = result.user.userrole || "user"
                if (role === "admin" || role === "ADMIN") {
                    navigate("/AdminView")
                } else {
                    navigate("/UserView")
                }
            } else {
                alert(result.detail || "Credenciales incorrectas")
            }
        } catch (error) {
            console.error("Error de conexión:", error)
            alert("No se pudo conectar con el servidor.")
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-4 md:p-8">
            <div className="flex bg-[#141414] border border-[#222] shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)] rounded-4xl max-w-5xl w-full overflow-hidden min-h-162.5">
                <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
                    <header className="mb-10">
                        <h1 className="text-4xl font-black text-white tracking-tighter mb-2 italic">LOGIN</h1>
                        <div className="h-1 w-12 bg-emerald-500 rounded-full mb-6"></div>
                        <p className="text-zinc-500 font-medium italic">Accede al panel de control</p>
                    </header>

                    <form onSubmit={submit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="group">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-600 ml-1 mb-2 block group-focus-within:text-emerald-500 transition-colors">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-[#1c1c1c] border border-[#2a2a2a] text-white p-4 rounded-xl focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all placeholder:text-zinc-800 font-medium"
                                    placeholder="nombre@ejemplo.com"
                                />
                            </div>
                            <div className="group">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-600 ml-1 mb-2 block group-focus-within:text-emerald-500 transition-colors">Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    className="w-full bg-[#1c1c1c] border border-[#2a2a2a] text-white p-4 rounded-xl focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all placeholder:text-zinc-800 font-medium"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                            >
                                {isLoading ? "VERIFICANDO..." : "Entrar"}
                            </Button>
                        </div>

                        <div className="text-center pt-4">
                            <Link to="/CodConfirm" className="text-[10px] text-zinc-500 hover:text-emerald-400 transition-colors font-black uppercase tracking-widest">
                                ¿Problemas para iniciar sesión? <span className="text-emerald-500 underline underline-offset-4 decoration-2">Recuperar cuenta</span>
                            </Link>
                        </div>
                    </form>
                </div>

                <div className="hidden lg:flex flex-1 relative bg-zinc-900 overflow-hidden">
                    <img
                        src="/Animals.jpeg"
                        alt="Img"
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#141414]/60"></div>
                </div>
            </div>
        </section>
    )
}