//  String 常用方法

 // 去除空格
function trim(str,type){
	switch (type){
		case 1:return str.replace(/\s+/g,"");
		case 2:return str.replace(/(^\s*)|(\s*$)/g,"");
		case 3:return str.replace(/(^\s*)/g,"");
		case 4:return str.replace(/(\s*$)/g,"");
		default: return "去掉之后" + str;
	}
}

console.log(trim('  sdgaddg  sa g',1))
console.log(trim('  sdgaddg  sa g',4))
console.log(trim('  sdgaddg  sa g',3))
console.log(trim('  sdgaddg  sa g',4))

//  字母大小写切换
function changeCase(str,type){

 function ToggleCase(str){
		var itemText = "";
		str.split("").forEach(
			function(item){
				if(/^([a-z])/.test(item)){
					itemText += item.toUpperCase();
				}
				else if (/^([A-Z])+/.test(item)){
					itemText += item.toLowerCase();
				}
				else {
					itemText += item;
				}
		});
		return itemText;
 }

	switch (type){
		case 1:
    		return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
         return v1.toUpperCase() + v2.toLowerCase();
    });
    case 2:
    		return str.replace(/^(\w)(\w+)/,function(v,v1,v2){
    			return v1.toLowerCase() + v2.toUpperCase();
    		});
		case 3:
				return ToggleCase(str);
		case 4:
				return str.toUpperCase();
		case 5: 
		    return str.toLowerCase();
	}


}


//  字符串循环
function copyStr(str,count){
	var text = '';

	for(var i = 0; i<count; i++){
		text += str;
	}

	return text;
}

//  替换字符串
function replaceStr(str,want,target){
	wantRegExp = new RegExp(want,'g')
	return str.replace(wantRegExp,targer)
}


//  检测 电话  邮箱 数字 中文 英文
function checkType(str,type){
	switch(type){
		case 'email':
			return /^\w+@\w+\.[a-z0-9]+$/.test(str);
		case 'phone':
		  return /^1[3|4|5|7|8|6][0-9]{9}$/.test(str);	
		case 'tel':
			return /^0/.test(str);
		case 'number':
		  return /^[0-9]+$/.test(str);
		case 'english':
		  return /^[a-zA-Z]+$/.test(str);
		case 'chinese': 
			return /^[\u4e00-\u9FA5]+$/.test(str);
		case 'lower':
			return /^[a-z]+$/.test(str);
		case 'upper':
			return /^[A-Z]+$/.test(str);		   	
		default: 
			return true
	}
}

// 检测密码强度
//checkPwd('12asdASAD')
//3(强度等级为3)
function checkPwd(str) {
    var nowLv = 0;
    if (str.length < 6) {
        return nowLv
    }
    ;
    if (/[0-9]/.test(str)) {
        nowLv++
    }
    ;
    if (/[a-z]/.test(str)) {
        nowLv++
    }
    ;
    if (/[A-Z]/.test(str)) {
        nowLv++
    }
    ;
    if (/[\.|-|_]/.test(str)) {
        nowLv++
    }
    ;
    return nowLv;
}

//  随机码数 0-36
function randomNumber(num){
	return Math.random().toString(num).substring(2)
}

// 查找字符串
function countNum(str,strSplit){
	return str.split(strSplit).length-1
}


//  数组方法

//  去重
//  set 是一种数据结构   new Set(array)  可以转变为类数组对象
//  Array.from(new Set(array)) 方法可以转变为真正的数组

let arr = [1,2,1,2,3,4,1,2,4,24,2,4,24,2,24,9,020,9852,265]

let set = new Set(arr)

let arr1 = Array.from(set)

function removeRepeatArray(array){

	let set = new Set(array)

	return Array.from(set)
}



//  打乱数组顺序
function upsetArr(arr){
	return arr.sort(function(){
		return Math.random()-0.5;
	})
}


//  数组最大、最小值
function maxArr(arr){
	return Math.max.apply(null,arr)
}

function minArr(arr){
	return Math.min.apply(null,arr)
}


//  数组求和、平均值
function sumArr(arr){
	var sumText = 0
	for(var i=0; i<arr.length; i++){
		sumText += arr[i]
	}

	return sumText
}

function covArr(arr){
	var sumText = 0
	for(var i=0; i<arr.length; i++){
		sumText += arr[i]
	}

	return sumText/arr.length
}

// 从数组中获取随机数组
function randomOne(arr){
	var index = Math.floor(Math.random()*arr.length)
	return arr[index]
}

//  返回数组一个元素出现的次数
function getEleCount (obj,ele){
	var num = 0
	for( var i=0; i<obj.length; i++ ){
		if(ele == obj[i]){
			num ++;
		}
	}
	return num
}


//  DOM操作
//  检查是否有类名
function hasClass(obj,classStr){
	var arr = obj.className.split(/^\s+/);
	return (arr.indexOf(classStr)==-1)?false:true;
}

// 增加类名
function addClass(obj,classStr){
	if(!this.hasClass(obj,classStr)){
		obj.className += '' + classStr
	}
}

//  设置样式 

function css(obj,json){
	for(var attr in json){
		obj.style[attr] = json[attr];
	}
}

// 设置文本内容
function html(obj){
	if(arguments.length == 0){
		return this.innerHTML;
	}else if(arguments.length == 1){
		this.innerHTML = arguments[0]
	}
}

// 显示隐藏

function show(obj){
	obj.style.display = ""
}
function hide(obj){
	obj.style.display = "none"
}


//  现金额转换大写

function upDigit(n){

}

//  随机返回一个范围的数字  Math.ceil(25.5) Math.floor(25.5)  Math.round(25.4) Math.round(25.5)

function randomNumber(n1,n2){
	// 两个参数
	if(arguments.length == 2){
		return Math.round(n1+Math.random()*(n2-n1))
	}
	// 单个参数 
	else if(arguments.length ==1){
		return Math.round(Math.random()*n1)
	}
	// 没有参数 透明度
	else if(arguments.length == 0){
		return Math.round(Math.random()*255)
	}
	
}

//  随机颜色
function randomColor(){
	var num = Math.round(Math.random()*255)
	return 'rgb('+ num + ','+ num + ',' +num+ ')'
}

//  倒计时

function getTime(time){

	var startDate = new Date()   //当前时间
	var endDate = new Date(time) // 传入时间
	var t = endDate.getTime() - startDate.getTime() //时间差毫秒数 1s = 1000ms

	var d = 0
			h = 0
			m = 0
			s = 0

	if(t>0){
		d = Math.floor(t/1000/60/60/24)
		h = Math.floor(t/1000/60/60%24)
		m = Math.floor(t/1000/60%60)
		s = Math.floor(t/1000%60)
	}		

	return "还剩" + d + "天" + h + "小时" + m + "分钟" + s + "秒"
}

//  适配rem 
function getFontSize(){
	var doc = document
			win = window
	resizeEvent = 'orientationchange' in window ?	'orientationchange' : 'resize';
	recalc = function(){
		var clientWidth = docEL.clientWidth;
		if(!clientWidth) {
			return
		}
		if(clientWidth > 750){
			clientWidth = 750
		}
		docEL.style.fontSize = 100*(clientWidth/750) + "px"
	}

	win.addEventListener(resizeEvent,recalc,false)
	doc.addEventListener('DOMContentLoaded',recalc,false)
}

/*
img {
	width: 1rem;
	height: 1rem;
}
















