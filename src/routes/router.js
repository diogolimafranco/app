import Vue from 'vue'
import Router from 'vue-router'
import AuthRoutes from './auth/auth-route'
import DashboardRoutes from './dashboard/dashboard-route'

Vue.use(Router)
const routes = [AuthRoutes, DashboardRoutes] 

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})