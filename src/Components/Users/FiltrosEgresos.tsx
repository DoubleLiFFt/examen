import React, { useState } from 'react';

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
        <div className="flex flex-col gap-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <select
                    className="border rounded p-2 bg-[#1e1e1e] text-white"
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

                <input type="date" className="border p-2 rounded" value={ini} onChange={(e) => setIni(e.target.value)} />
                <input type="date" className="border p-2 rounded" value={fin} onChange={(e) => setFin(e.target.value)} />

                <input type="number" placeholder="Mínimo" className="border p-2 rounded" value={min} onChange={(e) => setMin(e.target.value)} />
                <input type="number" placeholder="Máximo" className="border p-2 rounded" value={max} onChange={(e) => setMax(e.target.value)} />
            </div>

            <div className="flex justify-start">
                <button
                    onClick={() => onFiltrar(cat, ini, fin, min, max)}
                    className="bg-emerald-700 text-white px-8 py-2 rounded-md hover:bg-emerald-800 transition-colors"
                >
                    Filtrar
                </button>
            </div>
        </div>
    );
}