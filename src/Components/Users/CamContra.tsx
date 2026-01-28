import Button from "../example/Button.tsx";
import React from "react";

export default function CamContra() {
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Se cambió la contraseña (solo front)");
        alert("Contraseña actualizada con éxito");
    };

    return (
        <section className="flex items-center justify-center p-4">
            <div className="bg-[#1e1e1e] border border-[#2a2a2a] shadow-2xl grid gap-10 p-8 md:p-12 rounded-2xl max-w-md w-full">
                <h1 className="text-3xl font-bold text-center text-white">
                    Restablecer Contraseña
                </h1>
                <form
                    onSubmit={submit}
                    className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-6 gap-y-4 items-center"
                >
                    <label className="text-gray-400 text-left md:text-right md:font-medium md:pr-4">
                        Correo Electrónico:
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                        className="bg-[#2a2a2a] border border-[#3a3a3a] text-gray-200 rounded-lg pl-3 py-2 pr-4 w-full focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-gray-600"
                    />
                    <label className="text-gray-400 text-left md:text-right md:font-medium md:pr-4">
                        Nueva Contraseña:
                    </label>
                    <input
                        type="password"
                        name="newPassword"
                        required
                        placeholder="Password"
                        className="bg-[#2a2a2a] border border-[#3a3a3a] text-gray-200 rounded-lg pl-3 py-2 pr-4 w-full focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-gray-600"
                    />
                    <label className="text-gray-400 text-left md:text-right md:font-medium md:pr-4">
                        Confirmar Contraseña:
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="New Password"
                        className="bg-[#2a2a2a] border border-[#3a3a3a] text-gray-200 rounded-lg pl-3 py-2 pr-4 w-full focus:ring-2 focus:ring-emerald-500 outline-none placeholder:text-gray-600"
                    />
                    <div className="md:col-span-2 flex justify-center pt-4">
                        <Button variant="primary" type="submit">
                            Restablecer
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}