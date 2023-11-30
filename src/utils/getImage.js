import { api } from "../services/api"

export function getImageUrl(image){
    const url = `${api.defaults.baseURL}/files/${image}`
    
    return url;
};