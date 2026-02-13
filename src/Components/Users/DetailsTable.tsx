import {gastos} from "../types/Gastos.ts";
import {useState} from "react";
import {Funnel} from "lucide-react";
import FiltrosEgresos from "./FiltrosEgresos.tsx";

interface menuProps {
    menuAbierto : (boolean),
    setMenuAbierto : (valor: boolean) => void
}

export default function DetailsTable({menuAbierto, setMenuAbierto} : menuProps) {
    const [listaMostrar, setListraMostrar] = useState(gastos)

    function aplicarFiltro (categoria : string, inicio : string, fin : string, minimo : string, maximo : string){
        const resultado = gastos.filter((gasto) => {
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
                {(menuAbierto ? listaMostrar : gastos).map((gasto) => (
                    <tr key={gasto.id} className="hover:bg-[#202020] transition-colors">
                        <td className="px-6 py-4 text-sm">{gasto.date}</td>
                        <td className="px-6 py-4 text-sm text-emerald-400 font-bold">S/. {gasto.mount}</td>
                        <td className="px-6 py-4 text-sm">{gasto.category}</td>
                        <td className="px-6 py-4 text-sm text-zinc-400">{gasto.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}