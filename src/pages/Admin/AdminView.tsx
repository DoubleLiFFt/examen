import TableUsersAdmin from "../../Components/Admin/TableUserAdmin";
import CreateUserAdmin from "../../Components/Admin/CreateUserAdmin";
import GraphicAdmin from "../../Components/Admin/GraphicAdmin.tsx";
import HistorialAccesos from "../../Components/Admin/HistorialAccesos.tsx";
import GestionUsuarios from "../../Components/Admin/GestionUsuarios.tsx";
import { useState } from "react";

function AdminView() {
  const [isFiltering, setIsFiltering] = useState(false);

  return (
      <div className="min-h-screen bg-[#121212] text-gray-200 p-3 sm:p-4 md:p-8 font-sans">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">

          {/* Header - Se mantiene estático */}
          <header className="flex flex-col md:flex-row justify-between items-center bg-[#1e1e1e] p-6 rounded-3xl shadow-xl border border-emerald-900/20">
            <div className="text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Panel de <span className="text-emerald-500">Administración</span>
              </h1>
              <p className="text-zinc-500 text-sm">Control total de usuarios y sistemas</p>
            </div>
            <CreateUserAdmin />
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">

            {/* SECCIÓN GRÁFICA: Comportamiento Sticky (Persistente) */}
            {!isFiltering && (
                <aside className="xl:col-span-1 sticky top-8 animate-in fade-in slide-in-from-left-4 duration-500">
                  <section className="bg-[#1e1e1e] p-6 rounded-3xl shadow-2xl border border-[#2a2a2a] flex flex-col items-center">
                    <h2 className="text-xs font-bold mb-6 text-emerald-400 uppercase tracking-[0.2em]">
                      Estado de Usuarios
                    </h2>

                    <div className="w-full aspect-square flex items-center justify-center">
                      <GraphicAdmin />
                    </div>

                    <div className="mt-6 p-5 bg-[#242424] rounded-2xl w-full text-center border border-zinc-800/50">
                      <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">
                        Total Registrados
                      </p>
                      <p className="text-3xl font-bold text-white font-mono">30</p>
                    </div>
                  </section>
                </aside>
            )}

            {/* SECCIÓN TABLA: Se expande si isFiltering es true */}
            <section className={`transition-all duration-700 ease-in-out bg-[#1e1e1e] p-5 sm:p-6 rounded-3xl shadow-xl border border-[#2a2a2a] ${
                isFiltering ? "xl:col-span-3" : "xl:col-span-2"
            }`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-emerald-400">Lista de Usuarios</h2>
                {isFiltering && (
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full border border-emerald-500/20 font-bold uppercase tracking-widest">
                  Filtros activos
                </span>
                )}
              </div>

              <div className="overflow-x-auto">
                <TableUsersAdmin menuAbierto={isFiltering} setMenuAbierto={setIsFiltering} />
              </div>
            </section>
          </div>
          <div className="pt-4">
            <HistorialAccesos />
          </div>
        </div>
      </div>
  );
}

export default AdminView;