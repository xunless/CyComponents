# UNIAPP公用页面

  <template>
    <demo :codeStr="str">
     <el-image 
        style="width: 100px; height: 100px"
        :src="url" 
        :preview-src-list="srcList">
      </el-image>
      <!-- <img src="../../.vuepress/public/images/code.jpg" style="width: 100px; height: 100px"/> -->
    </demo>
  </template>

  <script>
    export default {
      data() {
        return {
          srcList:['http://39.99.37.143:3000/JiaWenZhen/pic/raw/master/code.jpg'],
          url:'http://39.99.37.143:3000/JiaWenZhen/pic/raw/master/code.jpg',
          str:` 
            <template>
              <div class="post">
                <tki-qrcode class="qrcode" cid="qrcode" ref="qrcode" :val="val" :size="size" :onval="onval" :loadMake="loadMake" :usingComponents="true" @result="qrR" :show="false" ></tki-qrcode>
                <view class="wrapper"><canvas style="height: 100%;width: 100%;backgroundColor: #FFFFFF" canvas-id="firstCanvas"></canvas></view>
              </div>
            </template>
            <script>
              import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue'
              export default {
              data() {
                return {
                  canvasShow: false,
                  picurl:'',
                  val: '', // 要生成的二维码值
                  size: 325, // 二维码大小
                  unit: 'upx', // 单位
                  background: '#b4e9e2', // 背景色
                  foreground: '#309286', // 前景色
                  pdground: '#32dbc6', // 角标色
                  icon: '', // 二维码图标
                  iconsize: 40, // 二维码图标大小
                  lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
                  onval: false, // val值变化时自动重新生成二维码
                  loadMake: true, // 组件加载完成后自动生成二维码
                  src: '', // 二维码生成后的图片地址或base64
                  cover:'static/share_bg.png'
                }
              },
              onLoad:function(option){
                var thas=this
                thas.val=option.devicenumber
              },
              methods: {
                qrR(path) {
                  let that = this;
                  this.qr_path = path;
                  let system_info = uni.getSystemInfoSync();
                  let ctx = uni.createCanvasContext('firstCanvas');
                  console.log(res.path);
                  ctx.drawImage(res.path, 0, 0, uni.upx2px(750), uni.upx2px(1330));
                  ctx.drawImage(path, uni.upx2px(184), uni.upx2px(630), uni.upx2px(375), uni.upx2px(400));
                  ctx.draw(false, () => {
                    uni.canvasToTempFilePath({
                      x: 0,
                      y: 0,
                      width: 375,
                      height: uni.upx2px(1330),
                      destWidth: 375,
                      destHeight: uni.upx2px(1330),
                      canvasId: 'firstCanvas',
                      success: function(res) {
                        uni.saveImageToPhotosAlbum({
                          filePath: res.tempFilePath,
                          success: function() {
                            that.picurl=res.tempFilePath
                          }
                        });
                      },
                      fail(e) {
                        uni.showToast({
                            title: '生成海报失败',
                            icon: 'none'
                        });
                      }
                    });
                  }); 
                },
                savePic () {
                  uni.showLoading({
                    title: '正在保存'
                  });
                  uni.saveImageToPhotosAlbum({
                    filePath: this.picurl,
                    success: function () {
                      uni.showToast({
                        title: '图片保存成功～'
                      });
                    },
                    fail: function (e) {
                    },
                    complete: function (){
                      uni.hideLoading()
                    }
                  });
                }
              },
              components: {
                tkiQrcode
              }
            }
            <\/script>
          `
        }
      }
    }
</script>