<template>
	<el-menu default-active="1" theme="dark" mode="horizontal" @select="handleSelect">
	  <el-menu-item index="1">so_system</el-menu-item>
	  <!-- <el-submenu index="2">
	    <template slot="title">我的工作台</template>
	    <el-menu-item index="2-1">选项1</el-menu-item>
	    <el-menu-item index="2-2">选项2</el-menu-item>
	    <el-menu-item index="2-3">选项3</el-menu-item>
	  </el-submenu>
	  <el-menu-item index="3">订单管理</el-menu-item> -->
	  
	</el-menu>
</template>

<script>
  export default {
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>