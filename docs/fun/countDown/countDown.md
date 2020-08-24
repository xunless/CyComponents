# 倒计时

<template>
  <demo :codeStr="str">
  {{day}}天{{hours}}时{{minutes}}分{{seconds}}秒
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        day:null,
        leave1:null,
        hours:null,
        leave2:null,
        minutes:null,
        leave3:null,
        seconds:null,
        nowTime:null, // 当前时间
        endtime:null,// 结束时间
        str: `
          <template>
            <cy-upload :imageUrl="link" @backData="back"></cy-upload>
          </template>

          <script>
            export default {
              data() {
                return {
                  link: ''
                }
              },
              methods: {
                back(value) {
                  this.link = value
                }
              }
            }
          <\/script>
        `
      }
    },
    created(){
      var thas=this
      thas.endtime=new Date().getTime()+86400000
      setInterval(function(){
				thas.nowTime=new Date().getTime()
        thas.seckillTime()
			},1000)
    },
    methods: {
      seckillTime () {
        var timeStamp = this.endtime - this.nowTime
        console.log(timeStamp)
        this.day = Math.floor(timeStamp / (24 * 3600 * 1000))
        this.leave1 = timeStamp % (24 * 3600 * 1000)
        this.hours = Math.floor(this.leave1 / (3600 * 1000))
        this.leave2 = this.leave1 % (3600 * 1000)
        this.minutes = Math.floor(this.leave2 / (60 * 1000))
        this.leave3 = this.leave2 % (60 * 1000)
        this.seconds = Math.floor(this.leave3 / 1000)
        if(this.hours<10){
          this.hours='0'+this.hours
        }
        if(this.minutes<10){
          this.minutes='0'+this.minutes
        }
        if(this.seconds<10){
          this.seconds='0'+this.seconds
        }
        if (this.day) {
          return this.day + '天' + this.hours + '小时' + this.minutes + '分'+ this.seconds + '秒'
        }
        if (this.hours) return this.hours + '小时' + this.minutes + '分' + this.seconds + '秒'
        if (this.minutes) return this.minutes + '分' + this.seconds + '秒'
        if (this.seconds) return this.seconds + '秒'
        return '时间到！'
      }
    }
  }
</script>