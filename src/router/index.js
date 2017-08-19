import Vue from 'vue'
import Router from 'vue-router'
//每个router 的组件 必须引入进来才能用
import Movie from '@/components/movie'
import Coming from '@/components/coming'
import Hot from '@/components/hot'
import Detail from '@/components/detail'
Vue.use(Router)

export default new Router({
    routes: [
        { path: '/',  redirect: '/movie'  },//重定向到movie
        {
            path: '/movie',
            component: Movie,
            children: [ //嵌套路由，必须在父组件中有router-view
                {
                    path: 'coming',
                    component: Coming
                },
                {
                    path: 'hot',
                    component: Hot
                }
            ]
        },
        {
            path: '/detail/:id',
            component: Detail
        }
    ]
})
