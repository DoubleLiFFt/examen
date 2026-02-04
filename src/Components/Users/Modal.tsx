import React, { useState, useEffect } from "react";

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    gasto: any;
    onSave: (newData: any) => void;
}

export default function EditModal({ isOpen, onClose, gasto, onSave }: EditModalProps) {
    const [mount, setMount] = useState(0);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        if (gasto) {
            setMount(gasto.mount);
            setCategory(gasto.category);
            setDescription(gasto.description);
        }
    }, [gasto]);
    if (!isOpen) return null;
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ mount, category, description });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <form onSubmit={handleSubmit} className="bg-[#1e1e1e] p-8 rounded-2xl border border-[#2a2a2a] w-full max-w-md shadow-2xl">
                <h2 className="text-xl font-bold text-emerald-400 mb-6">Editar Registro</h2>

                <div className="flex flex-col gap-4">
                    <input
                        type="number"
                        value={mount}
                        onChange={(e) => setMount(Number(e.target.value))}
                        className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:_textfield"
                    />
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="bg-[#2a2a2a] border border-[#3a3a3a] text-white p-3 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>

                <div className="flex justify-end gap-4 mt-8">
                    <button type="button" onClick={onClose} className="text-gray-400 hover:text-white hover:cursor-pointer">Cancelar</button>
                    <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-[#121212] font-bold px-6 py-2 rounded-xl hover:cursor-pointer">
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    );
}