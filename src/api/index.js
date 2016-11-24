import $ from 'jquery'
const debug=location.host.substr(0,9)=='localhost'
let domain,dataType,type
if (debug) {
	domain="http://localhost/item/so_system/back_api"
	dataType='jsonp'
	type="GET"
}else{
	domain="http://item.redream.cn/so_system/back_api"
	dataType='json'
	type='POST'
}

/*
{
	field:{
		//查询的域和类型
		id:'i',
		name:'s'
	},
	condition:{
		id:{
			opreate:'>',
			type:'i',
			value:'3'
		}
	},
	limit:{
	 from:10,
	 num:20,
	},
	orderby:{
	  id:1,
	  time:-1
	}
}
*/
export function getApplicants(obj){
	return new Promise((resolve,reject) => {
      $.ajax({
        type,
        url:domain + '/get_applicants.php',
        dataType,
        data:{
        	query:JSON.stringify(obj)
        },
        success(data){
          console.log(data)
          resolve(data)
        },
        error(e){
          console.error('send data to getApplicants fail!',e)
          reject(e)
        }
      })
	})

}