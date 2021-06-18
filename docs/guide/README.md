# 组件上传请使用以下规范

::: tip
组件录入前请先查看地址 [官方文档](https://www.vuepress.cn/)
:::

### 注意事项

1. `doc`目录是文档目录
2. 组件，静态资源文件，配置文件分别在`docs -> .vuepress -> components`，`public`，`.vuepress根据目录`目录中
3. 左侧菜单页面配置`docs -> .vuepress -> config.js -> sidebar`中配置
4. 页面存放在`dodcs -> guide`文件夹中
5. `docs -> guide`文件夹为 `vue` 页面及组件
6. `docs -> uniapp` 文件夹为 `uniapp` 页面及组件
7. `docs -> fun` 文件夹为常用公共 js 方法
8. 启动项目命令: `npm run docs:dev`

#### 页面中组件使用的注意事项

1. 在页面中使用组件引入组件方式为：文件夹名称-组件文件名。具体可以参考`guide -> upload -> upload.md`文件中的使用方式
2. 页面中的格式为：
   - 标题
   - 描述
   - 组件和查看代码。可以使用`demo`组件包裹，可以达到查看隐藏代码功能，具体可以参考`guide -> upload -> upload.md`文件中的使用方式
   - API 标题
   - 参数标题
   - 事件标题
3. 页面中 `<template></template>` 与`<script></script>` 之间要空一行
