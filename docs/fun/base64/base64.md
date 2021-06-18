# 将 base64 转换

<template>
  <demo :codeStr="str">
    
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          <script>
          // 将 base64 转换为文件
            function dataURLtoFile (dataurl, filename) {
              var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n)
              while (n--) {
                u8arr[n] = bstr.charCodeAt(n)
              }
              return new File([u8arr], filename, {
                type: mime
              })
            }

          // 原图转回 base64
          
          function img2file (src, can_w, can_h, callback) {
            var _caipu_img = new Image()

            _caipu_img.src = src

            _caipu_img.onload = function () {
              var canvas = document.createElement('canvas')
              var ctx = canvas.getContext('2d')
              canvas.width = can_w
              canvas.height = can_h
              var w = _caipu_img.width
              var h = _caipu_img.height

              ctx.drawImage(_caipu_img, 0, 0, w, h)

              //异步操作 不回调可能会取到undefined

              if (callback && typeof callback == 'function') {
                return callback(canvas.toDataURL('image/png', 1))
              }
            }
          }
          <\/script>
        `
      }
    }
  }
</script>