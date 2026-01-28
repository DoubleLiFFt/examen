interface Details {
    id: number
    date: string
    mount: number
    category: string
    description: string
}

export const gastos: Details[] = [
    // MES 1: JUNIO 2025
    { id: 1, date: "2025-06-15", mount: 120.50, category: "Comida", description: "Cena familiar" },
    { id: 2, date: "2025-06-22", mount: 45.00, category: "Transporte", description: "Carga de combustible" },
    { id: 3, date: "2025-06-29", mount: 300.00, category: "Vivienda", description: "Mantenimiento casa" },

    // MES 2: JULIO 2025
    { id: 4, date: "2025-07-05", mount: 80.00, category: "Ocio", description: "Entradas cine" },
    { id: 5, date: "2025-07-18", mount: 210.00, category: "Comida", description: "Compras del mes" },
    { id: 6, date: "2025-07-28", mount: 60.00, category: "Salud", description: "Farmacia" },

    // MES 3: AGOSTO 2025
    { id: 7, date: "2025-08-05", mount: 15.00, category: "Transporte", description: "Pasajes bus" },
    { id: 8, date: "2025-08-12", mount: 450.00, category: "Vivienda", description: "Pago de servicios" },
    { id: 9, date: "2025-08-20", mount: 120.00, category: "Educación", description: "Curso online" },
    { id: 10, date: "2025-08-30", mount: 55.00, category: "Comida", description: "Almuerzo oficina" },

    // MES 4: SEPTIEMBRE 2025
    { id: 11, date: "2025-09-02", mount: 90.00, category: "Ocio", description: "Salida con amigos" },
    { id: 12, date: "2025-09-15", mount: 25.00, category: "Salud", description: "Consulta médica" },
    { id: 13, date: "2025-09-28", mount: 110.00, category: "Comida", description: "Pizza noche" },

    // MES 5: OCTUBRE 2025
    { id: 14, date: "2025-10-05", mount: 35.00, category: "Transporte", description: "Taxi aeropuerto" },
    { id: 15, date: "2025-10-14", mount: 200.00, category: "Otros", description: "Regalo cumpleaños" },
    { id: 16, date: "2025-10-25", mount: 140.00, category: "Comida", description: "Restaurante sushi" },

    // MES 6: NOVIEMBRE 2025
    { id: 17, date: "2025-11-02", mount: 50.00, category: "Ocio", description: "Suscripción Netflix/Spotify" },
    { id: 18, date: "2025-11-12", mount: 320.00, category: "Vivienda", description: "Reparación baño" },
    { id: 19, date: "2025-11-20", mount: 75.00, category: "Educación", description: "Libros facultad" },
    { id: 20, date: "2025-11-28", mount: 40.00, category: "Salud", description: "Vitaminas" },

    // MES 7: DICIEMBRE 2025
    { id: 21, date: "2025-12-05", mount: 500.00, category: "Otros", description: "Compras navideñas" },
    { id: 22, date: "2025-12-15", mount: 180.00, category: "Comida", description: "Cena de fin de año" },
    { id: 23, date: "2025-12-24", mount: 65.00, category: "Transporte", description: "Viaje corto" },
    { id: 24, date: "2025-12-28", mount: 120.00, category: "Ocio", description: "Evento especial" },
    { id: 25, date: "2025-12-31", mount: 30.00, category: "Comida", description: "Snacks fiesta" },

    // MES 8: ENERO 2026
    { id: 26, date: "2026-01-05", mount: 400.00, category: "Vivienda", description: "Alquiler mensual" },
    { id: 27, date: "2026-01-12", mount: 150.00, category: "Salud", description: "Exámenes anuales" },
    { id: 28, date: "2026-01-18", mount: 95.00, category: "Educación", description: "Materiales estudio" },
    { id: 29, date: "2026-01-22", mount: 20.00, category: "Transporte", description: "Metro" },
    { id: 30, date: "2026-01-27", mount: 85.00, category: "Comida", description: "Pedido delivery" }
];