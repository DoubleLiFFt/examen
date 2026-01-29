export default function DetailsTable() {
    return (
        <div className="flex flex-col gap-6 w-full h-full">
            <div className="w-full overflow-x-auto rounded-xl">
                <table className="w-full text-left border-collapse bg-[#1e1e1e]">
                    <thead>
                    <tr className="border-b border-[#3a3a3a] text-gray-400 text-xs md:text-sm uppercase tracking-wider">
                        <th className="px-2 md:px-4 py-3 font-semibold text-center hidden md:table-cell">Fecha</th>
                        <th className="px-2 md:px-4 py-3 font-semibold text-center">Monto</th>
                        <th className="px-2 md:px-4 py-3 font-semibold text-center">Categoría</th>
                        <th className="px-2 md:px-4 py-3 font-semibold text-center hidden sm:table-cell">Descripción</th>
                        <th className="px-2 md:px-4 py-3 font-semibold text-center">Acciones</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-300">
                    <tr className="border-b border-[#252525] hover:bg-[#252525] transition-colors group">
                        <td className="px-2 md:px-4 py-4 text-center text-sm hidden md:table-cell">
                            <input
                                type="date"
                                className="bg-transparent border-none outline-none text-gray-300 cursor-pointer"
                            />
                        </td>
                        <td className="px-2 md:px-4 py-4 text-center font-medium text-red-400">
                            <div className="flex items-center justify-center gap-1">
                                <span className="text-xs md:text-sm">S/.</span>
                                <input
                                    type="number"
                                    className="bg-[#2a2a2a] border border-[#3a3a3a] p-1 md:p-2 rounded-xl w-20 md:w-28 outline-none focus:ring-1 focus:ring-emerald-500 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:_textfield]"
                                />
                            </div>
                            <span className="text-[10px] text-gray-500 md:hidden block mt-1">29/01/2026</span>
                        </td>
                        <td className="px-2 md:px-4 py-4 text-center">
                                <span className="bg-emerald-900/30 text-emerald-400 px-2 py-1.5 rounded-lg text-[10px] md:text-xs border border-emerald-800/20 inline-block">
                                    <select className="bg-transparent border-none outline-none cursor-pointer">
                                        <option value="" className="bg-[#1e1e1e]">Categoría</option>
                                        <option value="comida" className="bg-[#1e1e1e]">Comida</option>
                                        <option value="transporte" className="bg-[#1e1e1e]">Transporte</option>
                                        <option value="vivienda" className="bg-[#1e1e1e]">Vivienda</option>
                                        <option value="ocio" className="bg-[#1e1e1e]">Ocio</option>
                                        <option value="salud" className="bg-[#1e1e1e]">Salud</option>
                                        <option value="educacion" className="bg-[#1e1e1e]">Educación</option>
                                        <option value="otros" className="bg-[#1e1e1e]">Otros</option>
                                    </select>
                                </span>
                        </td>
                        <td className="px-2 md:px-4 py-4 text-center text-xs md:text-sm italic text-gray-400 hidden sm:table-cell">
                            Al cine con amigos
                        </td>
                        <td className="px-2 md:px-4 py-4">
                            <div className="flex justify-center items-center gap-2 md:gap-3">
                                <button className="text-emerald-500 hover:text-emerald-400 transition-all hover:scale-110 p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </button>
                                <button className="text-blue-500 hover:text-blue-400 transition-all hover:scale-110 p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-4 md:w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}