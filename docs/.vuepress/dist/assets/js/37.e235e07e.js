(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{998:function(t,n,a){"use strict";a.r(n);var s={data:()=>({data:"${y}-${m}-${d} ${hh}:${mm}:${ss}",str:"\n        //在所需页面中直接如此使用 (time | dateFormat)\n          若后台返回数据为秒级时间戳需要乘1000\n        // 在main.js中引入下面代码 \n          Vue.filter('dateFormat', function (originVal) {\n            const dt = new Date(originVal)\n            const y = dt.getFullYear()\n            const m = (dt.getMonth() + 1 + '').padStart(2, '0')\n            const d = (dt.getDate() + '').padStart(2, '0')\n            const hh = (dt.getHours() + '').padStart(2, '0')\n            const mm = (dt.getMinutes() + '').padStart(2, '0')\n            const ss = (dt.getSeconds() + '').padStart(2, '0')\n            return \n          })\n         "})},e=a(23),r=Object(e.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"针对java后台数据返回为时间戳样式的全局过滤转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#针对java后台数据返回为时间戳样式的全局过滤转换"}},[this._v("#")]),this._v(" 针对java后台数据返回为时间戳样式的全局过滤转换")]),this._v(" "),[n("demo",{attrs:{codeStr:this.str}})]],2)}),[],!1,null,null,null);n.default=r.exports}}]);