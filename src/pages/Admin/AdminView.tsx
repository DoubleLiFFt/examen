import TableUsersAdmin from "../../Components/Admin/TableUserAdmin";
import CreateUserAdmin from "../../Components/Admin/CreateUserAdmin";
import GraphicAdmin from "../../Components/Admin/GraphicAdmin.tsx";
import HistorialAccesos from "../../Components/Admin/HistorialAccesos.tsx";
import GestionUsuarios from "../../Components/Admin/GestionUsuarios.tsx";

function AdminView() {
    return (
        <div className="min-h-screen bg-[#121212] text-gray-200 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <header className="flex flex-col md:flex-row justify-between items-center bg-[#1e1e1e] p-8 rounded-3xl shadow-xl border border-emerald-900/30">
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-3xl font-bold text-white">Panel de Administración</h1>
                        <p className="text-emerald-500 font-medium">Gestión de Usuarios y Sistemas</p>
                    </div>
                    <CreateUserAdmin />
                </header>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    <section className="xl:col-span-1 bg-[#1e1e1e] p-6 rounded-3xl shadow-lg border border-[#2a2a2a] flex flex-col items-center">
                        <h2 className="text-xl font-semibold mb-6 text-emerald-400">Estado de usuarios</h2>
                        <div className="w-full aspect-square flex items-center justify-center">
                            <GraphicAdmin />
                        </div>
                        <div className="mt-6 p-4 bg-[#2a2a2a] rounded-2xl w-full text-center">
                            <p className="text-sm text-gray-400">Total Usuarios Registrados</p>
                            <p className="text-2xl font-bold text-white">30</p>
                        </div>
                    </section>
                    <section className="xl:col-span-2 bg-[#1e1e1e] p-6 rounded-3xl shadow-lg border border-[#2a2a2a] overflow-hidden">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-emerald-400">Lista de usuarios</h2>
                            <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20">
                                29 Clientes
                            </span>
                        </div>
                        <div className="overflow-x-auto">
                            <TableUsersAdmin />
                        </div>
                    </section>
                </div>
            </div>
            <div>
                <GestionUsuarios/>
            </div>
            <div>
                <HistorialAccesos/>
            </div>
        </div>
    );
}

export default AdminView;