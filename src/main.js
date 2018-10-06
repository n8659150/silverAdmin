// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import AtComponents from 'at-ui'
import 'at-ui-style'
// leancloud
const APP_ID = 'kzoIjdfx1dP6k6PiRuhze4kr-9Nh9j0Va'
const APP_KEY = 'OL6rN3IzEai4CGSPB7V1HIMv'
import router from './router'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})
Vue.use(AtComponents)
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
