import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import GenshinImpact from '@/views/GenshinImpact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/Home',
      component: Home
    },
    {
      name: 'GenshinImpact',
      path: '/GenshinImpact',
      component: GenshinImpact
    },
    {
      path: '/',
      redirect: '/GenshinImpact'
    },
  ],
})

export default router
