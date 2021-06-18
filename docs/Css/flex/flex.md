# 巧妙使用 flex 布局实现手机自适应

<template>
  <demo :codeStr="str">
    <a href="/images/ps01.jpg" target="_blank">
      <img src="/images/ps01.jpg" width="100px" />
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
                <view style="height:300rpx">固定在头部的标题</view>
                <scroll-view scroll-y>
                  <view style="line-height:100rpx">啊啊啊啊啊</view>
                  <view style="line-height:100rpx">啊啊啊啊啊</view>
                  <view style="line-height:100rpx">啊啊啊啊啊</view>
                  <view style="line-height:100rpx">啊啊啊啊啊</view>
                  <view style="line-height:100rpx">啊啊啊啊啊</view>
                  <view style="line-height:100rpx">啊啊啊啊啊</view>
                  <view style="line-height:100rpx">啊啊啊啊啊</view>
                  <view style="line-height:100rpx">啊啊啊啊啊</view>
                  <view style="line-height:100rpx">啊啊啊啊啊</view>
                  <view style="line-height:100rpx">啊啊啊啊啊</view>
                  <view style="line-height:100rpx">啊啊啊啊啊</view>
                  <view style="line-height:100rpx">啊啊啊啊啊</view>
                </scroll-view>
            </view>
          </template>

          <style>
              page{ 
                height: 100%; 
              }
              .container{ 
                display: flex;
                flex-direction: column;
                height: 100vh; 
              }
              scroll-view{ 
                flex: 1;
                height: 1px;
                background: #ccc 
              }
          <\/style>
        `
      }
    }
  }
</script>
