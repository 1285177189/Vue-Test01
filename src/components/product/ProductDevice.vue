<template>
  <div>
    <div class="home">
      <div class="left" @click="$router.back(-1)"></div>
      添加设备
    </div>
    <div class="add-device">
      <div class="label">
        <input type="text" placeholder="请输入设备代码（192.168.4.1获取）">
        <img src="../../../static/images/ewm.png" alt="" class="ewm">
      </div>
      <div class="butn">
        <div class="btn mt20">立即激活</div>
      </div>
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
