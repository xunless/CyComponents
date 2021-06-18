# css实现不规则图形

![image](/images/ps05.jpg)

<template>
  <demo :codeStr="str">
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          <template>
            <view class="container">
                <img alt="洛神檸檬奇亞籽" class="core-tile__image"src="static/picture/choiceness-img-1.jpg" title="洛神檸檬奇亞籽"/>
                  <svg height="0" width="0">
                      <defs>
                        <clipPath id="svgPath2">
                          <path fill-rule="evenodd"  fill="rgb(9, 193, 95)"
d="M33.248,4.410 C76.206,-3.904 202.375,2.518 262.630,4.410 C322.884,6.303 349.931,159.282 292.091,187.494 C234.252,215.706 117.286,205.364 72.181,202.225 C27.074,199.087 1.884,172.627 0.630,113.840 C-0.624,55.053 -1.097,11.058 33.248,4.410 Z"/>
                        </clipPath>
                      </defs>
                    </svg>
            </view>
          </template>

          <style>
              img {
                  width: 100%;
                  height: 100%;
                  -webkit-clip-path: url(#svgPath2);  
                  clip-path: url(#svgPath2);
              }
          <\/style>
        `
      }
    }
  }
</script>