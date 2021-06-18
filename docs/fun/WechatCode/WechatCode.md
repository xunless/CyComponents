# 微信公众号正则获取code与获取用户信息
 
 <template>
  <demo :codeStr="str">
    微信公众号正则获取code与获取用户信息
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
            /*
              @param { string } name - 获取到微信回调的url链接
            */
            // 正则获取code
            function getQueryString(name: string) {
              var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
              var r = window.location.search.substr(1).match(reg)
              if (r != null) return unescape(r[2])
              return null
            }

            /*
              @param { function } callback - 获取到openid后可执行的函数(可穿可不穿)
            */
           // 获取用户信息
            async function GetOpenId(callback?: Function) {
              var redirecturl = encodeURIComponent(window.location.href)
              code = getQueryString('code')
              if (!code && !openid) {
                window.location.href =
                  'http://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
                  wxappid +
                  '&redirect_uri=' +
                  redirecturl +
                  '&response_type=code&scope=snsapi_base&state=0#wechat_redirect'
              } else if (code && !openid) {
                const openid: RootStateTypes = await GetQryWebToken()
                await GetUserinfo(openid.openid)
                if (callback) callback()
              } else {
                if (callback) callback()
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