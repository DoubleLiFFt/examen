import DetailsTable from "../../Components/Users/DetailsTable";
import Graphic from "../../Components/Users/Graphic";
import AddDetails from "../../Components/Users/AddDetails.tsx";
import MisEgresos from "../../Components/Users/MisEgresos.tsx";
import ExportarGastos from "../../Components/Users/ExportarGastos.tsx";

export default function UserView() {
    return (
        <div className="min-h-screen bg-[#121212] text-gray-200 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <header className="flex flex-col md:flex-row justify-between items-center bg-[#1e1e1e] p-6 rounded-2xl shadow-lg border border-emerald-900/30 gap-6">
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl md:text-3xl font-bold text-white">Panel de Finanzas</h1>
                        <p className="text-gray-400 text-sm md:text-base">Gestiona tus ingresos y egresos del mes</p>
                    </div>
                    <AddDetails />
                </header>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    <section className="order-2 lg:order-1 lg:col-span-3 bg-[#1e1e1e] p-4 md:p-6 rounded-2xl shadow-lg border border-[#2a2a2a] flex flex-col">
                        <h2 className="text-xl font-semibold mb-4 text-emerald-400">Gastos recientes</h2>
                        <div className="overflow-x-auto">
                            <DetailsTable />
                        </div>
                    </section>
                    <section className="order-1 lg:order-2 lg:col-span-2 sticky top-8 bg-[#1e1e1e] p-6 md:p-8 rounded-2xl shadow-lg border border-[#2a2a2a] flex flex-col items-center">
                        <h2 className="text-xl font-semibold mb-6 text-emerald-400 text-center">Gráfica de Gastos</h2>
                        <div className="w-full aspect-square max-w-[320px] md:max-w-[400px] flex items-center justify-center relative">
                            <Graphic />
                        </div>
                        <div className="mt-4 w-full border-t border-[#2a2a2a] pt-4 text-center">
                            <p className="text-sm text-gray-500 font-medium">Resumen total por categorías</p>
                        </div>
                    </section>
                </div>
                <div className="grid grid-cols-1 gap-8">
                    <div className="bg-[#1e1e1e] p-6 rounded-2xl shadow-lg border border-emerald-900/30 w-full flex justify-center">
                        <ExportarGastos />
                    </div>
                    <div className="w-full">
                        <MisEgresos/>
                    </div>
                </div>
            </div>
        </div>
    );
}