# 常用 canvas 总结
<template>
  <demo :codeStr="str">
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          <script>
            canvas = document.getElementById('canvas')
            // 设置canvas的宽高
            canvas.height = 500
            canvas.width = 500

            // 二维绘图API
            ctx = canvas.getContext('2d')

            // 画一个半径为10，边框蓝色，背景红色的圆
            ctx.beginPath() // 开始一条路径
            ctx.arc(60, 60, 50, 0, Math.PI * 2, true) // arc(圆心x坐标，y坐标，半径，起始角，结束角，true顺时针false逆时针默认false)
            ctx.strokeStyle = '#4b8beb' // 线条(边框)颜色
            ctx.stroke() // 绘制线条颜色
            ctx.fillStyle = '#eb0707' // 填充颜色
            ctx.fill() // 填充背景

            // 三角形
            ctx.beginPath()
            ctx.strokeStyle = '#BBFFFF'
            ctx.moveTo(50, 150) // 开始点
            ctx.lineTo(100, 150) // 连接上一个点
            ctx.lineTo(75, 100) // 此时有两条线
            ctx.closePath() // 创建从当前所在点到开始点的路径
            ctx.stroke()

            // 图片
            const img = new Image()
            img.src = 'http://pic.cnblogs.com/avatar/1809452/20191027130609.png'
            img.onload = function () {
              // 绘制图片
              ctx.beginPath()
              ctx.drawImage(img, 50, 50, 75, 75) // drawImage(img, x坐标，y坐标，宽，高)
              ctx.closePath()
            }

            // 文字
            ctx.font = '12px Arial' // 文字的样式
            ctx.textAlign = 'center' // 坐标点相对于文字的文字  取值：left、center、right
            ctx.fillStyle = '#eb0707' // 颜色
            ctx.fillText('这是canvas上的文字', 120, 200) // fillText(文本内容, x坐标，y坐标)
          <\/script>
        `
      }
    }
  }
</script>
