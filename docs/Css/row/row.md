# css多行显示...    文本单行显示溢出时出现省略号

<template>
  <demo :codeStr="str">
    <div></div>
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          <style>
          
              // css多行显示...
              .container{ 
                overflow: hidden;
                display: -webkit-box;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2; /* 2 表示两行出现。。。 ，这个是行数*/
                -webkit-box-orient: vertical;
              }
              // 单行显示

              scroll-view{ 
               white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
          <\/style>
        `
      }
    }
  }
</script>