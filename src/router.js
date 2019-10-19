import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import VerifyUser from './views/VerifyUser.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import ResetPassword from './views/ResetPassword.vue'
import store from './store/store'

const ifNotAuth = (to, from, next) => {
  if (!store.getters.isAuth) {
    next()
  } else {
    next('/')
  }
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: ifNotAuth
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      beforeEnter: ifNotAuth
    },
    {
      path: '/auth/confirmation/:token',
      name: 'verifyUser',
      component: VerifyUser
    },
    {
      path: '/auth/reset',
      name: 'forgotPassword',
      component: ForgotPassword
    },
    {
      path: '/auth/reset/:token',
      name: 'resetPassword',
      component: ResetPassword
    }
  ]
})
