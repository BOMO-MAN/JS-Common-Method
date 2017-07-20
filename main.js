var Methods = {
		//  String 方法


		EmptyString: function(str,type){
			swith (type){
				case: 1:return str.replace(/\s+/g,"");
				case: 2:return str.replace(/(^\s*)|(s*$)/g,"");
				case: 3:return str.replace(/\(s*)/g,"");
				case: 4:return str.replace(/\(s*$)/g,"");
			}
		},


}

console.log(Methods)