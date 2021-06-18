<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @@Company: ZZCYI
 * @Author: 王
 * @Date: 2020-12-04 09:19:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-08 09:26:47
 * @Update Descripttion: 
-->
# uniapp WiFi配网

<template>
  <demo :codeStr="str">
    Android插件在 .vuepress/public/other 文件夹下
    将EsptouchMoudle文件夹放在nativeplugins下
    注: 在使用插件前获取下当前位置
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `

          <script>
            // 配网页面

            // Android
            const esptouch = uni.requireNativePlugin('EsptouchMoudle')

            // ios
            const esptouch = uni.requireNativePlugin('DCTestUniPlugin-TestModule')

            export default {
              data() {
			          return {
                  ssid: '', // wifi名称
                  password: '', // wifi密码
                  deviceCount: 1, // 配网的设备数量
                  broadca: 0, // wifi配网 0 组播 1广波
                }
              },
              onLoad() {
                this.init()
              },
              methods: {
                // 初始化
                init() {
                  // 所有方法的调用结果都返回到了initEsptouch中  Android和ios的初始化方法不一样

                  // Android
                  esptouch.initEsptouch(res => {
                    if (res.state === 1 && res.result && res.result.length > 0) { // 配网成功
                      console.log(res.result[0].bssid) // 返回设备bssid
                      this.handleClose()
                    } else if (res && res.confirmEnable && !res.is5G) { // 返回wifi名称
                      this.ssid = res.ssid
                    } else if (res.state === -2) { // 配网失败
                      this.handleClose()
                    } else { // 返回的提示信息
                      this.$toast(res.message)
                    }
                  })

                  // ios
                  esptouch.esptouchInit({a: 1}, res => {
                    if (res.state === 0) {
                      this.ssid = res.ssid
                    } else if (res.state === 1 && res.result && res.result.length > 0) {
                      console.log(res.result[0].bssid)
                      this.handleClose()
                    } else {
                      this.$toast(res.message)
                    }
                  })
                },
                // 开始配网  ssid:wifi名称  password: wifi密码  deviceCount: 设备数量
                handleStart() {
                  if (this.ssid.trim().length > 0 && this.password.trim().length > 0) {
                    esptouch.executeEsptouch({
                        ssid: this.ssid,
                        password: this.password,
                        deviceCount: this.deviceCount,
                        broadca: this.broadca
                      },
                      res => {
                        console.log(res)
                      }
                    )
                  } else {
                    this.$toast('请将信息填写完整')
                  }
                },
                // 停止配网
                handleClose() {
                  esptouch.cancelEsptouch(res => {
                    console.log(res)
                  })
                },
              },
              onUnload() {
                console.log('关闭页面')
                // 关闭页面断开配网
                esptouch.unregister(res => {
                  console.log(res)
                })
              }
            }

          <\/script>
        `
      }
    }
  }
</script>