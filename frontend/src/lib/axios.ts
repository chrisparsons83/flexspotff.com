import Axios from 'axios';

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);
