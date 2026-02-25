import { useState } from "react";
import FiltroUsuarios from "./FiltrosUsuarios";
import TablaUsuarios from "./TablaUsuarios";


export default function GestionUsuarios() {
    const [rolSeleccionado, setRolSeleccionado] = useState<string>("-1");
    const [refresh, setRefresh] = useState(0);

    const ejecutarFiltro = (rol: string) => {
        setRolSeleccionado(rol);
        setRefresh(prev => prev + 1);
    };

    return (
        <div className="max-w-7xl mx-auto border border-gray-800 bg-[#1e1e1e] p-4 rounded-2xl">
            <FiltroUsuarios alFiltrar={ejecutarFiltro} />
            <div className="mt-4">
                <TablaUsuarios refreshSignal={refresh} rolFiltro={rolSeleccionado} />
            </div>
        </div>
    );
}