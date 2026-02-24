import { useState, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';

const NotificationBell = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState<string[]>([]);
    const fetchAlertas = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/alertasPresupuesto");
            if (response.ok) {
                const data = await response.json();
                setNotifications(data);
            }
        } catch (error) {
            console.error("Error al obtener notificaciones:", error);
        }
    };
    useEffect(() => {
        fetchAlertas();
        const interval = setInterval(fetchAlertas, 30000);
        return () => clearInterval(interval);
    }, []);

    const toggleNotifications = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block">
            <div
                className="cursor-pointer p-2 rounded-full hover:bg-zinc-800 transition-colors relative"
                onClick={toggleNotifications}
            >
                <FaBell
                    size={22}
                    className={`${notifications.length > 0 ? 'text-amber-400 animate-pulse' : 'text-zinc-400'}`}
                />
                {notifications.length > 0 && (
                    <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full border-2 border-[#141414]">
                        {notifications.length}
                    </span>
                )}
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-4 border-b border-[#2a2a2a] flex justify-between items-center">
                        <span className="text-xs font-black uppercase tracking-widest text-zinc-500">Notificaciones</span>
                        {notifications.length > 0 && (
                            <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full font-bold">
                                Nuevo
                            </span>
                        )}
                    </div>

                    <div className="max-h-60 overflow-y-auto">
                        {notifications.length > 0 ? (
                            notifications.map((notification, index) => (
                                <div
                                    key={index}
                                    className="p-4 text-sm text-zinc-300 border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors flex gap-3 items-start"
                                >
                                    <div className="mt-1 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                                    <p className="leading-tight">{notification}</p>
                                </div>
                            ))
                        ) : (
                            <div className="p-8 text-center">
                                <p className="text-zinc-600 text-xs italic">No hay alertas pendientes</p>
                            </div>
                        )}
                    </div>

                    <div className="p-3 bg-[#18181b] text-center">
                        <button
                            className="text-[10px] font-bold text-zinc-500 hover:text-white uppercase tracking-tighter"
                            onClick={() => setIsOpen(false)}
                        >
                            Cerrar Panel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationBell;