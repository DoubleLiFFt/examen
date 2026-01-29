import { useState } from "react";
import FiltroHistorial from "./FiltrosHistorial";
import TablaHistorial from "./TablaHistorial";

import { usersAccounts } from "../../Components/types/HistoUsers";
import type { HistoUsers } from "../../Components/types/HistoUsers";

export default function HistorialAccesos() {

    const [datosFiltrados, setDatosFiltrados] = useState<HistoUsers[]>(usersAccounts);

    const ejecutarFiltro = (accion: string, inicio: string, fin: string) => {
        let resultado = [...usersAccounts];

        if (accion !== "Todos") {
            resultado = resultado.filter((h) => h.accion === accion);
        }


        if (inicio && fin) {
            resultado = resultado.filter((h) => h.createdTime >= inicio && h.createdTime <= fin);
        } else if (inicio) {
            resultado = resultado.filter((h) => h.createdTime >= inicio);
        } else if (fin) {
            resultado = resultado.filter((h) => h.createdTime <= fin);
        }

        setDatosFiltrados(resultado);
    };

    return (

        <div className="border border-gray-800 bg-[#1e1e1e] p-8 rounded-3xl mb-12 mx-22 mt-12">
            <FiltroHistorial onFiltrar={ejecutarFiltro} />
            <TablaHistorial lista={datosFiltrados} />
        </div>
    );
}