import Button from "../example/Button.tsx";
import React from "react";

export default function CamContra() {
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Se cambió la contraseña (solo front)");
        alert("Contraseña actualizada con éxito");
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#121212] px-4 py-8">
            <div className="bg-[#1e1e1e] border border-[#2a2a2a] shadow-2xl p-6 md:p-14 rounded-2xl md:rounded-3xl max-w-2xl w-full">
                <header className="mb-8 md:mb-10 text-center">
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                        Cambiar contraseña
                    </h1>
                </header>
                <form
                    onSubmit={submit}
                    className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-6 gap-y-4 md:gap-y-6 items-start md:items-center"
                >
                    <label className="text-gray-400 text-left md:text-right md:font-medium text-sm md:text-lg">
                        Correo Electrónico:
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                        className="bg-[#2a2a2a] border border-[#3a3a3a] text-white px-5 py-3 md:py-3.5 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-600 text-sm md:text-base w-full"
                    />
                    <label className="text-gray-400 text-left md:text-right md:font-medium text-sm md:text-lg">
                        Nueva Contraseña:
                    </label>
                    <input
                        type="password"
                        name="newPassword"
                        required
                        placeholder="Password"
                        className="bg-[#2a2a2a] border border-[#3a3a3a] text-white px-5 py-3 md:py-3.5 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-600 text-sm md:text-base w-full"
                    />

                    <label className="text-gray-400 text-left md:text-right md:font-medium text-sm md:text-lg">
                        Confirmar Contraseña:
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Password"
                        className="bg-[#2a2a2a] border border-[#3a3a3a] text-white px-5 py-3 md:py-3.5 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-600 text-sm md:text-base w-full"
                    />
                    <div className="md:col-span-2 flex justify-center pt-4 md:pt-6">
                        <Button
                            variant="primary"
                            type="submit"
                            className="w-full py-3 md:py-4 text-base md:text-lg font-bold"
                        >
                            Actualizar Contraseña
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}