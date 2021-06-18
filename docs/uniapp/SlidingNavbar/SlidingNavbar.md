# 可滑动 Navbar

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
              <!-- navbar -->
              <view class="navbar">
                <view
                  v-for="(item, index) in navList"
                  :key="index"
                  class="nav-item"
                  :class="{current: tabCurrentIndex === index}"
                  @click="tabClick(index)"
                >
                  {{item.text}}
                </view>
              </view>

              <!-- 列表 -->
              <swiper
                :current="tabCurrentIndex"
                class="swiper-box"
                duration="300"
                @change="changeTab"
              >
                <swiper-item
                  class="tab-content"
                  v-for="(tabItem,tabIndex) in navList"
                  :key="tabIndex"
                >
                  <scroll-view
                    class="list-scroll-content"
                    scroll-y
                    @scrolltolower="getList"
                    :scroll-with-animation="true"
                  >
                    <view
                      class="list"
                      v-for="(item, index) in tabItem.orderList"
                      :key="index"
                    >
                      {{item.deviceNo}}
                    </view>
                    <view class="no-data" v-if="tabItem.orderList.length === 0">
                      <text>暂无数据</text>
                    </view>
                  </scroll-view>
                </swiper-item>
              </swiper>
            </view>
          </template>

          <script>
            export default {
              data() {
                return {
                  navList: [{
                    state: 0,
                    text: '蓝牙设备',
                    loadingType: 'more',
                    orderList: [{
                        deviceNo: '8745995123',
                        time: '2020-02-12',
                        address: '郑州市高新区大学科技园',
                        isLine: '在线'
                      },
                      {
                        deviceNo: '8745995123',
                        time: '2020-02-12',
                        address: '郑州市高新区大学科技园',
                        isLine: '在线'
                      },
                      {
                        deviceNo: '8745995123',
                        time: '2020-02-12',
                        address: '郑州市高新区大学科技园',
                        isLine: '在线'
                      },
                      {
                        deviceNo: '8745995123',
                        time: '2020-02-12',
                        address: '郑州市高新区大学科技园',
                        isLine: '在线'
                      },
                      {
                        deviceNo: '8745995123',
                        time: '2020-02-12',
                        address: '郑州市高新区大学科技园',
                        isLine: '在线'
                      },
                      {
                        deviceNo: '8745995123',
                        time: '2020-02-12',
                        address: '郑州市高新区大学科技园',
                        isLine: '在线'
                      },
                      {
                        deviceNo: '8745995123',
                        time: '2020-02-12',
                        address: '郑州市高新区大学科技园',
                        isLine: '在线'
                      },
                      {
                        deviceNo: '8745995123',
                        time: '2020-02-12',
                        address: '郑州市高新区大学科技园',
                        isLine: '在线'
                      },
                      {
                        deviceNo: '8745995123',
                        time: '2020-02-12',
                        address: '郑州市高新区大学科技园',
                        isLine: '在线'
                      },
                      {
                        deviceNo: '8745995123',
                        time: '2020-02-12',
                        address: '郑州市高新区大学科技园',
                        isLine: '在线'
                      }
                    ]
                  },
                  {
                    state: 1,
                    text: 'WiFi配网',
                    loadingType: 'more',
                    orderList: [

                    ]
                  },
                  {
                    state: 2,
                    text: '远程控制',
                    loadingType: 'more',
                    orderList: [

                    ]
                  },
                  {
                    state: 1,
                    text: 'WiFi配网',
                    loadingType: 'more',
                    orderList: [

                    ]
                  }
                ],
                tabCurrentIndex: 0,
                }
              },
              onLoad(option) {
                this.getList()
              },
              methods: {
                // 获取数据
                getList() {
                  console.log(12)
                  // let equipList = Json.equipList
                  // this.navList[this.tabCurrentIndex].orderList = equipList
                },
                // narbar改变
                changeTab(e) {
                  this.tabCurrentIndex = e.target.current;
                  if (this.tabCurrentIndex === 1) {} else if (this.tabCurrentIndex === 0) {}
                },
                // 点击navbar
                tabClick(i) {
                  console.log(i)
                  this.tabCurrentIndex = i
                },
                back(value) {
                  this.link = value
                }
              }
            }
          <\/script>
          
          <style>
            .container {
                height: 100vh;
                display: flex;
                flex-direction: column;

                .swiper-box {
                  flex: 1;
                  overflow: auto;

                  .tab-content {
                    height: 100%;
                    overflow-y: auto;
                  }
                }

                .no-data {
                  margin-top: 195rpx;
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  align-items: center;

                  image {
                    width: 354rpx;
                    height: 262rpx;
                  }

                  text {
                    margin-top: 56rpx;
                    font-size: 32rpx;
                    color: #999999;
                  }
                }
              }

              .navbar {
                display: flex;
                height: 40px;
                padding: 0 5px;
                background: #fff;
                margin-bottom: 10rpx;
                position: relative;
                z-index: 10;
                .nav-item {
                  flex: 1;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100%;
                  font-size: 15px;
                  position: relative;

                  &.current {
                    &:after {
                      content: '';
                      position: absolute;
                      left: 50%;
                      bottom: 0;
                      transform: translateX(-50%);
                      width: 96rpx;
                      height: 0;
                      border-bottom: 2rpx solid #f5432d;
                    }
                  }
                }
              }

              .list {
                position: relative;
                width: 684rpx;
                height: 154rpx;
                box-shadow: 0rpx 6rpx 17rpx 3rpx rgba(214, 213, 212, 0.28);
                border-radius: 6rpx;
                margin: auto;
                margin-bottom: 23rpx;
                display: flex;

                .priceImg {
                  width: 178rpx;
                  height: 154rpx;
                  background-size: 178rpx 154rpx;
                  font-size: 55rpx;
                  font-family: DIN;
                  text-align: center;
                  line-height: 154rpx;
                  font-weight: 500;
                  color: rgba(255, 255, 255, 1);

                  text {
                    font-size: 20rpx;
                  }
                }

                .right {
                  margin-left: 30rpx;
                  display: flex;
                  flex-direction: column;

                  .line {
                    display: inline-block;
                    width: 327rpx;
                    border-bottom: 1rpx dashed #e4e4e3;
                  }
                }

                .l-btn {
                  height: 154rpx;
                  flex: 1;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  position: relative;

                  text {
                    display: inline-block;
                    width: 138rpx;
                    height: 40rpx;
                    background: #f5432d;
                    box-shadow: 0 3rpx 7rpx 0 #f5432d;
                    border-radius: 20px;
                    text-align: center;
                    line-height: 40rpx;
                    font-size: 24rpx;
                    color: #fdfdfd;
                  }

                  image {
                    position: absolute;
                    right: 0;
                    top: 25rpx;
                    width: 104rpx;
                    height: 104rpx;
                  }
                }
              }
          <\/style>
        `
      }
    }
  }
</script>