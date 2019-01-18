<template>
  <div id="app">
    <!-- <ul class="nav">
      <router-link exact to="/">
          <div class="img1">
              <img src="../static/images/bt-nav01.png" alt="">
              <p>首页</p>
          </div>
          <div class="img2">
              <img src="../static/images/bt-nav01_1.png" alt="">
              <p>首页</p>
          </div>
      </router-link>
      <router-link to="/news">
          <div class="img1">
              <img src="../static/images/bt-nav02.png" alt="">
              <p>护花</p>
          </div>
          <div class="img2">
              <img src="../static/images/bt-nav02_1.png" alt="">
              <p>护花</p>
          </div>
      </router-link>
    </ul> -->
    <nav-app></nav-app>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'
import '../static/css/global.css'

export default {
  name: 'App',
  components: {
    "nav-app":Nav,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
