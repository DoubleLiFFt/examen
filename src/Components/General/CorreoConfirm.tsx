import React from 'react';
import ConfirCorreo from './confirCorreo.tsx'

export default function CorreoConfirm() {
    return (
        <section className="min-h-screen bg-[#121212] p-4 md:p-10 flex flex-col items-center">
            <ConfirCorreo />
            <div className="w-full max-w-5xl bg-[#1e1e1e] border border-[#2a2a2a] p-4 mb-6 flex items-center gap-4 text-gray-400 transition-colors cursor-default rounded-full">
                <div className="flex-1 flex justify-between items-center overflow-hidden">
                    <span className="font-bold text-white min-w-[120px]">FinanzasApp</span>
                    <span className="truncate flex-1 px-4 text-sm">
                        <span className="text-white font-medium">Verifica tu cuenta</span> — Hola Usuario, solo falta confirmar tu correo...
                    </span>
                    <span className="text-xs">11:15 AM</span>
                </div>
            </div>
        </section>
    );
}