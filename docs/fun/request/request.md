# uni 封装请求

<template>
  <demo :codeStr="str">
    baseurl是请求接口的接口地址
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        link: '',
        str: `
          import server from '@/utils/request.js'
          export function login(param) {
            return server('login', 'post', param)
          }
          import { baseurl }  from './baseData.js'
          const errormessage={
            404:'请求出错,接口未找到'
          }
          // 文件目录utils下request.js的封装
          function request(url, methods, type) {
            return new Promise((resolve, reject) => {
              uni.request({
                url: baseurl + url,
                method: methods,
                timeout: 10000,
                data: type,
                header:{
                  
                },
                success(res) {
                    if(res.statusCode===200){
                      resolve(res.data)
                    }else {
                        uni.showToast({
                          icon:'none',
                          title: errormessage[res.statusCode],
                          duration: 2000
                        });
                      reject(res.data)
                    }
                },
                fail(error) {
                    uni.showToast({
                    icon:'none',
                    title: '未知异常，请重试！！！',
                    duration: 2000
                  });
                  reject(error)
                }
              })
            })
          }
          export default request
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