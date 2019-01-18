<template>
  <div>
    <div class="home">
      <div class="left" @click="$router.back(-1)"></div>
      种植
    </div>
    <div class="add-planting">
      <div class="label">
        <select>
          <option value="">花卉ID：1  水仙花  <img src="../../../static/images/i_product01.png" alt=""></option>
          <option value="">花卉ID：2  菊花  <img src="../../../static/images/i_product02.png" alt=""></option>
          <option value="">花卉ID：3  玫瑰花  <img src="../../../static/images/i_product03.png" alt=""></option>
        </select>
      </div>
      <div class="label">
        <input type="text" placeholder="请输入花卉的ID">
      </div>
      <div class="label">
        <input type="date" value="2018-12-26">
      </div>
      <div class="butn">
        <div class="btn mt20">立即种植</div>
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
