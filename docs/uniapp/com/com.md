# UNIAPP 常用组件
 
 <template>
  <demo :codeStr="str">
    
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        str: `
          <template>
            <view
              class="gradual-header"
              :style="'background: rgba(45,168,150,' + diaphaneity + ')'"
            >
              <view class="status_bar"></view>
              <view class="page-header"
                ><view class="title">{{diaphaneity>0?'首页':''}}</view></view
              >
            </view>
          </template>

          <script>
            export default {
              data () {
                return {
                  diaphaneity: 0
                }
              },
              onLoad () {},
              methods: {},
              // 渐变状态栏
              // 页面混动事件
              onPageScroll (e) {
                this.diaphaneity = e.scrollTop / 100
              }
            }
          <\/script>

          <style>
            .gradual-header {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 100;
            }
            .status_bar {
              height: var(--status-bar-height);
              width: 100%;
            }
          <\/style>
        `
      }
    }
  }
</script>