export default function DetailsTable() {
    return (
        <div className="flex flex-col gap-6 w-full h-full">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr className="border-b border-[#3a3a3a] text-gray-400 text-sm uppercase tracking-wider">
                        <th className="px-4 py-3 font-semibold text-center">Fecha</th>
                        <th className="px-4 py-3 font-semibold text-center">Monto</th>
                        <th className="px-4 py-3 font-semibold text-center">Categoría</th>
                        <th className="px-4 py-3 font-semibold text-center">Descripción</th>
                        <th className="px-4 py-3 font-semibold text-center">Acciones</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-300">
                        <tr
                            className="border-b border-[#252525] hover:bg-[#252525] transition-colors"
                        >
                            <td className="px-4 py-4 text-center text-sm">
                                <input type="date" />
                            </td>
                            <td className="px-4 py-4 text-center font-medium text-red-400">
                                S/. <input type="number" className="p-2 rounded-2xl appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:_textfield]"/>
                            </td>
                            <td className="px-4 py-4 text-center">
                                    <span className="bg-emerald-900/30 text-emerald-400 px-2 py-1 rounded-md text-xs border border-emerald-800/20">
                                        <select>
                                            <option value="">Categoria</option>
                                            <option value="comida">Comida</option>
                                            <option value="transporte">Transporte</option>
                                             <option value="vivienda">Vivienda</option>
                                             <option value="ocio">Ocio</option>
                                             <option value="salud">Salud</option>
                                             <option value="educacion">Educación</option>
                                             <option value="otros">Otros</option>
                                         </select>
                                    </span>
                            </td>
                            <td className="px-4 py-4 text-center text-sm italic text-gray-400">
                                Al cine con amigos
                            </td>
                            <td className="px-4 py-4">
                                <div className="flex justify-center items-center gap-3">
                                    <button className="text-emerald-500 hover:text-emerald-400 transition-all hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </button>
                                    <button className="text-blue-500 hover:text-blue-400 transition-all hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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