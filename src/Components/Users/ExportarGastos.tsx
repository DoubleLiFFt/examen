export default function ExportReports() {
    return (
        <section className="bg-[#1e1e1e] border border-[#2a2a2a] p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-white tracking-tight">Reportes y Exportación</h3>
                    <p className="text-xs text-gray-500 mt-1">Descarga tus movimientos para auditoría externa o gestión personal.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    <button className="flex items-center gap-2 bg-[#252525] border border-[#333] text-gray-300 px-4 py-2 rounded-lg hover:bg-emerald-600/10 hover:border-emerald-500/50 transition-all text-xs font-bold uppercase tracking-wider hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Exportar CSV
                    </button>
                    <button className="flex items-center gap-2 bg-[#252525] border border-[#333] text-gray-300 px-4 py-2 rounded-lg hover:bg-red-600/10 hover:border-red-500/50 transition-all text-xs font-bold uppercase tracking-wider hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Generar PDF
                    </button>
                </div>
            </div>
        </section>
    );
}