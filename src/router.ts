import {createWebHistory, createRouter} from 'vue-router'

import HomeView from './pages/home/index.vine'
import Dashboard from './pages/dashboard/index.vine'
import Component from './pages/component/index.vine'
import Blog from './pages/blog/index.vine'

let base = '/vuevinedemo'

const routers = [
  {
    path: base,
    component: HomeView
  },
  {
    path: `${base}/tutorial`,
    component: Dashboard
  },
  {
    path: `${base}/component`,
    component: Component
  },
  {
    path: `${base}/blog`,
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
  linkActiveClass: 'text-red-500'
})

export default router