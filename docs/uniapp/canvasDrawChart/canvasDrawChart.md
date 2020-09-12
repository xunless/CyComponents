<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @@Company: ZZCYI
 * @Author: 王
 * @Date: 2020-09-12 16:48:25
 * @LastEditors: 王
 * @LastEditTime: 2020-09-12 17:07:19
 * @Update Descripttion: 
-->
# uniapp 使用canvas绘制简单图表

<template>
  <demo :codeStr="str">
    <a href="/images/canvasDrawChart.png">
      <img src="/images/canvasDrawChart.png" />
    </a>
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          <template>
            <view class="container">
              <canvas class="canvas" canvas-id="TCanvas" id="TCanvas"></canvas>
            </view>
          </template>

          <script>
            export default {
              data() {
                return {
                  ctx: null,
                  temperature: 45
                };
              },
              onLoad() {},
              onReady() {
                this.ctx = uni.createCanvasContext('TCanvas')
                this.initCanvas()
              },
              methods: {
                initCanvas() {
                  let ctx = this.ctx
                  ctx.clearRect(0, 0, 600, 800)
                  ctx.draw()
                  
                  let ctxCenter = {
                    x: 155, // 圆心x坐标
                    y: 130, // 圆心y坐标
                    outsideRadius: 80, // 外半径长度
                    insideRadius: 75 ,// 内半径长度
                    dotX: 155, // 小黄点x坐标
                    dotY: 130, // 小黄点y坐标
                    dotRadius: 6, // 小黄点半径
                    shadeRadius: 15, // 小黄点阴影半径
                  }
                  
                  // 外圆弧
                  ctx.beginPath()
                  ctx.arc(ctxCenter.x, ctxCenter.y, ctxCenter.outsideRadius, 0.75 * Math.PI, 2.25 * Math.PI) // 3/4圆
                  ctx.setLineWidth(15) // 设置边框宽度
                  ctx.setStrokeStyle('#b9f5f2')  // 设置边框颜色
                  ctx.stroke() // 画线
                  
                  // 内实心圆
                  ctx.beginPath()
                  ctx.arc(ctxCenter.x, ctxCenter.y, ctxCenter.insideRadius, 0, 2 * Math.PI)
                  ctx.setFillStyle('#ffffff') // 填充颜色
                  ctx.fill() // 填充
                  
                  // 根据温度计算小黄点的位置
                  let angle = (this.temperature + 10) / 109 * 270 + 45
                  ctxCenter.dotX = ctxCenter.x - Math.sin(angle*Math.PI/180) * (ctxCenter.outsideRadius + ctxCenter.dotRadius)
                  ctxCenter.dotY = ctxCenter.y + Math.cos(angle*Math.PI/180) * (ctxCenter.outsideRadius + ctxCenter.dotRadius)
                  
                  // 小黄点
                  ctx.beginPath()
                  ctx.arc(ctxCenter.dotX, ctxCenter.dotY, 6, 0, 2 * Math.PI)
                  ctx.setFillStyle('#ffbb05') // 填充颜色
                  ctx.fill() // 填充
                  
                  // 小黄点阴影
                  ctx.beginPath()
                  ctx.arc(ctxCenter.dotX, ctxCenter.dotY, 15, 0, 2 * Math.PI)
                  ctx.setFillStyle('rgba(255,187,5,0.1)') // 填充颜色
                  ctx.fill() // 填充
                  
                  let sideStartLength = ctxCenter.outsideRadius + 15  // 斜边长
                  let sideEndLength = ctxCenter.outsideRadius + 25  // 斜边长
                  
                  // 刻度线
                  for (let i = 0; i < 61; i++) {
                    let nowAngle = 45 + 4.5 * i
                    let lineColor
                    if (nowAngle < angle) {
                      lineColor = '#bdd585'
                    } else {
                      lineColor = '#b1e6c5'
                    }
                    ctx.beginPath()
                    ctx.setLineWidth(1)
                    ctx.moveTo(ctxCenter.x - Math.sin(nowAngle*Math.PI/180) * sideStartLength, ctxCenter.y + Math.cos(nowAngle*Math.PI/180) * sideStartLength) // 开始坐标
                    ctx.lineTo(ctxCenter.x - Math.sin(nowAngle*Math.PI/180) * (sideEndLength + (i % 10 === 0?3:0)), ctxCenter.y + Math.cos(nowAngle*Math.PI/180) * (sideEndLength + (i % 10 === 0?3:0))) // 结束坐标
                    ctx.setStrokeStyle(lineColor)
                    ctx.stroke()
                  }
                  
                  // 左右文字
                  ctx.setTextAlign('center')
                  ctx.setFontSize(16)
                  ctx.setFillStyle('#ffffff')
                  ctx.fillText('-10℃', ctxCenter.x - Math.sin(45*Math.PI/180) * (sideEndLength + 45), ctxCenter.y + Math.cos(45*Math.PI/180) * (sideEndLength + 20))
                  ctx.fillText('99℃', ctxCenter.x + Math.sin(45*Math.PI/180) * (sideEndLength + 40), ctxCenter.y + Math.cos(45*Math.PI/180) * (sideEndLength + 20))
                  
                  // 中间温度文字
                  ctx.setFontSize(28)
                  ctx.setFillStyle('#333333')
                  ctx.fillText(this.temperature + '℃', ctxCenter.x, ctxCenter.y - 10)
                  ctx.setFontSize(20)
                  ctx.setFillStyle('#a1a1a1')
                  ctx.fillText('当前温度', ctxCenter.x, ctxCenter.y + 30)
                  
                  // 地温
                  ctx.setFontSize(22)
                  ctx.setFillStyle('#ffffff')
                  ctx.fillText('地温20℃', ctxCenter.x, ctxCenter.y + ctxCenter.outsideRadius + 35)
                  
                  ctx.draw()
                }
              }
            }
          <\/script>

          <style lang="scss" scoped>
          .container {
            width: 100vw;
            background-color: #0cc3ba;
            display: flex;
            flex-direction: column;
            align-items: center;
            .canvas {
              width: 600rpx;
              height: 800rpx;
              margin-top: 100rpx;
            }
          }
          <\/style>

        `
      }
    }
  }
</script>