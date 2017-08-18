<template>
  <div>
    <tabbar></tabbar>
    <div>电影</div>
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
        console.log(this.$store.state);
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
