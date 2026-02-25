import React, {useEffect, useState} from 'react';

interface TablaUsuariosProps {
    refreshSignal: number;
    rolFiltro: string;
}

export default function TablaUsuarios({ refreshSignal, rolFiltro }: TablaUsuariosProps) {
    const [dataServidor, setDataServidor] = useState<any[]>([]);

    const usuariosFiltrados = dataServidor.filter((usuario) => {
        if (rolFiltro === "-1") return true;
        const roleLower = usuario.userrole?.toLowerCase();
        if (rolFiltro === "Administrador") return roleLower === "admin" || roleLower === "administrador";
        if (rolFiltro === "Usuario") return roleLower === "user" || roleLower === "usuario";

        return false;
    });

    useEffect(() => {
 
        fetch(http://127.0.0.1:8000/usersTablas)
            .then(response => response.json())
            .then(data => setDataServidor(data))
            .catch(error => console.error("Error cargando datos:", error));
    }, [refreshSignal, rolFiltro]); 

    
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
                {usuariosFiltrados.map((usuario, index) => (
                    <tr key={index} className="hover:bg-gray-800 transition-colors">
                        <td className="p-4 text-sm">
                            <span className="font-medium block">{usuario.username}</span>
                            <span className="text-[10px] text-gray-500 sm:hidden block mt-1">{usuario.email}</span>
                        </td>
                        <td className="p-4 text-sm text-gray-400 hidden sm:table-cell">
                            {usuario.email}
                        </td>
                        <td className="p-4 text-sm">
                                <span className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide border 
                                        ${usuario.userrole === 'admin' 
                                        ? 'bg-yellow-900/30 text-yellow-400 border-yellow-800/30'
                                        : 'bg-blue-900/30 text-blue-400 border-blue-800/30'
                                }`}>
                                    {usuario.userrole}
                                </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}