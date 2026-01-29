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
        <section className="min-h-screen flex items-center justify-center bg-[#121212] px-4">
            <div className="bg-[#1e1e1e] border border-[#2a2a2a] shadow-2xl p-10 md:p-16 rounded-3xl max-w-lg w-full">
                <header className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-white mb-2">Crear Cuenta</h1>
                    <p className="text-gray-500">Únete para empezar a gestionar tus finanzas</p>
                </header>
                <form onSubmit={submit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-400 ml-1">Nombre de Usuario</label>
                            <input
                                name="username"
                                type="text"
                                required
                                placeholder="Username"
                                className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-4 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-600 text-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-400 ml-1">Correo Electrónico</label>
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Email"
                                className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-4 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-600 text-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-400 ml-1">Contraseña</label>
                            <input
                                name="password"
                                type="password"
                                required
                                placeholder="Password"
                                className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-4 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-600 text-lg"
                            />
                        </div>
                    </div>
                    <div className="pt-4">
                        <Button
                            variant="primary"
                            type="submit"
                            className="w-full py-4 text-lg font-bold"
                        >
                            Registrarme ahora
                        </Button>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-500">
                            ¿Ya tienes una cuenta?{" "}
                            <span
                                onClick={() => navigate("/Login")}
                                className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors hover:underline cursor-pointer"
                            >
                                Inicia sesión aquí
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}