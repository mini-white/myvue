import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import todolist from '@/components/todolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: todolist
    }
  ]
})
