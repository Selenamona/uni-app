<!-- 卡片 -->
<template>
	<view class='newsItem'>
		<!-- 图片/文本 -->
		<view class="top-main">
			<image class="img" :src="item.image_url"></image>
			<view class="top-right">
				<view class="t-text"><view class="span">{{item.title}}</view></view>
				<view class="b-text"> 
					<view class="b-text"> 浏览 12 · 留言 1 </view>
					<view class="b-text"> 推广中 </view>
				</view>
			</view>
		</view>
		<!-- 日期 -->
		<view class="bottom-btn">
			<view class="time">{{item.datetime}}</view>
			<view class="button">
				<button type="primary" plain="true">编辑</button>
				<button type="primary" plain="true">下架</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'newsItem',
		props: {
			item: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		data() {
			return {

			};
		},
		created() {},
		mounted() {},
		methods: {

		},
		components: {},
	}
</script>
<style lang='scss' scoped>
	.newsItem{
		font-size: 18upx;
		padding: 15upx;
		.top-main {
			display: flex;
			.img {
				width: 250upx;
				height: 180upx;
				margin-right: 10upx;
			}
			.top-right {
				flex: 1;
				display: flex;
				flex-direction: column;
				.t-text {
					flex:1;
					.span{
						font-size: 20upx;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
				}
				.b-text{
					display: flex;
					justify-content: space-between;
				}
			}
		}
		.bottom-btn {
			display: flex;
			margin-top: 20upx;
			.time {
				flex:1;
			}
			.button {
				display: flex;
				button{
					border-radius: 15upx;
					width: 80upx;
					height: 30upx;
					font-size: 14upx;
					margin-left: 10upx;
				}
			}
		}
	}
</style>
