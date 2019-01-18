<template>
  <div>
    <div class="conservation-cont">
      <ul class="cont-ul">
        <li>
          <router-link :to="{name:'productdetailLink'}">
            <img src="../../../static/images/shebei03.png" alt="" class="img">
          </router-link>
          <div class="box">
            <router-link class="h1" :to="{name:'productdetailLink'}">空设备</router-link>
            <h2>
              <span class="fl">健康指数：</span>
              <img src="../../../static/images/xin03.png" alt="" class="xximg">
              <img src="../../../static/images/xin03.png" alt="" class="xximg">
              <img src="../../../static/images/xin03.png" alt="" class="xximg">
              <img src="../../../static/images/xin03.png" alt="" class="xximg">
              <img src="../../../static/images/xin03.png" alt="" class="xximg">
            </h2>
            <h2>
              <span>预计开花时间：</span><span class="col">2018-01-01</span>
            </h2>
            <h3>
              <span>土壤：</span><span class="col">未知</span>
            </h3>
            <h3>
              <span>温度：</span><span class="col">未知</span>
            </h3>
            <h3>
              <span>湿度：</span><span class="col">未知</span>
            </h3>
            <h3>
              <span>光照：</span><span class="col">未知</span>
            </h3>
            <img src="../../../static/images/jiankan03.png" alt="" class="jiankan">
            <router-link :to="{name:'productplantingLink'}" class="btn">种植</router-link>
          </div>
        </li>
        <li>
          <router-link :to="{name:'productdetailLink'}">
            <img src="../../../static/images/shebei01.png" alt="" class="img">
          </router-link>
          <div class="box">
            <router-link class="h1" :to="{name:'productdetailLink'}">水仙花</router-link>
            <h2>
              <span class="fl">健康指数：</span>
              <img src="../../../static/images/xin02.png" alt="" class="xximg">
              <img src="../../../static/images/xin02.png" alt="" class="xximg">
              <img src="../../../static/images/xin02.png" alt="" class="xximg">
              <img src="../../../static/images/xin02.png" alt="" class="xximg">
              <img src="../../../static/images/xin02.png" alt="" class="xximg">
            </h2>
            <h2>
              <span>预计开花时间：</span><span class="col">2018-01-01</span>
            </h2>
            <h3>
              <span>土壤：</span><span class="col">健康</span>
            </h3>
            <h3>
              <span>温度：</span><span class="col">健康</span>
            </h3>
            <h3>
              <span>湿度：</span><span class="col">健康</span>
            </h3>
            <h3>
              <span>光照：</span><span class="col">健康</span>
            </h3>
            <img src="../../../static/images/jiankan02.png" alt="" class="jiankan">
            <router-link :to="{name:'productdetailLink'}" class="btn">查看</router-link>
          </div>
        </li>
        <li>
          <router-link :to="{name:'productdetailLink'}">
            <img src="../../../static/images/shebei01.png" alt="" class="img">
          </router-link>
          <div class="box">
            <router-link class="h1" :to="{name:'productdetailLink'}">水仙花</router-link>
            <h2>
              <span class="fl">健康指数：</span>
              <img src="../../../static/images/xin01.png" alt="" class="xximg">
              <img src="../../../static/images/xin01.png" alt="" class="xximg">
              <img src="../../../static/images/xin01.png" alt="" class="xximg">
              <img src="../../../static/images/xin01.png" alt="" class="xximg">
              <img src="../../../static/images/xin01.png" alt="" class="xximg">
            </h2>
            <h2>
              <span>预计开花时间：</span><span class="col">2018-01-01</span>
            </h2>
            <h3>
              <span>土壤：</span><span class="col">不健康</span>
            </h3>
            <h3>
              <span>温度：</span><span class="col">不健康</span>
            </h3>
            <h3>
              <span>湿度：</span><span class="col">不健康</span>
            </h3>
            <h3>
              <span>光照：</span><span class="col">不健康</span>
            </h3>
            <img src="../../../static/images/jiankan01.png" alt="" class="jiankan">
            <router-link :to="{name:'productdetailLink'}" class="btn">查看</router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import '../../../static/css/global.css'
export default {
  name: 'Product',
  proTab:'',
  data () {
    return {
      
    }
  },
  mounteds:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
