import React from 'react';
import { usersAccounts, type RolUsers } from '../types/RolUsers';

interface TablaUsuariosProps {
    lista?: RolUsers[];
}

export default function TablaUsuarios({ lista }: TablaUsuariosProps) {

    const datosAMostrar = lista || usersAccounts;

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center bg-[#1e1e1e] text-white">
                <thead>
                    <tr className="text-gray-400 font-extralight border-b border-gray-700">
                        <th className="p-2">Usuario</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {datosAMostrar.map((usuario, index) => (
                        <tr key={index} className="border-t border-gray-800 hover:bg-gray-800 transition-colors">
                            <td className="p-2">{usuario.username}</td>
                            <td className="p-2">{usuario.email}</td>
                            <td className="p-2">
                                <span className={`px-3 py-1 rounded-full  font-bold ${usuario.rol === 'Administrador' ? 'bg-emerald-900/30 text-emerald-400'
                                    : usuario.rol === 'Auditor'
                                        ? 'bg-yellow-900/30 text-yellow-400'
                                        : 'bg-blue-900/30 text-blue-400'
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