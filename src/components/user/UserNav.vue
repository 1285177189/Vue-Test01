<template>
  <div>
    <div class="h-head"></div>
    <div class="user-nav">
      <router-link :to="{name:'usermessageLink'}" exact>消息</router-link>
      <router-link :to="{name:'userlikeLink'}">点赞</router-link>
      <router-link :to="{name:'usernoticeLink'}">通知</router-link>
    </div>
  </div>
</template>

<script>
import '../../../static/css/global.css'
export default {
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
