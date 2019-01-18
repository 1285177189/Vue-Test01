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
          <div class="pro-left fl">
              <div class="tit">
                  <img src="../../../static/images/cons-detail01.jpg" alt="">
                  <h2>白笙</h2>
                  <p>今天15:18:47</p>
              </div>
              <div class="cont">
                  养百合花1个小窍门，1个球变成20盆花太实用了！1个球变成20盆花太实用了
              </div>
          </div>
          <div class="pro-right fr">
              <img src="../../../static/images/i_product01.png" alt="">
          </div>
          <div class="pro-pinluo">
              <p>明基：这个花真的好看啊</p>
              <a href="" class="more">查看全部评论</a>
          </div>
          <div class="pro-gonneng">
              <p>
                  <span class="span1">2</span>
              </p>
              <p>
                  <span class="span2">0</span>
              </p>
              <p>
                  <span class="span3">1</span>
              </p>
              <p>
                  <span class="span4">8</span>
              </p>
          </div>
      </li>
      <li>
          <div class="pro-left fl">
              <div class="tit">
                  <img src="../../../static/images/notice01.png" alt="">
                  <h2>白笙</h2>
                  <p>今天15:18:47</p>
              </div>
              <div class="cont">
                  养百合花1个小窍门，1个球变成20盆花太实用了！1个球变成20盆花太实用了
              </div>
          </div>
          <div class="pro-right fr">
              <img src="../../../static/images/i_product03.png" alt="">
          </div>
          <div class="pro-pinluo">
              <p>明基：这个花真的好看啊</p>
              <a href="" class="more">查看全部评论</a>
          </div>
          <div class="pro-gonneng">
              <p>
                  <span class="span1">2</span>
              </p>
              <p>
                  <span class="span2">0</span>
              </p>
              <p>
                  <span class="span3">1</span>
              </p>
              <p>
                  <span class="span4">8</span>
              </p>
          </div>
      </li>
      <li>
          <div class="pro-left fl">
              <div class="tit">
                  <img src="../../../static/images/tx01.png" alt="">
                  <h2>白笙</h2>
                  <p>今天15:18:47</p>
              </div>
              <div class="cont">
                  养百合花1个小窍门，1个球变成20盆花太实用了！1个球变成20盆花太实用了
              </div>
          </div>
          <div class="pro-right fr">
              <img src="../../../static/images/i_product04.png" alt="">
          </div>
          <div class="pro-pinluo">
              <p>明基：这个花真的好看啊</p>
              <a href="" class="more">查看全部评论</a>
          </div>
          <div class="pro-gonneng">
              <p>
                  <span class="span1">2</span>
              </p>
              <p>
                  <span class="span2">0</span>
              </p>
              <p>
                  <span class="span3">1</span>
              </p>
              <p>
                  <span class="span4">8</span>
              </p>
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
    name: 'UserMessage',
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
