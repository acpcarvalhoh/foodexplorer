import axios from "axios";
import dotenv from 'dotenv';
const url = process.env.API_URL

export const api = axios.create({
    baseURL: url
});