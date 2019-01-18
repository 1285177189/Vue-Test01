<template>
  <div>
    <div class="home">首页</div>
    <div class="h-head"></div> 
    <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../../static/images/banner.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../../static/images/banner1.jpg" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <ul class="product">
        <li v-for="item in someData1">
            <router-link :to="{name:'detailLink'}">
            <div class="pro-left fl">
                <div class="tit">
                    <img src="../../static/images/cons-detail01.jpg" alt="">
                    <h2>{{item.name}}</h2>
                    <p>{{item.phone}}</p>
                </div>
                <div class="cont">
                    {{item.website}}
                </div>
            </div>
            <div class="pro-right fr">
                <img src="../../static/images/i_product01.png" alt="">
            </div>
            </router-link>
            <div class="pro-pinluo">
                <p>{{item.company['name']}}：{{item.company['bs']}}</p>
                <router-link :to="{name:'detailLink'}" class="more">查看全部评论</router-link>
            </div>
            <div class="pro-gonneng">
                <p>
                    <span class="span1">{{item.id}}</span>
                </p>
                <p>
                    <span class="span2">{{item.id}}</span>
                </p>
                <p>
                    <span class="span3">{{item.id}}</span>
                </p>
                <p>
                    <span class="span4">{{item.id}}</span>
                </p>
            </div>

        </li>
        
    </ul>
    <div class="shuju-more">加载更多</div>
  </div>
</template>

<script>
import '../../static/css/swiper.min.css'
import '../../static/css/global.css'

export default {
    name: 'Home',
    props:{
        someData:{
          type:Array,
          // required:true
        }
    },
    data () {
        return {
          someData1: this.someData
        }  
    },
    mounted(){
        //banner图移动端
        var swiper = new Swiper('.swiper-container', {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        });
        // this.get();
        // this.$http.get('120.79.34.118:8080/index/msg/list?token=o6jQk0ZzQAL3fq9gO9LA6zRtVWjc').then(response => {
        //      console.log(response.msg);
        //     // get body data
        //     // this.someData = response.body;
 
        // }, response => {
        //     console.log("error");
        // });
        // response.addHeader("Access-Control-Allow-Origin", "*");
        this.$http.get('http://jsonplaceholder.typicode.com/users').then(response => {
             console.log(response.data);
            // get body data
            this.someData1 = response.body;
            // var someData = this.someData;
            // var prolist = this.someData;
            // console.log(prolist);
 
        }, response => {
            console.log("error");
        });
    },
    // methods:{
    //     get:function(){
    //         //发送get请求
    //         this.$http.get('https://120.79.34.118:8080/index/msg/list?token=o6jQk0ZzQAL3fq9gO9LA6zRtVWjc').then(function(res){
    //           alert(res.msg); 
    //           console.log('请求成功处理');
    //         },function(){
    //           console.log('请求失败处理');
    //         });
    //     }
    // }
    // created(){
    //     this.$http.get("https://120.79.34.118:8080/index/msg/list?token=o6jQk0ZzQAL3fq9gO9LA6zRtVWjc")
    //       .then((data) =>{
    //         console.log(data);
    //         this.users = data.body;
    //       }
    //     )
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*@import '../../static/css/swiper.min.css';*/
    .banner{
        width: 100%;
        height: 8.391304rem;
    }
    .banner .swiper-slide{
        width: 100%;
        height: 8.391304rem;
    }
    .banner .swiper-slide img{
        width: 100%;
        height: 8.391304rem;
    }
    .banner .swiper-pagination{
        float: left;
        height: 0.652174rem;
        position: absolute;
        z-index: 79
    }
    .banner .swiper-pagination .swiper-pagination-bullet{
        width: 0.652174rem !important;
        height: 0.652174rem !important;
        background: #fff !important;
        border-radius: 50%;
        opacity: 1 !important;
    }
    .banner .swiper-pagination .swiper-pagination-bullet-active{
        width: 0.652174rem !important;
        height: 0.652174rem !important;
        background: #000 !important;
    }
</style>
