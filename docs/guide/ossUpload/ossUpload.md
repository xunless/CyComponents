# vue antd中使用 oss 上传


### 一、安装
>   npm install ali-oss --save
### 二、使用文档 
>    [对象存储OSS](https://help.aliyun.com/document_detail/64097.html?spm=a2c4g.11186623.6.1065.29275da7Ds53aj)


<template>
  <demo :codeStr="str">
    上传图片示例
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
        /* 主要代码 */
        const OSS = require('ali-oss')
        const client = new OSS({
          accessKeyId: OSSAccessKeyId,
          accessKeySecret: OSSAccessKeySecret,
          bucket: bucket,
          endpoint: endpoint
        })
        client.put('文件名称', '文件').then(result => {
          console.log('上传成功', result)
        })


        上传组件代码文件在 .vuepress/public/components/ossUpload.vue
        使用方式：
        <upload-oss @imgList="getImgList" />

        getImgList (imgList) {
          console.log('子组件返的图片列表', imgList)
        }
        `
      }
    }
  }
</script>
