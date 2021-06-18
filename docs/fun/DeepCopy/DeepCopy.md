# 简单深拷贝

<template>
  <demo :codeStr="str">
   
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          <script>
            export function deepClone (source) {
              if (!source && typeof source !== 'object') {
                throw new Error('error arguments', 'deepClone')
              }
              const targetObj = source.constructor === Array ? [] : {}
              Object.keys(source).forEach(keys => {
                if (source[keys] && typeof source[keys] === 'object') {
                  targetObj[keys] = deepClone(source[keys])
                } else {
                  targetObj[keys] = source[keys]
                }
              })
              return targetObj
            }
          <\/script>
        `
      }
    }
  }
</script>