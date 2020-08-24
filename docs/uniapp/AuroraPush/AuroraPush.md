# 极光推送ios插件
::: tip
[组件地址](http://39.99.37.143:3000/liuzhen/PushTestDemo.git)
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
            // 
              使用方法：
                1、把tools目录放到项目根目录，与pages文件夹同级，里面所有的方法都在里面了

                2、根目录新建一个文件夹nativeplugins，把YOYO-JPush文件夹放进去

                3、打自定义基座的时候，记得要在manifest.json中，APP模块权限配置 - 勾选 【消息推送】
            // 第一种，云打包： 1、App.vue 初始化极光推送服务与申请推送权限</div>

            import JPushPlugin from '@/tools/JPush.js';
            export default {
              onLaunch: function() {
                  // console.log('App Launch')
                  // 当uni-app 初始化完成时触发（全局只触发一次）
                  // #ifdef APP-PLUS
                  if(plus.os.name == 'iOS'){
                      JPushPlugin.init() // 初始化 JPush 插件，如果没有调用这个方法，JS 端将不会收到相关事件。
                      JPushPlugin.applyPushAuthority() // 申请推送权限

                      JPushPlugin.addReceiveNotificationListener(function (notification) {
                          console.log('jpush receive' + JSON.stringify(notification))
                      })
                  }
                  // #endif
              },
            }

            // 2、登录成功后，绑定别名，或者标签，这里示意绑定将userid（一定要是唯一值）绑定为别名：

            import JPushPlugin from '@/tools/JPush.js';
            export default {
                methods: {
                    submitForm(e){
                        // 登录提交表单后，服务器返回userid 或者 用户唯一标识，作为alias别名
                        var  userid ="1";
                        // #ifdef APP-PLUS
                        // 设置别名
                        if (this.platform == 'iOS') {
                                JPushPlugin.setAlias(userid, (res) => {
                                    console.log('jpush setAlias' + JSON.stringify(res))
                                }, (err) => {
                                    console.log('jpush error' + JSON.stringify(err))
                                })
                        }
                        // #endif
                    }
                }
            }

            //  3、用户退出后，清除别名绑定

            import JPushPlugin from '@/tools/JPush.js';

            // #ifdef APP-PLUS
            if (plus.os.name == 'iOS') {
                console.log('清空绑定的别名');
                JPushPlugin.deleteAlias((res) => {
                  console.log('cleanTags' + JSON.stringify(res))
                }, (err) => {
                  console.log('error' + JSON.stringify(err))
                })
            }
            // #endif

          <\/script>
        `
      }
    }
  }
</script>