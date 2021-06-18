(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1025:function(n,e,t){"use strict";t.r(e);var i={data:()=>({str:"\n       <template>\n          <view class=\"container\">\n            \x3c!-- navbar --\x3e\n            <view class=\"navbar\">\n              <view\n                v-for=\"(item, index) in navList\"\n                :key=\"index\"\n                class=\"nav-item\"\n                :class=\"{current: tabCurrentIndex === index}\"\n                @click=\"tabClick(index)\"\n              >\n                {{item.text}}\n              </view>\n            </view>\n\n            \x3c!-- 列表 --\x3e\n            <swiper\n              :current=\"tabCurrentIndex\"\n              class=\"swiper-box\"\n              duration=\"300\"\n              @change=\"changeTab\"\n            >\n              <swiper-item\n                class=\"tab-content\"\n                v-for=\"(tabItem,tabIndex) in navList\"\n                :key=\"tabIndex\"\n              >\n                <scroll-view\n                  class=\"list-scroll-content\"\n                  scroll-y\n                  @scrolltolower=\"getList\"\n                  :scroll-with-animation=\"true\"\n                >\n                  <view\n                    class=\"list\"\n                    v-for=\"(item, index) in tabItem.orderList\"\n                    :key=\"index\"\n                  >\n                    {{item.deviceNo}}\n                  </view>\n                  <view class=\"no-data\" v-if=\"tabItem.orderList.length === 0\">\n                    <text>暂无数据</text>\n                  </view>\n                </scroll-view>\n              </swiper-item>\n            </swiper>\n          </view>\n        </template>\n\n        <script>\n          export default {\n            data() {\n              return {\n                navList: [{\n                  state: 0,\n                  text: '蓝牙设备',\n                  loadingType: 'more',\n                  orderList: [{\n                      deviceNo: '8745995123',\n                      time: '2020-02-12',\n                      address: '郑州市高新区大学科技园',\n                      isLine: '在线'\n                    },\n                    {\n                      deviceNo: '8745995123',\n                      time: '2020-02-12',\n                      address: '郑州市高新区大学科技园',\n                      isLine: '在线'\n                    },\n                    {\n                      deviceNo: '8745995123',\n                      time: '2020-02-12',\n                      address: '郑州市高新区大学科技园',\n                      isLine: '在线'\n                    },\n                    {\n                      deviceNo: '8745995123',\n                      time: '2020-02-12',\n                      address: '郑州市高新区大学科技园',\n                      isLine: '在线'\n                    },\n                    {\n                      deviceNo: '8745995123',\n                      time: '2020-02-12',\n                      address: '郑州市高新区大学科技园',\n                      isLine: '在线'\n                    },\n                    {\n                      deviceNo: '8745995123',\n                      time: '2020-02-12',\n                      address: '郑州市高新区大学科技园',\n                      isLine: '在线'\n                    },\n                    {\n                      deviceNo: '8745995123',\n                      time: '2020-02-12',\n                      address: '郑州市高新区大学科技园',\n                      isLine: '在线'\n                    },\n                    {\n                      deviceNo: '8745995123',\n                      time: '2020-02-12',\n                      address: '郑州市高新区大学科技园',\n                      isLine: '在线'\n                    },\n                    {\n                      deviceNo: '8745995123',\n                      time: '2020-02-12',\n                      address: '郑州市高新区大学科技园',\n                      isLine: '在线'\n                    },\n                    {\n                      deviceNo: '8745995123',\n                      time: '2020-02-12',\n                      address: '郑州市高新区大学科技园',\n                      isLine: '在线'\n                    }\n                  ]\n                },\n                {\n                  state: 1,\n                  text: 'WiFi配网',\n                  loadingType: 'more',\n                  orderList: [\n\n                  ]\n                },\n                {\n                  state: 2,\n                  text: '远程控制',\n                  loadingType: 'more',\n                  orderList: [\n\n                  ]\n                },\n                {\n                  state: 1,\n                  text: 'WiFi配网',\n                  loadingType: 'more',\n                  orderList: [\n\n                  ]\n                }\n              ],\n              tabCurrentIndex: 0,\n              }\n            },\n            onLoad(option) {\n              this.getList()\n            },\n            methods: {\n              // 获取数据\n              getList() {\n                console.log(12)\n                // let equipList = Json.equipList\n                // this.navList[this.tabCurrentIndex].orderList = equipList\n              },\n              // narbar改变\n              changeTab(e) {\n                this.tabCurrentIndex = e.target.current;\n                if (this.tabCurrentIndex === 1) {} else if (this.tabCurrentIndex === 0) {}\n              },\n              // 点击navbar\n              tabClick(i) {\n                console.log(i)\n                this.tabCurrentIndex = i\n              },\n              back(value) {\n                this.link = value\n              }\n            }\n          }\n        <\/script>\n        \n        <style>\n          .container {\n              height: 100vh;\n              display: flex;\n              flex-direction: column;\n\n              .swiper-box {\n                flex: 1;\n                overflow: auto;\n\n                .tab-content {\n                  height: 100%;\n                  overflow-y: auto;\n                }\n              }\n\n              .no-data {\n                margin-top: 195rpx;\n                width: 100%;\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n\n                image {\n                  width: 354rpx;\n                  height: 262rpx;\n                }\n\n                text {\n                  margin-top: 56rpx;\n                  font-size: 32rpx;\n                  color: #999999;\n                }\n              }\n            }\n\n            .navbar {\n              display: flex;\n              height: 40px;\n              padding: 0 5px;\n              background: #fff;\n              margin-bottom: 10rpx;\n              position: relative;\n              z-index: 10;\n              .nav-item {\n                flex: 1;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                height: 100%;\n                font-size: 15px;\n                position: relative;\n\n                &.current {\n                  &:after {\n                    content: '';\n                    position: absolute;\n                    left: 50%;\n                    bottom: 0;\n                    transform: translateX(-50%);\n                    width: 96rpx;\n                    height: 0;\n                    border-bottom: 2rpx solid #f5432d;\n                  }\n                }\n              }\n            }\n\n            .list {\n              position: relative;\n              width: 684rpx;\n              height: 154rpx;\n              box-shadow: 0rpx 6rpx 17rpx 3rpx rgba(214, 213, 212, 0.28);\n              border-radius: 6rpx;\n              margin: auto;\n              margin-bottom: 23rpx;\n              display: flex;\n\n              .priceImg {\n                width: 178rpx;\n                height: 154rpx;\n                background-size: 178rpx 154rpx;\n                font-size: 55rpx;\n                font-family: DIN;\n                text-align: center;\n                line-height: 154rpx;\n                font-weight: 500;\n                color: rgba(255, 255, 255, 1);\n\n                text {\n                  font-size: 20rpx;\n                }\n              }\n\n              .right {\n                margin-left: 30rpx;\n                display: flex;\n                flex-direction: column;\n\n                .line {\n                  display: inline-block;\n                  width: 327rpx;\n                  border-bottom: 1rpx dashed #e4e4e3;\n                }\n              }\n\n              .l-btn {\n                height: 154rpx;\n                flex: 1;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                position: relative;\n\n                text {\n                  display: inline-block;\n                  width: 138rpx;\n                  height: 40rpx;\n                  background: #f5432d;\n                  box-shadow: 0 3rpx 7rpx 0 #f5432d;\n                  border-radius: 20px;\n                  text-align: center;\n                  line-height: 40rpx;\n                  font-size: 24rpx;\n                  color: #fdfdfd;\n                }\n\n                image {\n                  position: absolute;\n                  right: 0;\n                  top: 25rpx;\n                  width: 104rpx;\n                  height: 104rpx;\n                }\n              }\n            }\n        </style>\n      "})},r=t(23),s=Object(r.a)(i,(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"可滑动-navbar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可滑动-navbar"}},[this._v("#")]),this._v(" 可滑动 Navbar")]),this._v(" "),[e("demo",{attrs:{codeStr:this.str}})]],2)}),[],!1,null,null,null);e.default=s.exports}}]);