<template>
	<div class="hello">
		<p>123</p>
	</div>
</template>

<script>
export default {
	created() {
		//获取url 的参数 id就是router/index.js 中的 path 参数
		this.query_id = this.$route.params.id;
		//this.queryMovieById();
	},
	data() {
		return {
			query_id: null
		}
	},
	methods: {
		queryMovieById () {
			this.$http.get('/api/v2/movie/subject/'+this.query_id).then((respose) => {
				console.log(respose);
			})
		}
	}
}
</script>
<style scoped>
</style>
