<template>
  <div>
    <div class="home">
      <div class="left" @click="$router.back(-1)"></div>
      反馈建议
    </div>
    <div class="h-head"></div>
    <div class="feedback">
      <input type="text" placeholder="请输入您的手机号码以便我们及时与您联系">
      <textarea placeholder="请用10-400个字详细描述您遇到的问题"></textarea>
    </div>
    <div class="butn">
        <div class="btn mt20">立即提交</div>
    </div>
  </div>
</template>

<script>
import '../../../static/css/global.css'
import UserNav from '../../components/user/UserNav';
export default {
    name: 'UserShare',
    components: {
      
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
