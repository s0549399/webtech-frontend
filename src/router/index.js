import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Notes from '../views/Notes.vue'
import NewNote from '../views/NewNote'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes
  },
  {
    path: '/new-note',
    name: 'NewNote',
    component: NewNote
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }

]

const router = createRouter({
  history: createWebHistory('https://webtech-frontend-0186.onrender.com/'),
  linkActiveClass: 'active',
  routes
})

export default router
