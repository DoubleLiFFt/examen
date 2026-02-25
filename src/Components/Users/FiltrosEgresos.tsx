import { useState } from 'react';

interface FiltrosEgresosProps {
    onFiltrar: (cat: string, ini: string, fin: string, min: string, max: string) => void;
}

export default function FiltrosEgresos({ onFiltrar }: FiltrosEgresosProps) {
    const [cat, setCat] = useState("Categoría");
    const [ini, setIni] = useState("");
    const [fin, setFin] = useState("");
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");

    const inputStyles = "w-full h-12 bg-[#252525] border border-zinc-800 text-zinc-300 px-4 rounded-xl focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all text-xs font-medium flex items-center [color-scheme:dark]";

    return (
        <div className="w-full bg-[#1e1e1e] p-6 rounded-2xl border border-[#2a2a2a]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">

                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Categoría</label>
                    <select
                        className={`${inputStyles} cursor-pointer appearance-none`}
                        value={cat}
                        onChange={(e) => setCat(e.target.value)}
                    >
                        <option value="Todas">Todas las categorías</option>
                        <option>Comida</option>
                        <option>Transporte</option>
                        <option>Vivienda</option>
                        <option>Salud</option>
                        <option>Educación</option>
                        <option>Ocio</option>
                        <option>Otros</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Desde</label>
                    <input
                        type="date"
                        className={inputStyles}
                        value={ini}
                        onChange={(e) => setIni(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Hasta</label>
                    <input
                        type="date"
                        className={inputStyles}
                        value={fin}
                        onChange={(e) => setFin(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Mínimo (S/.)</label>
                    <input
                        type="number"
                        placeholder="0.00"
                        className={inputStyles}
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Máximo (S/.)</label>
                    <input
                        type="number"
                        placeholder="999.00"
                        className={inputStyles}
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex justify-end mt-8 pt-6 border-t border-zinc-800/50">
                <button
                    onClick={() => onFiltrar(cat, ini, fin, min, max)}
                    className="h-12 px-10 bg-white hover:bg-emerald-500 text-black font-black rounded-xl transition-all duration-300 active:scale-95 shadow-xl shadow-emerald-500/10 text-[10px] uppercase tracking-[0.2em]"
                >
                    Aplicar Filtros
                </button>
            </div>
        </div>
    );
}