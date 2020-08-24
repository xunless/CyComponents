# 防抖动和节流

<template>
  <demo :codeStr="str">
     <div>
      <div @click="clickDebounce()">防抖</div>
      <div @click="clickThrottle()">节流</div>
     </div>
  </demo>
</template>

<script>
import { debounce, throttle } from '../../.vuepress/public/utils/index.js'
  export default {
    data() {
      return {
        num:0,
        str: `
          <template>
            <div>
              <div @click="clickDebounce()">防抖</div>
              <div @click="clickThrottle()">节流</div>
            </div>
          </template>

          <script>
            export default {
              data() {
                return {
                  num:0
                }
              },
              methods: {
                // 防抖
                clickDebounce: debounce(function () {
                  this.num += 1
                  this.$message({
                    message: '第' + this.num + '次点击',
                    type: 'success'
                  })
                  console.log('第' + this.num + '次点击')
                }, 2000),
                // 节流
                clickThrottle: throttle(function () {
                  this.num += 1
                  this.$message({
                    message: '第' + this.num + '次点击',
                    type: 'success'
                  })
                }, 2000)
              }
            }
          <\/script>
        `
      }
    },
    methods: {
       // 防抖
      clickDebounce: debounce(function () {
        this.num += 1
        this.$message({
          message: '第' + this.num + '次点击',
          type: 'success'
        })
        console.log('第' + this.num + '次点击')
      }, 2000),
      // 节流
      clickThrottle: throttle(function () {
        this.num += 1
        this.$message({
          message: '第' + this.num + '次点击',
          type: 'success'
        })
      }, 2000)
    }
  }
</script>