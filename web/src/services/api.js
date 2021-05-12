import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jarbas.serenata.ai/api/',
});

export default api;