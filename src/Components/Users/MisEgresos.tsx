import { useState } from 'react';
import FiltrosEgresos from './FiltrosEgresos';
import TablaEgresos from './TablaEgresos';
import { listaGastosDB, type GastosUsers } from '../types/GastosUsers';

export default function MisEgresos() {
    const [egresosFiltrados, setEgresosFiltrados] = useState<GastosUsers[]>(listaGastosDB);

    const filtrarEgresos = (cat: string, inicio: string, fin: string, min: string, max: string) => {
        let resultado = [...listaGastosDB];

        if (cat !== "Categoría" && cat !== "Todas") {
            resultado = resultado.filter(e => e.category === cat);
        }

        if (inicio) resultado = resultado.filter(e => e.date >= inicio);
        if (fin) resultado = resultado.filter(e => e.date <= fin);

        if (min) resultado = resultado.filter(e => e.mount >= parseFloat(min));
        if (max) resultado = resultado.filter(e => e.mount <= parseFloat(max));

        setEgresosFiltrados(resultado);
    };

    return (
        <div className="max-w-7xl mx-auto border border-[#2a2a2a] bg-[#1e1e1e] p-4 md:p-10 rounded-2xl md:rounded-3xl mb-12 mt-8 md:mt-12 shadow-xl">
            <div className="mb-8 border-b border-[#2a2a2a] pb-6">
                <p className="text-emerald-500 text-xs uppercase tracking-widest font-bold mb-2">Historial de movimientos</p>
                <h1 className="text-white text-2xl md:text-3xl font-bold">Gestión de Gastos</h1>
            </div>
            <div className="mb-10">
                <FiltrosEgresos onFiltrar={filtrarEgresos} />
            </div>
            <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden">
                <TablaEgresos lista={egresosFiltrados} />
            </div>
        </div>
    );
}