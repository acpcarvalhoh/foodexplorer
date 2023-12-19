import axios from "axios";
import env from "react-dotenv";
const url = process.env.API_URL

export const api = axios.create({
    baseURL: url
});