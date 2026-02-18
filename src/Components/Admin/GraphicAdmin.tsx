import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Usuario {
    id: number;
    username: string;
    email: string;
    createdtime: string;
    emailverified: boolean;
    userrole: string;
}

interface GraphicProps {
    refreshSignal: number;
}

export default function GraphicAdmin({ refreshSignal }: GraphicProps) {
    const [dataServidor, setDataServidor] = useState<Usuario[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/usersTablas")
            .then(response => response.json())
            .then((data: Usuario[]) => {
                setDataServidor(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error cargando usuarios: ", error);
                setIsLoading(false);
            });
    }, [refreshSignal]);
    const usuariosCantidad = dataServidor.reduce((acc, current) => {
        const fecha = current.createdtime ? new Date(current.createdtime) : new Date();
        const mes = fecha.toLocaleString('es-ES', { month: 'short' });
        acc[mes] = (acc[mes] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const etiquetas = Object.keys(usuariosCantidad);
    const cantidad = Object.values(usuariosCantidad);

    const chartBar = {
        labels: etiquetas,
        datasets: [
            {
                label: 'Usuarios',
                data: cantidad,
                backgroundColor: '#10b981',
                borderRadius: 8,
                barThickness: 20,
            },
        ],
    };
    const optionsBar: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#18181b',
                titleColor: '#10b981',
                bodyColor: '#fafafa',
                cornerRadius: 8,
                padding: 10
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: '#27272a' },
                ticks: { color: '#71717a', stepSize: 1 }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#71717a' }
            }
        }
    };

    if (isLoading) return (
        <div className="w-full h-64 flex items-center justify-center bg-[#1e1e1e] rounded-2xl border border-[#2a2a2a]">
            <div className="w-8 h-8 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
        </div>
    );
    return (
        <div className="p-4 md:p-6 bg-[#1e1e1e] rounded-2xl md:rounded-3xl border border-[#2a2a2a] shadow-xl w-full">
            <div className="mb-4 md:mb-6 flex justify-between items-end">
                <div>
                    <h3 className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">Total Usuarios</h3>
                    <p className="text-3xl md:text-4xl font-black text-white tracking-tighter">{dataServidor.length}</p>
                </div>
                <div className="text-right">
                    <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-md uppercase">En tiempo real</span>
                </div>
            </div>
            <div className="h-48 md:h-64 w-full">
                {dataServidor.length > 0 ? (
                    <Bar data={chartBar} options={optionsBar} />
                ) : (
                    <div className="h-full flex items-center justify-center border-2 border-dashed border-zinc-800 rounded-xl">
                        <p className="text-zinc-600 italic text-xs uppercase font-black tracking-widest">Sin registros</p>
                    </div>
                )}
            </div>
        </div>
    );
}