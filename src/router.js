import Vue from 'vue'
import Router from 'vue-router'
import Hello from './components/HelloWorld'
import Welcome from './components/Welcome'
import LoginComponent from './components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Hello
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome
    }
  ]
})