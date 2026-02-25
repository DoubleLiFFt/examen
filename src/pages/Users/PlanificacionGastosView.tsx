import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Target, AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Gasto {
    id: number;
    date: string;
    mount: number;
    category: string;
    description: string;
}

export default function PlanificacionGastosView() {
    const [dataServidor, setDataServidor] = useState<Gasto[]>([]);
    const [presupuesto, setPresupuesto] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);

    const cargarConfiguracionPresupuesto = async () => {
        const userId = sessionStorage.getItem("userId");
        if (!userId) return;

        try {
            // Ahora la URL coincide exactamente con lo que espera el Backend
            const response = await fetch(`http://127.0.0.1:8000/obtenerPresupuestoActual/${userId}`)
            if (response.ok) {
                const data = await response.json()
                setPresupuesto(data.limit_mount)
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }
    const guardarPresupuestoDB = async (valor: number) => {
        const userId = sessionStorage.getItem("userId");
        if (!userId) return;
        try {
            await fetch("http://127.0.0.1:8000/configurarPresupuesto", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_id: parseInt(userId),
                    limit_mount: valor,
                    month_year: "2026-02",
                    category: "TOTAL"
                })
            });
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        Promise.all([
            fetch("http://127.0.0.1:8000/tablas").then(res => res.json()),
            cargarConfiguracionPresupuesto()
        ]).then(([gastos]) => {
            setDataServidor(gastos);
            setIsLoading(false);
        }).catch(() => setIsLoading(false));
    }, []);

    const fetchPresupuestoActual = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/alertasPresupuesto");
            if (response.ok) {
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetch("http://127.0.0.1:8000/tablas")
            .then(response => response.json())
            .then((data: Gasto[]) => {
                setDataServidor(data);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
        fetchPresupuestoActual();
    }, []);

    const gastoTotal = dataServidor.reduce((acc, curr) => acc + curr.mount, 0);
    const porcentaje = presupuesto > 0 ? (gastoTotal / presupuesto) * 100 : 0;
    const margen = presupuesto - gastoTotal;

    const chartData = {
        labels: ['Gastado', 'Disponible'],
        datasets: [{
            data: [gastoTotal, margen > 0 ? margen : 0],
            backgroundColor: [porcentaje >= 100 ? '#ef4444' : '#10b981', '#27272a'],
            borderColor: '#141414',
            borderWidth: 5,
            cutout: '85%',
            borderRadius: 10,
        }]
    };

    const getStatus = () => {
        if (porcentaje >= 100) return { label: "Límite Excedido", color: "text-red-500", icon: <AlertTriangle />, bg: "bg-red-500/10", border: "border-red-500/20" };
        if (porcentaje >= 80) return { label: "Alerta de Gasto", color: "text-amber-500", icon: <TrendingUp />, bg: "bg-amber-500/10", border: "border-amber-500/20" };
        return { label: "Presupuesto Saludable", color: "text-emerald-500", icon: <CheckCircle2 />, bg: "bg-emerald-500/10", border: "border-emerald-500/20" };
    };

    const status = getStatus();

    if (isLoading) return (
        <div className="h-screen w-full flex items-center justify-center bg-[#141414]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-emerald-500"></div>
        </div>
    );

    return (
        <div className="p-4 md:p-8 bg-[#141414] min-h-screen text-white">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                    <h1 className="text-4xl font-black tracking-tighter italic uppercase">Planificación</h1>
                    <p className="text-zinc-500 text-sm font-medium">Análisis de presupuesto vs ejecución real de base de datos.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 bg-[#1e1e1e] border border-[#2a2a2a] rounded-[2.5rem] p-8 flex flex-col items-center justify-center relative min-h-100">
                        <div className="w-full h-full">
                            <Doughnut data={chartData} options={{ plugins: { legend: { display: false } }, maintainAspectRatio: false }} />
                        </div>
                        <div className="absolute flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Estado</span>
                            <span className={`text-5xl font-black tracking-tighter ${status.color}`}>
                                {porcentaje.toFixed(0)}%
                            </span>
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <div className="bg-[#1e1e1e] border border-[#2a2a2a] p-8 rounded-[2.5rem]">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">Límite Mensual</h2>
                                    <p className="text-zinc-500 text-xs">Ajusta tu presupuesto para recibir alertas en tiempo real.</p>
                                </div>
                            </div>

                            <div className="relative group">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 font-bold text-xl">S/.</span>
                                <input
                                    type="number"
                                    value={presupuesto}
                                    onChange={(e) => {
                                        const val = Number(e.target.value);
                                        setPresupuesto(val);
                                        guardarPresupuestoDB(val);
                                    }}
                                    className="w-full bg-[#141414] border-2 border-[#2a2a2a] p-6 pl-14 rounded-2xl text-3xl font-black text-white outline-none transition-all focus:border-emerald-500 shadow-inner"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#1e1e1e] border border-[#2a2a2a] p-6 rounded-3xl">
                                <p className="text-zinc-500 text-[10px] font-black uppercase mb-2">Gasto Actual</p>
                                <p className="text-2xl font-black text-white">S/. {gastoTotal.toLocaleString()}</p>
                            </div>
                            <div className="bg-[#1e1e1e] border border-[#2a2a2a] p-6 rounded-3xl">
                                <p className="text-zinc-500 text-[10px] font-black uppercase mb-2">Diferencia</p>
                                <p className={`text-2xl font-black ${margen < 0 ? 'text-red-500' : 'text-emerald-500'}`}>
                                    S/. {margen.toLocaleString()}
                                </p>
                            </div>
                        </div>

                        <div className={`p-6 rounded-3xl border ${status.bg} ${status.border} flex items-start gap-4 transition-all duration-500`}>
                            <div className={status.color}>{status.icon}</div>
                            <div className="flex flex-col gap-1">
                                <h4 className={`font-black uppercase text-xs tracking-wider ${status.color}`}>{status.label}</h4>
                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    {porcentaje >= 100
                                        ? `Exceso detectado de S/. ${Math.abs(margen)}. El sistema de alertas ha sido activado en la barra de navegación.`
                                        : `Consumo dentro de los parámetros. Dispones del ${(100 - porcentaje).toFixed(1)}% de tu capital antes de alcanzar el límite.`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}