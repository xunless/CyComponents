# 自定义 ui-cell
 ::: tip
[组件下载地址](https://github.com/ChamHuang/web/blob/master/uniapp/ui-cell.vue)
:::

<template>
  <demo :codeStr="str">

  ![image](/images/ui-cell.png)

  <div>组件名 uiCell</div>
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          <template>
            <ui-cell
              :title="i18n.totalXpense"
              :arrow="false"
              :right="'￥' + list.cost"
            ></ui-cell>
          </template>

          <script>
           import uiCell from '@/components/ui-cell.vue'
            export default {
              components: { uiCell  }
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
  padding | Boolean| false | 是否使用 app-container 类名
  arrow | Boolean| true | 默认是否显示箭头
  right | String| null | 右侧显示的文字内容
  title | String| '标题' | 左侧显示标题内容
  del | Boolean| false | 是否显示删除图标
  obj | Object| null | 删除需要传的对象
- 方法说明
  方法名 | 类型 | 说明
  -|:-:|-
  handleClick | Fun | 监听点击事件
  handleDel | Fun | 监听删除事件 向父组件传 obj 对象