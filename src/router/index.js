import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from '../views/Login.vue'

import CreateBlog from '../views/CreateBlog.vue'
import BlogView from '../views/BlogView.vue'
import Register from '../views/Register.vue'
import About from '../views/AboutView.vue'
import { nextTick } from 'vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'Home'
    }
  },
  {
    path: '/about',
    name: 'About',
component:About,
    meta:{
      title:'About'
    }
  },
  {
    path: '/blogView',
    name: 'BlogView',
component:BlogView,
    meta:{
      title:'BlogView'
    }
  },
  {
    path: '/createBlog',
    name: 'CreateBlog',
component:CreateBlog,
    meta:{
      title:'CreatBlog'
    }
  },
    {
    path: '/register',
    name: 'Register',
component:Register,
    meta:{
      title:'Register'
    }
  },
  {
    path: '/login',
    name: 'Login',
component:Login,
    meta:{
      title:'Login'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next)=>{
  document.title = `${to.meta.title}~Mavs-Blogs `;
  next()
})
export default router
