import Vue from 'vue'
import Router from 'vue-router'
//每个router 的组件 必须引入进来才能用
import Movie from '@/components/movie'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/',  redirect: '/movie'  },//重定向到movie
        { path: '/movie', component: Movie}
    ]
})
