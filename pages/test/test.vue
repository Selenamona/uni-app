<template>
	<view>
		<button type="default" @click="goTo">next page</button>
		<view class="">{{name}}</view>
		<button type="default" @click="setTestName(name2)">setName</button>
		<input class="input-k" type="text" v-model="name2" />
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				arr: [1, 2, 3],
				name: "天气不错",
				name2: "",
			}
		},
		methods: {
			...mapMutations(['setTestName']),
			goTo() {
				uni.navigateTo({
					url: '/pages/test/test2'
				});
			},
		}
	}
</script>

<style>

	
.input-k{
	background-color: #DD524D;
}
</style>
