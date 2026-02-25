import { useState } from "react";
import FiltroHistorial from "./FiltrosHistorial";
import TablaHistorial from "./TablaHistorial";


export default function HistorialAcceso() {

    const [accion, setAccion] = useState<string>("Todas");
    const [inicio, setInicio] = useState<string>("");
    const [fin, setFin] = useState<string>("");
    const [refresh, setRefresh] = useState<number>(0);

    const ejecutarFiltro = (acc: string, ini: string, f: string) => {
        setAccion(acc);
        setInicio(ini);
        setFin(f);
        setRefresh(prev => prev + 1); 
    };

    return (
    <div className="max-w-7xl mx-auto border ...">
        <FiltroHistorial onFiltrar={ejecutarFiltro} />
        <div className="mt-4 overflow-hidden">
            <TablaHistorial 
                refreshSignal={refresh}
                accionFiltro={accion}
                fechaInicio={inicio}
                fechaFin={fin}
            />
        </div>
    </div>
    );
}