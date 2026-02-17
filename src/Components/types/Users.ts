type Users = {
    id: number
    email: string
    username: string
    password: string
    createdTime?: string
    emailVerified: boolean
}

export const usersAccounts: Users[] = [
    // MES 1: JUNIO 2025
    { id: 1, email: "prueba@gmail.com", username: "prueba", password: "password", createdTime: "2025-06-12", emailVerified: true },
    { id: 2, email: "prueba2@gmail.com", username: "prueba2", password: "password2", createdTime: "2025-06-20", emailVerified: true },
    { id: 3, email: "prueba3@gmail.com", username: "prueba3", password: "password3", createdTime: "2025-06-28", emailVerified: false },
    { id: 4, email: "prueba4@gmail.com", username: "prueba4", password: "password4", createdTime: "2025-06-30", emailVerified: true },

    // MES 2: JULIO 2025
    { id: 5, email: "prueba5@gmail.com", username: "prueba5", password: "password5", createdTime: "2025-07-05", emailVerified: true },
    { id: 6, email: "prueba6@gmail.com", username: "prueba6", password: "password6", createdTime: "2025-07-18", emailVerified: true },
    { id: 7, email: "prueba7@gmail.com", username: "prueba7", password: "password7", createdTime: "2025-07-25", emailVerified: true },

    // MES 3: AGOSTO 2025
    { id: 8, email: "prueba8@gmail.com", username: "prueba8", password: "password8", createdTime: "2025-08-02", emailVerified: true },
    { id: 9, email: "prueba9@gmail.com", username: "prueba9", password: "password9", createdTime: "2025-08-15", emailVerified: false },
    { id: 10, email: "prueba10@gmail.com", username: "prueba10", password: "password10", createdTime: "2025-08-28", emailVerified: true },
    { id: 11, email: "prueba11@gmail.com", username: "prueba11", password: "password11", createdTime: "2025-08-30", emailVerified: true },

    // MES 4: SEPTIEMBRE 2025
    { id: 12, email: "prueba12@gmail.com", username: "prueba12", password: "password12", createdTime: "2025-09-04", emailVerified: true },
    { id: 13, email: "prueba13@gmail.com", username: "prueba13", password: "password13", createdTime: "2025-09-12", emailVerified: true },
    { id: 14, email: "prueba14@gmail.com", username: "prueba14", password: "password14", createdTime: "2025-09-25", emailVerified: true },

    // MES 5: OCTUBRE 2025
    { id: 15, email: "prueba15@gmail.com", username: "prueba15", password: "password15", createdTime: "2025-10-02", emailVerified: false },
    { id: 16, email: "prueba16@gmail.com", username: "prueba16", password: "password16", createdTime: "2025-10-15", emailVerified: true },
    { id: 17, email: "prueba17@gmail.com", username: "prueba17", password: "password17", createdTime: "2025-10-28", emailVerified: true },

    // MES 6: NOVIEMBRE 2025
    { id: 18, email: "prueba18@gmail.com", username: "prueba18", password: "password18", createdTime: "2025-11-05", emailVerified: true },
    { id: 19, email: "prueba19@gmail.com", username: "prueba19", password: "password19", createdTime: "2025-11-14", emailVerified: true },
    { id: 20, email: "prueba20@gmail.com", username: "prueba20", password: "password20", createdTime: "2025-11-22", emailVerified: true },
    { id: 21, email: "prueba21@gmail.com", username: "prueba21", password: "password21", createdTime: "2025-11-30", emailVerified: false },

    // MES 7: DICIEMBRE 2025
    { id: 22, email: "prueba22@gmail.com", username: "prueba22", password: "password22", createdTime: "2025-12-03", emailVerified: true },
    { id: 23, email: "prueba23@gmail.com", username: "prueba23", password: "password23", createdTime: "2025-12-12", emailVerified: true },
    { id: 24, email: "prueba24@gmail.com", username: "prueba24", password: "password24", createdTime: "2025-12-20", emailVerified: true },
    { id: 25, email: "prueba25@gmail.com", username: "prueba25", password: "password25", createdTime: "2025-12-24", emailVerified: true },
    { id: 26, email: "prueba26@gmail.com", username: "prueba26", password: "password26", createdTime: "2025-12-31", emailVerified: true },

    // MES 8: ENERO 2026
    { id: 27, email: "prueba27@gmail.com", username: "prueba27", password: "password27", createdTime: "2026-01-05", emailVerified: true },
    { id: 28, email: "prueba28@gmail.com", username: "prueba28", password: "password28", createdTime: "2026-01-12", emailVerified: false },
    { id: 29, email: "prueba29@gmail.com", username: "prueba29", password: "password29", createdTime: "2026-01-18", emailVerified: true },

    // EL ÚNICO ADMINISTRADOR
    { id: 30, email: "admin@gmail.com", username: "admin", password: "admin", createdTime: "2026-01-27", emailVerified: true }
];