<template>
  <div>
    <div class="home">花友动态</div>
    <div class="h-head"></div>
    <div class="conservation-seach">
        <input type="text" placeholder="搜索">
        <button>搜索</button>
    </div>
    <div class="conservation-nav">
        <p v-for="(item,index) in arr" v-on:click="guige(index)" v-bind:class="{active:index==a}">{{item.name}}</p>
    </div> 
    <ul class="product">
        <li>
            <div class="pro-left fl">
                <div class="tit">
                    <img src="../../static/images/cons-detail01.jpg" alt="">
                    <h2>白笙</h2>
                    <p>今天15:18:47</p>
                </div>
                <div class="cont">
                    养百合花1个小窍门，1个球变成20盆花太实用了！1个球变成20盆花太实用了
                </div>
            </div>
            <div class="pro-right fr">
                <img src="../../static/images/i_product01.png" alt="">
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
                    <img src="../../static/images/notice01.png" alt="">
                    <h2>白笙</h2>
                    <p>今天15:18:47</p>
                </div>
                <div class="cont">
                    养百合花1个小窍门，1个球变成20盆花太实用了！1个球变成20盆花太实用了
                </div>
            </div>
            <div class="pro-right fr">
                <img src="../../static/images/i_product03.png" alt="">
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
                    <img src="../../static/images/tx01.png" alt="">
                    <h2>白笙</h2>
                    <p>今天15:18:47</p>
                </div>
                <div class="cont">
                    养百合花1个小窍门，1个球变成20盆花太实用了！1个球变成20盆花太实用了
                </div>
            </div>
            <div class="pro-right fr">
                <img src="../../static/images/i_product04.png" alt="">
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
import '../../static/css/global.css'
export default {
    name: 'News',
    components: {

    },
    data() {
      return {
        a:"0",
        arr: [
          {
            name: '最热'
          }, {
            name: '点赞量'
          }, {
            name: '评论量'
          }
        ]
      }
    },
    methods:{
        guige:function(index){
            this.a = index;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
