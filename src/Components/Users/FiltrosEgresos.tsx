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

    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-gray-500 uppercase font-bold ml-1">Categoría</label>
                    <select
                        className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all cursor-pointer text-sm"
                        value={cat}
                        onChange={(e) => setCat(e.target.value)}
                    >
                        <option>Categoría</option>
                        <option>Comida</option>
                        <option>Transporte</option>
                        <option>Vivienda</option>
                        <option>Salud</option>
                        <option>Educación</option>
                        <option>Ocio</option>
                        <option>Otros</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-gray-500 uppercase font-bold ml-1">Desde</label>
                    <input
                        type="date"
                        className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-sm color-scheme-dark"
                        value={ini}
                        onChange={(e) => setIni(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-gray-500 uppercase font-bold ml-1">Hasta</label>
                    <input
                        type="date"
                        className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-sm color-scheme-dark"
                        value={fin}
                        onChange={(e) => setFin(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-gray-500 uppercase font-bold ml-1">Min (S/.)</label>
                    <input
                        type="number"
                        placeholder="0.00"
                        className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-sm placeholder:text-gray-600"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[10px] text-gray-500 uppercase font-bold ml-1">Max (S/.)</label>
                    <input
                        type="number"
                        placeholder="999.00"
                        className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-sm placeholder:text-gray-600"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex justify-end mt-2">
                <button
                    onClick={() => onFiltrar(cat, ini, fin, min, max)}
                    className="w-full md:w-auto bg-emerald-600 text-white px-10 py-3 rounded-xl font-bold hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20 active:scale-95 text-sm uppercase tracking-widest"
                >
                    Aplicar Filtros
                </button>
            </div>
        </div>
    );
}