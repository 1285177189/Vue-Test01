<template>
    <div>
        <ul class="nav" v-show="this.$route.meta.navShow">
            <router-link exact :to="{name:'homeLink'}">
                <div class="img1">
                    <img src="../../static/images/bt-nav01.png" alt="">
                    <p>首页</p>
                </div>
                <div class="img2">
                    <img src="../../static/images/bt-nav01_1.png" alt="">
                    <p>首页</p>
                </div>
            </router-link>
            <router-link :to="{name:'newsLink'}">
                <div class="img1">
                    <img src="../../static/images/bt-nav02.png" alt="">
                    <p>护花</p>
                </div>
                <div class="img2">
                    <img src="../../static/images/bt-nav02_1.png" alt="">
                    <p>护花</p>
                </div>
            </router-link>
            <router-link :to="{name:'addLink'}">
                <div class="img1">
                    <img src="../../static/images/bt-nav05.png" alt="">
                    <p></p>
                </div>
                <div class="img2">
                    <img src="../../static/images/bt-nav05_1.png" alt="">
                    <p></p>
                </div>
            </router-link>
            <router-link :to="{name:'productallLink'}">
                <div class="img1">
                    <img src="../../static/images/bt-nav03.png" alt="">
                    <p>盆栽</p>
                </div>
                <div class="img2">
                    <img src="../../static/images/bt-nav03_1.png" alt="">
                    <p>盆栽</p>
                </div>
            </router-link>
            <router-link :to="{name:'userLink'}">
                <div class="img1">
                    <img src="../../static/images/bt-nav04.png" alt="">
                    <p>个人</p>
                </div>
                <div class="img2">
                    <img src="../../static/images/bt-nav04_1.png" alt="">
                    <p>个人</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import '../../static/css/global.css'
export default {
  name: 'Nav',
  data () {
    return {
       
    }
  },
    components: { // 声明子组件
        
    },
    methods: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
