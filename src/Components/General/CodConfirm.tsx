import Button from "../example/Button.tsx";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { useState } from "react";

export default function CodConfirm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const enviarCodigo = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch(`http://127.0.0.1:8000/enviarCodigoRecuperacion?email=${email}`, {
                method: "POST"
            });
            if (response.ok) {
                setStep(2);
            } else {
                alert("Error: Verifica que el correo sea correcto y esté registrado.");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const validarCodigo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        const codigo = formData.get("cod")?.toString();

        try {
            const response = await fetch(`http://127.0.0.1:8000/verificarCodigo?email=${email}&codigo=${codigo}`, {
                method: "POST"
            });

            if (response.ok) {
                navigate("/CamContra", { state: { email, codigo } });
            } else {
                alert("Código incorrecto o expirado.");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 font-sans">
            <div className="bg-[#141414] border border-[#222] shadow-[0_0_50px_-12px_rgba(16,185,129,0.1)] p-10 md:p-16 rounded-[2.5rem] max-w-lg w-full">

                <header className="mb-10 text-center">
                    <div className="inline-flex p-3 bg-emerald-500/10 rounded-2xl text-emerald-500 mb-4">
                        {step === 1 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        )}
                    </div>
                    <h1 className="text-4xl font-black text-white mb-2 tracking-tighter uppercase leading-none">
                        {step === 1 ? "Recuperar" : "Verificar"}
                    </h1>
                    <p className="text-zinc-500 text-sm font-medium">
                        {step === 1
                            ? "Ingresa tu correo para enviarte el código."
                            : `Hemos enviado un código a ${email}`}
                    </p>
                </header>

                {step === 1 ? (
                    <form onSubmit={enviarCodigo} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-600 ml-1">Email Registrado</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tu@correo.com"
                                className="bg-[#1c1c1c] border border-[#2a2a2a] text-white p-5 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all placeholder:text-zinc-800 font-medium"
                            />
                        </div>
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-5 bg-emerald-500 text-black font-black uppercase tracking-widest hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
                        >
                            {isLoading ? "Enviando..." : "Obtener Código"}
                        </Button>
                    </form>
                ) : (
                    <form onSubmit={validarCodigo} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-600 ml-1">Código de 6 dígitos</label>
                            <input
                                type="text"
                                name="cod"
                                maxLength={6}
                                required
                                placeholder="000000"
                                className="bg-[#1c1c1c] border border-[#2a2a2a] text-white p-5 rounded-2xl focus:border-emerald-500 text-4xl font-black text-center tracking-[0.4em] outline-none placeholder:text-zinc-800"
                            />
                        </div>
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-zinc-200"
                        >
                            {isLoading ? "Validando..." : "Confirmar Código"}
                        </Button>
                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="text-[10px] text-zinc-500 hover:text-emerald-500 transition-colors uppercase font-black tracking-widest mt-2"
                        >
                            ¿No es tu correo? Cambiar
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}