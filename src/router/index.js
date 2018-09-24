import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import silverMain from '@/components/silverMain/silverMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'silverMain',
      component: silverMain
    }
  ]
})
