module.exports = {
  title: "诚毅物联网",
  description: "诚毅物联网-前端组件库",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/favicon.ico`,
      },
    ],
    [
      "script",
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js",
      },
    ],
    [
      "script",
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css",
      },
    ],
  ],
  dest: "./docs/.vuepress/dist",
  ga: "",
  evergreen: true,
  themeConfig: {
    logo: "/images/logo.png",
    sidebar: "auto",
    sidebarDepth: 2,
    lastUpdated: "上次更新",
    nav: [{
        text: "vue页面及组件",
        link: "/guide/",
      },
      {
        text: "UNIAPP页面及组件",
        link: "/uniapp/",
      },
      {
        text: "常用js方法总结",
        link: "/fun/",
      },
      {
        text: "常用Css样式总结",
        link: "/Css/",
      },
      // {
      //   text: "语言",
      //   items: [
      //     {
      //       text: "Chinese",
      //       link: "/language/chinese",
      //     },
      //     {
      //       text: "English",
      //       link: "/language/english",
      //     },
      //   ],
      // },
    ],
    sidebar: {
      "/fun/": [
        ["", "介绍"],
        {
          title: "公用js方法",
          collapsable: false,
          children: [{
              path: "/fun/com/input",
              title: "正则验证",
            },
            {
              path: "/fun/request/request",
              title: "封装请求",
            },
            {
              path: "/fun/PictureUpload/PictureUpload",
              title: "uni-app 图片上传",
            },
            {
              path: "/fun/VersionUpdate/VersionUpdate",
              title: "uni-app 版本更新",
            },
            {
              path: "/fun/WechatJSSDK/WechatJSSDK",
              title: "微信 JSSDK 授权",
            },
            {
              path: "/fun/WechatCode/WechatCode",
              title: "微信公众号获取Code与用户信息",
            },
            {
              path: "/fun/RouteRefresh/RouteRefresh",
              title: "vue后台 点击侧边栏 刷新当前路由",
            },
            {
              path: "/fun/JavaSocket/JavaSocket",
              title: "java中使用socket的方法",
            },
            {
              path: "/fun/webScanCode/webScanCode",
              title: "WEB页面扫码",
            },
            {
              path: "/fun/base64/base64",
              title: "base64文件与图片转换",
            },
            {
              path: "/fun/DeepCopy/DeepCopy",
              title: "简单深拷贝",
            },
            {
              path: "/fun/countDown/countDown",
              title: "倒计时",
            },
            {
              path: "/fun/ShakeProof/ShakeProof",
              title: "防抖节流",
            },
            {
              path: "/fun/TimeFiltering/TimeFiltering",
              title: "时间过滤",
            },
            {
              path: "/fun/canvas/canvas",
              title: "简单canvas",
            },
            {
              path: "/fun/CompressPicture/CompressPicture",
              title: "JS压缩图片",
            },
            {
              path: "/fun/AgeShift/AgeShift",
              title: "年龄转换",
            },
            {
              path: "/fun/compute/compute",
              title: "处理前端js运算浮点数位数问题",
            },
            {
              path: "/fun/payment/payment",
              title: "uniapp 支付",
            },
            {
              path: '/fun/Amap/amap',
              title: 'vue后台高德地图'
            },
            {
              path: '/fun/utilIndex/utilIndex',
              title: '截取订单号或者交易号中的部分替换为 "***"'
            },
            {
              path: '/fun/wxVersion/wxVersion',
              title: '微信小程序 版本更新'
            },
            {
              path: '/fun/DownloadStreamFile/DownloadStreamFile',
              title: '后台下载Excel流文件'
            },
            {
              path: '/fun/BTunlock/BTunlock',
              title: 'uniapp蓝牙开锁demo'
            }
          ],
        },
      ],

      "/guide/": [
        ["", "快速上手"],
        {
          title: "组件",
          collapsable: false,
          sidebarDepth: 2,
          children: [{
              path: "/guide/upload/upload",
              title: "Upload",
            },
            {
              path: "/guide/map/map",
              title: "vue 三方地图",
            },
            {
              path: "/guide/QRCode/QRCode",
              title: "vue 二维码显示 下载",
            },
            {
              path: "/guide/MapDrilling/MapDrilling",
              title: "Echarts地图钻取",
            },
            {
              path: "/guide/progressBar/progressBar",
              title: "刻度尺进度条组件",
            },
            {
              path: "/guide/EchartsMap/EchartsMap",
              title: "Echarts地图封装",
            },
            {
              path: "/guide/px-rem/px-rem",
              title: "vue中px转rem",
            },
            {
              path: "/guide/uploadJavaServe/uploadJavaServe",
              title: "java后台项目上传宝塔服务器流程",
            },
            {
              path: "/guide/ossUpload/ossUpload",
              title: "阿里云oss上传",
            },
            {
              path: "/guide/googleMap/googleMap",
              title: "vue-谷歌地图",
            },
            {
              path: "/guide/vuePrint/vuePrint",
              title: "vue-打印功能",
            },
            {
              path: "/guide/Echarts3DPie/echarts3DPie",
              title: "vue-echarts3d饼图",
            },
          ],
        },
      ],
      "/uniapp/": [
        ["", "介绍"],
        {
          title: "页面",
          collapsable: false,
          sidebarDepth: 2,
          children: [{
              path: "/uniapp/page/page",
              title: "海报下载",
            },
            {
              path: "/uniapp/com/com",
              title: "隐藏式状态栏",
            },
          ],
        },
        {
          collapsable: false,
          title: "组件",
          sidebarDepth: 2,
          children: [{
              path: "/uniapp/DataStatus/DataStatus",
              title: "数据状态组件",
            },
            {
              path: "/uniapp/RollingClassification/RollingClassification",
              title: "常见商城滚动分类",
            },
            {
              path: "/uniapp/ClassificationSegmenter/ClassificationSegmenter",
              title: "常见分类分段器",
            },
            {
              path: "/uniapp/Custom-Navbar/Custom-Navbar",
              title: "自定义navbar",
            },
            {
              path: "/uniapp/Custom-UIcell/Custom-UIcell",
              title: "自定义 ui-cell",
            },
            {
              path: "/uniapp/SlidingNavbar/SlidingNavbar",
              title: "滑动navbar",
            },
            {
              path: "/uniapp/OrderListPage/OrderListPage",
              title: "订单列表页",
            },
            {
              path: "/uniapp/WaterfallFlow/WaterfallFlow",
              title: "瀑布流 Demo",
            },
            {
              path: "/uniapp/xfl-select/xfl-select",
              title: "下拉框组件",
            },
            {
              path: "/uniapp/Multilingualism/Multilingualism",
              title: "多语言",
            },
            {
              path: "/uniapp/LoadAndRefresh/LoadAndRefresh",
              title: "nve 上拉加载下拉刷新",
            },
            {
              path: "/uniapp/CustomTabbar/CustomTabbar",
              title: "自定义tabbar",
            },
            {
              path: "/uniapp/GlobalPop-upWindow/GlobalPop-upWindow",
              title: "全局弹窗，覆盖原生导航栏和tabbar（只支持app使用）",
            },
            {
              path: "/uniapp/AuroraPush/AuroraPush",
              title: "极光推送ios插件",
            },
            {
              path: "/uniapp/AudioPlayback/AudioPlayback",
              title: "安卓音频播放插件",
            },
            {
              path: "/uniapp/canvasDrawChart/canvasDrawChart",
              title: "uniapp 使用canvas绘制简单图表",
            },
            {
              path: "/uniapp/Bluetooth/Bluetooth",
              title: "uniapp 佳博蓝牙打印",
            },
            {
              path: "/uniapp/WiFiNetWork/WiFiNetWork",
              title: "uniapp WiFi配网",
            },
          ],
        },
      ],
      "/Css/": [{
        title: "样式",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ["", "介绍"],
          {
            path: "/Css/flex/flex",
            title: "巧妙使用flex布局实现手机自适应",
          },
          {
            path: "/Css/row/row",
            title: "css多行/单行显示...",
          },
          {
            path: "/Css/HorizontalArrangement/HorizontalArrangement",
            title: "多个元素水平自动排列，自动换行，每行元素两边对齐",
          },
          {
            path: "/Css/IrregularFigure/IrregularFigure",
            title: "css实现不规则图形",
          }, {
            path: '/Css/DiscolorationOfwords/DiscolorationOfwords',
            title: 'css文字渐变色'
          }
        ],
      }, ],
    },
  },
};