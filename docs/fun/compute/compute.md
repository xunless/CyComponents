# 处理前端 js 运算浮点数位数问题 ---- 加法运算

<template>
  <demo :codeStr="str">
    <span>加法</span>
    <div class="flex-center">
      <el-input placeholder="请输入一个加数" type="number" style="width:200px;margin-right:10px;" v-model="num1" class="input-with-select"></el-input>
      <el-input placeholder="请输入一个加数" type="number" style="width:200px;margin-right:10px;" v-model="num12" class="input-with-select"></el-input>
    </div>
    <span>加法结果：</span>
    <div class="flex-center">
      <el-button slot="append" style="margin-right:10px;" class="input-with-select" @click="getResult1">直接相加</el-button>
      <div class="flex-center input-with-select">{{resultNum1}}</div>
      <el-button slot="append" style="margin-right:10px;" class="input-with-select">处理之后</el-button>
      <div class="flex-center input-with-select">{{resultNum2}}</div>
    </div>
    <span>减法</span>
    <div class="flex-center">
      <el-input placeholder="请输入一个被减数" type="number" style="width:200px;margin-right:10px;" v-model="numSub1" class="input-with-select"></el-input>
      <el-input placeholder="请输入一个减数" type="number" style="width:200px;margin-right:10px;" v-model="numSub12" class="input-with-select"></el-input>
    </div>
    <span>减法结果：</span>
    <div class="flex-center">
      <el-button slot="append" style="margin-right:10px;" class="input-with-select" @click="getResultSub1">直接相减</el-button>
      <div class="flex-center input-with-select">{{resultNumSub1}}</div>
      <el-button slot="append" style="margin-right:10px;" class="input-with-select">处理之后</el-button>
      <div class="flex-center input-with-select">{{resultNumSub2}}</div>
    </div>
    <span>乘法</span>
    <div class="flex-center">
      <el-input placeholder="请输入一个因数" type="number" style="width:200px;margin-right:10px;" v-model="numMul1" class="input-with-select"></el-input>
      <el-input placeholder="请输入一个因数" type="number" style="width:200px;margin-right:10px;" v-model="numMul12" class="input-with-select"></el-input>
    </div>
    <span>乘法结果：</span>
    <div class="flex-center">
      <el-button slot="append" style="margin-right:10px;" class="input-with-select" @click="getResultMul1">直接相乘</el-button>
      <div class="flex-center input-with-select">{{resultNumMul1}}</div>
      <el-button slot="append" style="margin-right:10px;" class="input-with-select">处理之后</el-button>
      <div class="flex-center input-with-select">{{resultNumMul2}}</div>
    </div>
    <span>除法</span>
    <div class="flex-center">
      <el-input placeholder="请输入一个被除数" type="number" style="width:200px;margin-right:10px;" v-model="numDiv1" class="input-with-select"></el-input>
      <el-input placeholder="请输入一个除数" type="number" style="width:200px;margin-right:10px;" v-model="numDiv12" class="input-with-select"></el-input>
    </div>
    <span>除法结果：</span>
    <div class="flex-center">
      <el-button slot="append" style="margin-right:10px;" class="input-with-select" @click="getResultDiv1">直接相除</el-button>
      <div class="flex-center input-with-select">{{resultNumDiv1}}</div>
      <el-button slot="append" style="margin-right:10px;" class="input-with-select">处理之后</el-button>
      <div class="flex-center input-with-select">{{resultNumDiv2}}</div>
    </div>
  </demo>
</template>

