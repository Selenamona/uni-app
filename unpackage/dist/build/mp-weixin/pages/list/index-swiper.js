(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/list/index-swiper"],{1347:function(t,n,e){"use strict";e.r(n);var i=e("3973"),u=e("cad9");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("ce59");var o,c=e("f0c5"),p=Object(c["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);n["default"]=p.exports},3973:function(t,n,e){"use strict";var i,u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))},6872:function(t,n,e){},cad9:function(t,n,e){"use strict";e.r(n);var i=e("ef67"),u=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=u.a},ce59:function(t,n,e){"use strict";var i=e("6872"),u=e.n(i);u.a},da3b:function(t,n,e){"use strict";(function(t){e("5a4a");i(e("66fd"));var n=i(e("1347"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},ef67:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){e.e("pages/list/news-item").then(function(){return resolve(e("6d9a"))}.bind(null,e)).catch(e.oe)},u={data0:{datetime:"40分钟前",article_type:0,title:"uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!uni-app行业峰会频频亮相，开发者反响热烈!",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:639},data1:{datetime:"一天前",article_type:1,title:"DCloud完成B2轮融资，uni-app震DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!撼发布!",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data2:{datetime:"一天前",article_type:2,title:"中国技术界小奇迹DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!：HBuilder开发者突破200万",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data3:{article_type:3,image_list:[{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",width:563,height:316},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",width:641,height:360},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",width:640,height:360}],datetime:"5分钟前",title:"uni-app 支持使用DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布! npm 安装第三方包，生态更趋丰富",source:"DCloud",comment_count:11,image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90"},data4:{datetime:"2小时前",article_type:4,title:"uni-app 支持原生小程DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!DCloud完成B2轮融资，uni-app震撼发布!序自定义组件，更开放、更自由",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:69}},a={data:function(){return{showLoadMore:!0,loadMoreText:"加载中...",tabIndex:0,newDatas:[],tabBars:[{name:"推广中",url:"popularize"},{name:"已下架",url:"offShelf"}]}},onLoad:function(){this.getList()},methods:{onReachBottom:function(){var t=this;console.log("onReachBottom"),this.max>40?this.loadMoreText="没有更多数据了!":(this.showLoadMore=!0,setTimeout((function(){t.getList()}),300))},onPullDownRefresh:function(){console.log("refresh"),setTimeout((function(){t.stopPullDownRefresh()}),1e3)},listData:function(t){t.target.current||t.detail.current;console.log(u)},ontabtap:function(t){console.log(t.currentTarget.dataset.current),this.tabIndex=t.currentTarget.dataset.current},ontabchange:function(t){var n=t.target.current||t.detail.current;this.tabIndex!==n&&this.getList()},getList:function(){for(var t=[],n=1;n<=10;n++){var e=Object.assign({},u["data"+Math.floor(5*Math.random())]);e.id=this.newGuid(),t.push(e)}this.newDatas=t},newGuid:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(t()+t()+"-"+t()+"-4"+t().substr(0,3)+"-"+t()+"-"+t()+t()+t()).toUpperCase()}},components:{newsItem:i}};n.default=a}).call(this,e("543d")["default"])}},[["da3b","common/runtime","common/vendor"]]]);