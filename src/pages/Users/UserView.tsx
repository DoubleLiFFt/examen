import DetailsTable from "../../Components/Users/DetailsTable";
import Graphic from "../../Components/Users/Graphic";
import AddDetails from "../../Components/Users/AddDetails.tsx";
import CamContra from "../../Components/Users/CamContra.tsx";

export default function UserView() {
    return (
        <div className="min-h-screen bg-[#121212] text-gray-200 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <header className="flex flex-row justify-between items-center bg-[#1e1e1e] p-6 rounded-2xl shadow-lg border border-emerald-900/30">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Panel de Finanzas</h1>
                        <p className="text-gray-400">Gestiona tus ingresos y egresos del mes</p>
                    </div>
                    <AddDetails />
                </header>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <section className="lg:col-span-3 bg-[#1e1e1e] p-6 rounded-2xl shadow-lg border border-[#2a2a2a] overflow-hidden flex flex-col">
                        <h2 className="text-xl font-semibold mb-4 text-emerald-400">Gastos recientes</h2>
                        <div className="flex-grow">
                            <DetailsTable />
                        </div>
                    </section>
                    <section className="lg:col-span-2 bg-[#1e1e1e] p-8 rounded-2xl shadow-lg border border-[#2a2a2a] flex flex-col items-center justify-between">
                        <h2 className="text-xl font-semibold mb-6 text-emerald-400 text-center">Distribución de Gastos</h2>
                        <div className="w-full aspect-square max-w-[400px] flex items-center justify-center relative">
                            <Graphic />
                        </div>
                        <div className="mt-4 w-full border-t border-[#2a2a2a] pt-4 text-center">
                            <p className="text-sm text-gray-500 font-medium">Resumen total por categorías</p>
                        </div>
                    </section>
                </div>
                <footer className="mt-12 pt-8 border-t border-[#2a2a2a]">
                    <div className="max-w-8xl mx-auto">
                        <h3 className="text-center text-xl font-semibold text-emerald-400 mb-8">
                            Ajustes de Cuenta
                        </h3>
                        <div className="bg-[#1e1e1e] p-2 md:p-6 rounded-3xl shadow-xl border border-[#2a2a2a]">
                            <CamContra />
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}