import React, { useState } from 'react';

interface PropsFiltro {
    onFiltrar: (accion: string, inicio: string, fin: string) => void;
}

export default function FiltroHistorial({ onFiltrar }: PropsFiltro) {

    const [accion, setAccion] = useState("Todas");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");

    return (
        <div className="flex flex-col gap-4 mb-6 px-4 md:ml-5 w-full">
            <h1 className="text-emerald-500 text-2xl md:text-3xl font-bold mb-6 text-center">Historial de Accesos</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <select
                    className="border rounded p-2 bg-gray-800 text-white w-full h-11"
                    value={accion}
                    onChange={(e) => setAccion(e.target.value)}
                >
                    <option value="Todas">Todos los estados</option>
                    <option value="Login">Login</option>
                    <option value="Logout">Logout</option>
                </select>

                <input
                    type="date"
                    className="border rounded p-2 bg-gray-800 text-white w-full h-11"
                    value={fechaInicio}
                    onChange={(e) => setFechaInicio(e.target.value)}
                />

                <input
                    type="date"
                    className="border rounded p-2 bg-gray-800 text-white w-full h-11"
                    value={fechaFin}
                    onChange={(e) => setFechaFin(e.target.value)}
                />

                <button
                    type="button"
                    onClick={() => onFiltrar(accion, fechaInicio, fechaFin)}
                    className="bg-emerald-700 py-2 px-4 md:px-10 rounded-md text-white hover:bg-emerald-600 transition-colors w-full lg:w-auto lg:mx-auto h-11"
                >
                    Filtrar
                </button>
            </div>
        </div>
    );
}