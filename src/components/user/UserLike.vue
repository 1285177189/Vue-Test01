<template>
  <div>
    <div class="home">
      <div class="left" @click="$router.back(-1)"></div>
      我的消息
    </div>
    <!-- <div class="h-head"></div> -->
    <user-nav></user-nav>
    <ul class="product">
      <li>
          <div class="pro-userleft fl">
            <div class="p">我赞了</div>
            <div class="tit">
                <img src="../../../static/images/tx01.png" alt="">
                <h2>白笙</h2>
                <p>今天15:18:47</p>
            </div>
            <div class="tcont">
              <img src="../../../static/images/cons-detail01.jpg" alt="">
              <span>养百合花1个小窍门，1个球变成20盆花太实用了！1个球变成20盆花太实用了</span>
            </div>
          </div>
      </li>
    </ul>
    <div class="shuju-more">加载更多</div>
  </div>
</template>

<script>
import '../../../static/css/global.css'
import UserNav from '../../components/user/UserNav';
export default {
    name: 'UserLike',
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
