import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/ShopView.vue')
  },
  {
    path: '/circle',
    name: 'Circle',
    component: () => import('../views/CircleView.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/MineView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router