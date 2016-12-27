<template>
	<div class="so-applicants-table">
		<el-table :data="tableData" border style="width: 100%" height="500" stripe fit>
		<el-table-column
		  fixed
		  inline-template
		  prop="girlHeadimgurl"
		  label="头像"
		  >
		  <div class="-headimg-wrap" :style="{background:'url('+row.girlHeadimgurl+')',backgroundSize:'contain'}" :key="row.girlId">
	      </div>
		</el-table-column>
		<el-table-column
		  prop="girlAlias"
		  label="女生昵称"
		  >
		</el-table-column>
		
		<el-table-column
		  fixed
		  prop="girlAge"
		  label="女生年龄"
		  >
		</el-table-column>
		<el-table-column
		  fixed
		  prop="girlProvince"
		  label="女生省份"
		  >
		</el-table-column>
		<el-table-column
		  fixed
	      prop="girlCity"
	      label="女生市区"
	      >
	    </el-table-column>
	    <el-table-column
	      prop="girlWeichat_id"
	      label="女生微信"
	      >
	    </el-table-column>
	    <el-table-column
	      prop="girlPhonenumber"
	      label="女生电话"
	      >
	    </el-table-column>
	    <el-table-column
	      prop="girlUniversity"
	      label="女生学校"
	      >
	    </el-table-column>


	    <el-table-column
		  inline-template
		  prop="boyHeadimgurl"
		  label="男生头像"
		  >
		  <div class="-headimg-wrap" :style="{background:'url('+row.headimgurl+')',backgroundSize:'contain'}">
	      </div>
		</el-table-column>
		<el-table-column
		  prop="boyAlias"
		  label="男生昵称"
		  >
		</el-table-column>
		
		<el-table-column
		  fixed="right"
		  prop="boyAge"
		  label="男生年龄"
		  >
		</el-table-column>
		<el-table-column
		  fixed="right"
		  prop="boyProvince"
		  label="男生省份"
		  >
		</el-table-column>
		<el-table-column
		  fixed="right"
	      prop="boyCity"
	      label="男生市区"
	      >
	    </el-table-column>
	    <el-table-column
	      prop="boyWeichat_id"
	      label="男生微信"
	      >
	    </el-table-column>
	    <el-table-column
	      prop="boyPhonenumber"
	      label="男生电话"
	      >
	    </el-table-column>
	    <el-table-column
	      prop="boyUniversity"
	      label="男生学校"
	      >
	    </el-table-column>
	    <!-- <el-table-column
	      prop="girlIntroduce"
	      label="自我介绍"
	      width="150"
	      >
	    </el-table-column>
	    <el-table-column
	      prop="girlWords_to_cp"
	      label="致cp的话"
	      width="150"
	      > -->
	    </el-table-column>
	    <el-table-column
	      fixed="right"
		  inline-template
	      prop="girlqq"
	      label="管理"
	      >
	      <div class="-contrl">
	      	<el-input
	      	  size="mini"
			  placeholder="id"
			  class="{width:'20px'}"
			  v-model="changeId">
			</el-input>
			<el-button size="mini" type="warning" @click="changeMatch(row.girlId,row.boyId,changeId)">更改</el-button>
	      </div>
	    </el-table-column>
	  </el-table>
	  <el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="1"
	      :page-sizes="[10, 20, 30, 40]"
	      :page-size="10"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="tableCount">
	    </el-pagination>
	</div>
</template>

<script>
import {getItems ,getTableCount,changeCP} from '../api/index'
const SHOWNUM=10
export default {
	created(){
		
		this.getData()
		getTableCount({
			table:'cp_match_view',
			field:{
				girlId:'i'
			}
		}).then(data => {
			this.tableCount=data.count
		})

	},
    data () {
	    return {
	    	queryObj:{
	    		table:'cp_match_view',
				field:{
					//查询的域和类型
					girlId:'i',
					girlOpenid:'s',
					girlHeadimgurl:'s',
					girlAlias:'s',
					girlWeichat_id	:'s',
					girlAge:'i',
					girlPhonenumber	:'s',
					girlProvince	:'s',
					girlCity	:'s',
					girlUniversity	:'s',
					girlIntroduce	:'s',
					girlWords_to_cp	:'s',

					boyId:'i',
					boyOpenid:'s',
					boyHeadimgurl:'s',
					boyAlias:'s',
					boyWeichat_id	:'s',
					boyAge:'i',
					boyPhonenumber	:'s',
					boyProvince	:'s',
					boyCity	:'s',
					boyUniversity	:'s',
					boyIntroduce	:'s',
					boyWords_to_cp	:'s',

				},
				condition:{
					activity_num:{
						opreate:'>',
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
	    	changeId:''
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
    	handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        this.queryObj.limit.num=val
        this.getData()
        },
        handleCurrentChange(val) {
          // console.log(`当前页: ${val}`);
          this.queryObj.limit.from=(val-1)*this.pageSize
          this.getData()
        },
        changeMatch(girlId,boyId,newBoyId){
        	if (!newBoyId) {
        		return
        	}

        	let obj={girlId,boyId,newBoyId}
        	console.log(obj)
        	// return
        	changeCP(obj)
        	.then(data => {

        	})
        	.catch(e => {

        	})
        }
    }
}
</script>

<style lang='less'>
.so-applicants-table{
	.-headimg-wrap{
		width: 60px;
		height: 60px;
	}
	.el-table .cell{
		padding: 0 5px;
	}
	.el-input__inner{
		padding: 1px !important;
		width: 30px !important;
	}
}

</style>
