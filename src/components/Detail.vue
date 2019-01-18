<template>
  <div>
    <div class="home">
      <div class="left" @click="$router.back(-1)"></div>
      养护详情页
    </div>
    <div class="h-head"></div>
    <div class="detail-tit">
      <div class="tit">
        <img src="../../static/images/tx01.png" alt="">
        <div class="box">
          <p class="t1">鸣人</p>
          <p class="t2">2018-12-28 15:30:51</p>
        </div>
        <div class="gz">已关注</div>
      </div>
    </div>
    <div class="detail-cont">
      <p class="p">Romaguera-Crona：harness real-time e-markets</p>
      <img src="../../static/images/prodetail01.jpg" alt="">
      <div class="fenxian">
        <p class="yd">阅读(0)</p>
      </div>
    </div>
    <div class="pinlun-main mt10">
      <div class="h1">我来说两句</div>
      <div class="pl-input">
        <input type="text" placeholder="我来回复他">
        <button class="fason">发送</button>
      </div>
      <!-- <p class="zw">暂无评论,来说两句吧...</p> -->
      <div class="cont">
        <div class="tit"><span>小鱼：</span>圣诞节快乐手机端快捷速度快</div>
        <div class="pdz">
          <img src="../../static/images/i_product-04.png" alt="" class="img4">
          <p>0</p>
        </div>
        <div class="tit2"><p>回复</p></div>
        <div class="tit3">
          <p><span>小黑：</span>坚实的开机速度快圣诞节快乐</p>
          <span class="hf">回复</span>
          <div class="hr"></div>
          <p><span>小黑：</span>回复<span>小鱼：</span>四级考试就是就是</p>
          <span class="hf">回复</span>
        </div>
      </div>
    </div>
    <div class="pinlun-bj">
      <img src="../../static/images/tx01.png" alt="" class="pl-tx">
      <input type="text" placeholder="我来说两句">
      <button class="fs">发送</button>
      <img src="../../static/images/i_product-03.png" alt="" class="pl">
      <p class="p2">0</p>
    </div>
  </div>
</template>

<script>
import '../../static/css/global.css'
export default {
  name: 'News',
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
