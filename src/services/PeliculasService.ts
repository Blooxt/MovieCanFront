import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7034/api', // URL del backend
});

export default {
    async obtenerPeliculas() {
        const response = await api.get('/peliculas');
        return response.data;
    },
};