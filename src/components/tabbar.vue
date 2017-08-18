<template>
  <div>
    <div v-for="(item, index) in tit_item">{{item.text}}</div>
  </div>
</template>

<script>
export default {
    created () {
        console.log(this.$store.state);
    },
    data:{
        tit_item: [
            {text: '正在热播'},
            {text: '即将热播'}
        ]
    }
}
</script>

<style scoped>
.text{color:blue;}
</style>
