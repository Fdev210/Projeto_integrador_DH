import axios from 'axios';

const api = axios.create({
    baseURL: 'https://kitsu.io/api/edge',
    timeout: 5000
});

export default api;