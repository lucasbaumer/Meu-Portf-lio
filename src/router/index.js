import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FullLayout from '@/layout/FullLayout.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/home",
      component: FullLayout,
      children:[
        {
          path: "/home",
          name: "home",
          component: HomeView
        }
      ]
    }
  ]
})

export default router
