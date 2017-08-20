// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
require('./css.css')
Vue.prototype.$http = axios;  //在组件中使用axios发请求，只需this.$http.get();
//Vue.use(VueAxios, axios)
axios.post('/api/v2/movie/coming_soon').then(function (response) {
    //data可以在 store/comint_soon.json中 查看
    store.commit('set_coming_soon', response.data); //不要直接改变state
})
axios.get('/api/v2/movie/in_theaters').then(function (response) {
    //data可以在 store/comint_soon.json中 查看
    store.commit('set_in_theaters', response.data); //不要直接改变state
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
