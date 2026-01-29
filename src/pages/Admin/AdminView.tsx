import TableUsersAdmin from "../../Components/Admin/TableUserAdmin";
import CreateUserAdmin from "../../Components/Admin/CreateUserAdmin";
import GraphicAdmin from "../../Components/Admin/GraphicAdmin.tsx";
import HistorialAccesos from "../../Components/Admin/HistorialAccesos.tsx";
import GestionUsuarios from "../../Components/Admin/GestionUsuarios.tsx";

function AdminView() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 p-3 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        <header className="flex flex-col md:flex-row justify-between items-center bg-[#1e1e1e] p-5 sm:p-6 md:p-8 rounded-3xl shadow-xl border border-emerald-900/30">
          <div className="mb-4 sm:mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Panel de Administración
            </h1>
            <p className="text-emerald-500 font-medium">
              Gestión de Usuarios y Sistemas
            </p>
          </div>

          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <CreateUserAdmin />
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
          <section className="xl:col-span-1 bg-[#1e1e1e] p-4 sm:p-6 rounded-3xl shadow-lg border border-[#2a2a2a] flex flex-col items-center">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-emerald-400 text-center">
              Estado de usuarios
            </h2>

            <div className="w-full max-w-[320px] sm:max-w-none aspect-square flex items-center justify-center">
              <GraphicAdmin />
            </div>

            <div className="mt-4 sm:mt-6 p-4 bg-[#2a2a2a] rounded-2xl w-full text-center">
              <p className="text-sm text-gray-400">Total Usuarios Registrados</p>
              <p className="text-2xl font-bold text-white">30</p>
            </div>
          </section>

          <section className="xl:col-span-2 bg-[#1e1e1e] p-4 sm:p-6 rounded-3xl shadow-lg border border-[#2a2a2a] overflow-hidden">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-emerald-400">
                Lista de usuarios
              </h2>

              <span className="w-fit mx-auto sm:mx-0 bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20">
                29 Clientes
              </span>
            </div>

            <div className="-mx-4 sm:mx-0 overflow-x-auto">
              <div className="min-w-[700px] px-4 sm:px-0">
                <TableUsersAdmin />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
        <GestionUsuarios />
        <HistorialAccesos />
      </div>
    </div>
  );
}

export default AdminView;
