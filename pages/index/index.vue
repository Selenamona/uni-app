<template>
	<view class="tabs">
		<scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false">
			<view v-for="(tab,index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index" @click="ontabtap">
				<text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
			</view>
		</scroll-view>
		<view class="line-h"></view>
		<swiper :current="tabIndex" class="swiper-box" style="flex: 1;" :duration="300" @change="ontabchange">
			<swiper-item class="swiper-item" v-for="(k,m) in tabBars" :key="m">
				<view class="list-wrap" v-for="(tab,n) in newDatas" :key="n">
					<news-item :item="tab"></news-item>
				</view>
				<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import newsItem from './news-item.vue'
	// 列表数据
	const listData = {
		data0: {
			"datetime": "40分钟前",
			"article_type": 0,
			"title": "uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!",
			"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",
			"source": "DCloud",
			"comment_count": 639
		},
		data1: {
			"datetime": "一天前",
			"article_type": 1,
			"title": "DCloud完成B2轮融资，uni-app震DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!撼发布!",
			"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",
			"source": "DCloud",
			"comment_count": 11395
		},
		data2: {
			"datetime": "一天前",
			"article_type": 2,
			"title": "中国技术界小奇迹DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!：HBuilder开发者突破200万",
			"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",
			"source": "DCloud",
			"comment_count": 11395
		},
		data3: {
			"article_type": 3,
			"image_list": [{
				"url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",
				"width": 563,
				"height": 316
			}, {
				"url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",
				"width": 641,
				"height": 360
			}, {
				"url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",
				"width": 640,
				"height": 360
			}],
			"datetime": "5分钟前",
			"title": "uni-app 支持使用DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布! npm 安装第三方包，生态更趋丰富",
			"source": "DCloud",
			"comment_count": 11,
			"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",
		},
		data4: {
			"datetime": "2小时前",
			"article_type": 4,
			"title": "uni-app 支持原生小程DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!序自定义组件，更开放、更自由",
			"image_url": "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",
			"source": "DCloud",
			"comment_count": 69
		}
	}
	export default {
		data() {
			return {
				showLoadMore: true,
				loadMoreText: "加载中...",
				tabIndex: 0,
				newDatas: [],
				tabBars: [{
					name: '推广中',
					url: 'popularize'
				}, {
					name: '已下架',
					url: 'offShelf'
				}]
			}
		},
		onLoad() {
			this.getList()
		},
		methods: { 
			// 上拉加载
			onReachBottom() {
				console.log("onReachBottom");
				if (this.max > 40) {
					this.loadMoreText = "没有更多数据了!"
					return;
				}
				this.showLoadMore = true;
				setTimeout(() => {
					this.getList();
				}, 300);
			},
			// 下拉刷新
			onPullDownRefresh() {
					console.log('refresh');
					setTimeout(function () {
							uni.stopPullDownRefresh();
					}, 1000);
			},
			// 切换页签
			listData(e) {
				let index = e.target.current || e.detail.current;
				// this.switchTab(index);
				console.log(listData);
				if (1 + 1) {

				}
			},
			// TAB切换
			ontabtap(e){
				console.log(e.currentTarget.dataset.current);
				this.tabIndex = e.currentTarget.dataset.current
			},
			// 列表切换
			ontabchange(e) {
				let index = e.target.current || e.detail.current;
				if (this.tabIndex === index) {
					return;
				}else{
					this.getList();
				}
			}, 
			// 获取列表数据
			getList() {
				let list = [];
				for (let i = 1; i <= 10; i++) {
					let item = Object.assign({}, listData['data' + Math.floor(Math.random() * 5)]);
					item.id = this.newGuid();
					list.push(item);
				}
				this.newDatas = list;
			},
			// 自定义ID
			newGuid() {
				let s4 = function() {
					return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
				}
				return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toUpperCase();
			},
		},
		components: { newsItem }
	}
</script>


<style>
	/* #ifndef APP-PLUS */
	page {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	/* #endif */

	.tabs {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background-color: #ffffff;
	}

	.scroll-h {
		width: 750rpx;
		height: 80rpx;
		flex-direction: row;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
		/* flex-wrap: nowrap; */
		/* border-color: #cccccc;
		border-bottom-style: solid;
		border-bottom-width: 1px; */
	}

	.line-h {
		height: 1rpx;
		background-color: #cccccc;
	}

	.uni-tab-item {
		/* #ifndef APP-PLUS */
		display: inline-block;
		/* #endif */
		flex-wrap: nowrap;
		padding-left: 34rpx;
		padding-right: 34rpx;
	}

	.uni-tab-item-title {
		color: #555;
		font-size: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		flex-wrap: nowrap;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
	}

	.uni-tab-item-title-active {
		color: #007AFF;
	}

	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		overflow: auto;
	}
</style>
