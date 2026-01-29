import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { gastos } from "../types/Gastos";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Graphic() {
    const details = gastos;

    const resumenEgresos = details.reduce((acc, current) => {
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
                label: 'Total Gastado (S/.)',
                data: montos,
                backgroundColor: [
                    '#10b981', '#3b82f6', '#f59e0b',
                    '#ef4444', '#8b5cf6', '#ec4899',
                ],
                borderColor: '#1e1e1e',
                borderWidth: 3,
                hoverOffset: 15,
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                display: window.innerWidth > 400,
                position: 'bottom' as const,
                labels: {
                    color: '#9ca3af',
                    padding: 15,
                    font: {
                        size: 11,
                        weight: 'bold' as const
                    },
                    usePointStyle: true,
                },
            },
            tooltip: {
                backgroundColor: '#2a2a2a',
                titleColor: '#10b981',
                bodyColor: '#ffffff',
                borderColor: '#3a3a3a',
                borderWidth: 1,
                padding: 12,
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
    };
    return (
        <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center mx-auto">
            {details.length > 0 ? (
                <Doughnut data={chartData} options={options} />
            ) : (
                <p className="text-center text-gray-500 py-10 italic">Sin datos registrados</p>
            )}
            {details.length > 0 && (
                <div className="absolute flex flex-col items-center justify-center translate-y-[-10px] md:translate-y-[-20px]">
                    <span className="text-gray-500 text-[10px] md:text-xs uppercase font-black tracking-widest">Total</span>
                    <span className="text-lg md:text-2xl font-bold text-white">
                        S/. {montos.reduce((a, b) => a + b, 0).toLocaleString()}
                    </span>
                </div>
            )}
        </div>
    );
}