import { Funnel } from "lucide-react";
import GestionUsuarios from "./GestionUsuarios.tsx";
import {useEffect, useState} from "react";

interface tableAdmin {
    menuAbierto: boolean,
    setMenuAbierto: (valor: boolean) => void,
    refreshSignal: number
}

export default function TableUsersAdmin({ menuAbierto, setMenuAbierto, refreshSignal }: tableAdmin) {
    const [dataServidor, setDataServidor] = useState<any[]>([])
    const [listaMostrar, setListaMostrar] = useState<any[]>([])
    const [editUserId, setEditUserId] = useState<number | null>(null);
    const [tempUser, setTempUser] = useState<any>(null);

    function iniciarEdicion(user: any) {
        setEditUserId(user.id);
        setTempUser({ ...user });
    }

    useEffect(() => {
        fetch("http://127.0.0.1:8000/usersTablas")
            .then(response => response.json())
            .then(data => {
                setDataServidor(data)
                setListaMostrar(data)
            })
            .catch(error => console.error("Error cargando datos: ", error))
    }, [refreshSignal]);

    async function guardarCambiosUsuario() {
        try {
            const response = await fetch(`http://127.0.0.1:8000/editTableUsers/${tempUser.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(tempUser)
            });
            if (response.ok) {
                setDataServidor(dataServidor.map(u => u.id === tempUser.id ? tempUser : u));
                setEditUserId(null);
            }
        } catch (error) {
            console.error("Error al editar usuario", error);
        }
    }

    async function eliminarUsuario(id: number) {
        if (!window.confirm("¿Eliminar este usuario permanentemente?")) return;
        try {
            const response = await fetch(`http://127.0.0.1:8000/eliminarUsuario/${id}`, {
                method: "DELETE"
            });
            if (response.ok) {
                setDataServidor(dataServidor.filter(u => u.id !== id));
            }
        } catch (error) {
            console.error("Error al eliminar", error);
        }
    }

    function handleClick() {
        setMenuAbierto(!menuAbierto);
    }
    //--------------------------------------------------------------------------------------------------------------------
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
                            {dataServidor.map((user) => (
                                <tr key={user.id} className="border-b border-[#252525] hover:bg-[#252525]/50">
                                    <td className="px-6 py-4 text-center">
                                        {editUserId === user.id ? (
                                            <input
                                                className="bg-[#2a2a2a] border border-emerald-500 rounded px-2"
                                                value={tempUser.username}
                                                onChange={(e) => setTempUser({...tempUser, username: e.target.value})}
                                            />
                                        ) : user.username}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {editUserId === user.id ? (
                                            <input
                                                className="bg-[#2a2a2a] border border-emerald-500 rounded px-2"
                                                value={tempUser.email}
                                                onChange={(e) => setTempUser({...tempUser, email: e.target.value})}
                                            />
                                        ) : user.email}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${
                                            user.emailverified ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                                        }`}>
                                            {user.emailverified ? "ACTIVO" : "PENDIENTE"}
                                        </span>
                                    </td>
                                    <td className="px-4 md:px-6 py-4">
                                        <div className="flex justify-center items-center gap-2 md:gap-3">
                                            {editUserId === user.id ? (
                                                <button
                                                    className="text-emerald-500 hover:text-emerald-400 transition-all hover:scale-110 cursor-pointer p-1"
                                                    onClick={guardarCambiosUsuario}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </button>
                                            ) : (
                                                <button
                                                    className="text-blue-500 hover:text-blue-400 transition-all hover:scale-110 cursor-pointer p-1"
                                                    onClick={() => iniciarEdicion(user)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                    </svg>
                                                </button>
                                            )}
                                            <button
                                                className="text-red-500 hover:text-red-400 transition-all hover:scale-110 cursor-pointer p-1"
                                                onClick={() => editUserId === user.id ? setEditUserId(null) : eliminarUsuario(user.id)}
                                            >
                                                {editUserId === user.id ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                )}
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