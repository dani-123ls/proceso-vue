import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'//coloco la ruta
const routes = [
  {
    path: '/',//nombre de la ruta
    name: 'Registro',
    component: Home//importación de una vista
  },
  {
    path: '/compras',
    name: 'Compras',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/inicio-sesion',
    name: 'login',
    component: login,//mismo nombre de import
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
