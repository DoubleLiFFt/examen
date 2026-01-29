import React, { useState } from 'react';

interface PropsFiltro {
    alFiltrar: (rol: string) => void;
}

export default function FiltroUsuarios({ alFiltrar }: PropsFiltro) {
    const [rolSeleccionado, setRolSeleccionado] = useState("-1");

    const roles = ["Administrador", "Usuario", "Auditor"];

    return (
        <div className="mb-6">
            <h1 className="text-3xl font-bold mb-6 text-emerald-600 text-center py-3">Gestión de Usuarios</h1>

            <div className="flex items-center gap-4 mb-4">
                <select
                    className="border rounded p-2 w-64 bg-gray-800 text-white border-gray-700"
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
                    className="bg-emerald-700 hover:bg-emerald-600 text-white py-2 px-8 rounded-md transition-colors"
                    onClick={() => alFiltrar(rolSeleccionado)}
                >
                    Filtrar
                </button>
            </div>
        </div>
    );
}