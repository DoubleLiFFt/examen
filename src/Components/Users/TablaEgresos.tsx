import React from 'react';
import { listaGastosDB, type GastosUsers } from '../types/GastosUsers';

interface TablaEgresosProps {
    lista?: GastosUsers[];
}

export default function TablaEgresos({ lista }: TablaEgresosProps) {
    const datosAMostrar = lista || listaGastosDB;

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center bg-[#1e1e1e] text-white">
                <thead>
                    <tr className="text-gray-400 font-extralight border-b border-gray-700">
                        <th className="p-2">Fecha</th>
                        <th className="p-2">Categoría</th>
                        <th className="p-2">Descripción</th>
                        <th className="p-2">Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {datosAMostrar.map((egreso, index) => (
                        <tr key={index} className="border-t border-gray-800 hover:bg-gray-800">
                            <td className="p-2">{egreso.date}</td>
                            <td className="p-2">{egreso.category}</td>
                            <td className="p-2">{egreso.description}</td>
                            <td className="p-2 text-red-400 font-semibold">
                                S/ {Number(egreso.mount).toFixed(2)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}