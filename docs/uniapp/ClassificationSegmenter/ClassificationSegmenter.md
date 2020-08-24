# 常见分类分段器

 ::: tip
[组件下载地址](https://github.com/ChamHuang/web/blob/master/uniapp/ui-tags.vue)
:::

<template>
  <demo :codeStr="str">

  ![image](/images/segmentedControl.png)

  <div>组件名：ui-tags</div>
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          <template>
            <ui-tags :current="current" :values="list" @clickItem="onClickItem"></ui-tags>
          </template>

          <script>
            import uiTags from '@/components/ui-tags.vue'
            export default {
              components: { uiTags }
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
  values | Array| [] | 数组格式为 [{name: '全部', name: '其他'}]
  current | Number| 0 | 当前选中的值
- 方法说明
  方法名 | 类型 | 说明
  -|:-:|-
  onClickItem | Fun | 向父组件传递两个值（currentIndex 为当前的索引,currentItem 为当前的对象）
  clickItem | Fun | 监听父组件事件名