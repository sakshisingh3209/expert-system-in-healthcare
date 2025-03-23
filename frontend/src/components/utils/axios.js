import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Base URL from env file
    withCredentials: true, // Send cookies with requests
});

export default instance;