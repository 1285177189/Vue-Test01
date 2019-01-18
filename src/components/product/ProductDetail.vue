<template>
  <div>
    <div class="home">
      <div class="left" @click="$router.back(-1)"></div>
      详情页
    </div>
    <!-- <div class="h-head"></div> -->
    <div class="pro-cont">
      <img src="../../../static/images/prodetail01.jpg" alt="" class="img">
      <div class="box">  
        <div class="h1">水仙花</div>
        <div class="h2">
          <span class="fl">健康指数：</span>
          <img src="../../../static/images/xin02.png" alt="" class="xximg">
          <img src="../../../static/images/xin02.png" alt="" class="xximg">
          <img src="../../../static/images/xin02.png" alt="" class="xximg">
          <img src="../../../static/images/xin02.png" alt="" class="xximg">
          <img src="../../../static/images/xin02.png" alt="" class="xximg">
        </div>
        <div class="h2">
          <span class="fan1 fl"></span>
          <span>土壤：20%健康</span>
        </div>
        <div class="h2">
          <span class="fan2 fl"></span>
          <span>温度：30%健康</span>
        </div>
        <div class="h2">
          <span class="fan3 fl"></span>
          <span>湿度：30℃健康</span>
        </div>
        <div class="h2">
          <span class="fan4 fl"></span>
          <span>光照：200%健康</span>
        </div>
        <div class="h2">
          <span class="fan5 fl"></span>
          <span>健康所需数值：60%</span>
        </div>
      </div>
      <canvas class="canvas" id="main"></canvas>
    </div>
    <div class="pro-box2 mt10">
      <div class="pb50">
        <p class="h2">土壤湿度：20%</p>
        <p class="h2">空气湿度：20%</p>
        <p class="h2">环境温度：30℃</p>
        <p class="h2">光照强度：200%</p>
        <p class="h2">储水量：充足</p>
      </div>
      <div class="pb50">
        <p class="h2">正常范围：100%~255%</p>
        <p class="h2">正常范围：10%~80%</p>
        <p class="h2">正常范围：10%~35%</p>
        <p class="h2">正常范围：100℃~255℃</p>
      </div>
    </div>
    <div class="pro-box2 mt10">
      <div class="pb50">
        <p class="h2">预计时间：2018-12-25</p>
      </div>
    </div>
    <div class="pro-btn1" style="background:#ddd">健康无需浇水</div>
    <div class="pro-btn2">托管</div>
    <div class="butn">
        <div class="btn bg-hon">砍伐植物</div>
    </div>
    <div class="butn">
        <div class="btn mt20">删除设备</div>
    </div>
  </div>
</template>

<script>
import '../../../static/css/global.css'
// var echarts = require('echarts')
    export default {
      data () {
        return {
          charts: '',
          opinion: ['土壤', '温度', '湿度', '光照', '健康所需数值'],
          opinionData: [
            {value: 150, name: ''},
            {value: 200, name: ''},
            {value: 300, name: ''},
            {value: 350, name: ''},
            {value: 1000, name: ''}
          ]
        }
      },
      methods: {
        drawPie (id) {
          this.charts = this.$echarts.init(document.getElementById(id))
          this.charts.setOption({
            tooltip: {
              trigger: 'item',
              formatter: '{a}<br/>{b}:{c} ({d}%)'
            },
            legend: {
              orient: 'vertical',
              x: 'left',
              data: this.opinion
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['100%', '70%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: true,
                    testStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: this.opinionData
              }
            ],
            color:[
              '#06d6a0',
              '#ff8c3e',
              '#00bcd4',
              '#ac4edd',
              '#ededed'
            ]
          })
        }
      },
      mounted () {
        this.$nextTick(function () {
          this.drawPie('main')
        })
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
