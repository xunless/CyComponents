(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1011:function(n,t,e){"use strict";e.r(t);var a={data:()=>({str:"\n\n        <script>\n          onLaunch: function() {\n            console.log('App Launch')\n            /**\n             * 检测小程序更新\n             */\n            // #ifdef MP-WEIXIN\n            const updateManager = wx.getUpdateManager()\n            \n            updateManager.onCheckForUpdate(function (res) {\n              // 请求完新版本信息的回调\n              console.log(res.hasUpdate)\n            })\n            \n            updateManager.onUpdateReady(function () {\n              wx.showModal({\n                title: '更新提示',\n                content: '新版本已经准备好，是否重启应用？',\n                success: function (res) {\n                  if (res.confirm) {\n                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启\n                    updateManager.applyUpdate()\n                  }\n                }\n              })\n            })\n            \n            updateManager.onUpdateFailed(function () {\n              // 新版本下载失败\n            })\n            // #endif\n            \n            \n          }\n        <\/script>\n      "})},s=e(23),o=Object(s.a)(a,(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"微信小程序-版本更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序-版本更新"}},[this._v("#")]),this._v(" 微信小程序 版本更新")]),this._v(" "),[t("demo",{attrs:{codeStr:this.str}},[this._v("\n    将代码放在App.vue页面的onLaunch方法中\n  ")])]],2)}),[],!1,null,null,null);t.default=o.exports}}]);