<template>
	<div class="so-applicants-table">
		<el-table :data="tableData" border style="width: 100%" height="500">
		<el-table-column
		  fixed
		  inline-template
		  prop="headimgurl"
		  label="头像"
		  width="80">
		  <div class="-headimg-wrap" :style="{background:'url('+row.date+')',backgroundSize:'contain'}">
	      </div>
		</el-table-column>
		<el-table-column
		  prop="nickname"
		  label="昵称"
		  width="120">
		</el-table-column>
		<el-table-column
		  prop="sex"
		  label="性别"
		  width="120">
		</el-table-column>
		<el-table-column
		  prop="age"
		  label="年龄"
		  width="120">
		</el-table-column>
		<el-table-column
		  prop="province"
		  label="省份"
		  width="120">
		</el-table-column>
		<el-table-column
	      prop="city"
	      label="市区"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="weichat_id"
	      label="微信"
	      width="300">
	    </el-table-column>
	    <el-table-column
	      prop="phonenumber"
	      label="电话"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="university"
	      label="学校"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="introduce"
	      label="自我介绍"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      prop="words_to_cp"
	      label="致cp的话"
	      width="120">
	    </el-table-column>
	    <el-table-column
	      fixed="right"
		  inline-template
	      prop="qq"
	      label="管理"
	      width="120">
	      <div class="-contrl">
	      	sas
	      </div>
	    </el-table-column>
	  </el-table>
	  <div @click="nextPage">下一页</div>
	</div>
</template>

<script>
import {getApplicants } from '../api/index'
const SHOWNUM=10
export default {
	created(){
		
		this.getData()

	},
    data () {
	    return {
	    	queryObj:{
				field:{
					//查询的域和类型
					id:'i',
					openid:'s',
					headimgurl:'s',
					nickname:'s',
					weichat_id	:'s',
					sex:'i',
					age:'i',
					phonenumber	:'s',
					province	:'s',
					city	:'s',
					university	:'s',
					introduce	:'s',
					words_to_cp	:'s',
					cp_id	:'i',
					cp_grade	:'i',

				},
				condition:{
					// id:{
					// 	opreate:'>',
					// 	type:'i',
					// 	value:'3'
					// }
				},
				orderby:{
				    time:-1   //降序
				},
				limit:{
				    from:0,
				    num:6,
				},
			},
	    	tableData: []
	    }
    },
    methods:{
    	getData(){
    		getApplicants(this.queryObj)
			.then((data) => {
				this.tableData=data.items
			})
			.catch((e) => {

			})
    	},
    	nextPage(){
    		this.queryObj.limit.from+=SHOWNUM
    		this.getData()
    	}
    }
}
</script>

<style>
.so-applicants-table{
	.-headimg-wrap{
		width: 80px;
		height: 80px;
	}
}

</style>
