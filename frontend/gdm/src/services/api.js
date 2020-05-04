import axios from 'axios';

const api = axios.create({
  baseURL: "https://gdm.labnet.nce.ufrj.br/api"
});

export default api;
