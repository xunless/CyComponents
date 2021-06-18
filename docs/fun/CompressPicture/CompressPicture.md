# JS图片压缩（不可用于 UNI-APP）

<template>
  <demo :codeStr="str">
    
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        filename:'new_${file.name}',
        str: `
          <script>
            export default {
              // 获取到的信息包含大小，类型....

              let filetab = document.getElementById('filedemo')
              filetab.onchange = function (e) {
                let file = e.target.files[0] // 获取到的图片信息
                let file_type = file.type // 图片的类型
                let file_name = file.name // 图片的名字
                let file_size = file.size // 图片的大小
              }

              // 将获取的图片转为 base64，返回一个空或者转换后的 Base64

              /**
              * @param {file} 需要压缩的图片文件
              * @return 图片的Base64
              */

              function ImageToBase64 (file) {
                return new Promise(resolve => {
                  if (!file) resolve(null) // 没有文件时直接返回
                  let fileReader = new FileReader()
                  fileReader.readAsDataURL(file)
                  fileReader.onload = function (e) {
                    // e 是 onLoad之后返回的参数信息，其中就有我们需要的Base64的信息
                    let imgBase64Info = e.target.result
                    resolve(imgBase64Info) // 返回获取到的Base64信息
                  }
                })
              }
              
              // 通过拿到的 Base64 的信息，我们通过创建 canvas 画布，进行画图，设置压缩级别后转出为 Base64，之后返回新的 Base64 信息

              /**
              * @param {base64} 获取BASE64的返回值
              * @return 新的Base64
              */

              function comperImage (base64, filetype, quality) {
                return new Promise(resolve => {
                  if (!base64) resolve() // 没有给信息直接返回
                  let image = new Image()
                  image.src = base64
                  image.onload = function (e) {
                    let info = e.path[0]
                    let sacle = info.width / info.height // 获取宽高比例
                    let canvas = document.createElement('canvas') // 创建画布
                    let ctx = canvas.getContext('2d')
                    canvas.width = info.width // 设置画布宽高
                    canvas.height = info.height
                    ctx.drawImage(image, 0, 0, canvas.width, canvas.height) // 将图片绘制在画板上
                    let newBase64 = canvas.toDataURL(filetype, quality) // 将画板内容转为图片并设置压缩比例
                    resolve(newBase64)
                  }
                })
                
                // 将新的 Base64 转为新的文件并且返回

                /*
                *  Base64转换为File
                * @param { string } 文件的url，此处为生成的新的Base64
                * @param { string } 要生成的文件名字
                * @return  File
                */
                function dataURLtoFile (dataurl, filename) {
                  return new Promise(resolve => {
                    var arr = dataurl.split(','),
                      mime = arr[0].match(/:(.*?);/)[1],
                      bstr = atob(arr[1]),
                      n = bstr.length,
                      u8arr = new Uint8Array(n)
                    while (n--) {
                      u8arr[n] = bstr.charCodeAt(n)
                    }
                    resolve(new File([u8arr], filename, { type: mime }))
                  })
                }

                // 当做完以上步骤之后，我们就可以拿到新的文件进行后续的操作。 放个案例

                /**
                *  压缩图片
                * @param { file } 需要压缩的文件
                * @return
                */
                
                async function comImg (file, quality, filename = '文件路径') {
                  // 将png格式文件转为JPEG输出，因为Png图片不能用这种方式进行压缩
                  let filetype = file.type === 'image/png' ? 'image/jpeg' : file.type
                  let base64 = await ImageToBase64(file) // 获取需要压缩图片的base64
                  let newBase64 = await comperImage(base64, filetype, quality) // 获取压缩后的base64
                  let newFile = await dataURLtoFile(newBase64, filename) // 生成新文件
                  let resultImg = new Image() // 创建Image标签
                  resultImg.src = URL.createObjectURL(newFile) // 创建img的src
                  document.body.appendChild(resultImg) //添加至页面
                }
              }
            }
          <\/script>
        `
      }
    }
  }
  </script>