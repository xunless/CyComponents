<!--
 * @Descripttion:
 * @version: 1.0.0
 * @@Company: ZZCYI
 * @Author: 贾
 * @Date: 2020-09-09 16:46:09
 * @LastEditors: liu
 * @LastEditTime: 2020-09-09 16:53:13
 * @Update Descripttion:
-->

# css 文字渐变色 和在小程序中英文字母不换行

<template>
  <demo :codeStr="str">
    <div class="bian">渐变</div>
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          <template>
            <div class="bian">渐变</div>
          </template>

          <style>
          
              // 文字渐变
              .bian {
                font-size: 40px;
                font-family: PingFang SC;
                font-weight: bold;
                color: #C59D55;
                background: linear-gradient(0deg, #F4B474 0%, #FBD7B1 50.7568359375%, #D5A26D 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                
              }
              // 纯中文或者英文在小程序中自动换行

              scroll-view{ 
               word-wrap:break-word
              }
          <\/style>
        `
      }
    }
  }
</script>
<style>
  .bian {
    font-size: 40px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #C59D55;
    background: linear-gradient(0deg, #F4B474 0%, #FBD7B1 50.7568359375%, #D5A26D 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    word-wrap:break-word
  }
</style>
