import { useState } from 'react';
import FiltrosEgresos from './FiltrosEgresos';
import TablaEgresos from './TablaEgresos';


export default function MisEgresos() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("Todas");
    const [refresh, setRefresh] = useState<number>(0);

    const filtrarEgresos = (cat: string) => {
    setCategoriaSeleccionada(cat); 
    setRefresh(prev => prev + 1);
    };
     
    return (
        <div className="max-w-7xl mx-auto border border-[#2a2a2a] bg-[#1e1e1e] p-4 md:p-10 rounded-2xl md:rounded-3xl mb-12 mt-8 md:mt-12 shadow-xl">
            <div className="mb-8 border-b border-[#2a2a2a] pb-6">
                <p className="text-emerald-500 text-xs uppercase tracking-widest font-bold mb-2">Historial de movimientos</p>
                <h1 className="text-white text-2xl md:text-3xl font-bold">Gestión de Gastos</h1>
            </div>
            <div className="mb-10">
                <FiltrosEgresos onFiltrar={filtrarEgresos} />
            </div>
            <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden">
                <TablaEgresos refreshSignal={refresh} categoriaFiltro={categoriaSeleccionada} />
            </div>
        </div>
    );
}