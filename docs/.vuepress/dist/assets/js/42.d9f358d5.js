(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1004:function(t,n,e){"use strict";e.r(n);var a={data:()=>({str:"\n        <script>\n          canvas = document.getElementById('canvas')\n          // 设置canvas的宽高\n          canvas.height = 500\n          canvas.width = 500\n\n          // 二维绘图API\n          ctx = canvas.getContext('2d')\n\n          // 画一个半径为10，边框蓝色，背景红色的圆\n          ctx.beginPath() // 开始一条路径\n          ctx.arc(60, 60, 50, 0, Math.PI * 2, true) // arc(圆心x坐标，y坐标，半径，起始角，结束角，true顺时针false逆时针默认false)\n          ctx.strokeStyle = '#4b8beb' // 线条(边框)颜色\n          ctx.stroke() // 绘制线条颜色\n          ctx.fillStyle = '#eb0707' // 填充颜色\n          ctx.fill() // 填充背景\n\n          // 三角形\n          ctx.beginPath()\n          ctx.strokeStyle = '#BBFFFF'\n          ctx.moveTo(50, 150) // 开始点\n          ctx.lineTo(100, 150) // 连接上一个点\n          ctx.lineTo(75, 100) // 此时有两条线\n          ctx.closePath() // 创建从当前所在点到开始点的路径\n          ctx.stroke()\n\n          // 图片\n          const img = new Image()\n          img.src = 'http://pic.cnblogs.com/avatar/1809452/20191027130609.png'\n          img.onload = function () {\n            // 绘制图片\n            ctx.beginPath()\n            ctx.drawImage(img, 50, 50, 75, 75) // drawImage(img, x坐标，y坐标，宽，高)\n            ctx.closePath()\n          }\n\n          // 文字\n          ctx.font = '12px Arial' // 文字的样式\n          ctx.textAlign = 'center' // 坐标点相对于文字的文字  取值：left、center、right\n          ctx.fillStyle = '#eb0707' // 颜色\n          ctx.fillText('这是canvas上的文字', 120, 200) // fillText(文本内容, x坐标，y坐标)\n        <\/script>\n      "})},c=e(23),s=Object(c.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"常用-canvas-总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用-canvas-总结"}},[this._v("#")]),this._v(" 常用 canvas 总结")]),this._v(" "),[n("demo",{attrs:{codeStr:this.str}})]],2)}),[],!1,null,null,null);n.default=s.exports}}]);