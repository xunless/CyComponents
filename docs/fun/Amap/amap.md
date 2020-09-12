# 常用后台高德地图

  <template>
    <demo :codeStr="str">
      <!-- <el-input  placeholder="请输入经度" v-model="commitFrom.labLongitude"/>
      <el-input  placeholder="请输入纬度" v-model="commitFrom.labLatitude"/>
      <el-input  placeholder="请输入地址" v-model="commitFrom.labAddress"/>
     <el-amap
        style="height:450px"
        vid="amapDemo1"
        :center="center"
        :zoom="zoom"
        class="amap-demo"
        :events="events"
      >
        <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker" />
      </el-amap> -->
    </demo>
  </template>

  <script>
    // import Vue from 'vue'
    // import VueAMap from 'vue-amap'
    // Vue.use(VueAMap)
    // VueAMap.initAMapApiLoader({
    //   key: '93fdc18af8119261bf32beef58cc3383',
    //   plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder'],
    //   v: '1.4.4',
    //   uiVersion: '1.0'
    // })
    // import { AMapManager } from 'vue-amap'
    // const amapManager = new AMapManager()
    export default {
      data() {
        const self = this
        return {
          commitFrom: {
            labLongitude: null,
            labLatitude: null,
            labAddress: null
          },
          address: null,
          searchKey: '',
          // amapManager,
          markers: [],
          searchOption: {
            city: '全国',
            citylimit: true
          },
          center: [113.601686, 34.80235],
          zoom: 12,
          loaded: false,
          // events: {
          //   click(e) {
          //     const { lng, lat } = e.lnglat
          //     self.markers = []
          //     console.log(lng)
          //     console.log(lat)
          //     console.log(self.commitFrom,'4454')
          //     self.commitFrom.labLongitude = lng
          //     self.commitFrom.labLatitude = lat
          //     self.center = [lng, lat]
          //     self.markers.push([lng, lat])
          //     console.log(self.markers)
          //     // 这里通过高德 SDK 完成。
          //     // eslint-disable-next-line no-undef
          //     var geocoder = new AMap.Geocoder({
          //       radius: 1000,
          //       extensions: 'all'
          //     })
          //     geocoder.getAddress([e.lnglat.lng, e.lnglat.lat], function(status, result) {
          //       if (status === 'complete' && result.info === 'OK') {
          //         if (result && result.regeocode) {
          //           // 具体地址
          //           self.commitFrom.labAddress = result.regeocode.addressComponent.district + result.regeocode.addressComponent.township + result.regeocode.addressComponent.street + result.regeocode.addressComponent.streetNumber
          //           // console.log(self.commitFrom.address)
          //           // 省
          //           self.province = result.regeocode.addressComponent.province
          //           // 市
          //           self.city = result.regeocode.addressComponent.city
          //           // 区
          //           self.district = result.regeocode.addressComponent.district
          //           self.$nextTick()
          //         }
          //       } else {
          //         // alert('地址获取失败')
          //       }
          //     })
          //   }
          // },
          // plugin: [
          //   {
          //     // 搜索
          //     pName: 'PlaceSearch',
          //     events: {
          //       init(instance) {
          //         console.log(instance)
          //       }
          //     }
          //   }
          // ],
          str:`
             <template>
              <el-input  placeholder="请输入经度" v-model="commitFrom.labLongitude"/>
              <el-input  placeholder="请输入纬度" v-model="commitFrom.labLatitude"/>
              <el-input  placeholder="请输入地址" v-model="commitFrom.labAddress"/>
              <el-amap
                style="height:450px"
                vid="amapDemo1"
                :center="center"
                :zoom="zoom"
                class="amap-demo"
                :events="events"
              >
                <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker" />
              </el-amap>
            </template>

             <script>
                import Vue from 'vue'
                import VueAMap from 'vue-amap'
                Vue.use(VueAMap)
                VueAMap.initAMapApiLoader({
                  key: '93fdc18af8119261bf32beef58cc3383',
                  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder'],
                  v: '1.4.4',
                  uiVersion: '1.0'
                })
                import { AMapManager } from 'vue-amap'
                const amapManager = new AMapManager()
                export default {
                  data() {
                    const self = this
                    return {
                      commitFrom: {
                        labLongitude: null,
                        labLatitude: null,
                        labAddress: null
                      },
                      address: null,
                      searchKey: '',
                      amapManager,
                      markers: [],
                      searchOption: {
                        city: '全国',
                        citylimit: true
                      },
                      center: [113.601686, 34.80235],
                      zoom: 12,
                      loaded: false,
                      events: {
                        click(e) {
                          const { lng, lat } = e.lnglat
                          self.markers = []
                          console.log(lng)
                          console.log(lat)
                          console.log(self.commitFrom,'4454')
                          self.commitFrom.labLongitude = lng
                          self.commitFrom.labLatitude = lat
                          self.center = [lng, lat]
                          self.markers.push([lng, lat])
                          console.log(self.markers)
                          // 这里通过高德 SDK 完成。
                          // eslint-disable-next-line no-undef
                          var geocoder = new AMap.Geocoder({
                            radius: 1000,
                            extensions: 'all'
                          })
                          geocoder.getAddress([e.lnglat.lng, e.lnglat.lat], function(status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                              if (result && result.regeocode) {
                                // 具体地址
                                self.commitFrom.labAddress = result.regeocode.addressComponent.district + result.regeocode.addressComponent.township + result.regeocode.addressComponent.street + result.regeocode.addressComponent.streetNumber
                                // console.log(self.commitFrom.address)
                                // 省
                                self.province = result.regeocode.addressComponent.province
                                // 市
                                self.city = result.regeocode.addressComponent.city
                                // 区
                                self.district = result.regeocode.addressComponent.district
                                self.$nextTick()
                              }
                            } else {
                              // alert('地址获取失败')
                            }
                          })
                        }
                      },
                      plugin: [
                        {
                          // 搜索
                          pName: 'PlaceSearch',
                          events: {
                            init(instance) {
                              console.log(instance)
                            }
                          }
                        }
                      ],
                    }
                  }
                }  
              <\/script>

              <style>
                .amap-demo {
                  height: 450px;
                  width: 650px;
                  margin-left: 20px;
                  margin-top: 20px;
                }
              <\/style>
           `
        }
      },
      methods:{
      }
    }
</script>

<style>
  .amap-demo {
    height: 450px;
    width: 650px;
    margin-left: 20px;
     margin-top: 20px;
  }
</style>
