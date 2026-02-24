import DetailsTable from "../../Components/Users/DetailsTable";
import Graphic from "../../Components/Users/Graphic";
import AddDetails from "../../Components/Users/AddDetails.tsx";
import ExportarGastos from "../../Components/Users/ExportarGastos.tsx";
import {useState} from "react";

export default function UserView() {
    const [isFiltering, setIsFiltering] = useState(false)
    const [refreshSignal, setRefreshSignal] = useState(0)

    const triggerRefresh = () => setRefreshSignal(prev => prev + 1)

    return (
        <div className="min-h-screen bg-[#121212] text-gray-200 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <header className="flex flex-col md:flex-row justify-between items-center bg-[#1e1e1e] p-6 rounded-2xl shadow-lg border border-emerald-900/30 gap-6">
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl md:text-3xl font-bold text-white">Panel de Finanzas</h1>
                        <p className="text-gray-400 text-sm md:text-base">Gestiona tus ingresos y egresos del mes</p>
                    </div>
                    <AddDetails onAddSuccess={triggerRefresh} />
                </header>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    <section className={`order-2 lg:order-1 bg-[#1e1e1e] p-4 md:p-6 rounded-2xl shadow-lg border border-[#2a2a2a] flex flex-col transition-all duration-500 ${
                        isFiltering ? "lg:col-span-5" : "lg:col-span-3"
                    }`}>
                        <h2 className="text-xl font-semibold mb-4 text-emerald-400">Gastos recientes</h2>
                        <div className="overflow-x-auto">
                            <DetailsTable menuAbierto={isFiltering} setMenuAbierto={setIsFiltering} refreshSignal={refreshSignal} onActionSuccess={triggerRefresh}/>
                        </div>
                    </section>
                    {!isFiltering && (
                        <section className="order-1 lg:order-2 lg:col-span-2 sticky top-8 bg-[#1e1e1e] p-6 md:p-8 rounded-2xl shadow-lg border border-[#2a2a2a] flex flex-col items-center animate-in fade-in zoom-in duration-300">
                            <h2 className="text-xl font-semibold mb-6 text-emerald-400 text-center">Gráfica de Gastos</h2>
                            <div className="w-full aspect-square max-w-[320px] md:max-w-100 flex items-center justify-center relative">
                                <Graphic refreshSignal={refreshSignal}/>
                            </div>
                            <div className="mt-4 w-full border-t border-[#2a2a2a] pt-4 text-center">
                                <p className="text-sm text-gray-500 font-medium">Resumen total por categorías</p>
                            </div>
                        </section>
                    )}
                </div>
                <div className="grid grid-cols-1 gap-8">
                    <div className="bg-[#1e1e1e] p-6 rounded-2xl shadow-lg border border-emerald-900/30 w-full flex justify-center">
                        <ExportarGastos />
                    </div>
                </div>
            </div>
        </div>
    );
}