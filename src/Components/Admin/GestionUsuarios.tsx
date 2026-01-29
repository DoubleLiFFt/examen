import { useState } from "react";
import FiltroUsuarios from "./FiltrosUsuarios";
import TablaUsuarios from "./TablaUsuarios";
import { usersAccounts, type RolUsers } from "../../Components/types/RolUsers";

export default function GestionUsuarios() {
    const [usuariosFiltrados, setUsuariosFiltrados] = useState<RolUsers[]>(usersAccounts);

    const ejecutarFiltro = (rol: string) => {
        if (rol === "-1") {
            setUsuariosFiltrados(usersAccounts);
        } else {
            const resultado = usersAccounts.filter((u) => u.rol === rol);
            setUsuariosFiltrados(resultado);
        }
    };

    return (
        <div className="max-w-7xl mx-auto border border-gray-800 bg-[#1e1e1e] p-4 md:p-8 rounded-2xl md:rounded-3xl mb-12 mx-4 md:mx-auto mt-8 md:mt-12 shadow-xl">
            <FiltroUsuarios alFiltrar={ejecutarFiltro} />
            <div className="mt-4 overflow-hidden">
                <TablaUsuarios lista={usuariosFiltrados} />
            </div>
        </div>
    );
}