<template>
	<view>
		<button type="primary" open-type="getUserInfo" lang="zh_CN" size="default" :loading="loading" @getuserinfo="getuserinfo">
			获取用户信息 </button>
		<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"> 手机号 </button>
		<view>腾讯获取位置：{{tencentProvince+tencentCity+tencentDistrict}}</view>
		<view>高德获取位置：{{gdProvince+gdCity+gdDistrict}}</view>
	</view>
</template>

<script>
	import amap from '../../libs/amap-wx.js';
	import QQMapWX from '../../libs/qqmap-wx-jssdk.min.js'
	export default {
		data() {
			return {
				loading: false,
				key: "eec63bbf2f8541f46c949327f0123740",
				amapPlugin: null,
				tencentProvince:null,
				tencentCity:null,
				tencentDistrict:null,
				qqmapsdk:null,
				gdProvince:null,
				gdCity:null,
				gdDistrict:null,
			}
		},
		onLoad() {
			let _this = this;
			// 高德地图
			console.log(amap, "amap");
			var myAmapFun = new amap.AMapWX({
				key: this.key
			});
			myAmapFun.getRegeo({
				success: function(data) {
					//成功回调
					console.log("高德地图获取位置成功", data);
					_this.gdProvince = data[0].regeocodeData.addressComponent.province;
					_this.gdCity = data[0].regeocodeData.addressComponent.city[0];
					_this.gdDistrict = data[0].regeocodeData.addressComponent.district;
				},
				fail: function(info) {
					//失败回调
					console.log("高德地图获取位置失败", info)
				}
			})
			// 腾讯地图
			this.qqmapsdk = new QQMapWX({
				key: 'JXKBZ-TX2L5-HFIIH-QRBCF-YNMM3-N5F5R'
			});
			console.log(this.qqmapsdk, "qqmapsdk");
			// this.qqmapsdk.reverseGeocoder({
			// 	// location: {
			// 	// 	latitude: latitude,
			// 	// 	longitude: longitude
			// 	// },
			// 	success: function(res) {
			// 		console.log("腾讯获取位置",res)
			// 		_this.tencentProvince = res.result.ad_info.province;
			// 		_this.tencentCity = res.result.ad_info.city;
			// 		_this.tencentDistrict = res.result.ad_info.district;
			// 	},
			// 	fail: function(err) {
			// 		console.log(err)
			// 	}
			// })

			// --------获取所有省/市--------------
			//调用获取城市列表接口
			this.qqmapsdk.getCityList({
				success: function(res) { //成功后的回调
					console.log('省份数据：', res.result[0])
					var city = res.result[0];
					//根据对应接口getCityList返回数据的Id获取区县数据（以北京为例）
					_this.qqmapsdk.getDistrictByCityId({
						// 传入对应省份ID获得城市数据，传入城市ID获得区县数据,依次类推
						id: city[0].id, //对应接口getCityList返回数据的Id，如：北京是'110000'
						success: function(res) { //成功后的回调
							console.log('对应城市ID下的区县数据(以北京为例)：', res.result[0]);
						},
						fail: function(error) {
							console.error(error);
						},
						complete: function(res) {
							// console.log(res);
						}
					});
				},
				fail: function(error) {
					console.error(error);
				},
				complete: function(res) {
					// console.log(res);
				}
			});
		},
		methods: {
			getuserinfo(result) {
				console.log('用户信息', result);
				if (result.detail.errMsg !== 'getUserInfo:ok') {
					uni.showModal({
						title: '获取用户信息失败',
						content: '错误原因' + result.detail.errMsg,
						showCancel: false
					});
					return;
				}
			},
			getPhoneNumber(result) {
				console.log('获取手机号', result);
				let _this = this;
				uni.authorize({
					scope: 'scope.userLocation',
					success() { // 允许授权
						console.log("位置授权确认")
						uni.getLocation({
							type: 'wgs84',
							success: function(res) {
								console.log("经纬度",res)
								_this.qqmapsdk.reverseGeocoder({
									location: {
										latitude: res.latitude,
										longitude: res.longitude
									},
									success: function(res) {
										console.log("腾讯获取位置",res)
										_this.tencentProvince = res.result.ad_info.province;
										_this.tencentCity = res.result.ad_info.city;
										_this.tencentDistrict = res.result.ad_info.district;
									},
									fail: function(err) {
										console.log(err)
									}
								})
							}
						});
					},
					fail() { // 拒绝授权
						console.log("你拒绝了授权，无法获得周边信息")
					}
				})
			}
		}
	}
</script>

<style>

</style>
