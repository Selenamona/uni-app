(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{3440:function(e,n,t){"use strict";t.r(n);var o=t("6b22"),c=t("8325");for(var i in c)"default"!==i&&function(e){t.d(n,e,(function(){return c[e]}))}(i);var l,s=t("f0c5"),u=Object(s["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],l);n["default"]=u.exports},"5fdf":function(e,n,t){"use strict";(function(e){t("5a4a");o(t("66fd"));var n=o(t("3440"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"6b22":function(e,n,t){"use strict";var o,c=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}))},7446:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(t("5b5d")),c=i(t("60d6"));function i(e){return e&&e.__esModule?e:{default:e}}var l={data:function(){return{loading:!1,key:"eec63bbf2f8541f46c949327f0123740",amapPlugin:null,tencentProvince:null,tencentCity:null,tencentDistrict:null,qqmapsdk:null,gdProvince:null,gdCity:null,gdDistrict:null}},onLoad:function(){var e=this;console.log(o.default,"amap");var n=new o.default.AMapWX({key:this.key});n.getRegeo({success:function(n){console.log("高德地图获取位置成功",n),e.gdProvince=n[0].regeocodeData.addressComponent.province,e.gdCity=n[0].regeocodeData.addressComponent.city[0],e.gdDistrict=n[0].regeocodeData.addressComponent.district},fail:function(e){console.log("高德地图获取位置失败",e)}}),this.qqmapsdk=new c.default({key:"JXKBZ-TX2L5-HFIIH-QRBCF-YNMM3-N5F5R"}),console.log(this.qqmapsdk,"qqmapsdk"),this.qqmapsdk.getCityList({success:function(n){console.log("省份数据：",n.result[0]);var t=n.result[0];e.qqmapsdk.getDistrictByCityId({id:t[0].id,success:function(e){console.log("对应城市ID下的区县数据(以北京为例)：",e.result[0])},fail:function(e){console.error(e)},complete:function(e){}})},fail:function(e){console.error(e)},complete:function(e){}})},methods:{getuserinfo:function(n){console.log("用户信息",n),"getUserInfo:ok"===n.detail.errMsg||e.showModal({title:"获取用户信息失败",content:"错误原因"+n.detail.errMsg,showCancel:!1})},getPhoneNumber:function(n){console.log("获取手机号",n);var t=this;e.authorize({scope:"scope.userLocation",success:function(){console.log("位置授权确认"),e.getLocation({type:"wgs84",success:function(e){console.log("经纬度",e),t.qqmapsdk.reverseGeocoder({location:{latitude:e.latitude,longitude:e.longitude},success:function(e){console.log("腾讯获取位置",e),t.tencentProvince=e.result.ad_info.province,t.tencentCity=e.result.ad_info.city,t.tencentDistrict=e.result.ad_info.district},fail:function(e){console.log(e)}})}})},fail:function(){console.log("你拒绝了授权，无法获得周边信息")}})}}};n.default=l}).call(this,t("543d")["default"])},8325:function(e,n,t){"use strict";t.r(n);var o=t("7446"),c=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=c.a}},[["5fdf","common/runtime","common/vendor"]]]);