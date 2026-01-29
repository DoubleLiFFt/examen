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
        <div className="border border-gray-800 bg-[#1e1e1e] p-8 rounded-3xl mb-12 mx-22 mt-12">
            <h1 className="text-emerald-500 text-xl mb-6">Mis Gastos</h1>
            <h1 className="text-emerald-500 text-3xl font-bold mb-6 py-4 text-center">Gestion de Gastos</h1>
            <FiltrosEgresos onFiltrar={filtrarEgresos} />
            <TablaEgresos lista={egresosFiltrados} />
        </div>
    );
}