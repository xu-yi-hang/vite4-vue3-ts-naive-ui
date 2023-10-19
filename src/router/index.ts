import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import { afterEach } from './guard'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

afterEach(router)

export default router
