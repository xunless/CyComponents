<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @@Company: ZZCYI
 * @Author: 王
 * @Date: 2020-11-12 09:26:46
 * @LastEditors: 王
 * @LastEditTime: 2020-11-12 10:14:23
 * @Update Descripttion: 
-->
# uniapp蓝牙开锁demo

<template>
  <demo :codeStr="str">
    流程：先发送登录指令，登陆成功后发开锁指令
    <a href="/images/BT.png" target="_blank">
      <img src="/images/BT.png" />
    </a>
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `

          <script>
            export default {
              data() {
                return {
                  loginState: false, // 是否登录成功
                  timeOutObj: null, // 定时器
                  startSearch: false, // 蓝牙连接时间状态
                  dataInfo：{
                    lyName: '', // 蓝牙名称 通过接口获取
                  },
                  blueInfo: {
                    deviceID: null, // 蓝牙设备id
                    serviceUUID: '0000FFE0-0000-1000-8000-00805F9B34FB', // 蓝牙模块的服务id 写死的  可以通过BLE调试宝看到
                    characteristicUUID: null, // 特征值id
                  }
                }
              }，
              methods： {
                // 开锁
                handleUse() {
                  this.loginState = false
                  uni.openBluetoothAdapter({ // 蓝牙初始化
                    success: () => {
                      this.startSearch = true
                      console.log('蓝牙初始化成功')
                      uni.showLoading({
                        title: '正在连接设备',
                        mask: true
                      })
                      this.timeOutObj = setTimeout(_ => { // 30s还没开锁成功就提示失败
                        if (this.startSearch) {
                          console.log('设备搜索失败')
                          this.closeBlue()
                        }
                      }, 30000)
                      uni.startBluetoothDevicesDiscovery({ // 搜寻附近的蓝牙
                        success: (res) => {
                          console.log('附近的蓝牙搜索成功', res)
                          uni.onBluetoothDeviceFound((resBuleList) => { // 监听寻找到新设备的事件
                            console.log(resBuleList.devices[0].name, this.dataInfo.lyName)
                            // 蓝牙匹配成功
                            if (resBuleList.devices[0].name === ('MT' + this.dataInfo.lyName)) {
                              uni.showLoading({
                                title: '正在开锁',
                                mask: true
                              })
                              uni.stopBluetoothDevicesDiscovery({  // 当找到匹配的蓝牙后就关掉蓝牙搜寻,因为蓝牙搜寻很耗性能  
                                success(res) {
                                  console.log('蓝牙搜寻关闭成功')
                                }  
                              })
                              this.blueInfo.deviceID = resBuleList.devices[0].deviceId
                              console.log('deviceID', this.blueInfo.deviceID)
                              uni.createBLEConnection({ //连接低功耗蓝牙设备
                                deviceId: this.blueInfo.deviceID,
                                success: (resConnect) => {
                                  console.log('低功耗蓝牙连接成功')
                                  uni.getBLEDeviceServices({ // 获取蓝牙设备所有服务  
                                    deviceId: this.blueInfo.deviceID,
                                    success: (resDeciceServices) => {
                                      console.log('蓝牙服务获取成功')
                                      console.log(resDeciceServices)
                                      uni.getBLEDeviceCharacteristics({ // 获取蓝牙设备某个服务中所有特征值
                                        deviceId: this.blueInfo.deviceID,
                                        serviceId: this.blueInfo.serviceUUID,
                                        success: (resDeviceCharacteristics) => {
                                          console.log('特征值获取成功')
                                          this.blueInfo.characteristicUUID = resDeviceCharacteristics.characteristics[0].uuid
                                          console.log(this.blueInfo)
                                          uni.notifyBLECharacteristicValueChange({  // 开启notify功能，订阅特征值
                                            state: true,
                                            deviceId: this.blueInfo.deviceID,
                                            serviceId: this.blueInfo.serviceUUID,
                                            characteristicId: this.blueInfo.characteristicUUID,
                                            success: () => {
                                              console.log('notify监听开启成功')
                                              uni.onBLECharacteristicValueChange((resValueChange) => { // 监听低功耗蓝牙设备的特征值变化事件
                                                let bleResData = this.ab2hex(resValueChange.value)
                                                console.log('监听数据返回', bleResData)
                                                if (bleResData.substr(2, 2) === '01' && !this.loginState) { // 蓝牙登录应答
                                                  if (bleResData.substr(6, 2) === '01') { // 登陆成功
                                                    this.loginState = true
                                                    this.openLock()
                                                  } else if (bleResData.substr(6, 2) === '02') { // 登陆失败
                                                    uni.closeBLEConnection({
                                                      deviceId: this.blueInfo.deviceID,
                                                      success(resCloseBLE) {
                                                        console.log('低功耗蓝牙设备断开成功', resCloseBLE)
                                                      }
                                                    })
                                                    this.closeBlue()
                                                  }
                                                } else if (bleResData.substr(2, 2) === '02') { // 开锁应答
                                                  if (bleResData.substr(6, 2) === '01') { // 开锁成功
                                                    uni.hideLoading()
                                                    this.startSearch = false
                                                    this.$toast('开锁成功', true)
                                                    this.createOrder()
                                                    uni.closeBLEConnection({
                                                      deviceId: this.blueInfo.deviceID,
                                                      success(resCloseBLE) {
                                                        console.log('低功耗蓝牙设备断开成功', resCloseBLE)
                                                      }
                                                    })
                                                    uni.closeBluetoothAdapter()
                                                  } else if (bleResData.substr(6, 2) === '02') { // 开锁失败
                                                    uni.closeBLEConnection({
                                                      deviceId: this.blueInfo.deviceID,
                                                      success(resCloseBLE) {
                                                        console.log('低功耗蓝牙设备断开成功', resCloseBLE)
                                                      }
                                                    })
                                                    this.closeBlue()
                                                  }
                                                }
                                              })
                                              
                                            },
                                            fail: (err) => {
                                              console.log('notify监听开启失败', err)
                                              this.closeBlue()
                                            }
                                          })
                                          // 登陆指令
                                          this.loginBt()
                                        }
                                      })
                                    },
                                    fail: (err) => {
                                      console.log('蓝牙服务获取失败', err)
                                      // 断开与低功耗蓝牙设备的连接
                                      uni.closeBLEConnection({
                                        deviceId: this.blueInfo.deviceID,
                                        success(resCloseBLE) {
                                          console.log('低功耗蓝牙设备断开成功', resCloseBLE)
                                        }
                                      })
                                      this.closeBlue()
                                    }
                                  })
                                },
                                fail: (err) => {
                                  console.log('低功耗蓝牙连接失败', err)
                                  this.closeBlue()
                                }
                              })
                            }
                          })
                        },
                        fail: (err) => {
                          console.log('附近的蓝牙搜索失败', err)
                          this.closeBlue()
                        }
                      })
                    },
                    fail: (res) => {
                      console.log('蓝牙初始化失败')
                      if (res.errCode == 10001) {  
                        this.$toast('蓝牙未打开')
                      } else {
                        this.$toast(res.errMsg)
                      } 
                    }
                  })
                  
                },
                // 登录指令
                loginBt() {
                  const buffer = new ArrayBuffer(12)
                  const dataView = new DataView(buffer)
                  dataView.setUint8(0, 0x3A)
                  dataView.setUint8(1, 0x01)
                  dataView.setUint8(2, 0x08)
                  let arr = [0x3A, 0x01, 0x08]
                  // 锁编码转为16进制   字节长度8位 不足8位前面补0
                  let code = Number(this.dataInfo.lockCode).toString(16).padStart(16, 0)
                  // IMEI
                  for(let i = 3; i < 11; i++) {
                    let imeiByte = code.substr((i - 3) * 2, 2)
                    dataView.setUint8(i, Number('0x' + imeiByte))
                    arr.push(Number('0x' + imeiByte))
                  }
                  // 校验和
                  let sum = 0
                  for (let i = 0; i < arr.length; i++) {
                    sum += arr[i]
                  }
                  sum = sum.toString(16)
                  console.log('校验和', sum)
                  dataView.setUint8(11, Number('0x' + sum.substring(sum.length - 2)))
                  this.writeBTData(buffer)
                },
                // 开锁指令
                openLock() {
                  const buffer = new ArrayBuffer(5)
                  const dataView = new DataView(buffer)
                  dataView.setUint8(0, 0x3A)
                  dataView.setUint8(1, 0x02)
                  dataView.setUint8(2, 0x01)
                  dataView.setUint8(3, Number('0x' + this.dataInfo.passNum))
                  let sum = 0x3A + 0x02 + 0x01 + Number('0x' + this.dataInfo.passNum)
                  sum = sum.toString(16)
                  dataView.setUint8(4, Number('0x' + sum.substring(sum.length - 2)))
                  this.writeBTData(buffer)
                },
                // 写入数据
                writeBTData(buffer) {
                  uni.writeBLECharacteristicValue({
                    deviceId: this.blueInfo.deviceID,
                    serviceId: this.blueInfo.serviceUUID,
                    characteristicId: this.blueInfo.characteristicUUID,
                    value: buffer,
                    success: (resWrite) => {
                      console.log('写入数据成功', resWrite)
                    },
                    fail: (err) => {
                      console.log('写入数据失败', err)
                      this.closeBlue()
                    }
                  })
                },
                // 关闭蓝牙
                closeBlue() {
                  uni.hideLoading()
                  // 清除定时器
                  if (this.timeOutObj) {
                    clearTimeout(this.timeOutObj)
                  }
                  this.$toast('开锁失败，请重试')
                  uni.closeBluetoothAdapter({
                    success(res) {
                      console.log('蓝牙关闭成功')
                    }
                  })
                },
                // ArrayBuffer转16进度字符串
                ab2hex(buffer) {
                  const hexArr = Array.prototype.map.call(
                    new Uint8Array(buffer),
                    function (bit) {
                      return ('00' + bit.toString(16)).slice(-2)
                    }
                  )
                  return hexArr.join('')
                },
              }
            }
          <\/script>
        `
      }
    }
  }
</script>