import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/MainHome.vue') },

      // {
      //   path: '/login',
      //   name: '/login',
      //   component: () => import('pages/LoginPage.vue'),
      // },
      //  // Main Test
      //  {
      //   path: '/maintest',
      //   name: '/maintest',
      //   component: () => import('pages/MainTest.vue'),
      // },
      // Property 폴더
      {
        path: '/property',
        name: 'property',
        component: () => import('@/pages/Property/PropertyPage.vue')
      },

      // FAQ 폴더
      {
        path: '/faq',
        name: 'faq',
        component: () => import('@/pages/FAQ/FaqPage.vue')
      },

      // ApiTest 폴더
      {
        path: '/apitest',
        name: 'apitest',
        component: () => import('@/pages/ApiTest/ApiTestPage.vue')
      },

      // Question 폴더
      {
        path: '/question',
        name: 'question',
        component: () => import('@/pages/Question/QuestionPage.vue')
      },

      // WeeklyReport 폴더
      {
        path: '/weeklyreport',
        name: 'weeklyreport',
        component: () => import('@/pages/WeeklyReport/ReportPage.vue')
      },
      {
        path: '/reportWrite',
        name: '/reportWrite',
        component: () => import('@/pages/WeeklyReport/ReportWrite.vue')
      }
      // {
      //   path: '/reportDetail',
      //   name: '/reportDetail',
      //   component: () => import('@/pages/WeeklyReport/ReportDetail.vue')
      // }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
