import {createWebHistory, createRouter} from 'vue-router'

import HomeView from './pages/home/index.vine'
import Dashboard from './pages/dashboard/index.vine'
import Component from './pages/component/index.vine'
import Blog from './pages/blog/index.vine'

const routers = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/tutorial',
    component: Dashboard
  },
  {
    path: '/component',
    component: Component
  },
  {
    path: '/blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
  linkActiveClass: 'text-red-500'
})

export default router