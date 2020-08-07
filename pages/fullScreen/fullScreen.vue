<template>
	<view class="bg-img">
		<view class="bg"></view>
		<view class="content"> 拍车帝
			<image class="img" src="../../static/images/timg%20(2).jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.bg {
		/* 		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0; */
		height: 100vh;
		background-image: url(../../static/images/timg.jpg);
		background-size: 100% 100%;
		filter: blur(10px);
	}

	.content {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 3;
		padding-top: 44rpx;
		height: 45rpx;
		font-size: 20rpx;
		color: #007AFF;
	}
	.img {
		display: block;
		margin-top: 60rpx;
	}
</style>
