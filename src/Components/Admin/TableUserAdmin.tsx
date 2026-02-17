import { usersAccounts } from "../types/Users";
import { Funnel } from "lucide-react";
import GestionUsuarios from "./GestionUsuarios.tsx";
import {useState} from "react";

interface tableAdmin {
    menuAbierto: boolean,
    setMenuAbierto: (valor: boolean) => void
}

export default function TableUsersAdmin({ menuAbierto, setMenuAbierto }: tableAdmin) {
    const [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(!isOpen)
    }

    function handleClick() {
        setMenuAbierto(!menuAbierto);
    }
    return (
        <div className="flex flex-col gap-6 w-full h-full">
            <div className="flex justify-between items-center bg-[#1e1e1e] p-4 rounded-t-xl border-b border-[#3a3a3a]">
                <h1 className="text-xl md:text-2xl font-bold text-emerald-400">
                    {menuAbierto ? "Gestión Avanzada" : "Lista de Usuarios Registrados"}
                </h1>
                <Funnel
                    onClick={handleClick}
                    className={`cursor-pointer transition-all duration-300 ${
                        menuAbierto ? 'text-emerald-500 scale-110' : 'text-gray-500 hover:text-emerald-400'
                    }`}
                    size={24}
                />
            </div>

            <div className="w-full">
                {menuAbierto ? (
                    <div className="animate-in fade-in zoom-in duration-300">
                        <GestionUsuarios />
                    </div>
                ) : (
                    <div className="overflow-x-auto rounded-b-xl bg-[#1e1e1e] animate-in fade-in duration-300">
                        <table className="w-full text-left border-collapse">
                            <thead>
                            <tr className="text-gray-400 text-[10px] uppercase tracking-widest font-bold border-b border-[#3a3a3a]">
                                <th className="px-6 py-4 text-center">Usuario</th>
                                <th className="px-6 py-4 hidden sm:table-cell text-center">Correo</th>
                                <th className="px-6 py-4 text-center">Estado</th>
                                <th className="px-6 py-4 text-center">Acciones</th>
                            </tr>
                            </thead>
                            <tbody className="text-gray-300">
                            {usersAccounts.map((user) => (
                                <tr key={user.id} className="border-b border-[#252525] hover:bg-[#252525]/50 transition-colors">
                                    <td className="px-6 py-4 text-center font-medium">{user.username}</td>
                                    <td className="px-6 py-4 hidden sm:table-cell text-center text-gray-400">{user.email}</td>
                                    <td className="px-6 py-4 text-center">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
                                                user.emailVerified
                                                    ? "bg-emerald-900/30 text-emerald-400 border-emerald-800/20"
                                                    : "bg-red-900/30 text-red-400 border-red-800/20"
                                            }`}>
                                                {user.emailVerified ? "✓ Verificado" : "⚠ Pendiente"}
                                            </span>
                                    </td>
                                    <td className="px-4 md:px-6 py-4">
                                        <div className="flex justify-center items-center gap-2 md:gap-3">
                                            {isOpen && (
                                                <button className="text-emerald-500 hover:text-emerald-400 transition-all hover:scale-110 cursor-pointer p-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </button>
                                            )}
                                            <button className="text-blue-500 hover:text-blue-400 transition-all hover:scale-110 cursor-pointer p-1" onClick={ open }>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                </svg>
                                            </button>
                                            <button className="text-red-500 hover:text-red-400 transition-all hover:scale-110 cursor-pointer p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}