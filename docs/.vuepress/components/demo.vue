<template>
  <div class="demo">
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <slot>
          预览组件
        </slot>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!-- <div class="code-user-desc">
            组件描述说明
          </div> -->
          <highlight-code lang="vue">
            {{codeStr}}
          </highlight-code>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <i v-if="isShow[0] === false" class="el-icon-caret-bottom icon-down"></i>
        <i v-else class="el-icon-caret-top icon-down"></i>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import mixin from '../mixin'
  export default {
    name: 'demo',
    mixins: [mixin],
    props: {
      codeStr: {
        type: String,
        default: `<el-button>默认按钮<el-button/>`
      }
    },
    created(){
    }
  }
</script>

<style lang="scss" scoped>

</style>
