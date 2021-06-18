# vue-打印功能

### 方法一
#### 一、安装
```
  npm install vue-print-nb
```
#### 二、main.js引入
```
  import Print from 'vue-print-nb'
  Vue.use(Print)
```
#### 三、使用
``` 
<div id="printContent">
  <p>打印的内容</p>    
</div>
<button v-print="'#printContent'">打印</button>
```

### 方法二
#### 一、安装
```
  npm install html2canvas
  npm install print-js
```
#### 二、要打印的页面内引入使用
```
  import html2Canvas from 'html2canvas'
  import printJs from 'print-js'

  template
    <div id="pdfDom">
    ...
    </div>
    <button @click="handlePrint()">打印</button>
  script
    handlePrint () {
      html2Canvas(document.querySelector('#pdfDom'), {
        allowTaint: true,
        taintTest: false,
        useCORS: true,
        width: 640,
        dpi: window.devicePixelRatio * 4, // 将分辨率提高到特定的DPI 提高四倍
        scale: 4 // 按比例增加分辨率
      }).then((canvas) => {
        const url = canvas.toDataURL()
        printJs({
          printable: url,
          type: 'image',
          documentTitle: 'bill'
        })
      })
    }

```


