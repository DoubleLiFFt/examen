import Button from "../example/Button.tsx";
import { useNavigate } from "react-router-dom";

export default function ConfirCorreo() {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#121212] px-4">
            <div className="bg-[#1e1e1e] border border-[#2a2a2a] shadow-2xl p-10 md:p-14 rounded-3xl max-w-md w-full text-center">
                <div className="flex justify-center mb-8">
                    <div className="bg-emerald-500/10 p-5 rounded-full border border-emerald-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">¡Correo Enviado!</h1>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                    Hemos enviado un enlace de verificación a tu bandeja de entrada. Por favor, confirme para continuar.
                </p>
                <div className="w-full">
                    <Button
                        variant="primary"
                        type="button"
                        onClick={() => navigate("/Login")}
                        className="w-full py-4 text-lg font-bold"
                    >
                        Iniciar Sesión
                    </Button>
                </div>
                <p className="mt-8 text-sm text-gray-500">
                    ¿No recibiste nada? <span className="text-emerald-500 cursor-pointer hover:underline">Reenviar correo</span>
                </p>
            </div>
        </section>
    );
}