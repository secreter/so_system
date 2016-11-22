<template>
<el-row>
  <el-col :span="4">
  	<sider-nav></sider-nav>	
  </el-col>
  <el-col :span="20">
  	
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