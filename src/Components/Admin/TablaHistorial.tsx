import { usersAccounts } from "../types/HistoUsers";
import type { HistoUsers } from "../types/HistoUsers";
interface TablaHistorialProps {
  lista?: HistoUsers[]; // 
}

export default function TablaHistorial({ lista }: TablaHistorialProps) {
  const datosAMostrar = lista || usersAccounts;

  return (
    <table className="w-full border-collapse text-center">
      <thead>
        <tr className="text-gray-400 text-center font-extralight border-b">
          <th className="p-2">FECHA</th>
          <th className="p-2">USUARIO</th>
          <th className="p-2">DIRECCION IP</th>
          <th className="p-2">ACCION</th>
        </tr>
      </thead>
      <tbody>
        {datosAMostrar.map((historial, index) => (
          <tr key={index} className="border-t hover:bg-gray-800">
            <td className="p-2">{historial.createdTime}</td>
            <td className="p-2">{historial.username}</td>
            <td className="p-2">{historial.ip}</td>
            <td className="p-2 text-sm">
              <span className={`text-center font-semibold ${historial.accion === 'Login'
                ? ' text-green-400  '
                : ' text-red-400 '
                }`}>
                {historial.accion}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}