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
        <div className="border border-gray-800 bg-[#1e1e1e] p-8 rounded-3xl mb-12 mx-22 mt-12">
            <FiltroUsuarios alFiltrar={ejecutarFiltro} />
            <TablaUsuarios lista={usuariosFiltrados} />
        </div>
    );
}