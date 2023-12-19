import axios from "axios";
const url = process.env.VITE_API_URL

export const api = axios.create({
    baseURL: url
});