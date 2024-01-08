import { http } from 'src/api/axios';

/* 테스트 */
export async function testAPI() {
  return http.get('api/dashboard');
}
/* top 5 */
export async function top5() {
  return await http.get('api/top5');
}
