import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import silverMain from '@/components/silverMain/silverMain'
import Summary from '@/components/silverMain/Summary/Summary'
import NewOrder from '@/components/silverMain/NewOrder/NewOrder'
Vue.use(Router)

export default new Router({
  routes: [
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
