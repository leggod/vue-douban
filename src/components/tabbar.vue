<template>
  <div class="box">
    <div :class="{active: index == itemIndex}" @click="changeClass(index)" v-for="(item, index) in tit_item">{{item.text}}</div>
  </div>
</template>

<script>

export default {
    created() {
        this.changeClass(0);//先调用一次。
    },
    data () {
        return {
            tit_item: [
                {text: '正在热播'},
                {text: '即将热播'}
            ],
            itemIndex: 0
        }
    },
    methods: {
        changeClass (index) {
            this.itemIndex = index; //实现tabbar 切换的前端效果
            if(index == 0){
                this.$router.push('/movie/hot')
            }else{
                this.$router.push('/movie/coming')
            }
        }
    }
}
</script>

<style scoped>
.box{display: flex;border-bottom: 1px solid #bbb;}
.box>div {padding: 10px;}
.active{border-bottom: 4px solid #33ccff;color:#33ccff;}
.text{}
</style>
