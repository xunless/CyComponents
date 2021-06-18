<template>
  <div>
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :span="14">
            <a-form-item label="位置信息">
              <a-input v-model="addressInfo.address"/>
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-button type="primary" @click="handleOk()">确定</a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <input type="text" id="pac-input">
    <div id="mapSearch"></div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      center: { lng: -75.39, lat: 42.31 },
      markers: [],
      geocoder: null,
      addressInfo: {}
    }
  },
  mounted () {
    this.mapInit() // 初始化实例之后调用
  },
  // 方法
  methods: {
    handleOk () {
      if (this.addressInfo.lat && this.addressInfo.address) {
        // 位置信息返给父组件
        this.$emit('ok', this.addressInfo)
      }
    },
    mapInit () {
      console.log('地图初始化')
      if ('geolocation' in navigator) {
        // 获取当前位置
        navigator.geolocation.getCurrentPosition((position) => {
          this.map = new google.maps.Map(document.getElementById('mapSearch'), {
            zoom: 10,
            center: { lng: position.coords.longitude, lat: position.coords.latitude },
            mapTypeId: google.maps.MapTypeId.ROADMAP
          })
          this.geocoder = new google.maps.Geocoder()
          this.mapClick()
          this.mapSearch()
        }, () => {
          // 当前位置获取失败，使用默认位置
          this.map = new google.maps.Map(document.getElementById('mapSearch'), {
            zoom: 10,
            center: this.center,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          })
          this.geocoder = new google.maps.Geocoder()
          this.mapClick()
          this.mapSearch()
        })
      } else {
        this.map = new google.maps.Map(document.getElementById('mapSearch'), {
          zoom: 10,
          center: this.center,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        })
        this.geocoder = new google.maps.Geocoder()
        this.mapClick()
        this.mapSearch()
      }
    },
    // 监听地图点击事件
    mapClick () {
      this.map.addListener('click', (mapsMouseEvent) => {
        this.placeMarker(mapsMouseEvent.latLng)
      })
    },
    // 搜索输入框
    mapSearch () {
      const input = document.getElementById('pac-input')
      const searchBox = new google.maps.places.SearchBox(input)
      this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)
      this.map.addListener('bounds_changed', () => {
        searchBox.setBounds(this.map.getBounds())
      })
      this.markers = []
      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces()

        if (places.length === 0) {
          return
        }
        // Clear out the old markers.
        this.clearOverlays()
        this.markers = []
        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds()
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log('Returned place contains no geometry')
            return
          }
          const icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          }
          // Create a marker for each place.
          this.markers.push(
            new google.maps.Marker({
              map: this.map,
              icon,
              title: place.name,
              position: place.geometry.location
            })
          )

          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport)
          } else {
            bounds.extend(place.geometry.location)
          }
        })
        this.map.fitBounds(bounds)
      })
    },
    // 点击地图
    placeMarker (location) {
      this.clearOverlays()
      this.markers.push(
        new google.maps.Marker({
          position: location,
          map: this.map
        })
      )
      if (this.geocoder) {
        this.geocoder.geocode({
          'location': location
        }, (results, status) => {
          console.log('results', results, status)
          if (status === google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              this.addressInfo = {
                address: results[0].formatted_address,
                lat: results[0].geometry.location.lat(),
                lon: results[0].geometry.location.lng()
              }
              console.log(this.addressInfo)
            }
          } else {
            alert('Geocoder failed due to: ' + status)
          }
        })
      }
    },
    // 清除点
    clearOverlays () {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => {
          marker.setMap(null)
        })
      }
    }
  }
}
</script>

<style lang='less' scoped>
#mapSearch {
  width: 100%;
  height: 500px;
}

#pac-input {
  width: 250px;
	margin-top: 10px;
	border: 1px solid transparent;
	border-radius: 2px 0 0 2px;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
  padding: 0 10px;
  font-size: 15px;
	height: 40px;
	outline: none;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
</style>
