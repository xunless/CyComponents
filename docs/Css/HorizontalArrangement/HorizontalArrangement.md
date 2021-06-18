# 多个元素水平自动排列，自动换行，每行元素两边对齐

![image](/images/ps04.png)

<template>
  <demo :codeStr="str">
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          <template>
            <view class="container">
              <view class="content">
                <view class="item" v-for="(item, index) in 10" :key="index">
                  <text>{{ item }}</text>
                </view>
              </view>
            </view>
          </template>
          <style>
              .container {
                width: 100vw;
                padding: 24rpx;
                box-sizing: border-box;
                background: #808080;
                
                .content {
                  width: 100%;
                  background: #FFFFFF;
                  display: flex;
                  flex-wrap: wrap;
                  
                  .item {
                    width: 150rpx;
                    height: 150rpx;
                    border-radius: 20rpx;
                    background: #3498db;
                    margin-bottom: 20rpx;
                    //  calc((父元素宽度 - 子元素宽度*每行子元素个数) / 每行的间距个数)
                    margin-right: calc((100% - 600rpx) / 3);
                    // 选中每行的最后一个元素不设置margin-right
                    &:nth-of-type(4n) {
                      margin-right: 0;
                    }
                  }
                }
              }
          <\/style>
        `
      }
    }
  }
</script>