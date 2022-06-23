import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

export enum Role {
  ROOT,
  ADMIN,
  STAFF,
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/index.vue'),
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('../views/sign-in.vue'),
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('../views/sign-up.vue'),
  },
  {
    path: '/need-role',
    name: 'need-role',
    component: () => import('../views/need-role.vue'),
    meta: {
      role: Role.ROOT,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'sign-in' && to.name !== 'sign-up') {
    if (localStorage.getItem('token') === null) {
      next({ name: 'sign-in' })
    } else {
      next()
    }
  } else next()
})

export default router
