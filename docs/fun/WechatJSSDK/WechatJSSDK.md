# 微信 JSSDK 授权
::: tip
微信 jssdk 权限列表  [官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)
:::
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
            /**
             * desc 获取微信JSSDK签名
             * author wxw
             * time 2019年10月25日 11:40:39 星期五
             */
            let appId: string = ''
            let timestamp: number | null = null
            let signature: string = ''
            let nonceStr: string = ''
            async function GetSignature(callback?: Function) {
              try {
                const res: WXauthorizeType = await GetWxSig()
                appId = res.appId
                timestamp = res.timestamp
                signature = res.signature
                nonceStr = res.nonceStr
              } catch (error) {
                console.log(error)
              }
              wx.config({
                beta: true,
                debug: false,
                appId, // 必填，公众号的唯一标识
                timestamp, // 必填，生成签名的时间戳
                nonceStr, // 必填，生成签名的随机串
                signature, // 必填，签名
                jsApiList: ['scanQRCode', 'translateVoice', 'chooseWXPay']
              })
              wx.ready(() => {
                wx.showAllNonBaseMenuItem()
                if (callback) {
                  callback()
                }
              })
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