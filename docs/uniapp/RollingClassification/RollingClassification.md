# 常见商城滚动分类

::: tip
[组件下载地址](https://github.com/ChamHuang/web/blob/master/uniapp/cg-swiper.vue)
:::

<template>
  <demo :codeStr="str">

  ![image](/images/cg-swiper.png)

  <div>组件名：cg-swiper</div>
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          <template>
            <cg-swiper
              :swiperList="channelCategoryList"
              @clickItem="handleCategory"
              swiperActiveColor="#3D97FF"
            ></cg-swiper>
          </template>

          <script>
            import cgSwiper from '@/components/cg-swiper.vue'
            export default {
              components: { cgSwiper }
            }
          <\/script>
        `
      }
    }
  }
</script>

- 属性说明
  属性名 | 类型 | 默认值 | 说明
  -|:-:|:-:|-
  swiperDots | Boolean| false |
  swiperColor | String| #999999 | 指示点颜色
  swiperActiveColor | String| #FFCC00 | 选中指示点颜色
  autoplay | Boolean | false| 是否自动切换
  interval | Number | 5000 | 自动切换时长
  duration | Number | 500 | 滑动动画时长  
  circular | Boolean | false | 是否衔接滑动
  swiperList | Array | [] | 数据
  customize | Boolean | true | 是否开启自定义指示点
  number | Number | 8 | 一屏显示的数量
- 方法说明
  methods | 说明
  -|-
  handleCategory | 接收参数 item 处理点击事件
  clickItem | 子组件向父组件传值的事件名