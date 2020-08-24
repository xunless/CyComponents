# java中使用socket的方法
::: tip
公司git地址 [官方文档](http://39.99.37.143:3000/HuangGuanJun/webPublic/src/master/js/utils)
:::
<template>
  <demo :codeStr="str">
    
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        link: '',
        str: `
        // uni-app 中使用方法
          import Socket from '@/utils/socket'
          let socket = new Socket({url: 'ws://192.168.1.168:9988/ws'})
          // 初始化连接
          socket.init()
          // user里面的key可以在 utils -> proto -> SocketSend.js -> Message 中找到
          const user = {type: 1, code: '666'}
          /*
            发送数据
            @param {string} ASXC 这个为后台固定字符串，使用时需要向java要
            @param {object} user
          */
          socket.send('ASXC', user)
          // 返回数据的方法
          socket.receviMessage().then(res => {
            console.log(res)
          })

          // web中使用方法
          import { CySocket } from '@/utils/CySocket'
          let cySocket = new CySocket({
              server: 'ws://192.168.1.168:9988/ws',
              autoReconnect: false,
              // socket打开事件
              openSocket: function() {
                  // user里面的key可以在 utils -> proto -> SocketSend.js -> Message 中找到
                  const user = {type: 1, code: '666'}
                  /*
                      发送数据
                      @param {string} ASXC 这个为后台固定字符串，使用时需要向java要
                      @param {object} user
                  */
                  this.sendMsg('ASXC', user)
              },
              // socket数据返回事件
              receiveMsg: function(data) {
                  console.log(data)
              }
          })
        `
      }
    }
  }
</script>