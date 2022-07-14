import axios from "axios";

const api = axios.create({
  baseURL: 'https://blaze-crash-backend.herokuapp.com',
  timeout: 240000, // 60 seconds
});

export default api;