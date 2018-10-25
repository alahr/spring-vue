import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueTest from '@/components/VueTest'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vuetest',
      name: 'VueTest',
      component: VueTest
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
