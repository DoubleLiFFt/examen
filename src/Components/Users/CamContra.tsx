import Button from "../example/Button.tsx";
import React from "react";
import { KeyRound, Mail, ShieldCheck } from "lucide-react";

export default function CamContra() {
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Se cambió la contraseña (solo front)");
        alert("Contraseña actualizada con éxito");
    };

    return (
        <div className="w-full">
            <div className="flex justify-center mb-8">
                <div className="p-4 bg-emerald-500/5 rounded-full border border-emerald-500/10">
                    <KeyRound className="text-emerald-500" size={32} />
                </div>
            </div>
            <form onSubmit={submit} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-2">
                        Verificar Identidad (Email)
                    </label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" size={18} />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="ejemplo@correo.com"
                            className="w-full bg-[#252525] border border-zinc-800 text-white pl-12 pr-5 py-4 rounded-2xl focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all placeholder:text-zinc-700 text-sm"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-2">
                            Nueva Contraseña
                        </label>
                        <div className="relative group">
                            <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" size={18} />
                            <input
                                type="password"
                                name="newPassword"
                                required
                                placeholder="••••••••"
                                className="w-full bg-[#252525] border border-zinc-800 text-white pl-12 pr-5 py-4 rounded-2xl focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all placeholder:text-zinc-700 text-sm"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-2">
                            Confirmar
                        </label>
                        <div className="relative group">
                            <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" size={18} />
                            <input
                                type="password"
                                name="confirmPassword"
                                required
                                placeholder="••••••••"
                                className="w-full bg-[#252525] border border-zinc-800 text-white pl-12 pr-5 py-4 rounded-2xl focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all placeholder:text-zinc-700 text-sm"
                            />
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <Button
                        variant="primary"
                        type="submit"
                        className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-lg shadow-emerald-900/20 transition-all hover:scale-[1.02] active:scale-95"
                    >
                        Guardar cambios de seguridad
                    </Button>
                </div>
            </form>
        </div>
    );
}