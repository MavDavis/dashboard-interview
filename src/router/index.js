import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next)=>{
  document.title = `dashboard Interview `;
  next()
})
export default router
