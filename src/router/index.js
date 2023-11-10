import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Video from '../views/HomeView.vue'
import VideoDetail from '../views/VideoDetail.vue'
import SignUp from '../components/user/Regist.vue'
import Login from '../components/user/Login.vue'
import List from '../components/review/ReviewList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    }, {
      path: '/video/:id',
      name: 'videodetail',
      component: VideoDetail,
      children: [
        {
          path: '',
          name: 'vue',
          component: List,
        },{
          path: '/review/:id',
          name: 'video',
          component: Video,
        },
      ]
    }, {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }

  ]
})

export default router
