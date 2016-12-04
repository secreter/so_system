<template>
<el-row class="so-main">
  <el-col :span="3" class="sider-wrap">
  	<sider-nav></sider-nav>	
  </el-col>
  <el-col :span="21" class="so-page">
  	<!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </el-col>
</el-row>

</template>
<script>
  import siderNav from './siderNav'
  export default {
  	data() {
  		return {

  		}
  	},
  	components : {
  		siderNav,
  	}
  }
</script>
<style lang='less'>
	.so-main{
		background-color:#999;
		flex-grow: 1;
		display: flex;
		
		/*height: 100%;*/
		.sider-wrap{
			min-width: 150px;
			max-width: 100px;
			background: #324057;
		}
    .so-page{
      padding: 20px;
      overflow-y: scroll;

    }
    .so-page::-webkit-scrollbar {
      display:none
    }
	}
</style>