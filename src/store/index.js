import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/*1. state 的值 只能通过mutations 去改变，同步的
2.actions 里面可以写异步提交到mutations 的操作，比如settimeout，但我从来不用，用不到actions。
*/
const store = new Vuex.Store({
    // 存储状态值
    state: {
        coming_soon: null,//快上映的电影
        in_theaters: null, //正在热播
        pre_page: null, //上一个页面的信息  detail.vue里面有用到
    },
    // 状态值的改变方法,操作状态值
    // 提交mutations是更改Vuex状态的唯一方法
    mutations: {
        set_coming_soon (state, obj) {
            state.coming_soon = obj;
        },
        set_in_theaters (state, obj) {
            state.in_theaters = obj;
        },
        save_prepage (state, string) {
            state.pre_page = string;
        }
    },
    // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
    getters: {
    },
    actions: {
    }
})
export default store
