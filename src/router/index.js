import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SilverLogin from '@/components/SilverLogin/SilverLogin'
import Summary from '@/components/silverMain/Summary/Summary'
import NewOrder from '@/components/silverMain/NewOrder/NewOrder'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    name: 'SilverLogin',
    component: SilverLogin
  },
    {
      path: '/',
      name: 'Summary',
      component: Summary
    },
    {
      path: '/NewOrder',
      name: 'NewOrder',
      component: NewOrder
    }
  ]
})
