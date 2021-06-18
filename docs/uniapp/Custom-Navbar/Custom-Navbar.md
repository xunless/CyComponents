# 自定义 navbar
 ::: tip
[组件下载地址](https://github.com/ChamHuang/web/blob/master/uniapp/navbar.vue)
:::

<template>
  <demo :codeStr="str">

  ![image](/images/navbar.png)

  <div>组件名：navbar</div>
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          <template>
            <navbar
              :title="i18n.title1"
              :languageFlag="true"
              @handleSelectLanuage="handleSelectLanuage"
              icon="../../static/img/icon-search.png"
            ></navbar>
          </template>

          <script>
            import navbar from '@/components/navbar.vue'
            export default {
              components: { navbar  }
            }
          <\/script>
        `
      }
    }
  }
</script>

- 属性说明
  属性名 | 类型 | 默认值 | 说明
  -|:-:|:-:|-
  inputFlag | Boolean| false | 是否显示 input 输入框
  disabled | Boolean| false | 是否禁用输入框
  backFlag | Boolean| false | 是否显示返回图标
  title | String| '商城' | navbar 标题
  icon | String| '' | languageFlag 为 true 时 icon 显示的图标
  languageFlag | Boolean| false | 是否显示右侧图标 _可以进行优化_
  languageFlag | Boolean| false | 是否显示右侧图标
  edit | String| '完成' | confirmFlag 为 true 右侧显示文字
  confirmFlag | Boolean| false | 是否显示右侧文字
- 方法说明
  方法名 | 类型 | 说明
  -|:-:|-
  handleBack | Fun | 监听返回事件
  handleSelectLanuage | Fun | 监听右上角图片事件
  handleEdit | Fun | 监听右上角文字事件
  handleSearch | Fun | 监听搜索按钮