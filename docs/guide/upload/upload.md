# Upload
基于 element-ui 图片上传组件进行封装，一次暂时只能上传一张图片并进行压缩

<template>
  <demo :codeStr="str">
    <Upload-cy-upload :imageUrl="link" @backData="back" />
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        link: '',
        str: `
          <template>
            <cy-upload :imageUrl="link" @backData="back"></cy-upload>
          </template>

          <script>
            export default {
              data() {
                return {
                  link: ''
                }
              },
              methods: {
                back(value) {
                  this.link = value
                }
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

### API
### Props
| 参数     | 说明                           | 类型   | 默认值                                      | 可选值    |
| -------- | ------------------------------ | ------ | ------------------------------------------- | --------- |
| fileName | 根据接口文档上传文件的额外参数 | string | /img                                        |           |
| accept   | 上传文件仅有的类型             | string | image/png, image/jpg, image/jpeg, image/gif | video/*等 |
| imageUrl | 查询接口返回的图片地址         | string |                                             |           |

### Events
| 事件名   | 说明                         | 回调参数 | 版本 |
| -------- | ---------------------------- | -------- | ---- |
| backData | 上传文件成功之后返回成功的值 | url    |      |