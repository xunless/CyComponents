# 订单列表页 Demo（Tabs+滑块）

 ::: tip
  [组件地址](http://39.99.37.143:3000/wangbowen/Tabs.git)
:::

<template>
  <demo :codeStr="str">

  - 包含滑动切换，滑块跟组，数据缓存，上拉加载。
  - 数据使用 Mock 数据，Git 附件 Server 可见
  - Tabs 单独组件，可单独使用
  - 演示 Demo

  > 滑动列表 Demo 放入 HX 运行

  ![image](/images/tabs.gif)


  - Tabs 组件地址: **/pages/index**
  - Server 为 Mock 数据服务,需要安装依赖
  
  > Mock 服务使用

<div>
  <p>npm install</p>
  <p>npm run dev</p>
</div>
 


  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
         
        `
      }
    }
  }
</script>

### Tabs 参数

| 属性名      |   类型   | 默认值  | 说明           |
| ----------- | :------: | :-----: | -------------- |
| tabs        | string[] |
| tabhight    |  Number  |    0    | Tabs 高度      |
| background  |  String  | #ffffff | 背景颜色       |
| lineWidth   |  Number  |   20    | 滑块宽度       |
| lineHeight  |  Number  |    4    | 滑块高度       |
| activeColor |  String  | #fc4a18 | 选中颜色       |
| normorColor |  String  | #333333 | 字体未选中颜色 |
| active      |  Number  |    0    | 默认选中       |

### Tabs 方法

change : active 改变时触发
