<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @@Company: ZZCYI
 * @Author: 王
 * @Date: 2020-10-16 14:24:16
 * @LastEditors: 王
 * @LastEditTime: 2020-10-16 14:35:50
 * @Update Descripttion: 
-->
# 后台下载Excel流文件

<template>
  <demo :codeStr="str">
    后端接口返回流文件，前端下载
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          在接口中配置响应类型：responseType: 'blob'
          示例：日报导出
          export function downDaily() {
            return httpRequest({
              url: httpRequest.adornUrl('/pc/device/statistics/exportDay'),
              method: 'get',
              responseType: 'blob'
            })
          }
          在页面中点击导出按钮
          示例：导出
          handleDownload() {
            downDaily().then(res => { // 此处的res即为流文件
              let blob = new Blob([res.data], {  // 需要取res.data ，如果直接用res，导出的excel数据是[object,object]
                type: 'application/vnd.ms-excel'
              })
              let objectUrl = URL.createObjectURL(blob) // 生成一个url
              let link = document.createElement('a')
              link.style.display = 'none'
              link.href = objectUrl
              link.download = '日报' // 导出的文件名称
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            })
          }
        `
      }
    }
  }
</script>