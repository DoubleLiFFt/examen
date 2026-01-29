import { usersAccounts } from "../types/Users";

export default function TableUsersAdmin() {
    return (
        <div className="flex flex-col gap-6 w-full h-full">
            <h1 className="text-xl md:text-2xl font-bold text-center text-emerald-400">
                Lista de Usuarios Registrados
            </h1>
            <div className="w-full overflow-x-auto rounded-xl">
                <table className="w-full text-left border-collapse bg-[#1e1e1e]">
                    <thead>
                    <tr className="border-b border-[#3a3a3a] text-gray-400 text-xs md:text-sm uppercase tracking-widest">
                        <th className="px-4 md:px-6 py-4 font-semibold text-center">Nombre de Usuario</th>
                        <th className="px-4 md:px-6 py-4 font-semibold text-center hidden sm:table-cell">Correo</th>
                        <th className="px-4 md:px-6 py-4 font-semibold text-center">Estado</th>
                        <th className="px-4 md:px-6 py-4 font-semibold text-center">Acciones</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-300">
                    {usersAccounts.map((Users) => (
                        <tr
                            key={Users.id}
                            className="border-b border-[#252525] hover:bg-[#252525]/50 transition-colors group"
                        >
                            <td className="px-4 md:px-6 py-4 text-center font-medium">
                                <span className="text-sm md:text-base block">{Users.username}</span>
                                <span className="text-[10px] text-gray-500 sm:hidden block mt-1">{Users.email}</span>
                            </td>
                            <td className="px-4 md:px-6 py-4 text-center text-gray-400 hidden sm:table-cell text-sm">
                                {Users.email}
                            </td>
                            <td className="px-4 md:px-6 py-4 text-center">
                                {Users.emailVerified ? (
                                    <span className="bg-emerald-900/30 text-emerald-400 px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-bold border border-emerald-800/20 whitespace-nowrap">
                                            ✓ Verificado
                                        </span>
                                ) : (
                                    <span className="bg-red-900/30 text-red-400 px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-bold border border-red-800/20 whitespace-nowrap">
                                            ⚠ Pendiente
                                        </span>
                                )}
                            </td>
                            <td className="px-4 md:px-6 py-4">
                                <div className="flex justify-center items-center gap-2 md:gap-3">
                                    <button className="text-emerald-500 hover:text-emerald-400 transition-all hover:scale-110 cursor-pointer p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </button>
                                    <button className="text-blue-500 hover:text-blue-400 transition-all hover:scale-110 cursor-pointer p-1">
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
        </div>
    );
}