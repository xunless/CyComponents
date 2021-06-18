<template>
  <div class="container-upload">
    <a-upload
      style="width: 150px;"
      name="file"
      :showUploadList="false"
      listType="picture-card"
      :accept="accept"
      :before-upload="beforeUpload"
      :customRequest="handleUpload"
    >
      <div>
        <a-icon type="plus" />
        <div class="ant-upload-text">
          上传图片
        </div>
      </div>
    </a-upload>
    <div v-for="(item, index) in fileList" @mouseover="mouseOver(index)" @mouseleave="activeImg = -1" :key="index" class="img">
      <img :src="item">
      <div class="del-img" v-if="activeImg === index">
        <a-icon @click="delImg(index)" style="color: #fff; font-size: 20px; cursor: pointer;" type="delete" />
      </div>
    </div>

  </div>
</template>

<script>
import { uploadFile, saveFile } from '@/api/common'
import md5 from 'js-md5'
const OSS = require('ali-oss')
export default {
  props: {
    uploadType: {
      type: String,
      default: 'image'
    },
    limit: { // 限制上传图片张数
      type: Number,
      default: 5
    },
    accept: {
      type: String,
      default: 'image/*'
    }
  },
  data () {
    return {
      fileList: [],
      ids: [],
      file: null,
      activeImg: -1
    }
  },
  methods: {
    handleUpload () {
      console.log('自定义上传')
      const obj = { filemd5: md5(String(new Date().getTime())), filesize: this.file.size, filename: this.file.name }
      uploadFile(obj).then(res => {
        console.log('上传结果', res)
        // aliyunData: {
        //    OSSAccessKeyId: "LTAI5tK1XmyATmuibmpKnEri"
        //    host: "http:///"
        //    key: "files/2021-06-10/291ac4c8cf453f4ef33054632a8de83d.jpg"
        //    path: "http://changzhoudongjia.oss-accelerate.aliyuncs.com/files/2021-06-10/291ac4c8cf453f4ef33054632a8de83d.jpg"
        //    policy: "eyJleHBpcmF0aW9uIjoiMjAyMS0wNi0xMFQxNjo1MzozMFoiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMCwxMDQ4NTc2MDAwXSxbInN0YXJ0cy13aXRoIiwiJGtleSIsImZpbGVzXC8yMDIxLTA2LTEwXC8iXV19"
        //    signature: "C99unXJQ/7r3NNyvkeChGsrIwIw="
        //    success_action_status: 200
        // }
        // host: "http://changzhoudongjia.oss-accelerate.aliyuncs.com/"
        // saveToken: "291ac4c8cf453f4ef33054632a8de83d"
        const dataObj = {
          accessKeyId: res.aliyunData.OSSAccessKeyId,
          accessKeySecret: 'vR3f0anyLCWIekKSFcPUOchpL8tL7T',
          bucket: 'changzhoudongjia',
          endpoint: 'oss-accelerate.aliyuncs.com',
          secure: true
        }
        const client = new OSS(dataObj)
        client.put(res.aliyunData.key, this.file).then(result => {
          console.log('上传成功', result)
          // saveFile 上传oss成功后再调接口告诉服务端这张图片保存成功了
          saveFile({ saveToken: res.saveToken }).then(ress => {
            console.log('保存图片', ress)
            if (ress) {
              this.$notification.success({
                message: this.$t('layouts.success'),
                description: this.$t('layouts.successfullyUpload')
              })
              this.fileList.push(res.aliyunData.path)
              this.ids.push(ress.id)
              // 接口只需要图片的id，在此处把id列表传给父组件
              this.$emit('imgList', this.ids)
            }
          })
        }).catch(err => {
          console.log('上传失败', err)
        })
      })
    },
    mouseOver (index) {
      if (this.activeImg !== index) {
        this.activeImg = index
      }
    },
    delImg (index) {
      this.fileList.splice(index, 1)
    },
    beforeUpload (file) {
      this.file = file
      if (this.fileList.length === 5) {
        this.$message.warning(this.$t('layouts.uploadTips'))
        return false
      } else {
        return true
      }
    }
  }
}
</script>
<style lang="less" scoped>
.container-upload {
  display: flex;
}
.img {
  width: 102px;
  height: 102px;
  margin-right: 20px;
  border-radius: 2px;
  position: relative;

  img {
    width: 102px;
    height: 102px;
  }
  .del-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    transition: all .3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
