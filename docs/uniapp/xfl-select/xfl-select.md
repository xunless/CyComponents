# uniapp中下拉框组件使用

 ::: tip
[组件地址](https://ext.dcloud.net.cn/plugin?id=518)
:::

<template>

![image](/images/select.png)

  <demo :codeStr="str">

  </demo>
</template>

<script>
  export default {
    data() {
      return {
        link: '',
        str: `
          <template>
            <view style="width: 80%; margin: auto; margin-bottom: 20px;">
                <xfl-select 
                    :list="list"
                    :clearable="false"
                    :showItemNum="5" 
                    :listShow="true"
                    :isCanInput="true"  
                    :style_Container="'height: 50px; font-size: 16px;'"
                    :placeholder = "'placeholder'"
                    :initValue="'苹果'"
                    :selectHideType="'hideAll'"
                >
                </xfl-select>
            </view>
          </template>

          <script>
            import xflSelect from '../../components/xfl-select/xfl-select.vue';
            export default {
              components: { xflSelect },
              data() {
                return {
                  list: [       //要展示的数据
                    '苹果',
                    {value: '香蕉', disabled: true},
                    '葡萄',
                    '芒果',
                    '大白菜',
                  ],
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
    }
  }
</script>

### Tabs 参数

|       参数        |           说明                                   |     类型         |     可选值     |              默认值    |
|      ------       |     :---:                                        |       :----:    |    :----:     |         -------------- |
|  list	            |  要展示的数据	                                     |    Array	      |      —        |	        [ ]           |
|  clearable      	|  是否显示清除按钮	                                 |     Boolean    |       —       |	        true            |
|  initValue	      |  第一次显示时默认选中的文本	                       |     String	     |        —      |	        " "               |
|  isCanInput	      |  是否可以输入值	                                  |     Boolean	    |        —	    |       false             |
|  placeholder	    |  占位符	                                         |     String	      |       —	     |         "请选择"          |
|  style_Container	|  组件根节点的行内样式	                            |     String	     |        —      |	        " "              |
|  disabled	        |  是否禁用整个选择框	                              |     Boolean	     |      —        |	        false            |
|  showItemNum    	|  显示列表的窗口高度，数字表示能显示几个列表项	      |   Number	       |       —       |         	5               |
|  listShow	        |  第一次显示时是否显示列表                        	|   Boolean	       |       —	      |         false             |
|  focusShowList    |	 当input获取焦点时，是否自动弹出列表框           	 |     Boolean	    |    —           |	    null，表示在pc上自动弹出，在移动端(包括模拟环境)不弹|
|  selectHideType	  |  本选择框的显示与其它选择框显示之间的关系	         |     String	       |    'independent' - 是独立的，与其它选择框互不影响<br>'hideAll' - 任何一个选择框展开时，隐藏所有其它选择框<br>'hideOthers'- 当本选择框展开时，隐藏其它的选择框。 当其它选择框展开时，不隐藏本选择框。<br>'hideSelf' - 当本选择框展开时，不隐藏其它的选择框。当其它选择框展开时，隐藏本选择框。	|"hideAll"|