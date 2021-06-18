# 针对java后台数据返回为时间戳样式的全局过滤转换

<template>
  <demo :codeStr="str">
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        data:'${y}-${m}-${d} ${hh}:${mm}:${ss}',
        str: `
          //在所需页面中直接如此使用 (time | dateFormat)
            若后台返回数据为秒级时间戳需要乘1000
          // 在main.js中引入下面代码 
            Vue.filter('dateFormat', function (originVal) {
              const dt = new Date(originVal)
              const y = dt.getFullYear()
              const m = (dt.getMonth() + 1 + '').padStart(2, '0')
              const d = (dt.getDate() + '').padStart(2, '0')
              const hh = (dt.getHours() + '').padStart(2, '0')
              const mm = (dt.getMinutes() + '').padStart(2, '0')
              const ss = (dt.getSeconds() + '').padStart(2, '0')
              return 
            })
           `
      }
    }
  }
</script>
