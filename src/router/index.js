import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import ErrorView from '@/views/ErrorView.vue'
import MainPage from '@/pages/MainPage.vue'
import NewsPage from '@/pages/NewsPage.vue'

const routes = [
  {
    path: '/',
    component: MainView,
    meta: { alreadyAuth: true },
    children: [
      {
        path: '/',
        alias: '/',
        component: MainPage
      },
      {
        path: '/news',
        alias: 'news',
        component: NewsPage
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorView',
    component: ErrorView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = 'Work With Jimmer — Virtual Assistant, Systems Expert & Educator';
  next();
});

export default router