<script>
  // import {Decimal} from 'decimal.js'
  export default {
    data() {
      return {
        num1: 0.1,
        num12: 0.2,
        resultNum1:null,
        resultNum2:null,
        numSub1: 1,
        numSub12: 0.7,
        resultNumSub1:null,
        resultNumSub2:null,
        numMul1: 1.01,
        numMul12: 1.003,
        resultNumMul1:null,
        resultNumMul2:null,
        numDiv1: 0.029,
        numDiv12: 10,
        resultNumDiv1:null,
        resultNumDiv2:null,
        str: `
          <template>
            <div>
              <span>加法</span>
              <div class="flex-center">
                <el-input placeholder="请输入一个加数" type="number" style="width:200px;margin-right:10px;" v-model="num1" class="input-with-select"></el-input>
                <el-input placeholder="请输入一个加数" type="number" style="width:200px;margin-right:10px;" v-model="num12" class="input-with-select"></el-input>
              </div>
              <span>加法结果：</span>
              <div class="flex-center">
                <el-button slot="append" style="margin-right:10px;" class="input-with-select" @click="getResult1">直接相加</el-button>
                <div class="flex-center input-with-select">{{resultNum1}}</div>
                <el-button slot="append" style="margin-right:10px;" class="input-with-select" @click="getResult2">处理之后</el-button>
                <div class="flex-center input-with-select">{{resultNum2}}</div>
              </div>
              <span>减法</span>
              <div class="flex-center">
                <el-input placeholder="请输入一个被减数" type="number" style="width:200px;margin-right:10px;" v-model="numSub1" class="input-with-select"></el-input>
                <el-input placeholder="请输入一个减数" type="number" style="width:200px;margin-right:10px;" v-model="numSub12" class="input-with-select"></el-input>
              </div>
              <span>减法结果：</span>
              <div class="flex-center">
                <el-button slot="append" style="margin-right:10px;" class="input-with-select" @click="getResultSub1">直接相减</el-button>
                <div class="flex-center input-with-select">{{resultNumSub1}}</div>
                <el-button slot="append" style="margin-right:10px;" class="input-with-select" @click="getResultSub2">处理之后</el-button>
                <div class="flex-center input-with-select">{{resultNumSub2}}</div>
              </div>
              <span>乘法</span>
              <div class="flex-center">
                <el-input placeholder="请输入一个因数" type="number" style="width:200px;margin-right:10px;" v-model="numMul1" class="input-with-select"></el-input>
                <el-input placeholder="请输入一个因数" type="number" style="width:200px;margin-right:10px;" v-model="numMul12" class="input-with-select"></el-input>
              </div>
              <span>乘法结果：</span>
              <div class="flex-center">
                <el-button slot="append" style="margin-right:10px;" class="input-with-select" @click="getResultMul1">直接相乘</el-button>
                <div class="flex-center input-with-select">{{resultNumMul1}}</div>
                <el-button slot="append" style="margin-right:10px;" class="input-with-select" @click="getResultMul2">处理之后</el-button>
                <div class="flex-center input-with-select">{{resultNumMul2}}</div>
              </div>
              <span>除法</span>
              <div class="flex-center">
                <el-input placeholder="请输入一个被除数" type="number" style="width:200px;margin-right:10px;" v-model="numDiv1" class="input-with-select"></el-input>
                <el-input placeholder="请输入一个除数" type="number" style="width:200px;margin-right:10px;" v-model="numDiv12" class="input-with-select"></el-input>
              </div>
              <span>除法结果：</span>
              <div class="flex-center">
                <el-button slot="append" style="margin-right:10px;" class="input-with-select" @click="getResultDiv1">直接相除</el-button>
                <div class="flex-center input-with-select">{{resultNumDiv1}}</div>
                <el-button slot="append" style="margin-right:10px;" class="input-with-select" @click="getResultDiv2">处理之后</el-button>
                <div class="flex-center input-with-select">{{resultNumDiv2}}</div>
              </div>
            </div>
          </template>

          <script>
            // 安装 npm i decimal.js
            import {Decimal} from 'decimal.js'
            export default {
              data() {
                return {
                  num1: 0.1,
                  num12: 0.2,
                  resultNum1:null,
                  resultNum2:null,
                  numSub1: 1,
                  numSub12: 0.7,
                  resultNumSub1:null,
                  resultNumSub2:null,
                  numMul1: 1.01,
                  numMul12: 1.003,
                  resultNumMul1:null,
                  resultNumMul2:null,
                  numDiv1: 0.029,
                  numDiv12: 10,
                  resultNumDiv1:null,
                  resultNumDiv2:null,
                }
              },
              created(){
                // 加法
                this.getResult1()
                this.getResult2()
                // 减法
                this.getResultSub1()
                this.getResultSub1()
                // 乘法
                this.getResultMul1()
                this.getResultMul2()
                // 除法
                this.getResultDiv1()
                this.getResultDiv2()
              },
              methods: {
                // 正常计算求和
                getResult1(){
                  this.resultNum1 = Number(this.num1) + Number(this.num12)
                },
                // 调用处理方法计算加法
                getResult2(){
                  this.resultNum2 = this.decimalFun(this.num1,this.num12,'add')
                  // this.resultNum2 = new Decimal(Number(this.num1)).add(new Decimal(Number(this.num12))).toNumber()
                },
                // 正常计算减法
                getResultSub1(){
                  this.resultNumSub1 = Number(this.numSub1) - Number(this.numSub12)
                },
                // 调用处理方法计算减法
                getResultSub2(){
                  this.resultNumSub2 = this.decimalFun(this.numSub1,this.numSub12,'sub')
                },
                // 正常计算乘法
                getResultMul1(){
                  this.resultNumMul1 = Number(this.numMul1) * Number(this.numMul12)
                },
                // 调用处理方法计算乘法
                getResultMul2(){
                  this.resultNumMul2 = this.decimalFun(this.numMul1,this.numMul12,'mul')
                },
                // 正常计算除法
                getResultDiv1(){
                  this.resultNumDiv1 = Number(this.numDiv1) * Number(this.numDiv12)
                },
                // 调用处理方法计算除法
                getResultDiv2(){
                  this.resultNumDiv2 = this.decimalFun(this.numDiv1,this.numDiv12,'div')
                },
                /**
                 * @desc 运算
                 * @param {Number | String} num1 因数|加数|被减数|被除数
                 * @param {Number | String} num2 因数|加数|减数  |除数
                 * @param {String} type 运算类型  add：加法 sub：减法 mul：乘法 div：除法
                 * @returns {Number} result 结果
                 * @author 刘
                 * @time 2020年08月13日 16:49:54 星期四
                 */
                decimalFun (num1, num2, type) {
                  let result = 0
                  let regExp = new RegExp('^[0-9]{1,}(.[0-9]{0,})?$')
                  console.log(regExp.test(num1))
                  if (regExp.test(num1) && regExp.test(num2)) {
                    console.log(regExp)
                    num1 = Number(num1)
                    num2 = Number(num2)
                    result = new Decimal(num1).[type](new Decimal(num2)).toNumber()
                    return result
                  } else {
                    return '请输入正确的加数'
                  }
                }
              }
            }
          <\/script>
          <style>
          .flex-center {
            /* #ifndef APP-NVUE */
            display: flex;
            /* #endif */
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .input-with-select{
            margin-bottom:10px;
          }
          <\/style>
        `
      }
    },
    created(){
      // 加法
      this.getResult1()
      // this.getResult2()
      // 减法
      this.getResultSub1()
      // 乘法
      this.getResultMul1()
      // this.getResultMul2()
      // 除法
      this.getResultDiv1()
      // this.getResultDiv2()
    },
    methods: {
      // 正常计算求和
      getResult1(){
        this.resultNum1 = Number(this.num1) + Number(this.num12)
      },
      // 调用处理方法计算加法
      // getResult2(){
      //   this.resultNum2 = this.decimalFun(this.num1,this.num12,'add')
      //   // this.resultNum2 = new Decimal(Number(this.num1)).add(new Decimal(Number(this.num12))).toNumber()
      // },
      // 正常计算减法
      getResultSub1(){
        this.resultNumSub1 = Number(this.numSub1) - Number(this.numSub12)
      },
      // 调用处理方法计算减法
      // getResultSub2(){
      //   this.resultNumSub2 = this.decimalFun(this.numSub1,this.numSub12,'sub')
      // },
      // 正常计算乘法
      getResultMul1(){
        this.resultNumMul1 = Number(this.numMul1) * Number(this.numMul12)
      },
      // 调用处理方法计算乘法
      // getResultMul2(){
      //   this.resultNumMul2 = this.decimalFun(this.numMul1,this.numMul12,'mul')
      // },
      // 正常计算除法
      getResultDiv1(){
        this.resultNumDiv1 = Number(this.numDiv1) * Number(this.numDiv12)
      },
      // 调用处理方法计算除法
      // getResultDiv2(){
      //   this.resultNumDiv2 = this.decimalFun(this.numDiv1,this.numDiv12,'div')
      // },
      // /**
      //  * @desc 运算
      //  * @param {Number | String} num1 因数|加数|被减数|被除数
      //  * @param {Number | String} num2 因数|加数|减数  |除数
      //  * @param {String} type 运算类型  add：加法 sub：减法 mul：乘法 div：除法
      //  * @returns {Number} result 结果
      //  * @author 刘
      //  * @time 2020年08月13日 16:49:54 星期四
      //  */
      // decimalFun (num1, num2, type) {
      //   let result = 0
      //   let regExp = new RegExp('^[0-9]{1,}(.[0-9]{0,})?$')
      //   console.log(regExp.test(num1))
      //   if (regExp.test(num1) && regExp.test(num2)) {
      //     console.log(regExp)
      //     num1 = Number(num1)
      //     num2 = Number(num2)
      //     result = new Decimal(num1).[type](new Decimal(num2)).toNumber()
      //     return result
      //   } else {
      //     return '请输入正确的加数'
      //   }
      // }
    }
      
  }
</script>

<style>
.flex-center {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.input-with-select{
  margin-bottom:10px;
}
</style>
