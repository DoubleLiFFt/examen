export type HistoUsers = {
    createdTime: string;
    username: string;
    ip: string;
    accion: string;
}

export const usersAccounts: HistoUsers[] = [
    // MES 1: JUNIO 2025
    { createdTime: "2025-06-12", username: "prueba1", ip: "192.168.0.12", accion: "Login" },
    { createdTime: "2025-06-20", username: "prueba2", ip: "192.168.0.20", accion: "Login" },
    { createdTime: "2025-06-28", username: "prueba3", ip: "192.168.0.28", accion: "Logout" },
    { createdTime: "2025-06-30", username: "prueba4", ip: "192.168.0.30", accion: "Login" },

    // MES 2: JULIO 2025
    { createdTime: "2025-07-05", username: "prueba5", ip: "192.168.0.05", accion: "Logout" },
    { createdTime: "2025-07-01", username: "prueba6", ip: "192.168.0.01", accion: "Login" },
    { createdTime: "2025-07-18", username: "prueba7", ip: "192.168.0.18", accion: "Login" },
    { createdTime: "2025-07-25", username: "prueba8", ip: "192.168.0.25", accion: "Login" },

    // MES 3: AGOSTO 2025
    { createdTime: "2025-08-02", username: "prueba9", ip: "192.168.0.02", accion: "Login" },
    { createdTime: "2025-08-15", username: "prueba10", ip: "192.168.0.15", accion: "Logout" },
    { createdTime: "2025-08-28", username: "prueba11", ip: "192.168.0.08", accion: "Login" },
    { createdTime: "2025-08-30", username: "prueba12", ip: "192.168.0.21", accion: "Login" },

    // MES 4: SEPTIEMBRE 2025
    { createdTime: "2025-09-03", username: "prueba13", ip: "192.168.0.03", accion: "Login" },
    { createdTime: "2025-09-04", username: "prueba14", ip: "192.168.0.04", accion: "Login" },
    { createdTime: "2025-09-21", username: "prueba15", ip: "192.168.0.21", accion: "Login" },
    { createdTime: "2025-09-25", username: "prueba16", ip: "192.168.0.20", accion: "Login" },

    // MES 5: OCTUBRE 2025
    { createdTime: "2025-10-01", username: "prueba17", ip: "192.168.0.23", accion: "Login" },
    { createdTime: "2025-10-02", username: "prueba18", ip: "192.168.0.19", accion: "Logout" },
    { createdTime: "2025-10-15", username: "prueba19", ip: "192.168.0.16", accion: "Login" },
    { createdTime: "2025-10-28", username: "prueba20", ip: "192.168.0.28", accion: "Login" },

    // MES 6: NOVIEMBRE 2025
    { createdTime: "2025-11-05", username: "prueba21", ip: "192.168.0.07", accion: "Login" },
    { createdTime: "2025-11-14", username: "prueba22", ip: "192.168.0.24", accion: "Login" },
    { createdTime: "2025-11-22", username: "prueba23", ip: "192.168.0.26", accion: "Login" },
    { createdTime: "2025-11-30", username: "prueba24", ip: "192.168.0.30", accion: "Logout" },

    // MES 7: DICIEMBRE 2025
    { createdTime: "2025-12-03", username: "prueba25", ip: "192.168.0.13", accion: "Login" },
    { createdTime: "2025-12-20", username: "prueba26", ip: "192.168.0.19", accion: "Login" },
    { createdTime: "2025-12-24", username: "prueba27", ip: "192.168.0.24", accion: "Login" },
    { createdTime: "2025-12-31", username: "prueba28", ip: "192.168.0.31", accion: "Login" },

    // MES 8: ENERO 2026
    { createdTime: "2026-01-05", username: "prueba19", ip: "192.169.0.03", accion: "Logout" },

    //AUDITOR
    { createdTime: "2026-01-12", username: "auditor", ip: "192.169.0.04", accion: "Login" },

    // EL ÚNICO ADMINISTRADOR
    { createdTime: "2026-01-27", username: "admin", ip: "192.169.0.27", accion: "Login" },
];