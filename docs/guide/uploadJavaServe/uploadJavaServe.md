<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @@Company: ZZCYI
 * @Author: 王
 * @Date: 2020-10-14 12:02:29
 * @LastEditors: 王
 * @LastEditTime: 2020-10-14 14:18:56
 * @Update Descripttion: 
-->
# java后台项目上传宝塔服务器流程

<template>
  <demo :codeStr="str">
    <div>一、登陆宝塔，点击左侧菜单文件按钮，将打包好的文件放在该目录下</div>
    <h1></h1>
    <a href="/images/java1.png" target="_blank">
      <img src="/images/java1.png" />
    </a>
    <h1></h1>
    <div>二、点击左侧菜单网站按钮，安装web服务器，点击去安装，下载Nginx</div>
    <h1></h1>
    <a href="/images/java2.png" target="_blank">
      <img src="/images/java2.png" />
    </a>
    <a href="/images/java3.png" target="_blank">
      <img src="/images/java3.png" />
    </a>
    <h1></h1>
    <div>三、安装完成之后，点击左侧菜单网站按钮，点击添加站点，域名填写当前网站的ip,默认端口80，点击提交后即可添加成功，项目打包文件所在目录会自动生成3个文件</div>
    <h1></h1>
    <a href="/images/java4.png" target="_blank">
      <img src="/images/java4.png" />
    </a>
    <a href="/images/java5.png" target="_blank">
      <img src="/images/java5.png" />
    </a>
    <a href="/images/java6.png" target="_blank">
      <img src="/images/java6.png" />
    </a>
    <a href="/images/java7.png" target="_blank">
      <img src="/images/java7.png" />
    </a>
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: ''
      }
    }
  }
</script>