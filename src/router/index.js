import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import Message1 from '../views/Message/Message1'
import Message2 from '../views/Message/Message2'
import Notfound from '../views/Error'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes:[
    {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/home',
    name:'Home',
    component:Home,
    children:[
      {
        path:'/message/1',
        name:'Message1',
        component:Message1
      },
      {
        path:'/message/2',
        name:'Message2',
        component:Message2,
        props:true
      }
    ]
  },
  {
    path:'*',
    component:Notfound
  },
  ]
})
