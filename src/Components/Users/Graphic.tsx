import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Gasto {
    id: number;
    date: string;
    mount: number;
    category: string;
    description: string;
}

interface menuProps {
    refreshSignal : number
}

export default function Graphic({refreshSignal} : menuProps) {
    const [dataServidor, setDataServidor] = useState<Gasto[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/tablas")
            .then(response => response.json())
            .then((data: Gasto[]) => {
                setDataServidor(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error cargando datos: ", error);
                setIsLoading(false);
            });
    }, [refreshSignal]);

    const resumenEgresos = dataServidor.reduce((acc, current) => {
        const cat = current.category || "Otros";
        acc[cat] = (acc[cat] || 0) + current.mount;
        return acc;
    }, {} as Record<string, number>);

    const etiquetas = Object.keys(resumenEgresos);
    const montos = Object.values(resumenEgresos);

    const chartData = {
        labels: etiquetas,
        datasets: [
            {
                data: montos,
                backgroundColor: [
                    '#10b981',
                    '#3b82f6',
                    '#f59e0b',
                    '#ef4444',
                    '#8b5cf6',
                    '#ec4899',
                    '#06b6d4',
                ],
                borderColor: '#141414',
                borderWidth: 4,
                hoverOffset: 20,
                borderRadius: 5,
                spacing: 2
            },
        ],
    };
    const options: ChartOptions<'doughnut'> = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    color: '#71717a',
                    padding: 20,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: {
                        size: 11,
                        family: 'Inter, sans-serif',
                        weight: 'bold'
                    }
                },
            },
            tooltip: {
                enabled: true,
                backgroundColor: '#18181b',
                titleColor: '#10b981',
                titleFont: { size: 13, weight: 'bold' },
                bodyColor: '#fafafa',
                bodyFont: { size: 12 },
                padding: 12,
                cornerRadius: 12,
                displayColors: true,
                borderWidth: 1,
                borderColor: '#27272a'
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        cutout: '82%',
    };

    if (isLoading) return (
        <div className="w-full h-[350px] flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
        </div>
    );

    return (
        <div className="relative w-full max-w-[450px] h-[350px] md:h-[400px] flex items-center justify-center mx-auto p-4">
            {dataServidor.length > 0 ? (
                <>
                    <Doughnut data={chartData} options={options} />
                    <div className="absolute flex flex-col items-center justify-center pointer-events-none translate-y-[-20px]">
                        <span className="text-zinc-500 text-[10px] uppercase font-black tracking-[0.3em] mb-1">Total Gastos</span>
                        <span className="text-3xl font-black text-white tracking-tighter">
                            S/. {montos.reduce((a: number, b: number) => a + b, 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </span>
                        <div className="h-1 w-8 bg-emerald-500 rounded-full mt-2 opacity-50"></div>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center gap-4 text-center">
                    <p className="text-zinc-600 text-xs font-black uppercase tracking-widest italic">No hay datos para graficar</p>
                </div>
            )}
        </div>
    );
}