# vue-element-admin后台 点击侧边栏 刷新当前路由

<template>
  <demo :codeStr="str">
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
            /**
             * 解决方法：
             * 点击侧边栏菜单时，先跳转到Redirect 页面，在Redirect页面再将路由重定向到想去的页面，这样就起到了刷新的效果了。
             * Redirect页面和路由配置admin后台自带的有，只需修改 @/views/layout/components/Sidebar/Link.vue 文件 中的 linkProps 方法
             * 弊端：
             * 第一次点击菜单时也会触发重定向
             * */
            linkProps(url) {
              if (this.isExternalLink(url)) {
                return {
                  is: 'a',
                  href: url,
                  target: '_blank',
                  rel: 'noopener'
                }
              }
              return {
                is: 'router-link',
                to: 'redirect' + url  // 在url前加上'redirect'即可
              }
            }
          <\/script>
        `
      }
    }
  }
</script>