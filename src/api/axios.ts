import axios from 'axios';

const BaseURL = location.host.split(':')[0];
const Port = 3000;
// console.log(BaseURL, Port);
axios.defaults.withCredentials = true;
// const http = axios.create({ baseURL: 'http://localhost:3000' });
const http = axios.create({ baseURL: `http://${BaseURL}:${Port}` });
/* http.interceptors.request.use(
  (config) => {
    config;
    console.log(config);
  },
  (error) => {
    Promise.reject(error);
  }
); */

export { http };
