<template>
	<div class="so-applicants-table">
		<el-table :data="tableData" border style="width: 100%" height="500" stripe fit>
		<el-table-column
		  fixed
		  inline-template
		  prop="headimgurl"
		  label="头像"
		  >
		  <div class="-headimg-wrap" :style="{background:'url('+row.headimgurl+') no-repeat',backgroundSize:'contain'}" :key="row.id" v-popover:popover>
		     <el-popover
				  ref="popover"
				  placement="top-start"
				  width="200"
				  trigger="hover">
				  <div :style="{background:'url('+row.headimgurl+') no-repeat',backgroundSize:'contain',width:'200px',height:'200px'}" :key="row.id"></div>
			</el-popover>
	      </div>
		</el-table-column>
		<el-table-column
		  prop="openid"
		  label="openid"
		  >
		</el-table-column>
		<el-table-column
		  prop="nickname"
		  label="微信名"
		  >
		</el-table-column>
		<el-table-column
		  prop="alias"
		  label="昵称"
		  >
		</el-table-column>
		<el-table-column
		  prop="sex"
		  label="性别"
		  >
		</el-table-column>
		<el-table-column
		  prop="age"
		  label="年龄"
		  >
		</el-table-column>
		<el-table-column
		  prop="province"
		  label="省份"
		  >
		</el-table-column>
		<el-table-column
	      prop="city"
	      label="市区"
	      >
	    </el-table-column>
	    <el-table-column
	      prop="weichat_id"
	      label="微信"
	      >
	    </el-table-column>
	    <el-table-column
	      prop="phonenumber"
	      label="电话"
	      >
	    </el-table-column>
	    <el-table-column
	      prop="university"
	      label="学校"
	      >
	    </el-table-column>
	    <el-table-column
	      prop="introduce"
	      label="自我介绍"
	      width="150"
	      >
	    </el-table-column>
	    <el-table-column
	      prop="words_to_cp"
	      label="致cp的话"
	      width="150"
	      >
	    </el-table-column>
	    <el-table-column
	      fixed="right"
		  inline-template
	      prop="qq"
	      label="管理"
	      >
	      <div class="-contrl">
	      	sas
	      </div>
	    </el-table-column>
	  </el-table>
	  <el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="1"
	      :page-sizes="[10, 20, 30, 40]"
	      :page-size="100"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="tableCount">
	    </el-pagination>
	</div>
</template>

<script>
import {getItems ,getTableCount} from '../api/index'
const SHOWNUM=10
export default {
	created(){
		let obj={
	        table:'cp_activity_status',
	        field:{
	          activity_num:'i',
	        },
	        condition:{
	        },
	        orderby:{
	          activity_num:-1
	        },
	        limit:{
	          from:0,
	          num:1,
	        }
	      }

	      getItems(obj)
	      .then(data => {
	        this.activity_num=data.items[0].activity_num

	        this.getData()
			getTableCount({
				table:'cp_applicants',
				field:{
					id:'i'
				},
				condition:{
					activity_num:{
						operate:'=',
						type:'i',
						value:this.activity_num
					}
				},
			}).then(data => {
				this.tableCount=data.count
			})
	      })
	      .catch(e => {
	        console.log(e)
	      })

		

	},
    data () {
	    return {
	    	queryObj:{
	    		table:'cp_applicants',
				field:{
					//查询的域和类型
					id:'i',
					openid:'s',
					nickname:'s',
					headimgurl:'s',
					alias:'s',
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
					activity_num:{
						operate:'=',
						type:'i',
						value:'3'
					}
				},
				orderby:{
				    time:1   //降序
				},
				limit:{
				    from:0,
				    num:10,
				},
			},
	    	tableData: [],
	    	currentPage :0,
	    	pageSize : 10,
	    	tableCount:0,
	    	activity_num:3
	    }
    },
    methods:{
    	getData(){
    		getItems(this.queryObj)
			.then((data) => {
				this.tableData=data.items
			})
			.catch((e) => {

			})
    	},
    	nextPage(){
    		this.queryObj.limit.from+=SHOWNUM
    		this.getData()
    	},
    	handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        this.queryObj.limit.num=val
        this.getData()
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          if (!val) {
          	val=1
          }
          this.queryObj.limit.from=(val-1)*this.pageSize
          this.getData()
        }
    }
}
</script>

<style lang='less'>
.so-applicants-table{
	.headimg-column .cell{
		padding: 0 !important;
	}
	.-headimg-wrap{
		margin-left:-2px;
		width: 80px;
		height: 80px;
	}
}

</style>
