# 出生日期转换年龄

<template>
  <demo :codeStr="str">
    {{birthday}}=>{{this.age}}
  </demo>
</template>

<script>
  import moment from 'moment'
  export default {
    data() {
      return {
        age:0,
        birthday:'1993-10-18',
        str: `
          <script>
          import moment from 'moment'
            export default {
              data() {
                return {
                  age:0,
                  birthday:'1993-10-18',
                }
              },
              created(){
                this.getAge(this.birthday)
              },
              methods: {
                getAge (birthday) {
                  const text = moment(birthday, 'YYYY-MM-DD').fromNow()
                  this.age = parseInt(text, 10)  // 注意：parseInt(string, radix);第二个参数不能省略，否则会报Lint错误
                  if (isNaN(this.age)) {
                    this.age = '未知'
                  }
                  console.log(this.age)
                  return this.age
                },
              }
            }
          <\/script>
        `
      }
    },
    created(){
      this.getAge(this.birthday)
    },
    methods: {
      getAge (birthday) {
        const text = moment(birthday, 'YYYY-MM-DD').fromNow()
        this.age = parseInt(text, 10)  // 注意：parseInt(string, radix);第二个参数不能省略，否则会报Lint错误
        if (isNaN(this.age)) {
          this.age = '未知'
        }
        console.log(this.age)
        return this.age
      },
    }
  }
</script>