import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/LoginView.vue'
import Vuex from '@/views/vuex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dash',
    name: 'Dashboard',
    component: () => import('@/views/DashboardView.vue')
  },
  {
    path: '/requests',
    name: 'Requests',
    component: () => import('@/views/RequestsView.vue')
  },
  {
    path: '/lineup-detail-view/:id',
    name: 'LineupDetail',
    component: () => import('@/views/LineupDetailView.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
