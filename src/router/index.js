import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/Landing.vue')
  },
  {
    path: '/:vendor',
    name: 'catalog',
    component: () => import('../views/Catalog.vue'),
  },
  {
    path: '/:vendor/:title/:id/',
    name: 'title',
    component: () => import('../views/Item.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
