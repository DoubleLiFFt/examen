import Button from "../example/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import * as React from "react";

export default function CodConfirm() {
    const navigate = useNavigate();
    const cod = "435286"
    console.log(cod)
    const submit = (e: React.FormEvent<HTMLFormElement>)=> {
        const data = new FormData(e.currentTarget);
        const codigo = data.get("cod")?.toString();
        if (cod !== codigo) {
            alert("Codigo incorrecto")
        } else {
            console.log("Cambia tu contraseña.")
            navigate("/confirCorreo")
        }
    }
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
                            <label className="text-sm font-medium text-gray-400 ml-1">Contraseña</label>
                            <input
                                type="number"
                                name="cod"
                                placeholder="Código"
                                required
                                className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-4 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-600 text-lg"
                            />
                        </div>
                    </div>
                    <Link to="/CamContra">
                        <Button variant="primary">
                            Recuperar Contraseña
                        </Button>
                    </Link>
                </form>
            </div>
        </section>
    )
}