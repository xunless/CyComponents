# WEB页面扫描二维码
### 有两种方案
#### 第一种方案为：首先调用手机的摄像头拍照，然后把照片上传服务器识别二维码内容，返回二维码内容。<br/>第二种方案为：首先调用摄像机获取视频流，然后实时截取视频照片，识别二维码。<br/>但是第二种方案有两个问题待解决：<br/>1.调用摄像机有兼容问题，iOS只能获取一帧画面；<br/>2.摄像头现在只能调用前置摄像头摄像。<br/>所以再此是第一种方案的实现方法。
### 

<template>
  <demo :codeStr="str">
    WEB页面扫描二维码
    <view class="flex-center home-container-box-btn" @click="sancInfo">
      扫码获取
    </view>
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        link: '',
        str: `
          <template>
            <view>
              <view class="flex-center home-container-box-btn" @click="sancInfo">
                扫码获取
              </view>
            </view>
          </template>

          <script>
            export default {
              data() {
                return {

                }
              },
              methods: {
                // webH5扫码
                scanCodeH5(){
                  let that = this;
                  uni.chooseImage({
                      count: 1, //默认9
                      sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
                      // sourceType: ['album'], //从相册选择
                      success: function (chooseImageRes) {
                        uni.showLoading({
                          title:'识别中',
                          mask:true
                        })
                          const tempFilePaths = chooseImageRes.tempFilePaths;
                          uni.uploadFile({
                              url: 'https://upload.api.cli.im/upload.php?kid=cliim', //这个接口为草料二维码上传图片接口
                              filePath: tempFilePaths[0],
                              name: 'Filedata',
                              success: (uploadFileRes) => {
                                  console.log(JSON.parse(uploadFileRes.data));
                                  let result = JSON.parse(uploadFileRes.data)
                                  if(result.status==1){
                                    uni.request({
                                      url:'https://cli.im/apis/up/deqrimg', //这个接口为草料二维码识别二维码接口
                                      method:'POST',
                                      header: {
                                        'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
                                      },
                                      data:{
                                        img:result.data.path
                                      },
                                      success(data) {
                                        let resultData = data.data
                                        if(resultData.status==1){
                                          let scanCodeResult = resultData.info.data[0]
                                          console.log('二维码内容',scanCodeResult)
                                          }else{
                                            that.toast('非法二维码')
                                          }
                                        }else{
                                          that.toast(resultData.info)
                                        }
                                        console.log(data)
                                      },
                                      complete(res) {
                                        uni.hideLoading()
                                        console.log(res)
                                      }
                                    })
                                  }else{
                                    uni.hideLoading()
                                    that.toast(result.info)
                                  }
                                  
                              },
                              file:()=>{
                                uni.hideLoading()
                              }
                          });
                      }
                  })
                }
              }
            }
          <\/script>
          <style>
          .flex-center {
            /* #ifndef APP-NVUE */
            display: flex;
            /* #endif */
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .home-container-box-btn{
            width:686rpx;
            height:98rpx;
            background:rgba(46,213,115,1);
            border-radius:49rpx;
            font-size:32rpx;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:48rpx;
          }
          <\/style>
        `
      }
    },
    methods: {
      // webH5扫码
			scanCodeH5(){
				let that = this;
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				    // sourceType: ['album'], //从相册选择
				    success: function (chooseImageRes) {
							uni.showLoading({
								title:'识别中',
								mask:true
							})
								const tempFilePaths = chooseImageRes.tempFilePaths;
								uni.uploadFile({
										url: 'https://upload.api.cli.im/upload.php?kid=cliim', //这个接口为草料二维码上传图片接口
										filePath: tempFilePaths[0],
										name: 'Filedata',
										success: (uploadFileRes) => {
												console.log(JSON.parse(uploadFileRes.data));
												let result = JSON.parse(uploadFileRes.data)
												if(result.status==1){
													uni.request({
														url:'https://cli.im/apis/up/deqrimg', // 这个接口为草料二维码识别二维码接口
														method:'POST',
														header: {
															'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
														},
														data:{
															img:result.data.path
														},
														success(data) {
															let resultData = data.data
															if(resultData.status==1){
                                let scanCodeResult = resultData.info.data[0]
                                if(scanCodeResult){
                                  	console.log('二维码内容',scanCodeResult)
																}else{
																	that.toast('非法二维码')
																}
															}else{
																that.toast(resultData.info)
															}
															console.log(data)
														},
														complete(res) {
															uni.hideLoading()
															console.log(res)
														}
													})
												}else{
													uni.hideLoading()
													that.toast(result.info)
												}
										},
										file:()=>{
											uni.hideLoading()
										}
								});
				    }
				})
			}
    }
  }
</script>
<style>
.flex-center {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.home-container-box-btn{
  width:686rpx;
  height:98rpx;
  background:rgba(46,213,115,1);
  border-radius:49rpx;
  font-size:32rpx;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:48rpx;
}
</style>