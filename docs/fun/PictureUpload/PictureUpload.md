# uni 图片上传

<template>
  <demo :codeStr="str">
    ::: tip
      uni-app 图片上传
    :::
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
        /**
         * @param {url} url 接口地址
         * @param {Object} formData 需要向后台传递的参数
         * @return 接口返回数据
         * @description UNIAPP中图片上传 可根据实际接口进行修改
         * */
          <script>
            uploadImgFun(url, formData) {
              var that = this
              return new Promise((resolve, reject) => {
                uni.chooseImage({
                  count: 1, //默认9
                  sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
                  // sourceType: ['album'], //从相册选择
                  success: function(res) {
                    uni.showLoading({
                      title: '正在上传中',
                      mask: true
                    })
                    const path = res.tempFilePaths[0]
                    console.log(path)
                    uni.uploadFile({
                      // that.$url.imgUrl 表示连接地址
                      url: url,
                      filePath: path,
                      name: 'file',
                      formData,
                      success(res) {
                        console.log(res)
                        const data = JSON.parse(res.data)
                        if (data.status !== 0) {
                          uni.showToast({
                            icon: 'none',
                            title: data.message
                          })
                        } else {
                          resolve(data.data)
                        }
                      }
                    })
                  }
                })
              })
            }
          <\/script>
        `
      }
    }
  }
</script>