import {useState, useEffect} from "react";
import {Funnel} from "lucide-react";
import FiltrosEgresos from "./FiltrosEgresos.tsx";

interface menuProps {
    menuAbierto : (boolean),
    setMenuAbierto : (valor: boolean) => void,
    refreshSignal : number
}

export default function DetailsTable({menuAbierto, setMenuAbierto, refreshSignal} : menuProps) {
    const [dataServidor, setDataServidor] = useState<any[]>([])
    const [listaMostrar, setListraMostrar] = useState<any[]>([])
    const [isEdit, setIsEdit] = useState(false)

    function open() {
        setIsEdit(!isEdit)
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
                        <td className="px-6 py-4 text-sm">{gasto.date}</td>
                        <td className="px-6 py-4 text-sm text-emerald-400 font-bold">S/. {gasto.mount}</td>
                        <td className="px-6 py-4 text-sm">{gasto.category}</td>
                        <td className="px-6 py-4 text-sm text-zinc-400">{gasto.description}</td>
                        <td className="px-4 md:px-6 py-4">
                            <div className="flex justify-center items-center gap-2 md:gap-3">
                            {isEdit &&(
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
    )
}