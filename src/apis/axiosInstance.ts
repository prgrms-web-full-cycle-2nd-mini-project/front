import axios from 'axios';
import { BASE_URL } from '../constants/url';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

export default axiosInstance;
