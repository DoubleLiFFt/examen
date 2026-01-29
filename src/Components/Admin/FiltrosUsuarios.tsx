import React, { useState } from 'react';

interface PropsFiltro {
    alFiltrar: (rol: string) => void;
}

export default function FiltroUsuarios({ alFiltrar }: PropsFiltro) {
    const [rolSeleccionado, setRolSeleccionado] = useState("-1");

    const roles = ["Administrador", "Usuario", "Auditor"];

    return (
        <div className="mb-6 px-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-emerald-600 text-center py-3">Gestión de Usuarios</h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <select
                    className="border rounded p-2 w-full sm:w-64 bg-gray-800 text-white border-gray-700 h-11"
                    value={rolSeleccionado}
                    onChange={(e) => setRolSeleccionado(e.target.value)}
                >
                    <option value="-1">Seleccionar por Rol</option>
                    {roles.map((rol) => (
                        <option key={rol} value={rol}>
                            {rol}
                        </option>
                    ))}
                </select>

                <button
                    type="button"
                    className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white py-2 px-8 rounded-md transition-colors h-11"
                    onClick={() => alFiltrar(rolSeleccionado)}
                >
                    Filtrar
                </button>
            </div>
        </div>
    );
}