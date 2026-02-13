import HistorialAccesos from "../../Components/Admin/HistorialAccesos.tsx";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HistorialAccesosView() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#121212] text-gray-200 p-4 md:p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors group w-fit"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-bold uppercase tracking-widest hover:cursor-pointer">Volver</span>
                    </button>
                    <div className="flex items-center gap-4 bg-[#1e1e1e] px-6 py-3 rounded-2xl border border-emerald-900/20 shadow-lg">
                        <ShieldCheck className="text-emerald-500" size={24} />
                        <div>
                            <h1 className="text-xl font-bold text-white leading-none">Seguridad del Sistema</h1>
                            <p className="text-[10px] text-zinc-500 uppercase tracking-tighter mt-1">Auditoría de accesos y logs</p>
                        </div>
                    </div>
                </div>
                <main className="bg-[#1e1e1e] rounded-3xl border border-[#2a2a2a] shadow-2xl overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full"></div>
                    <div className="p-6 md:p-10">
                        <div className="mb-8 border-b border-zinc-800 pb-6">
                            <h2 className="text-2xl font-bold text-white">Historial de Accesos</h2>
                            <p className="text-sm text-zinc-400 mt-2">
                                Registro detallado de inicios de sesión y actividad administrativa reciente.
                            </p>
                        </div>
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <HistorialAccesos />
                        </div>
                    </div>
                </main>
                <footer className="text-center">
                    <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em]">
                        Sistema de Monitoreo CUIDATE<span className="text-emerald-800">$</span> v2.0
                    </p>
                </footer>
            </div>
        </div>
    );
}