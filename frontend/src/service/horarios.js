import { http } from './config';

export default {
  lista: () => http.get('/horarios'),
};
