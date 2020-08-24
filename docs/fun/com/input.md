# 常用输入框正则验证方法

  <template>
    <demo :codeStr="str">
     <el-input placeholder="请输入邮箱" v-model="input" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="seach"></el-button>
      </el-input>
      <el-input placeholder="请输入手机号码" v-model="input1" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="seach1"></el-button>
      </el-input>
      <el-input placeholder="请输入电话号码" v-model="input2" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="seach2"></el-button>
      </el-input>
      <el-input placeholder="请输入URL地址" v-model="input3" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="seach3"></el-button>
      </el-input>
      <el-input placeholder="请输入8-16位数字和字母密码" v-model="input4" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="seach4"></el-button>
      </el-input>
      <el-input placeholder="请输入中文" v-model="input5" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="seach5"></el-button>
      </el-input>
      <el-input placeholder="请输入身份证号码" v-model="input6" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="seach6"></el-button>
      </el-input>
      <el-input placeholder="请输入仅由英文字母，数字以及下划线组成" v-model="input7" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="seach7"></el-button>
      </el-input>
      <el-input placeholder="请输入正整数" v-model="input8" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="seach8"></el-button>
      </el-input>
      <el-input placeholder="请输入两位小数" v-model="input9" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="seach9"></el-button>
      </el-input>
    </demo>
  </template>

  <script>
    export default {
      data() {
        return {
          input:'',
          input1:'',
          input2:'',
          input3:'',
          input4:'',
          input5:'',
          input6:'',
          input7:'',
          input8:'',
          input9:'',
          str:`
             <template>
              <el-input placeholder="请输入邮箱" v-model="input" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="seach"></el-button>
              </el-input>

              <el-input placeholder="请输入手机号码" v-model="input1" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="seach1"></el-button>
              </el-input>

              <el-input placeholder="请输入电话号码" v-model="input2" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="seach2"></el-button>
              </el-input>

              <el-input placeholder="请输入URL地址" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="seach3"></el-button>
              </el-input>

              <el-input placeholder="请输入8-16位数字和字母密码" v-model="input4" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="seach4"></el-button>
              </el-input>

              <el-input placeholder="请输入中文" v-model="input5" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="seach5"></el-button>
              </el-input>

              <el-input placeholder="请输入身份证号码" v-model="input6" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="seach6"></el-button>
              </el-input>

              <el-input placeholder="请输入仅由英文字母，数字以及下划线组成" v-model="input7" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="seach7"></el-button>
              </el-input>

              <el-input placeholder="请输入正整数" v-model="input8" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="seach8"></el-button>
              </el-input>
              
              <el-input placeholder="请输入两位小数" v-model="input9" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="seach9"></el-button>
              </el-input>
            </template>

             <script>
              export default {
                data() {
                  return {
                    input:'',
                    input1:'',
                    input2:'',
                    input3:'',
                    input4:'',
                    input5:'',
                  }
                },
                methods:{
                  seach(){
                    if(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(this.input)){
                      this.$message({
                        message: '恭喜你,这是一条成功消息',
                        type: 'success'
                      })
                    }else{
                      this.$message.error('错了哦，这是一条错误消息');
                    }
                  },
                  seach1(){
                    if(/^1[0-9]{10}$/.test(this.input1)){
                      this.$message({
                        message: '恭喜你,这是一条成功消息',
                        type: 'success'
                      })
                    }else{
                      this.$message.error('错了哦，这是一条错误消息');
                    }
                  },
                  seach2(){
                    if(/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(this.input2)){
                      this.$message({
                        message: '恭喜你,这是一条成功消息',
                        type: 'success'
                      })
                    }else{
                      this.$message.error('错了哦，这是一条错误消息');
                    }
                  },
                  seach3(){
                    if(/^http[s]?:\/\/.*/.test(this.input3)){
                      this.$message({
                        message: '恭喜你,这是一条成功消息',
                        type: 'success'
                      })
                    }else{
                      this.$message.error('错了哦，这是一条错误消息');
                    }
                  },
                  seach4(){
                    if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(this.input4)){
                      this.$message({
                        message: '恭喜你,这是一条成功消息',
                        type: 'success'
                      })
                    }else{
                      this.$message.error('错了哦，这是一条错误消息');
                    }
                  },
                  seach5(){
                    if(/^[\u4e00-\u9fa5]*$/.test(this.input5)){
                      this.$message({
                        message: '恭喜你,这是一条成功消息',
                        type: 'success'
                      })
                    }else{
                      this.$message.error('错了哦，这是一条错误消息');
                    }
                  },
                  seach6(){
                    if(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.input6)){
                      this.$message({
                        message: '恭喜你,这是一条成功消息',
                        type: 'success'
                      })
                    }else{
                      this.$message.error('错了哦，这是一条错误消息');
                    }
                  },
                  seach7(){
                    if(/^[_a-zA-Z0-9]+$/.test(this.input7)){
                      this.$message({
                        message: '恭喜你,这是一条成功消息',
                        type: 'success'
                      })
                    }else{
                      this.$message.error('错了哦，这是一条错误消息');
                    }
                  },
                  seach8(){
                    if(/^[0-9]*[1-9][0-9]*$/.test(this.input8)){
                      this.$message({
                        message: '恭喜你,这是一条成功消息',
                        type: 'success'
                      })
                    }else{
                      this.$message.error('错了哦，这是一条错误消息');
                    }
                  },
                  seach9(){
                    if(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(this.input9)){
                      this.$message({
                        message: '恭喜你,这是一条成功消息',
                        type: 'success'
                      })
                    }else{
                      this.$message.error('错了哦，这是一条错误消息');
                    }
                  }
                }
              }
            <\/script>
          `
        }
      },
      methods:{
        seach(){
          if(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(this.input)){
             this.$message({
              message: '恭喜你,这是一条成功消息',
              type: 'success'
            })
          }else{
            this.$message.error('错了哦，这是一条错误消息');
          }
        },
        seach1(){
           if(/^1[0-9]{10}$/.test(this.input1)){
             this.$message({
              message: '恭喜你,这是一条成功消息',
              type: 'success'
            })
          }else{
            this.$message.error('错了哦，这是一条错误消息');
          }
        },
        seach2(){
          if(/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(this.input2)){
             this.$message({
              message: '恭喜你,这是一条成功消息',
              type: 'success'
            })
          }else{
            this.$message.error('错了哦，这是一条错误消息');
          }
        },
        seach3(){
          if(/^http[s]?:\/\/.*/.test(this.input3)){
             this.$message({
              message: '恭喜你,这是一条成功消息',
              type: 'success'
            })
          }else{
            this.$message.error('错了哦，这是一条错误消息');
          }
        },
        seach4(){
          if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(this.input4)){
             this.$message({
              message: '恭喜你,这是一条成功消息',
              type: 'success'
            })
          }else{
            this.$message.error('错了哦，这是一条错误消息');
          }
        },
        seach5(){
          if(/^[\u4e00-\u9fa5]*$/.test(this.input5)){
             this.$message({
              message: '恭喜你,这是一条成功消息',
              type: 'success'
            })
          }else{
            this.$message.error('错了哦，这是一条错误消息');
          }
        },
        seach6(){
          if(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.input6)){
             this.$message({
              message: '恭喜你,这是一条成功消息',
              type: 'success'
            })
          }else{
            this.$message.error('错了哦，这是一条错误消息');
          }
        },
        seach7(){
          if(/^[_a-zA-Z0-9]+$/.test(this.input7)){
             this.$message({
              message: '恭喜你,这是一条成功消息',
              type: 'success'
            })
          }else{
            this.$message.error('错了哦，这是一条错误消息');
          }
        },
        seach8(){
          if(/^[0-9]*[1-9][0-9]*$/.test(this.input8)){
             this.$message({
              message: '恭喜你,这是一条成功消息',
              type: 'success'
            })
          }else{
            this.$message.error('错了哦，这是一条错误消息');
          }
        },
        seach9(){
          if(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(this.input9)){
             this.$message({
              message: '恭喜你,这是一条成功消息',
              type: 'success'
            })
          }else{
            this.$message.error('错了哦，这是一条错误消息');
          }
        }
      }
    }
</script>

<style>
  .input-with-select{
    margin-bottom:10px;
  }
</style>

