(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{372:function(e,t,a){"use strict";function n(e,t){var a;t=t||500;return function(){console.log("调用了debounce方法");let n=arguments;a&&clearTimeout(a),a=setTimeout(()=>{a=null,e.apply(this,n)},t)}}function i(e,t){var a,n;t=t||3e3;return function(){console.log("调用了throttle方法");var i=this,l=arguments,r=+new Date;a&&r-a<t?(clearTimeout(n),n=setTimeout((function(){a=r,e.apply(i,l)}),t)):(a=r,e.apply(i,l))}}function l(e,t,a){const n=document.createElement("canvas"),i=n.getContext("2d"),{width:l,height:r}=e;n.width=l,n.height=r,i.fillStyle="#fff",i.fillRect(0,0,n.width,n.height),i.drawImage(e,0,0,l,r);return function(e){var t=e.split(","),a=t[0].match(/:(.*?);/)[1],n=atob(t[1]),i=n.length;const l=new Uint8Array(i);for(;i--;)l[i]=n.charCodeAt(i);return new Blob([l],{type:a})}(n.toDataURL("image/jpeg",a||.7))}a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return l}))},650:function(e,t,a){},974:function(e,t,a){"use strict";a(650)},982:function(e,t,a){"use strict";a.r(t);var n=a(372);var i="http://59.110.153.79:9047",l={name:"UploadComOne",props:{fileName:{type:String,default:"/img"},accept:{type:String,default:"image/png, image/jpg, image/jpeg, image/gif"},imageUrl:{type:String,default:null}},data:()=>({urlAction:i+"/api/common/upload",url_:i,uploadLink:null,number:0,progressFlag:!1}),watch:{imageUrl(e,t){this.uploadLink=e}},created(){this.uploadLink=this.imageUrl},methods:{handleAvatarSuccess(e,t){this.uploadLink=e.data,this.back(this.uploadLink)},handleDel(){this.uploadLink=null,this.back(this.uploadLink)},beforeAvatarUpload(e){return console.log(e),new Promise((t,a)=>{if(e.size/1024/1024<5||(this.$message.error("上传文件大小不能超过 5MB!"),a()),"image/png, image/jpg, image/jpeg, image/gif"===this.accept){const a=new Image;a.src=URL.createObjectURL(e),a.onload=()=>{const i=Object(n.a)(a,e);t(i)}}else t(e)})},handleOnProgress(e,t,a){this.progressFlag=!0,this.number=e.percent,100===e.percent&&(this.progressFlag=!1),console.log(e,t,a)},back(e){this.$emit("backData",e)}}},r=(a(974),a(23)),o=Object(r.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.urlAction,data:{folderName:e.fileName},accept:e.accept,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"on-progress":e.handleOnProgress,"before-upload":e.beforeAvatarUpload}},["image/png, image/jpg, image/jpeg, image/gif"===e.accept?[e.uploadLink?a("img",{staticClass:"avatar",attrs:{src:e.url_+e.uploadLink}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]:[e.uploadLink?a("span",[e._v(e._s(e.uploadLink.split("/")[e.uploadLink.split("/").length-1]))]):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]],2),e._v(" "),e.progressFlag?a("el-progress",{attrs:{percentage:e.number,"show-text":!1}}):e._e(),e._v(" "),"video/*"===e.accept&&e.uploadLink?a("el-link",{attrs:{type:"primary",href:e.url_+e.uploadLink,target:"_blank"}},[e._v("预览")]):"image/png, image/jpg, image/jpeg, image/gif"===e.accept&&e.uploadLink?a("el-link",{attrs:{underline:!1,href:e.url_+e.uploadLink,target:"_blank"}},[a("i",{staticClass:"el-icon-view"}),e._v("\n    预览\n  ")]):e._e(),e._v(" "),e.uploadLink?a("el-link",{attrs:{underline:!1},on:{click:e.handleDel}},[a("i",{staticClass:"el-icon-delete"}),e._v("\n    删除\n  ")]):e._e()],1)}),[],!1,null,null,null);t.default=o.exports}}]);