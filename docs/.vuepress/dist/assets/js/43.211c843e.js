(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1006:function(s,e,t){"use strict";t.r(e);var n={data:()=>({day:null,leave1:null,hours:null,leave2:null,minutes:null,leave3:null,seconds:null,nowTime:null,endtime:null,str:'\n          <template>\n            <cy-upload :imageUrl="link" @backData="back"></cy-upload>\n          </template>\n\n          <script>\n            export default {\n              data() {\n                return {\n                  link: \'\'\n                }\n              },\n              methods: {\n                back(value) {\n                  this.link = value\n                }\n              }\n            }\n          <\/script>\n        '}),created(){var s=this;s.endtime=(new Date).getTime()+864e5,setInterval((function(){s.nowTime=(new Date).getTime(),s.seckillTime()}),1e3)},methods:{seckillTime(){var s=this.endtime-this.nowTime;return console.log(s),this.day=Math.floor(s/864e5),this.leave1=s%864e5,this.hours=Math.floor(this.leave1/36e5),this.leave2=this.leave1%36e5,this.minutes=Math.floor(this.leave2/6e4),this.leave3=this.leave2%6e4,this.seconds=Math.floor(this.leave3/1e3),this.hours<10&&(this.hours="0"+this.hours),this.minutes<10&&(this.minutes="0"+this.minutes),this.seconds<10&&(this.seconds="0"+this.seconds),this.day?this.day+"天"+this.hours+"小时"+this.minutes+"分"+this.seconds+"秒":this.hours?this.hours+"小时"+this.minutes+"分"+this.seconds+"秒":this.minutes?this.minutes+"分"+this.seconds+"秒":this.seconds?this.seconds+"秒":"时间到！"}}},i=t(23),l=Object(i.a)(n,(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"倒计时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#倒计时"}},[s._v("#")]),s._v(" 倒计时")]),s._v(" "),[t("demo",{attrs:{codeStr:s.str}},[s._v("\n  "+s._s(s.day)+"天"+s._s(s.hours)+"时"+s._s(s.minutes)+"分"+s._s(s.seconds)+"秒\n  ")])]],2)}),[],!1,null,null,null);e.default=l.exports}}]);