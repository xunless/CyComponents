# echarts 3d 饼图有突出


### 一、安装
>   npm install echarts@4.8.0 echarts-gl@1.1.2 --save

<template>
  <demo :codeStr="str">
    <div style="height: 200px;display: flex">
      <Echarts-cy-echarts3dpie :legendShow="false" :activeHeight="errorHeight" :chartData="errorChartData" contentLeft="0" height="100%"></Echarts-cy-echarts3dpie>
      <Echarts-cy-echarts3dpie :distance="225" :isCirclePie="isCirclePie" :legendShow="false" :activeHeight="errorHeight" contentLeft="0" :chartData="errorChartData" height="100%"></Echarts-cy-echarts3dpie>
    </div>
  </demo>
</template>

<script>
  export default {
    data() {
      return {
        errorHeight: 100,
        isCirclePie: false, // 是否是凸起圆环
        errorChartData: [{
          name: '已消除',
          value: 60,
          itemStyle: {
            opacity: 1,
            color:'rgba(0,127,244,1)',
          }
        }
        ,{
          name: '未消除',
          value: 10,
          itemStyle: {
              opacity: 1,
              color:'rgba(209,126,23,1)',
          }
        }],
        str: 
`<template>
  <div style="height: 200px;">
    <Echarts-cy-echarts3dpie :legendShow="false" :activeHeight="errorHeight" :chartData="errorChartData" contentLeft="0" height="100%"></Echarts-cy-echarts3dpie>
    <Echarts-cy-echarts3dpie :distance="225" :isCirclePie="isCirclePie" :legendShow="false" :activeHeight="errorHeight" contentLeft="0" :chartData="errorChartData" height="100%"></Echarts-cy-echarts3dpie>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        errorHeight: 100,
        isCirclePie: false, // 是否是凸起圆环
        errorChartData: [{
          name: '已消除',
          value: 60,
          itemStyle: {
            opacity: 1,
            color:'rgba(0,127,244,1)',
          }
        }
        ,{
          name: '未消除',
          value: 10,
          itemStyle: {
              opacity: 1,
              color:'rgba(209,126,23,1)',
          }
        }],
      }
    }
  }
<\/script>
`
      }
    }
  }
</script>

