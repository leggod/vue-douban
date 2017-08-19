<template>
	<div>
		<div class="item" v-for="(item, index) in coming_movie_info.subjects" @click="jump(item.id)">
            <div class="fl div1">
                <img  :src="item.images.large" alt="">
            </div>
            
            <div class="fl div2">
                <p class="p1">{{item.title}}</p>
                <p class="p2">评分：{{item.rating.average}}/{{item.rating.max}}</p>
                <p class="p3">导演：<span v-for="(item2, index2) in item.directors">{{item2.name}}</span>
                    
                </p>
                <p class="p4">主演：<span v-for="(item1,index1) in item.casts">{{item1.name}}</span></p>
            </div>
        </div>

        <div class="item" >
            <div class="fl div1">
                <img  src="./../assets/logo.png" alt="">
            </div>
            
            <div class="fl div2">
                <p class="p1">杀破狼</p>
                <p class="p2">评分：8.5</p>
                <p class="p3">导演：叶伟信</p>
                <p class="p4">主演：古天乐</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created () {
		console.log(this.coming_movie_info)
    },
    data () {
        return {
        }
    },
	computed: {
		coming_movie_info () {
            return this.$store.state.coming_soon;
        }
	},
	methods: {
        jump (id) {
            this.$router.push('/detail/'+ id)
        }
    }
    
}
</script>
<style scoped>

</style>
