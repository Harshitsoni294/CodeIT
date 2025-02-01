import axios, { AxiosInstance } from "axios"

const backendURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"

const instance: AxiosInstance = axios.create({
    baseURL: backendURL,
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance
