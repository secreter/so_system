<template>
<div class="so-status-wrap">
	<div class="so-status">
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <span style="line-height: 36px;" >新建cp活动</span>
		    <el-button 
		    	style="float: right;" 
		    	type="primary"
		    	@click="finishActivity" 
		    	:disabled="tableActivityData[0].current_status==0">
		    	结束
		    </el-button>
		    <el-button 
		    	style="float: right;margin-right:10px;" 
		    	type="primary"
		    	@click="addNewActivity" 
		    	:disabled="tableActivityData[0].current_status==1">
		    	新建{{tableActivityData[0].current_status}}
		    </el-button>
		  </div>
		  <el-table
		      :data="tableActivityData"
		      style="width: 100%">
		      <el-table-column
		        prop="activity_num"
		        label="活动场次"
		        width="100">
		      </el-table-column>
		      <el-table-column
		        prop="current_status"
		        label="当前状态"
		        width="100">
		      </el-table-column>
		      <el-table-column
		        prop="start_time"
		        label="开始时间">
		      </el-table-column>
		    </el-table>
		</el-card>
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <span style="line-height: 36px;">群发模板消息</span>
		    <el-button style="float: right;" type="danger" @click="sendTemplateMsgToAll">群发</el-button>
		    <el-button style="float: right;margin:0 10px;" type="primary" @click="previewTemplateMsg">预览</el-button>
		  </div>
		  <div class="template-input">
		  	<label>发送群体：</label>
		    <el-radio-group v-model="templateMsgData.sendGroup">
			    <el-radio :label="1">匹配成功cp</el-radio>
			    <el-radio :label="2">匹配失败cp</el-radio>
			  </el-radio-group>

		  </div>
		  <br>
		  <div class="template-input">
		  	<label>前导语：</label>
		    <el-input class="-input" placeholder="请输入内容" v-model="templateMsgData.first"></el-input>
		  </div>
		  <div class="template-input">
		  	<label>状态来源：</label>
		    <el-input class="-input" placeholder="请输入内容" v-model="templateMsgData.keyword1"></el-input>
		  </div>
		  <div class="template-input">
		  	<label>处理进度：</label>
		    <el-input class="-input" placeholder="请输入内容" v-model="templateMsgData.keyword2"></el-input>
		  </div>
		  <div class="template-input">
		  	<label>提交时间：</label>
		    <el-input class="-input" placeholder="请输入内容" v-model="templateMsgData.keyword3"></el-input>
		  </div>
		  <div class="template-input">
		  	<label>结束语：</label>
		    <el-input class="-input" placeholder="请输入内容" v-model="templateMsgData.remark"></el-input>
		  </div>
		</el-card>
	</div>
	<div class="so-status">
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <span style="line-height: 36px;">单发模板消息</span>
		    <el-button style="float: right;" type="danger" @click="sendTemplateMsgToAll">群发</el-button>
		    <el-button style="float: right;margin:0 10px;" type="primary" @click="previewTemplateMsg">预览</el-button>
		  </div>
		  <div class="template-input">
		  	<label>发送群体：</label>
		    <el-radio-group v-model="templateMsgData.sendGroup">
			    <el-radio :label="1">匹配成功cp</el-radio>
			    <el-radio :label="2">匹配失败cp</el-radio>
			  </el-radio-group>

		  </div>
		  <br>
		  <div class="template-input">
		  	<label>前导语：</label>
		    <el-input class="-input" placeholder="请输入内容" v-model="templateMsgData.first"></el-input>
		  </div>
		  <div class="template-input">
		  	<label>状态来源：</label>
		    <el-input class="-input" placeholder="请输入内容" v-model="templateMsgData.keyword1"></el-input>
		  </div>
		  <div class="template-input">
		  	<label>处理进度：</label>
		    <el-input class="-input" placeholder="请输入内容" v-model="templateMsgData.keyword2"></el-input>
		  </div>
		  <div class="template-input">
		  	<label>提交时间：</label>
		    <el-input class="-input" placeholder="请输入内容" v-model="templateMsgData.keyword3"></el-input>
		  </div>
		  <div class="template-input">
		  	<label>结束语：</label>
		    <el-input class="-input" placeholder="请输入内容" v-model="templateMsgData.remark"></el-input>
		  </div>
		</el-card>
	</div>
</div>
</template>

<script>
import {sendTemplateMsg,getItems,changeActivityStatus} from '../api'
export default {
  created(){
  	let obj={
  		table:'cp_activity_status',
  		field:{
  			id:'i',
  			activity_num:'i',
  			current_status:'i',
  			start_time:'i',
  			end_time:'i',
  		},
  		orderby:{
  			activity_num:-1
  		}
  	}
  	getItems(obj)
  	.then(data => {
  		this.tableActivityData=data.items
  	})
  },
  data () {
    return {
    	templateMsgData:{
    		sendGroup:1,
    		first:'',
    		keyword1:'',
    		keyword2:'',
    		keyword3:'',
    		remark:'',
    	},
    	 tableActivityData: [{
            
          	}
          ]
    	
    }
  },
  methods: {
      sendTemplateMsgToAll() {
        this.$confirm('此操作将向所有配对成功的cp发送消息, 是否继续?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '发送成功!'
          });
          sendTemplateMsg(this.templateMsgData)
          // .then()
          // console.log(this.templateMsgData)
          this.$notify({
	          title: '群发成功',
	          message: '群发成功',
	          type: 'success'
	        });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消发送！'
          });          
        });
      },
      previewTemplateMsg(){
      	sendTemplateMsg(this.templateMsgData,true)
      	console.log(this.templateMsgData)
      	this.$notify({
          title: '预览成功',
          message: '预览成功',
          type: 'success'
        });
      },
      addNewActivity(){
    	changeActivityStatus('add')
    	console.log(11)
      },
      finishActivity(){
      	changeActivityStatus('finish')
      	console.log(22)
      }
    }

}
</script>

<style lang='less'>
.so-status{
	display: flex;
	justify-content: space-between;
	width: 100%;
	.box-card{
		width: 50%;
		flex-grow: 0;
		flex-shrink: 0;
		margin-right: 10px;
		.template-input{
			display: flex;
			justify-content: space-between;
			margin: 5px;
			.-input{
				width: 80%;
			}
		}
	}

}
</style>
