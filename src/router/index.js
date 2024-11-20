import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FullLayout from '@/layout/FullLayout.vue'
import AboutMe from '@/views/AboutMe.vue'
import Experiences from '@/views/Experiences.vue'
import Curriculum from '@/views/Curriculum.vue'

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
        },
        {
          path: "/about-me",
          name: "about-me",
          component: AboutMe
        },
        {
          path: "/experiences",
          name: "experiences",
          component: Experiences
        },
        {
          path: "/curriculum",
          name: "curriculum",
          component: Curriculum
        }
      ]
    }
  ]
})

export default router
