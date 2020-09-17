// vueとrouterをインポート
import Vue from 'vue'
import Router from 'vue-router'
//
import home from '@/components/login'
// import order from '/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/newAccount',
      component: newAccount
    }
  ]
});
export default router
