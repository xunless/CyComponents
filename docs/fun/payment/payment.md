# uniapp  支付

<template>
  <demo :codeStr="str">
  app微信支付、app支付宝支付、微信小程序支付
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          <script>
            export default {
              data() {
                return {
                  payType: 1, // 支付方式
                }
              },
              methods: {
                confirmPay() {
                  this.$http.request({
                    method: 'POST',
                    url: 支付接口,
                    data: 参数
                  }).then(res => {
                    console.log(res)
                    if (res) {
                      let that = this
                      if (that.payType === 2) { // 小程序支付
                        if (res.wxPayMpOrderResult) {
                          uni.requestPayment({
                            provider: 'wxpay',
                            timeStamp: res.wxPayMpOrderResult.timeStamp,
                            nonceStr: res.wxPayMpOrderResult.nonceStr,
                            package: res.wxPayMpOrderResult.packageValue,
                            signType: res.wxPayMpOrderResult.signType,
                            paySign: res.wxPayMpOrderResult.paySign,
                            success (result) {
                              that.$toast('小程序支付成功')
                            },
                            fail (err) {
                              console.log(err)
                              that.$toast('支付已取消')
                            }
                          })
                        } else {
                          that.$toast('支付失败')
                        }
                      } else if (that.payType === 1) { // 支付宝支付
                        if(res.alipayTradeAppPayResponseBody) {
                          uni.requestPayment({
                            provider: 'alipay',
                            orderInfo: res.alipayTradeAppPayResponseBody,
                            success (result) {
                              that.$toast('支付宝支付成功')
                            },
                            fail (err) {
                              console.log(err)
                              that.$toast('支付已取消')
                            }
                          })
                        } else {
                          that.$toast('支付失败')
                        }
                      } else if (that.payType === 0) { // 微信支付返回
                        if (res.wxPayAppOrderResult) {
                          let paymentData = JSON.stringify({
                            appid: res.wxPayAppOrderResult.appId,
                            noncestr: res.wxPayAppOrderResult.nonceStr,
                            package: res.wxPayAppOrderResult.packageValue,
                            partnerid: res.wxPayAppOrderResult.partnerId,
                            prepayid: res.wxPayAppOrderResult.prepayId,
                            timestamp: res.wxPayAppOrderResult.timeStamp,
                            sign: res.wxPayAppOrderResult.sign
                          })
                          uni.requestPayment({
                            provider: 'wxpay',
                            orderInfo: paymentData,
                            success (result) {
                              that.$toast('微信支付成功')
                            },
                            fail (err) {
                              console.log(err)
                              that.$toast('支付已取消')
                            }
                          })
                        } else {
                          that.$toast('支付失败')
                        }
                      }
                      
                    }
                  })
                }
              }
            }
          <\/script>
        `
      }
    }
  }
</script>