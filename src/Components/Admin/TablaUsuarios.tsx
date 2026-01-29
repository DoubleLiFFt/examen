import React from 'react';
import { usersAccounts, type RolUsers } from '../types/RolUsers';

interface TablaUsuariosProps {
    lista?: RolUsers[];
}

export default function TablaUsuarios({ lista }: TablaUsuariosProps) {

    const datosAMostrar = lista || usersAccounts;

    return (
        <div className="w-full overflow-x-auto rounded-xl">
            <table className="w-full border-collapse text-center bg-[#1e1e1e] text-white">
                <thead>
                <tr className="text-gray-400 text-xs md:text-sm uppercase tracking-wider border-b border-gray-700">
                    <th className="p-4 font-semibold">Usuario</th>
                    <th className="p-4 font-semibold hidden sm:table-cell">Email</th>
                    <th className="p-4 font-semibold">Rol</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                {datosAMostrar.map((usuario, index) => (
                    <tr key={index} className="hover:bg-gray-800 transition-colors">
                        <td className="p-4 text-sm">
                            <span className="font-medium block">{usuario.username}</span>
                            <span className="text-[10px] text-gray-500 sm:hidden block mt-1">{usuario.email}</span>
                        </td>
                        <td className="p-4 text-sm text-gray-400 hidden sm:table-cell">
                            {usuario.email}
                        </td>
                        <td className="p-4 text-sm">
                                <span className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide border ${usuario.rol === 'Administrador' ? 'bg-emerald-900/30 text-emerald-400 border-emerald-800/30'
                                    : usuario.rol === 'Auditor'
                                        ? 'bg-yellow-900/30 text-yellow-400 border-yellow-800/30'
                                        : 'bg-blue-900/30 text-blue-400 border-blue-800/30'
                                }`}>
                                    {usuario.rol}
                                </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}