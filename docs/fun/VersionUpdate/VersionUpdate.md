# uni-APP 版本更新

<template>
  <demo :codeStr="str">
    带有进度条样式的APP 版本更新
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        link: '',
        str: `
          <template>
            <uni-popup ref="popupDown" type="center" :maskClick="!downLoadIng">
              <view class="confirmbox">
                <view class="title">版本更新</view>
                <view class="center" v-if="!downLoadIng">确定更新应用么</view>
                <view class="btns" v-if="!downLoadIng">
                  <view class="btn" @tap="closePropDown">取消</view>
                  <view class="btn" @tap="confirmBtnDown">确认</view>
                </view>
                <load-line class="title" v-if="downLoadIng" loadType="line" :loadText="loadText" :lineInfo="lineInfo" :loadPercent="loadPercent"></load-line>
              </view>
            </uni-popup>
          </template>

          <script>
            import uniPopup from '@/components/uni-popup/uni-popup.vue';
            
            export default {
              components: {
                uniPopup
              },
              data() {
                return {
                  downLoadIng: false,
                  lineInfo: {
                    colorChange: false,
                    loadColor: '#6ee2e1,#2ba98c,#a07e1e'
                  },
                  loadText: '正在下载更新，请耐心等待:',
                  loadPercent: 0,
                  appversion: '',
                  serverversion: ''
                }
              },
              methods: {
                // 获取当前版本和最新版本信息
                getNewVersion(){
                  let this_ = this;
                  plus.runtime.getProperty(plus.runtime.appid, async function(wgtinfo) {
                    this_.appversion = wgtinfo.version;
                    // 请求最新版本信息
                    this_.$http.request({
                      method: 'get',
                      url: qrSoftVersion,
                      params: {
                        versionType: 'APP版本',
                        pageIndex: 1,
                        pageSize: 1
                      }
                    }).then(res => {
                      if (res.resultCode == 1) {
                        if (res.data.lsList.length > 0) {
                          this_.serverversion = res.data.lsList[0]
                        } else {
                          let serverversionObj = {
                            versionName: this_.appversion
                          }
                          this_.serverversion = serverversionObj;
                        }
                        if (this_.serverversion.versionName > this_.appversion) {
                          this_.appversion = 0
                        }
                      }
                    }).catch(err => {
                  
                    })
                  });
                },
                /**
                 * 显示版本更新弹窗
                 * */
                showDown() {
                  if (this.serverversion && this.appversion >= this.serverversion.versionName) {
                    plus.nativeUI.toast('已是最新版本')
                  } else {
                    this.$refs.popupDown.open();
                  }
                },
                closePropDown() {
                  this.$refs.popupDown.close();
                },
                confirmBtnDown() {
                  this.downLoad(this.serverversion);
                },
                //下载新版本
                downLoad(ver) {
                  let this_ = this;
                  let fileName = ''
                  if (ver.versionPath && ver.versionPath.indexOf('apk') > 0) {
                    if (plus.os.name == 'Android') {
                      fileName = ver.versionPath;
                    } else if (plus.os.name == 'iOS') {
                      // ios应用平台链接
                      plus.runtime.openURL("https://itunes.apple.com/cn/app/%E6%98%93%E4%BB%A5%E5%85%BB%E8%BD%A6/id1434960351?mt=8");
                      return;
                    }
                  } else {
                    fileName = ver.versionPath;
                  }
                  this_.downLoadIng = true;
                  const downloadTask = uni.downloadFile({
                    url: apiBaseUrl + fileName,
                    success: (res) => {
                      this_.downLoadIng = false;
                      this_.closePropDown();
                      if (res.statusCode === 200) {
                        console.log('下载成功');
                        this_.installWgt(res.tempFilePath);
                      } else {
                        this_.toast("下载更新资源失败！");
                      }
                    }
                  });

                  downloadTask.onProgressUpdate((res) => {
                    this_.loadPercent = res.progress;
                  });

                },
                installWgt(path) {
                  plus.nativeUI.showWaiting("安装更新资源...", {
                    back: "none"
                  });
                  plus.runtime.install(path, {}, function() {
                    plus.nativeUI.showWaiting("应用资源更新完成！");
                    setTimeout(function() {
                      if (path.indexOf('wgt') > 0) {
                        plus.nativeUI.closeWaiting();
                        plus.runtime.restart();
                      } else {
                        plus.runtime.quit();
                      }
                    }, 1000)

                  }, function(e) {
                    plus.nativeUI.closeWaiting();
                    uni.showModal({
                      title: '提示',
                      content: "安装文件失败[" + e.code + "]：" + e.message,
                      success() {

                      }
                    })
                })
              }
            }
          <\/script>
        `
      }
    },
    methods: {
      back(value) {
        this.link = value
      }
    }
  }
</script>