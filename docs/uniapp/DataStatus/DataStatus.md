# 数据状态组件
 ::: tip
[组件下载地址](https://files.cnblogs.com/files/baobao0205/uni-steps.rar)
:::
<template>
  <demo :codeStr="str">

  ![image](/images/uniStepsShow.png)

  <div>组件名：uni-steps</div>
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          <template>
            <uni-steps
              :options="options"
              :success-icon="successimg"
              :error-icon="errorimg"
            ></uni-steps>
          </template>

          <script>
            import uniSteps from '@/components/uni-steps/uni-steps.vue'
            export default {
              components: { uniSteps }
              data () {
              },
            }
          <\/script>
        `
      }
    }
  }
</script>

### 属性说明
| 属性名    | 类型       | 默认值  | 说明                                      | 
| -------- | -----------| ------ | ------------------------------------------- | 
| options  | Array      |        | 格式为：[{title:'xxx',state:'1'},{title:'xxx',state:'0'}] title: 显示内容 state: 状态 1 成功 0 失败 |
| successIcon   | String             |    | 状态为'1'时显示的图标 |
| errorIcon | String         |  | 状态为'0'时显示的图标                                          |
| rowColor | String | #3D97FF | 图标下竖线的颜色 |
| borderColor | String | #c8c7cc | 显示内容下横线的颜色 |
