<template>
	<view>
		<button type="default" @click="goTo(1)">转图片</button>
		<button type="default" @click="goTo(2)">去列表</button>
		<button type="default" @click="goTo(3)">位置/用户信息</button>
		<button type="default" @click="goTo(4)">list swipe</button>
		<button type="default" @click="goTo(5)">拨打电话</button>
		<button open-type="share"> 分享给好友 </button>
		<button type="default" @click="goTo(6)"> 选择图片 </button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goTo(type) {
				switch (type) {
					case 1:
						uni.navigateTo({
							url: '/pages/htmlToImg/htmlToImg'
						});
						break
					case 2:
						uni.navigateTo({
							url: '/pages/list/index'
						});
						break
					case 3:
						uni.navigateTo({
							url: '/pages/login/login'
						});
						break
					case 4:
						uni.navigateTo({
							url: '/pages/list/index-swiper'
						});
						break
					case 5:
						uni.makePhoneCall({
							phoneNumber: '15633585937'
						});
						break
					case 6:
						uni.chooseImage({
						    count: 6, //默认9
						    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						    // sourceType: ['album'], //从相册选择
						    success: function (res) {
						        console.log(res);
						    }
						});
						break
				}
			}
		}
	}
</script>

<style>

</style>
