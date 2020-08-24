<!--
 * @Desc: --- elementui单张图片或者视频上传 ---
 * @version: 1.0.0
 * @LastEditors: champoin
 * @LastEditTime: 2020-06-02 14:55:10
 -->
<template>
  <div>
    <el-upload
      class="avatar-uploader"
      :action="urlAction"
      :data="{ folderName: fileName }"
      :accept="accept"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :on-progress="handleOnProgress"
      :before-upload="beforeAvatarUpload"
    >
      <template v-if="accept === 'image/png, image/jpg, image/jpeg, image/gif'">
        <img v-if="uploadLink" :src="url_ + uploadLink" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon" />
      </template>

      <template v-else>
        <span v-if="uploadLink">{{ uploadLink.split('/')[uploadLink.split('/').length - 1] }}</span>
        <i v-else class="el-icon-plus avatar-uploader-icon" />
      </template>
    </el-upload>

    <el-progress v-if="progressFlag" :percentage="number" :show-text="false" />
    <el-link v-if="accept === 'video/*' && uploadLink" type="primary" :href="url_ + uploadLink" target="_blank">预览</el-link>
    <el-link v-else-if="accept === 'image/png, image/jpg, image/jpeg, image/gif' && uploadLink" :underline="false" :href="url_ + uploadLink" target="_blank">
      <i class="el-icon-view" />
      预览
    </el-link>
    <el-link
      v-if="uploadLink"
      :underline="false"
      @click="handleDel"
    >
      <i class="el-icon-delete" />
      删除
    </el-link>
  </div>
</template>

<script>
import { compressUpload } from '../../public/utils'
import url from '../../baseApi'
export default {
  name: 'UploadComOne',
  props: {
    // 接口中额外参数
    fileName: {
      type: String,
      default: '/img'
    },
    // 选择的文件类型
    accept: {
      type: String,
      default: 'image/png, image/jpg, image/jpeg, image/gif'
    },
    // 接口返回的地址
    imageUrl: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      urlAction:url+'/api/common/upload',
      url_: url,
      uploadLink: null,
      number: 0,
      progressFlag: false
    }
  },
  watch: {
    imageUrl(newValue, oldValue) {
      this.uploadLink = newValue
    }
  },
  created() {
    this.uploadLink = this.imageUrl
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.uploadLink = res.data
      this.back(this.uploadLink)
    },
    // 删除图片
    handleDel() {
      this.uploadLink = null
      this.back(this.uploadLink)
    },
    beforeAvatarUpload(file) {
      console.log(file)
      return new Promise((resolve, reject) => {
        const isLt2M = file.size / 1024 / 1024 < 5
        if (!isLt2M) {
          this.$message.error('上传文件大小不能超过 5MB!')
          reject()
        }
        if (this.accept === 'image/png, image/jpg, image/jpeg, image/gif') {
          const image = new Image()
          image.src = URL.createObjectURL(file)
          image.onload = () => {
            const resultBlob = compressUpload(image, file)
            resolve(resultBlob)
          }
        } else {
          resolve(file)
        }
      })
    },
    handleOnProgress(event, file, fileList) {
      this.progressFlag = true
      this.number = event.percent
      if (event.percent === 100) {
        this.progressFlag = false
      }

      console.log(event, file, fileList)
    },
    back(data) {
      this.$emit('backData', data)
    }
  }
}
</script>

<style lang="scss">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
