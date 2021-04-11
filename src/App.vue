<!--
 * @Descripttion: 
 * @version: 
 * @Author: xds
 * @Date: 2021-04-05 19:31:21
 * @LastEditors: xds
 * @LastEditTime: 2021-04-09 22:07:17
-->
<template>
  <div id="app">
    <button
      @click = 'goAnothoerAddress'
    >去子路由</button>
    <dagre/>
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import dagre from './components/dagre'

export default {
  name: 'App',
  components: {
    dagre
  },
  data(){
    return {

    }
  },
  methods:{
    goAnothoerAddress(){
      this.$router.push({name: 'topology', params: {id: 'haha'}})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
