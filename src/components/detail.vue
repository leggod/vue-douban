<template>
	<div class="hello">
		<div class="top"><span @click="back_page"><-</span><span>影片详情</span></div>
		<div class="container">
			<div class="fl container-left">
				<img :src="movieInfo.images.large" alt="">
			</div>
			<div class="fl container-right">
				<div class="container-right-div1">
					<p>{{movieInfo.title}}</p>
					<p>{{movieInfo.aka[2] ? movieInfo.aka[2] :movieInfo.aka[0]}}</p>
				</div>
				<div class="container-right-div2">
					<p><span v-for="(item1, index1) in movieInfo.genres">{{item1}}</span></p>
					<p>{{movieInfo.countries[0]}} | 123分钟</p>
					<p>{{movieInfo.year}} 在中国大陆上映</p>
					<p>{{movieInfo.rating.average}}（{{movieInfo.ratings_count}}人评）</p>
				</div>
			</div>
		</div>
		<div class="feature">
			<div class="fl feature-left" @click="handleProps">想看</div>
			<div class="fl feature-right">评分</div>
		</div>
		<div>
			{{movieInfo.summary}}
		</div>
		<dialog-component :isShow="isShowDialog" @on-close="closeDialog">
			<p>已添加到想看的电影</p>
		</dialog-component>
	</div>
</template>

<script>
import dialog from './Tip'
export default {
	components: {
		dialogComponent: dialog,
	},
	created() {
		//获取url 的参数 id就是router/index.js 中的 path 参数
		this.query_id = this.$route.params.id;
		this.queryMovieById();
	},
	data() {
		return {
			query_id: null,
			movieInfo: null, //详情信息
			isShowDialog: false,
		}
	},
	computed: {
		prePage () {
			return this.$store.state.pre_page;
		}
	},
	methods: {
		queryMovieById () {
			this.$http.get('/api/v2/movie/subject/'+this.query_id).then((respose) => {
				this.movieInfo = respose.data;
			})
		},
		back_page () {
			this.$router.push(this.$store.state.pre_page);
		},
		handleProps () {
			this.isShowDialog = true;
		},
		closeDialog () {
			this.isShowDialog = false;
		}
	}
}
</script>
<style scoped>
</style>
