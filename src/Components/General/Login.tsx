import Button from "../example/Button.tsx";
import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import {CredentialsLogin} from "../types/CredentialsLogin.ts";

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
        <section className="min-h-screen flex items-center justify-center bg-[#121212] px-4">
            <div className="bg-[#1e1e1e] border border-[#2a2a2a] shadow-2xl p-10 md:p-16 rounded-3xl max-w-lg w-full">

                <header className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-white mb-2">Bienvenido</h1>
                    <p className="text-gray-500">Ingresa tus credenciales para continuar</p>
                </header>
                <form onSubmit={submit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-400 ml-1">Correo Electrónico</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-4 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-600 text-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-400 ml-1">Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-4 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-600 text-lg"
                            />
                        </div>
                    </div>
                    <div className="pt-4 w-full">
                        <Button variant="primary" type="submit" className="w-full py-4 text-lg font-bold">
                            Iniciar Sesión
                        </Button>
                    </div>
                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-500">
                            ¿Olvidaste tu contraseña?{" "}
                            <Link to="/CodConfirm"
                                  className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors hover:underline"
                            >
                                Recupérala aquí
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}