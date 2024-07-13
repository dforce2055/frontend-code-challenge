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
    {
      path: '/actividades',
      name: 'activities',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Activities.vue')
    },
    {
      path: '/actividades/:id',
      name: 'activity details',
      component: () => import('../views/ActivityDetails.vue'),
      props: true
    }
  ]
})

export default router
