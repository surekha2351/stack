// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.stackexchange.com/2.3/',
});

export default api;
