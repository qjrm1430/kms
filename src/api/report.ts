import { http } from 'src/api/axios';

export async function reportInsert(data: any) {
  return http.post('api/report/insert', data);
}

export async function reportList() {
  return http.get('api/report/list');
}
