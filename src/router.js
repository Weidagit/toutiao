import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'
import Main from './views/home/main'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/page',
    //   component: () => import('./views/page')
    // },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: '',
        component: Main // 默认二级路由组件
      }, {
        path: '/home/comment', // 评论列表
        component: () => import('./views/comment') // 按需加载的写法
      }, {
        path: '/home/material', // 素材列表
        component: () => import('./views/material') // 按需加载的写法
      }, {
        path: '/home/articles', // 内容列表
        component: () => import('./views/articles') // 按需加载的写法
      }, {
        path: '/home/publish', // 发表文章
        component: () => import('./views/publish') // 按需加载的写法
      }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
