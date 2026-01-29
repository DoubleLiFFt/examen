import Button from "../example/Button.tsx";

export default function AddDetails() {
    return (
        <form className="flex flex-col md:flex-row gap-3 items-center w-full md:w-auto">
            <input
                type="date"
                name="date"
                className="bg-[#2a2a2a] border border-[#3a3a3a] text-gray-200 px-3 h-10 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none color-scheme-dark w-full md:w-auto"
                required
            />
            <input
                type="number"
                name="mount"
                min="0"
                placeholder="Monto"
                className="bg-[#2a2a2a] border border-[#3a3a3a] text-gray-200 px-3 h-10 w-full md:w-24 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:_textfield] placeholder:text-gray-500"
            />
            <select
                name="category"
                className="bg-[#2a2a2a] border border-[#3a3a3a] text-gray-200 px-3 h-10 w-full md:w-32 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none cursor-pointer"
                required
                defaultValue=""
            >
                <option value="" disabled className="text-gray-500">Categoría</option>
                <option value="Comida">Comida</option>
                <option value="Transporte">Transporte</option>
                <option value="Salud">Salud</option>
                <option value="Estudios">Estudios</option>
                <option value="Ocio">Ocio</option>
            </select>
            <input
                type="text"
                name="description"
                placeholder="Descripción"
                className="bg-[#2a2a2a] border border-[#3a3a3a] text-gray-200 px-3 h-10 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-gray-500 w-full md:w-auto"
            />
            <Button variant="primary" type="submit" className="w-full md:w-auto">
                Agregar
            </Button>
        </form>
    );
}