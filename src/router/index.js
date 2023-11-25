import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // 学校概括
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    // 院系设置
    {
      path:'/college',
      name:'college',
      component:()=>import('../views/CollegeView.vue')
    },
    // 教育教学
    {
      path:'/education',
      name:'education',
      component:()=>import('../views/EducationView.vue')
    },
    // 科学研究
    {
      path:'/science',
      name:'science',
      component:()=>import('../views/ScienceView.vue')
    },
    // 招生就业
    {
      path:'/beckon',
      name:'beckon',
      component:()=>import('../views/BeckonView.vue')
    },
    // 合作交流
    {
      path:'/cooperate',
      name:'cooperate',
      component:()=>import('../views/CooperateView.vue')
    },
    // 走进清华
    {
      path:'/walk',
      name:'walk',
      component:()=>import('../views/WalkView.vue')
    }
  ]
})

export default router
