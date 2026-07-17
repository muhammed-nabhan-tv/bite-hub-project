import axios from "axios";

const api= axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
    headers: {"content-type": "application/json"},
})
export default api;