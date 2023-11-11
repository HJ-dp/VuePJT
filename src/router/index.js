import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Video from '../views/HomeView.vue'
import VideoDetail from '../views/VideoDetail.vue'
import SignUp from '../components/user/Regist.vue'
import Login from '../components/user/Login.vue'
import List from '../components/review/ReviewList.vue'
import Review from '../components/review/ReviewDetail.vue'
import ReviewRegist from '../components/review/ReviewCreate.vue'
import ReviewModi from '../components/review/ReviewModify.vue'
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
      // props:true,
      children: [
        {
          path: '',
          name: 'vue',
          component: List,
        },{
          path: '/video/review/:id',
          name: 'review',
          component: Review,
          props:true,

        },{
          path: '/regist/:id',
          name: 'reviewregist',
          component: ReviewRegist,
          props:true,
        },{
          path: '/modify/:id',
          name: 'reviewmodify',
          component: ReviewModi,
          props:true,
        }
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
