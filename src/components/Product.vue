<template>
  <div>
    <div class="home">盆栽</div>
    <div class="h-head"></div>
    <ul class="conservation-tab" v-show="this.$route.meta.navShow">
      <router-link :to="{name:'productallLink'}" exact>全部</router-link>
      <router-link :to="{name:'productairLink'}">空设备</router-link>
      <router-link :to="{name:'producthealthLink'}">健康</router-link>
      <router-link :to="{name:'productunhealthLink'}">不健康</router-link>
      <router-link :to="{name:'productdeviceLink'}" class="a">添加设备</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import '../../static/css/global.css';
export default {
  name: 'Product',
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
