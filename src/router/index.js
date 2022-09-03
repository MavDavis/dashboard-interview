import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from '../views/Login.vue'

import CreateBlog from '../views/CreateBlog.vue'
import BlogView from '../views/BlogView.vue'
import Register from '../views/Register.vue'
import About from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
component:About
  },
  {
    path: '/blogView',
    name: 'BlogView',
component:BlogView
  },
  {
    path: '/createBlog',
    name: 'CreateBlog',
component:CreateBlog
  },
    {
    path: '/register',
    name: 'Register',
component:Register
  },
  {
    path: '/login',
    name: 'Login',
component:Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
