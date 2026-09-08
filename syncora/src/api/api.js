import axios from "axios"

export const BASE_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,   // Backend stores access and refresh tokens in HTTP-only cookies
    headers: {
        "Content-Type": "application/json"
    }
});



export default api