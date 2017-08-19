<template>
  <div>
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
/*导入组件，
1、导入
2、在components中注册
*/
import tabbar from './tabbar'
export default {
    created () {
        
    },
    components: {
        tabbar,
    },
    data () {
        return {
        }
    }
}
</script>

<style scoped>
</style>
