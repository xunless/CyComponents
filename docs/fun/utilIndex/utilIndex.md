# 截取订单号或者交易号中的部分替换为 "***"

<template>
  <demo :codeStr="str">
    <div class="flex-center">
      <el-input placeholder="请输入一个加数" type="text" style="width:200px;margin-right:10px;" v-model="no" class="input-with-select"></el-input>
      <el-input placeholder="请输入被替换部分的长度（要小于原数据长度）" type="number" style="width:200px;margin-right:10px;" v-model="lengthNum" class="input-with-select"></el-input>
    </div> 
    <span>结果：</span>
    <div class="flex-center">
      <el-button slot="append" style="margin-right:10px;" class="input-with-select" @click="getResult">结果</el-button>
      <div class="flex-center input-with-select">{{resultNum}}</div>
    </div>
  </demo>
</template>

<script>
  // import {Decimal} from 'decimal.js'
  export default {
    data() {
      return {
        no: '12345678945145212142',
        lengthNum: 10,
        resultNum:'',
        str: `
          <template>
            <demo :codeStr="str">
              <div class="flex-center">
                <el-input placeholder="请输入一个加数" type="text" style="width:200px;margin-right:10px;" v-model="no" class="input-with-select"></el-input>
                <el-input placeholder="请输入被替换部分的长度（要小于原数据长度）" type="number" style="width:200px;margin-right:10px;" v-model="lengthNum" class="input-with-select"></el-input>
              </div>
              <span>结果：</span>
              <div class="flex-center">
                <el-button slot="append" style="margin-right:10px;" class="input-with-select" @click="getResult">结果</el-button>
                <div class="flex-center input-with-select">{{resultNum}}</div>
              </div>
            </demo>
          </template>

          <script>
            export default {
              data() {
                return {
                  no: '12345678945145212142',
                  lengthNum: 10,
                  resultNum:'',
                }
              },
              created(){
                this.getResult()
              },
              methods: {
                getResult(){
                  this.resultNum = this.cutNo(this.no,this.lengthNum)
                },
                /**
                 * @description 截取订单号或者交易号中的部分替换为'***'
                 * @param {String|Number} no 订单号或者交易号
                 * @param {Number} length 被替换部分的长度（要小于原数据长度）
                 * */
                cutNo(no,length){
                  let surplusLength = no.length - length; // 剩余的长度
                  let startEnd = (surplusLength/2); // 前面的结尾
                  let endStart = -startEnd; // 后面的开头
                  return no.slice(0,startEnd)+'***'+no.slice(endStart);
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
      this.getResult()
    },
    methods: {
      getResult(){
        this.resultNum = this.cutNo(this.no,this.lengthNum)
      },
      /**
       * @description 截取订单号或者交易号中的部分替换为'***'
       * @param {String|Number} no 订单号或者交易号
       * @param {Number} length 被替换部分的长度（要小于原数据长度）
       * */
      cutNo(no,length){
        let surplusLength = no.length - length; // 剩余的长度
        let startEnd = (surplusLength/2); // 前面的结尾
        let endStart = -startEnd; // 后面的开头
        return no.slice(0,startEnd)+'***'+no.slice(endStart);
      }
      
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
