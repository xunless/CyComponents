<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @@Company: ZZCYI
 * @Author: 王
 * @Date: 2020-09-16 17:19:03
 * @LastEditors: 王
 * @LastEditTime: 2020-09-16 17:27:35
 * @Update Descripttion: 
-->
# 微信小程序 版本更新

<template>
  <demo :codeStr="str">
    将代码放在App.vue页面的onLaunch方法中
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `

          <script>
            onLaunch: function() {
              console.log('App Launch')
              /**
               * 检测小程序更新
               */
              // #ifdef MP-WEIXIN
              const updateManager = wx.getUpdateManager()
              
              updateManager.onCheckForUpdate(function (res) {
                // 请求完新版本信息的回调
                console.log(res.hasUpdate)
              })
              
              updateManager.onUpdateReady(function () {
                wx.showModal({
                  title: '更新提示',
                  content: '新版本已经准备好，是否重启应用？',
                  success: function (res) {
                    if (res.confirm) {
                      // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                      updateManager.applyUpdate()
                    }
                  }
                })
              })
              
              updateManager.onUpdateFailed(function () {
                // 新版本下载失败
              })
              // #endif
              
              
            }
          <\/script>
        `
      }
    }
  }
</script>