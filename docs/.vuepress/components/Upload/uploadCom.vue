<template>
  <div>
    <el-upload
      :ref="refName"
      :action="urlAction"
      :data="{fileName: fileName}"
      list-type="picture-card"
      :auto-upload="true"
      :on-success="handleUploadSuccessCasePic"
      :accept="accept"
      :limit="limit"
      :show-file-list="false"
    >
      <i slot="default" class="el-icon-plus" />
      <div slot="file" slot-scope="{file}">
        <template v-if="accept === 'video/*'">
          <span>{{ file.name }}</span>
        </template>
        <template v-else>
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url"
            alt=""
          >
        </template>

        <span class="el-upload-list__item-actions">
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handlePreview(file)"
          >
            <i class="el-icon-view" />
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <i class="el-icon-delete" />
          </span>
        </span>
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'UploadCom',
  props: {
    refName: {
      type: String,
      default: null
    },
    fileName: {
      type: String,
      default: null
    },
    accept: {
      type: String,
      default: 'image/png, image/jpg, image/jpeg, image/gif'
    },
    dataArr: {
      type: Array,
      default: null
    },
    limit: {
      type: Number,
      default: 9999999
    }
  },
  data() {
    return {
      urlAction: process.env.VUE_APP_BASE_API + '/api/common/upload',
      url_: process.env.VUE_APP_BASE_API,
      disabled: false
    }
  },
  methods: {
    handleUploadSuccessCasePic(res) {
      console.log(res)
      this.dataArr.push(res.Data)
      console.log(this.dataArr)
    },
    handleRemove(file) {
      // 实现缩略图模板时删除文件
      const fileList = this.$refs[this.refName].uploadFiles
      console.log(fileList)
      const index = fileList.findIndex(fileItem => {
        return fileItem.uid === file.uid
      })
      fileList.splice(index, 1)
      this.dataArr.splice(index, 1)
      console.log(fileList)
      console.log(this.dataArr)
    },
    handlePreview(file) {
      window.open(this.url_ + file.response.Data)
    }
  }
}
</script>

<style lang="less">
</style>
