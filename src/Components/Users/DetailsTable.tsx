import {useState, useEffect} from "react";
import {Funnel} from "lucide-react";
import FiltrosEgresos from "./FiltrosEgresos.tsx";
import {gastos} from "../types/Gastos.ts";

interface menuProps {
    menuAbierto : (boolean),
    setMenuAbierto : (valor: boolean) => void,
    refreshSignal : number
    onActionSuccess: () => void
}

export default function DetailsTable({menuAbierto, setMenuAbierto, refreshSignal, onActionSuccess} : menuProps) {
    const [dataServidor, setDataServidor] = useState<any[]>([])
    const [listaMostrar, setListraMostrar] = useState<any[]>([])
    const [isEditId, setIsEditId] = useState<number | null>(null)
    const [tempData, setTempData] = useState<any>(null)

    async function eliminarGasto(id: number) {
        const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este gasto?");
        if (!confirmar) return;

        try {
            const response = await fetch(`http://127.0.0.1:8000/eliminarGasto/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                const nuevaLista = dataServidor.filter(g => g.id !== id);
                setDataServidor(nuevaLista);
                setListraMostrar(nuevaLista);
                onActionSuccess();
                console.log("Registro eliminado con éxito");
            } else {
                alert("Error al intentar eliminar el registro.");
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    }

    function iniciarEdicion(gasto: any) {
        setIsEditId(gasto.id)
        setTempData({...gasto})
    }

    async function guardarCambios() {
        if (!tempData) return;
        try {
            const response = await fetch(`http://127.0.0.1:8000/editTableGastos/${tempData.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(tempData)
            });

            if (response.ok) {
                setIsEditId(null);
                const dataActualizada = dataServidor.map(g => g.id === tempData.id ? tempData : g);
                setDataServidor(dataActualizada);
                setListraMostrar(dataActualizada);
                onActionSuccess();
            }
        } catch (error) {
            console.error("Error al editar", error);
        }
    }

    useEffect(() => {
        fetch("http://127.0.0.1:8000/tablas")
            .then(response => response.json())
            .then(data => {
                setDataServidor(data)
                setListraMostrar(data)
            })
            .catch(error => console.error("Error cargando datos: ", error))
    }, [refreshSignal]);

    function aplicarFiltro (categoria : string, inicio : string, fin : string, minimo : string, maximo : string){
        const resultado = dataServidor.filter((gasto) => {
            const coincidenceCategory = (categoria === "Categoría") || gasto.category === categoria
            const coincidenceInit = (inicio >= "") || gasto.date >= inicio
            const coincidenceFinal = (fin <= "") || gasto.date <= fin
            return coincidenceCategory && coincidenceFinal && coincidenceInit
        })
        setListraMostrar(resultado)
        console.log("Filtrando por: ", {categoria, inicio, fin, minimo, maximo})
    }

    function handleClick() {
        setMenuAbierto(!menuAbierto)
    }
    //----------------------------------------------------------------------------------------------------
    return (
        <table className="w-full border-collapse bg-[#1a1a1a] text-white rounded-2xl overflow-hidden">
            <thead className="bg-[#242424] text-zinc-500 text-[10px] uppercase tracking-widest">
            {menuAbierto && (
                <tr>
                    <th colSpan={5} className="p-6 bg-[#2a2a2a]">
                        <FiltrosEgresos onFiltrar={aplicarFiltro}/>
                    </th>
                </tr>
            )}
            <tr className="text-left">
                <th className="px-6 py-4">Fecha</th>
                <th className="px-6 py-4">Monto</th>
                <th className="px-6 py-4">Categoria</th>
                <th className="px-6 py-4">Descripción</th>
                <th className="px-6 py-4">
                    <Funnel
                        className={`cursor-pointer transition-colors ${menuAbierto ? 'text-emerald-500' : 'hover:text-emerald-400'}`}
                        onClick={handleClick}
                    />
                </th>
            </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
                {(menuAbierto ? listaMostrar : dataServidor).map((gasto) => (
                    <tr key={gasto.id} className="hover:bg-[#202020] transition-colors">
                        <td className="px-6 py-4 text-sm">
                            {isEditId === gasto.id ? (
                                <input
                                    type="date"
                                    className="bg-[#2a2a2a] border border-emerald-500 rounded px-2 py-1 text-white"
                                    value={tempData.date}
                                    onChange={(e) => setTempData({ ...tempData, date: e.target.value })}
                                />
                            ) : gasto.date}
                        </td>
                        <td className="px-6 py-4 text-sm text-emerald-400 font-bold">
                            {isEditId === gasto.id ? (
                                <input
                                    type="number"
                                    className="bg-[#2a2a2a] border border-emerald-500 rounded px-2 py-1 text-white w-24"
                                    value={tempData.mount}
                                    onChange={(e) => setTempData({ ...tempData, mount: e.target.value })}
                                />
                            ) : `S/. ${gasto.mount}`}
                        </td>
                        <td className="px-6 py-4 text-sm">
                            {isEditId === gasto.id ? (
                                <select
                                    className="bg-[#2a2a2a] border border-emerald-500 rounded px-2 py-1 text-white"
                                    value={tempData.category}
                                    onChange={(e) => setTempData({ ...tempData, category: e.target.value })}
                                >
                                    <option value="Comida">Comida</option>
                                    <option value="Transporte">Transporte</option>
                                    <option value="Salud">Salud</option>
                                    <option value="Ocio">Ocio</option>
                                </select>
                            ) : gasto.category}
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-400">
                            {isEditId === gasto.id ? (
                                <input
                                    type="text"
                                    className="bg-[#2a2a2a] border border-emerald-500 rounded px-2 py-1 text-white w-full"
                                    value={tempData.description}
                                    onChange={(e) => setTempData({ ...tempData, description: e.target.value })}
                                />
                            ) : gasto.description}
                        </td>
                        <td className="px-4 md:px-6 py-4">
                            <div className="flex justify-center items-center gap-2 md:gap-3">
                                {isEditId === gasto.id ? (
                                    /* BOTÓN GUARDAR (CHECK) */
                                    <button
                                        className="text-emerald-500 hover:text-emerald-400 transition-all hover:scale-110 cursor-pointer p-1"
                                        onClick={guardarCambios}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </button>
                                ) : (
                                    /* BOTÓN EDITAR (LÁPIZ) */
                                    <button
                                        className="text-blue-500 hover:text-blue-400 transition-all hover:scale-110 cursor-pointer p-1"
                                        onClick={() => iniciarEdicion(gasto)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                        </svg>
                                    </button>
                                )}

                                {/* BOTÓN ELIMINAR (SIEMPRE VISIBLE O CANCELAR SI ESTÁ EDITANDO) */}
                                <button
                                    className="text-red-500 hover:text-red-400 transition-all hover:scale-110 cursor-pointer p-1"
                                    onClick={() => isEditId === gasto.id ? setIsEditId(null) : eliminarGasto(gasto.id)}
                                >
                                    {isEditId === gasto.id ? (
                                        /* Icono X para cancelar */
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        /* Icono Basura */
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
    )
}