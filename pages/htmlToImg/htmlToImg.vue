<template>
	<view>
		<button type="default" @click="selectImg">选择照片</button>
		<!-- <view class="ani">{{newSrc}}</view> -->
		<canvas style="width: 300px; height: 400px;" width="600" height="800" canvas-id="secondCanvas" id="secondCanvas"></canvas>
		<canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas" id="firstCanvas"></canvas>
		<button type="default" @click="saveImg">保存图片</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newSrc: null,
				imgUrl: "https://yxapp.uat.yixincapital.com/static/img/logo.727d6b3.png", // 图片域名需在小程序中配置合法域名
				// imgUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=151472226,3497652000&fm=26&gp=0.jpg"
			}
		},
		onLoad() {
			// this.drawHtml();
			// this.drawSmile();
		},
		methods: {
			// 保存图片
			saveImg() {
				uni.canvasToTempFilePath({
					x: 0,
					y: 0,
					width: 300,
					height: 400,
					destWidth: 600,
					destHeight: 800,
					canvasId: 'secondCanvas',
					success: function(res) {
						// 在H5平台下，tempFilePath 为 base64
						console.log(res.tempFilePath)
						uni.authorize({
							scope: 'scope.writePhotosAlbum',
							success() {
								uni.saveImageToPhotosAlbum({
									filePath: res.tempFilePath,
									success: function() {
										console.log('save success');
										uni.showToast({
											title: "保存成功",
											duration: 2000,
											icon: "none"
										})
									},
									fail(err) { 
										console.log(err);
									}
								});
							},
							fail(err) {
								uni.showModal({
									title: '提示',
									content: '需要您授权保存相册',
									showCancel: false,
									success: modalSuccess => {
										uni.openSetting({
											success(settingdata) {
												console.log("settingdata", settingdata)
												if (settingdata.authSetting['scope.writePhotosAlbum']) {
													wx.showModal({
														title: '提示',
														content: '获取权限成功,再次点击图片即可保存',
														showCancel: false,
													})
												} else {
													wx.showModal({
														title: '提示',
														content: '获取权限失败，将无法保存到相册哦~',
														showCancel: false,
													})
												}
											},
											fail(failData) {
												console.log("failData", failData)
											}, 
										})
									}
								})
							}
						})

					}
				})
			},
			// 生成canvas
			selectImg() {
				let _this = this;
				var ctx = uni.createCanvasContext('secondCanvas');
				ctx.scale(2, 2);
				// 添加白色背景
				ctx.fillStyle = "#FFFFFF";
				ctx.fillRect(0, 0, 300, 400);

				// 渲染文字
				ctx.textBaseline = "top";
				ctx.font = "bold 15px/1.6 PingFangSC-Regular"
				ctx.fillStyle = "#13171E";
				ctx.fillText("到哪都能打到卡等你", 0, 0);
				ctx.font = "normal 12px/1.6 PingFangSC-Regular";
				ctx.fillStyle = "#353537";
				ctx.fillText("阿拉丁那大大的吗", 0, 20);

				ctx.font = "normal 10px/1.6 PingFangSC-Regular";
				ctx.fillStyle = "#878A8E";
				ctx.fillText("的开发商你的错，额度问问快递么啊", 0, 40);
				ctx.fillText("是对方离开低级趣味的地区伟大的", 0, 60);
				uni.getImageInfo({
					src: this.imgUrl,
					success: function(image) {
						console.log(image, "asdasd");
						_this.newSrc = image.path
						ctx.drawImage(image.path, 0, 80, image.width, image.height)
						ctx.draw();
					}
				});
			},
			// 绘制笑脸
			drawSmile() {
				var context = uni.createCanvasContext('firstCanvas');
				context.setStrokeStyle("#00ff00");
				context.setLineWidth(5)
				context.rect(0, 0, 200, 200);
				context.stroke();
				context.setStrokeStyle("#ff0000");
				context.setLineWidth(2);
				context.moveTo(160, 100);
				context.arc(100, 100, 60, 0, 2 * Math.PI, true);
				context.moveTo(140, 100);
				context.arc(100, 100, 40, 0, Math.PI, false);
				context.moveTo(85, 80);
				context.arc(80, 80, 5, 0, 2 * Math.PI, true);
				context.moveTo(125, 80)
				context.arc(120, 80, 5, 0, 2 * Math.PI, true);
				context.stroke();
				context.draw();
			}
		}
	}
</script>

<style>

</style>
