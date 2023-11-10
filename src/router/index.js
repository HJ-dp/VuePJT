import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Video from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/video',
      name: 'video',
      component: Video,
    },{
      path: '/about',
      name: 'videoid',
      component: Video,
    },
  ]
})

export default router
