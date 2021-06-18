<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>
<script>

// 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
import echarts from 'echarts'
import 'echarts-gl'
import resize from './resize'
function getParametricEquation (startRatio, endRatio, isSelected, isHovered, k, height) {
  // 计算
  const midRatio = (startRatio + endRatio) / 2

  const startRadian = startRatio * Math.PI * 2
  const endRadian = endRatio * Math.PI * 2
  const midRadian = midRatio * Math.PI * 2

  // 如果只有一个扇形，则不实现选中效果。
  if (startRatio === 0 && endRatio === 1) {
    isSelected = false
  }

  // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
  k = typeof k !== 'undefined' ? k : 1 / 3

  // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
  const offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0
  const offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0

  // 计算高亮效果的放大比例（未高亮，则比例为 1）
  const hoverRate = isHovered ? 1.05 : 1

  // 返回曲面参数方程
  return {

    u: {
      min: -Math.PI,
      max: Math.PI * 3,
      step: Math.PI / 32
    },

    v: {
      min: 0,
      max: Math.PI * 2,
      step: Math.PI / 20
    },

    x: function (u, v) {
      if (u < startRadian) {
        return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
      }
      if (u > endRadian) {
        return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
      }
      return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate
    },

    y: function (u, v) {
      if (u < startRadian) {
        return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
      }
      if (u > endRadian) {
        return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
      }
      return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate
    },

    z: function (u, v) {
      if (u < -Math.PI * 0.5) {
        return Math.sin(u)
      }
      if (u > Math.PI * 2.5) {
        return Math.sin(u) * height
      }
      return Math.sin(v) > 0 ? 1 * height : -1
    }
  }
}

