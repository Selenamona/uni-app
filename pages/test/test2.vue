<template>
	<view class="ani">
		<button type="default" @click="goBack">before page</button>
		<button type="default" @click="setColorIndex(colorIndex>1?0:colorIndex+1)">changeColor</button>
		<view :style="{color:currentColor}">{{testname}}</view>
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
				// name: "天气不错"
			}
		},
		computed: {
			...mapState(['colorIndex', 'colorList', 'testname']),
			...mapGetters(['currentColor'])
		},
		methods: {
			...mapMutations(['setColorIndex']),
			goBack() {
				uni.navigateBack();
			}
		}
	}
</script>

<style>
</style>
