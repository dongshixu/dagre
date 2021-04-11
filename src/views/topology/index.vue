<!--
 * @Descripttion: 
 * @version: 
 * @Author: xds
 * @Date: 2021-04-05 09:36:32
 * @LastEditors: xds
 * @LastEditTime: 2021-04-05 22:22:29
-->
<template>
  <el-container>
    <el-aside width="200px">
      <!-- <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree> -->
      <el-row class="tac">
        <el-col :span="12">
            <el-menu
              class="left-nav-list"
              :router='true'
              background-color="#070916"
              text-color="#fff"
              :default-active="$route.path"
            >
              <tree-menu :menus="leftmenus"></tree-menu>
            </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <mainView :info = 'showInfo' />
      </el-main>
    </el-container>
    
  </el-container>
</template>

<script>

  import treeMenu from '@/components/tree-menu'
  import mainView from '@/views/main-view'

  export default {
    name: 'topology',
    components:{treeMenu, mainView},
    data(){
      return {
        leftmenus:[
          {menuName:'桐庐MES', menuUrl:'/topology/tonglu'},
          {menuName:'芜湖MES', menuUrl:'/topology/wuhu'}
        ],
        showInfo: ''
      }
    },
    created(){
    },
    mounted(){

    },
    watch:{
      $route(){
        this.showInfo = this.$route.params.id
      }
    },
    methods:{
      handleNodeClick(data) {
        console.log(data);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>>

<style lang="scss" scoped>
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-row{
    width: 100%;
    .el-col{
      width: 100%;
    }
  }
</style>