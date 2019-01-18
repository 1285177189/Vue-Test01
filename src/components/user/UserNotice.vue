<template>
  <div>
    <div class="home">
      <div class="left" @click="$router.back(-1)"></div>
      我的消息
    </div>
    <!-- <div class="h-head"></div> -->
    <user-nav></user-nav>
    <div class="user-notice">
      <img src="../../../static/images/notice01.png" alt="" class="img">
      <div class="box">
        <p class="h1">系统消息</p>
        <p class="h2">2018-12-11 15:30:05</p>
        <p class="h3">公告1</p>
      </div>
    </div>
    <div class="user-notice">
      <img src="../../../static/images/notice01.png" alt="" class="img">
      <div class="box">
        <p class="h1">系统消息</p>
        <p class="h2">2018-12-11 15:30:05</p>
        <p class="h3">冬天到了，花花细数一下，能开花的植物也就那么几种</p>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../static/css/global.css'
import UserNav from '../../components/user/UserNav';
export default {
    name: 'UserNotice',
    components: {
      "user-nav":UserNav,
    },
    data () {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
