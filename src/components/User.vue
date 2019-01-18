<template>
  <div>
    <div  v-show="this.$route.meta.usermenuShow">
    <div class="home">个人中心</div>
    <div class="h-head"></div>
    <div class="user-top">
      <img class="tx" src="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erHzX39iazGeLy4icgnc6LxSJCC7FUtgtCdQ7LARE1ly0rEzZoUR5wrqRTvFGsTVAhM1a8Bmqtiafatw/132" alt="">
      <div class="box">
        <div class="text01">あい</div>
        <div class="text02">深圳</div>
      </div>
    </div>
    <div class="user-tj">
      <a href="" class="user-li">
        <span class="user-text01">0</span>
        <span class="user-text02">关注</span>
      </a>
      <a href="" class="user-li">
        <span class="user-text01">0</span>
        <span class="user-text02">分享</span>
      </a>
      <router-link :to="{name:'userlikeLink'}" class="user-li">
        <span class="user-text01">0</span>
        <span class="user-text02">点赞</span>
      </router-link>
      <router-link :to="{name:'userpublishLink'}" class="user-li">
        <span class="user-text01">0</span>
        <span class="user-text02">文章</span>
      </router-link>
    </div>
    <div class="user-menu">
      <router-link :to="{name:'userpublishLink'}" class="user-li">
        <img src="../../static/images/mine01.png" alt="" class="img">
        <span class="text">我的发表</span>
      </router-link>
      <router-link :to="{name:'usermessageLink'}" class="user-li">
        <img src="../../static/images/mine02.png" alt="" class="img">
        <span class="text">我的消息</span>
      </router-link>
      <router-link :to="{name:'userlikeLink'}" class="user-li">
        <img src="../../static/images/mine03.png" alt="" class="img">
        <span class="text">我的点赞</span>
      </router-link>
      <router-link :to="{name:'usercommentLink'}" class="user-li">
        <img src="../../static/images/mine04.png" alt="" class="img">
        <span class="text">我的评论</span>
      </router-link>
      <router-link :to="{name:'userattentionLink'}" class="user-li">
        <img src="../../static/images/mine05.png" alt="" class="img">
        <span class="text">我的关注</span>
      </router-link>
      <router-link :to="{name:'usershareLink'}" class="user-li">
        <img src="../../static/images/mine06.png" alt="" class="img">
        <span class="text">我的分享</span>
      </router-link>
      <router-link :to="{name:'feedbackLink'}" class="user-li">
        <img src="../../static/images/mine07.png" alt="" class="img">
        <span class="text">反馈建议</span>
      </router-link>
    </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import '../../static/css/global.css'
export default {
  name: 'User',
  data () {
    return {
      
    }
  },
  mounted(){
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