export default {
  mixins: [resize],
  // 组件名称
  name: '3DPie',
  // 过滤器
  filters: {
  },
  // 组件
  components: {
  },
  // props类型
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    chartData: { // 数据
      type: Array,
      default: () => []
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    legendShow: { // 是否显示图例
      type: Boolean,
      default: true
    },
    contentLeft: { // 内容距离左侧的距离
      type: String,
      default: '-25%'
    },
    contentTop: { // 内容距离上方的距离
      type: String,
      default: '0'
    },
    isCirclePie: { // 是否是圆环
      type: Boolean,
      default: true
    },
    distance: { // 距离原点的距离
      type: Number,
      default: 150
    },
    activeHeight: {
      type: [Number, String],
      default: 1
    },
    legendRight: {
      type: String,
      default: '0%'
    }
  },
  // 数据
  data () {
    return {
      chart: null,
      option: null
    }
  },
  // 计算属性
  computed: {
  },
  // 计算属性监听
  watch: {
    chartData: {
      deep: true,
      handler (val) {
        this.setOptions(val)
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$el)
      this.setOptions(this.chartData)
    },
    setOptions (data) {
      console.log(data)
      this.option = this.getPie3D(data, 2)
      this.chart.setOption(this.getPie3D(data, 2))
    },
    // 生成模拟 3D 饼图的配置项
    getPie3D (pieData, internalDiameterRatio) {
      console.log(pieData, '182------------')
      const series = []
      let sumValue = 0
      let startValue = 0
      let endValue = 0
      const legendData = []
      const k = typeof internalDiameterRatio !== 'undefined' ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio) : 1 / 3

      // 为每一个饼图数据，生成一个 series-surface 配置
      for (let i = 0; i < pieData.length; i++) {
        sumValue += pieData[i].value

        const seriesItem = {
          name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
          type: 'surface',
          parametric: true,
          wireframe: {
            show: false
          },
          pieData: pieData[i],
          pieStatus: {
            selected: false,
            hovered: false,
            k: k
          }
        }

        if (typeof pieData[i].itemStyle !== 'undefined') {
          const itemStyle = {}

          // eslint-disable-next-line no-unused-expressions
          typeof pieData[i].itemStyle.color !== 'undefined' ? itemStyle.color = pieData[i].itemStyle.color : null
          // eslint-disable-next-line no-unused-expressions
          typeof pieData[i].itemStyle.opacity !== 'undefined' ? itemStyle.opacity = pieData[i].itemStyle.opacity : null

          seriesItem.itemStyle = itemStyle
        }
        series.push(seriesItem)
      }

      // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
      // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
      for (let i = 0; i < series.length; i++) {
        endValue = startValue + series[i].pieData.value
        console.log(series[i])
        series[i].pieData.startRatio = startValue / sumValue
        series[i].pieData.endRatio = endValue / sumValue
        series[i].parametricEquation = getParametricEquation(series[i].pieData.startRatio, series[i].pieData.endRatio, false, false, this.isCirclePie ? k : 1, this.isCirclePie ? (series[i].pieData.value / this.activeHeight) : 1)

        startValue = endValue

        legendData.push(series[i].name)
      }

      // 准备待返回的配置项，把准备好的 legendData、series 传入。
      const option = {
        tooltip: {
          formatter: params => {
            console.log(params, '239-----------')
            console.log(option)
            if (params.seriesName !== 'mouseoutSeries') {
              // return `${params.seriesName}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>${option.series[params.seriesIndex].pieData.value}`
              return `${params.seriesName}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>${option.series.filter(item => params.seriesName === item.name)[0].pieData.value}`
            }
          }
        },
        legend: {
          data: legendData,
          show: this.legendShow,
          textStyle: {
            color: '#fff',
            fontSize: this.fontSize(0.16),
            rich: {
              a: {
                color: '#2AD0FF',
                fontSize: this.fontSize(0.16),
                width: this.fontSize(0.5),
                align: 'right'
              },
              c: {
                color: '#2AD0FF',
                fontSize: this.fontSize(0.16),
                width: this.fontSize(0.5),
                align: 'right'
              },
              b: {
                width: this.isCirclePie ? this.fontSize(1) : this.fontSize(0.5),
                fontSize: this.fontSize(0.16)
              }
            }
          },
          formatter: (name) => {
            const dataArr = this.chartData.filter(item => item.name === name)
            console.log(dataArr)
            return this.isCirclePie ? `{b|${name}}\r\r{a|${dataArr[0].value + '台'}}` : `{b|${name}}\r\r{a|${dataArr[0].value + '台'}}\r\r{c|${dataArr[0].ratio}}`
          },

          itemGap: this.fontSize(0.14),
          itemWidth: this.fontSize(0.14),
          itemHeight: this.fontSize(0.14),
          orient: 'vertical',
          right: this.legendRight,
          top: 'middle'
        },
        xAxis3D: {
          min: -1,
          max: 1
        },
        yAxis3D: {
          min: -1,
          max: 1
        },
        zAxis3D: {
          min: -1,
          max: 1
        },
        grid3D: {
          show: false,
          boxHeight: 20,
          // top: '30%',
          left: this.contentLeft,
          top: this.contentTop,
          // bottom: '50%',
          // environment: '#021041', // 背景颜色
          viewControl: {
            distance: this.distance,
            alpha: 30,
            beta: 0,
            autoRotate: true, // 开启自动旋转
            zoomSensitivity: 0, // 缩放操作的灵敏度，值越大越灵敏
            panSensitivity: 0, // 平移操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的平移灵敏度
            rotateSensitivity: 0 // 旋转操作使用的鼠标按键，支持：
          },
          postEffect: { // 配置这项会出现锯齿，请自己去查看官方配置有办法解决
            enable: false,
            bloom: {
              enable: true,
              bloomIntensity: 0.9
            },
            SSAO: {
              enable: true,
              quality: 'medium',
              radius: 2,
              intensity: 1
            },
            colorCorrection: {
              enable: true
            }
          }

        },
        series: series
      }
      return option
    },
    // 获取屏幕宽度并计算比例
    fontSize (res) {
      const clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      if (!clientWidth) return
      const fontSize = 100 * (clientWidth / 1920)
      return res * fontSize
    }
  }
}
</script>

<style lang='less' scoped>

</style>
