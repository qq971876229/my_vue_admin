import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Company from '@/components/company/index'
import Layout from '@/components/Layout'
import Add from '@/components/Add'

Vue.use(Router)

Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Layout',
      component: Layout,
      // 嵌套路由
      children: [{
        // 这里不设置值，是作为默认页面
        path: '/',
        name: 'CompanyList',
        component: Company
      }, {
        path: '/add',
        name: 'Add',
        component: Add
      }]
    }
  ]
})
