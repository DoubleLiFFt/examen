import { useEffect, useState } from "react";
import { usersAccounts } from "../types/HistoUsers";
import type { HistoUsers } from "../types/HistoUsers";

interface TablaHistorialProps {
    refreshSignal : number
}

export default function TablaHistorial({ refreshSignal }: TablaHistorialProps) {
        const [listaMostrar, setListaMostrar] = useState<any[]>([])
        const [dataServidor, setDataServidor] = useState<any[]>([])
    
        useEffect(() => {
            fetch("http://127.0.0.1:8000/usersTablas")
                .then(response => response.json())
                .then(data => {
                    setDataServidor(data)
                    setListaMostrar(data)
                })
                .catch(error => console.error("Error cargando datos: ", error))
        }, [refreshSignal]);
    
    const datosAMostrar = dataServidor || usersAccounts;
    

    return (
        <div className="w-full overflow-x-auto rounded-xl">
            <table className="w-full border-collapse text-center bg-[#1e1e1e] text-white">
                <thead>
                    <tr className="text-gray-400 text-xs md:text-sm uppercase tracking-wider border-b border-[#2a2a2a]">
                        <th className="p-4 font-semibold">FECHA</th>
                        <th className="p-4 font-semibold">USUARIO</th>
                        <th className="p-4 font-semibold hidden sm:table-cell">DIRECCION IP</th>
                        <th className="p-4 font-semibold">ACCION</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#2a2a2a]">
                {datosAMostrar.map((historial, index) => (
                    <tr key={index} className="hover:bg-[#252525] transition-colors">
                        <td className="p-4 text-xs md:text-sm text-gray-400 whitespace-nowrap">
                            {historial.createdTime}
                        </td>
                        <td className="p-4 text-sm font-medium">
                            {historial.username}
                            <span className="block text-[10px] text-gray-600 sm:hidden mt-1">
                  {historial.ip}
                </span>
                        </td>
                        <td className="p-4 text-sm text-gray-500 hidden sm:table-cell">
                            {historial.ip}
                        </td>
                        <td className="p-4 text-sm">
                <span className={`font-bold px-2 py-1 rounded-md text-[10px] md:text-xs uppercase border ${
                    historial.accion === 'Login'
                        ? 'text-green-400 bg-green-400/10 border-green-400/20'
                        : 'text-red-400 bg-red-400/10 border-red-400/20'
                }`}>
                  {historial.accion}
                </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}