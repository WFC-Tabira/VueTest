// vueとrouterをインポート
import Vue from 'vue'
import Router from 'vue-router'
//
import home from '@/home'
import order from '@/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/newAccount',
      component: newAccount
    }
  ]
});
