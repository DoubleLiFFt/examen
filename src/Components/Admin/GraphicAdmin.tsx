import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { usersAccounts } from "../types/Users.ts";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GraphicAdmin() {
    const users = usersAccounts;
    const totalUsuarios = users.length;
    const usuariosCantidad = users.reduce((acc, current) => {
        const fecha = current.createdTime ? new Date(current.createdTime) : new Date();
        const mes = fecha.toLocaleString('en-EN', {month: 'short'});
        acc[mes] = (acc[mes] || 0) + 1
        return acc
    }, {} as Record<string, number>)
    const etiquetas = Object.keys(usuariosCantidad)
    const cantidad = Object.values(usuariosCantidad)

    const chartBar = {
        labels: etiquetas,
        datasets: [
            {
                label: 'Cantidad de nuevos usuarios registrados.',
                data: cantidad,
                backgroundColor: '#10b981',
                borderColor: '#10b981',
                borderWidth: 1,
                borderRadius: 4,
            },
        ],
    };
    const optionsBar = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "Usuarios registrados",
                color: '#f3f4f6',
                font: {
                    size: window.innerWidth < 768 ? 14 : 16
                }
            },
            tooltip: {
                backgroundColor: '#1e1e1e',
                titleColor: '#10b981',
                bodyColor: '#fff',
                borderColor: '#3a3a3a',
                borderWidth: 1
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                    color: '#9ca3af',
                    font: {
                        size: window.innerWidth < 768 ? 10 : 12
                    }
                },
                grid: {
                    color: '#2a2a2a'
                }
            },
            x: {
                ticks: {
                    color: '#9ca3af',
                    font: {
                        size: window.innerWidth < 768 ? 10 : 12
                    }
                },
                grid: {
                    display: false
                }
            }
        }
    };
    return (
        <div className="p-4 md:p-6 bg-[#1e1e1e] rounded-2xl md:rounded-3xl border border-[#2a2a2a] shadow-xl w-full">
            <div className="mb-4 md:mb-6">
                <h3 className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-wider">Total Usuarios</h3>
                <p className="text-2xl md:text-4xl font-bold text-white">{totalUsuarios}</p>
            </div>
            <div className="h-48 md:h-64 w-full">
                {users.length > 0 ? (
                    <Bar data={chartBar} options={optionsBar} />
                ) : (
                    <p className="text-center text-gray-500 py-10 italic text-sm">No hay registros para mostrar</p>
                )}
            </div>
        </div>
    );
}