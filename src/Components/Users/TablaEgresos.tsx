import React, { useEffect, useState } from 'react';

interface TablaEgresosProps {
    refreshSignal: number;
    categoriaFiltro: string;
}

export default function TablaEgresos({ refreshSignal, categoriaFiltro }: TablaEgresosProps) {
    const [dataServidor, setDataServidor] = useState<any[]>([]);
    
    useEffect(() => {
    fetch(`http://127.0.0.1:8000/gastosPorCategoria/${categoriaFiltro}`)
        .then(response => response.json())
        .then(data => {
            setDataServidor(data);
        })
        .catch(error => console.error("Error cargando egresos: ", error));
    }, [refreshSignal, categoriaFiltro]);
    

    return (
        <div className="w-full overflow-x-auto rounded-xl">
            <table className="w-full border-collapse bg-[#1e1e1e] text-white">
                <thead>
                <tr className="text-gray-400 text-xs md:text-sm uppercase tracking-widest border-b border-[#2a2a2a]">
                    <th className="p-4 text-left hidden md:table-cell">Fecha</th>
                    <th className="p-4 text-left">Categoría</th>
                    <th className="p-4 text-left hidden sm:table-cell">Descripción</th>
                    <th className="p-4 text-right">Monto</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2a2a]">
                {dataServidor.map((egreso, index) => (
                    <tr key={index} className="hover:bg-[#252525] transition-colors group">
                        <td className="p-4 text-sm text-gray-500 hidden md:table-cell">
                            {egreso.date}
                        </td>
                        <td className="p-4">
                                <span className="font-medium text-gray-200 block md:inline">
                                    {egreso.category}
                                </span>
                            <span className="text-[10px] text-gray-500 md:hidden block mt-1">
                                    {egreso.date}
                                </span>
                        </td>
                        <td className="p-4 text-sm text-gray-400 hidden sm:table-cell">
                            {egreso.description}
                        </td>
                        <td className="p-4 text-right font-mono font-bold text-red-500">
                            S/ {Number(egreso.mount).toFixed(2)}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}