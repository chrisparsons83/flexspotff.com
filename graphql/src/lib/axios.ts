import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://api.sleeper.app',
});

export default Axios;
