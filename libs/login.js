/**
 *  小程序登录
 */

// 登录
const wxLogin = (callback) => {
	wx.login({
		success: (res) => {
			if (res.code) {
				callback && callback(res.code);
			} else {
				wx.showModal({
					title: '提示',
					content: '获取用户登录code失败！',
					showCancel: false
				})
			}
		},
		fail: () => {
			wx.showModal({
				title: '提示',
				content: '获取用户登录code失败！',
				showCancel: false
			})
		}
	})
}

// 检测登录状态
const checkLoginState = () => {
	wx.checkSession({
		success: () => {
			console.log('登录未过期')
			return 1;
		},
		// 登录过期
		fail: () => {
			console.log('登录过期')
			return 0;
		}
	})
}

module.exports = {
	wxLogin,
	checkState
}
