export type GastosUsers = {
  id: number;
  date: string;
  category: string;
  description: string;
  mount: number; // Asegúrate que sea 'mount'
};

export const listaGastosDB: GastosUsers[] = [
    // MES 1: JUNIO 2025
    { id: 1, date: "2025-06-15", category: "Comida", description: "Cena familiar", mount: 120.50 },
    { id: 2, date: "2025-06-22", category: "Transporte", description: "Carga de combustible", mount: 45.00 },
    { id: 3, date: "2025-06-29", category: "Vivienda", description: "Mantenimiento casa", mount: 300.00 },

    // MES 2: JULIO 2025
    { id: 4, date: "2025-07-05", category: "Ocio", description: "Entradas cine", mount: 80.00 },
    { id: 5, date: "2025-07-18", category: "Comida", description: "Compras del mes", mount: 210.00 },
    { id: 6, category: "Salud", date: "2025-07-28", description: "Farmacia", mount: 60.00 },

    // MES 3: AGOSTO 2025
    { id: 7, date: "2025-08-05", category: "Transporte", description: "Pasajes bus", mount: 15.00 },
    { id: 8, date: "2025-08-12", category: "Vivienda", description: "Pago de servicios", mount: 450.00 },
    { id: 9, date: "2025-08-20", category: "Educación", description: "Curso online", mount: 120.00 },
    { id: 10, date: "2025-08-30", category: "Comida", description: "Almuerzo oficina", mount: 55.00 },

    // MES 4: SEPTIEMBRE 2025
    { id: 11, date: "2025-09-02", category: "Ocio", description: "Salida con amigos", mount: 90.00 },
    { id: 12, date: "2025-09-15", category: "Salud", description: "Consulta médica", mount: 25.00 },
    { id: 13, date: "2025-09-28", category: "Comida", description: "Pizza noche", mount: 110.00 },

    // MES 5: OCTUBRE 2025
    { id: 14, date: "2025-10-05", category: "Transporte", description: "Taxi aeropuerto", mount: 35.00 },
    { id: 15, date: "2025-10-14", category: "Otros", description: "Regalo cumpleaños", mount: 200.00 },
    { id: 16, date: "2025-10-25", category: "Comida", description: "Restaurante sushi", mount: 140.00 },

    // MES 6: NOVIEMBRE 2025
    { id: 17, date: "2025-11-02", category: "Ocio", description: "Suscripción Netflix/Spotify", mount: 50.00 },
    { id: 18, date: "2025-11-12", category: "Vivienda", description: "Reparación baño", mount: 320.00 },
    { id: 19, date: "2025-11-20", category: "Educación", description: "Libros facultad", mount: 75.00 },
    { id: 20, date: "2025-11-28", category: "Salud", description: "Vitaminas", mount: 40.00 },

    // MES 7: DICIEMBRE 2025
    { id: 21, date: "2025-12-05", category: "Otros", description: "Compras navideñas", mount: 500.00 },
    { id: 22, date: "2025-12-15", category: "Comida", description: "Cena de fin de año", mount: 180.00 },
    { id: 23, date: "2025-11-24", category: "Transporte", description: "Viaje corto", mount: 65.00 },
    { id: 24, date: "2025-12-28", category: "Ocio", description: "Evento especial", mount: 120.00 },
    { id: 25, date: "2025-12-31", category: "Comida", description: "Snacks fiesta", mount: 30.00 },

    // MES 8: ENERO 2026
    { id: 26, date: "2026-01-05", category: "Vivienda", description: "Alquiler mensual", mount: 400.00 },
    { id: 27, date: "2026-01-12", category: "Salud", description: "Exámenes anuales", mount: 150.00 },
    { id: 28, date: "2026-01-18", category: "Educación", description: "Materiales estudio", mount: 95.00 },
    { id: 29, date: "2026-01-22", category: "Transporte", description: "Metro", mount: 20.00 },
    { id: 30, date: "2026-01-27", category: "Comida", description: "Pedido delivery", mount: 85.00 }
];