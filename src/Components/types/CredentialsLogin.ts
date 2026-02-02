type CredentialsLog = {
    id: number
    email: string
    username: string
    password: string
    userRole: string
}
export const CredentialsLogin: CredentialsLog[] = [
    { id: 1, email: "prueba@gmail.com", username: "prueba", password: "prueba", userRole: "user"},
    { id: 2, email: "admin@gmail.com", username: "admin", password: "admin", userRole: "admin"}
]