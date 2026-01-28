export default function CreateUserAdmin() {
    return (
        <form className="flex gap-4 p-2 items-end justify-center">
            <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-emerald-500 uppercase ml-1 tracking-wider">Usuario</label>
                <input
                    className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-2.5 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-600"
                    placeholder="Username"
                    required
                />
            </div>
            <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-emerald-500 uppercase ml-1 tracking-wider">Email</label>
                <input
                    type="email"
                    className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-2.5 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-600"
                    placeholder="Email"
                    required
                />
            </div>
            <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-emerald-500 uppercase ml-1 tracking-wider">Contraseña</label>
                <input
                    type="password"
                    className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-2.5 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-600"
                    placeholder="Password"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-emerald-600 text-white px-8 py-2.5 rounded-xl hover:bg-emerald-500 transition-all font-bold shadow-lg shadow-emerald-900/20 hover:cursor-pointer active:scale-95"
            >
                Añadir Usuario
            </button>
        </form>
    );
}