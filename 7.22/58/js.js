

// 在input输入框中限定输入内容位数

window.onload =function(){

	// 手机登录和邮箱登录的切换
	var phone = document.getElementById('phone')
	var email = document.getElementById('email')
	var phone_regin = document.getElementById('phone_regin')
	var email_regin = document.getElementById('email_regin')
	phone.onmousedown = function(){
		phone_regin.style.display = 'block'
		email_regin.style.display = 'none'
		phone.style.background = '#fff'
		phone.style.borderTop = '2px solid #EE7711'
		email.style.background = 'none'
		email.style.borderTop = '1px solid #CDCFD1'
	}
	email.onmousedown = function(){
		email_regin.style.display = 'block'
		phone_regin.style.display = 'none'
		email.style.background = '#fff'
		email.style.borderTop = '2px solid #EE7711'
		phone.style.background = 'none'
		phone.style.borderTop = '1px solid #CDCFD1'
	}
// 手机登录的正则判断************************************************************
	var phone_input = document.getElementById('phone_input')
	var rephone_input = document.getElementById('rephone_input')
	var pas1_input = document.getElementById('pas1_input')
	var repas1_input = document.getElementById('repas1_input')

	var phone_p = document.getElementById('phone_p')
	var rephone_p = document.getElementById('rephone_p')
	var pas1_p = document.getElementById('pas1_p')
	var repas1_p = document.getElementById('repas1_p')
// 下面是对手机号的正则判断
	phone_input.onfocus = function(){	
			phone_p.innerHTML='请输入您的手机号码'
	}
	phone_input.onblur = function(){
		if(phone_input.value==''){
			phone_p.innerHTML='请输入您的手机号码'
		}else if(!/^1\d{10}$/.test(phone_input.value)){
			phone_p.innerHTML='手机号码格式错误'
		}else{
			phone_p.innerHTML='该手机号可用'
		}
	}
// 下面是对确认手机号的正则判断
	rephone_input.onfocus = function(){
		rephone_p.innerHTML='请输入您的手机确认码	'

	}
	rephone_input.onblur = function(){
			rephone_p.innerHTML='该验证码可用'
	}

// 下面是对密码的正则判断
	pas1_input.onfocus = function(){
		pas1_p.innerHTML='密码需由6-16个字母、数字和符号组成，区分大小写；不能使用重复、连续的字母、数字或符号'

	}
	pas1_input.onblur = function(){
		if(pas1_input.value==''){
			pas1_p.innerHTML='您还没有输入密码'
		}else if(pas1_input.value.length<6){
			pas1_p.innerHTML='密码太短，最少为6位'
		}else if(/^\w\1{2,}$/.test(pas1_input.value)){
			pas1_p.innerHTML='为了您的账户安全，密码不能为重复数字和连续数字'
		}else{
			pas1_p.innerHTML='该密码可用'
		}
	}
// 下面是对确认密码的正则判断
	repas1_input.onfocus = function(){
		repas1_p.innerHTML='请再次输入您的密码'

	}
	repas1_input.onblur = function(){
		if(repas1_input.value==''||repas1_input.value!=pas1_input.value){
			repas1_p.innerHTML='密码不一致，请再次输入'
		}else{
			repas1_p.innerHTML='该密码可用'
		}
	}

// 邮箱登录的正则判断***********************************************************
	var user_input = document.getElementById('user_input')
	var email_input = document.getElementById('email_input')
	var pas2_input = document.getElementById('pas2_input')
	var repas2_input = document.getElementById('repas2_input')

	var user_p = document.getElementById('user_p')
	var email_p = document.getElementById('email_p')
	var pas2_p = document.getElementById('pas2_p')
	var repas2_p = document.getElementById('repas2_p')



// 下面是对用户名的正则判断
	user_input.onfocus = function(){
		user_p.innerHTML='4-20位，可有汉子、数字、字母和“_”组成，注册成功后用户名不可改变'
	}
	user_input.onblur = function(){
		if(user_input.value==''){
			user_p.innerHTML='您还没有输入用户名'
		}else if(/^\d+$/.test(user_input.value)){
			user_p.innerHTML='不能全是数字'
		}else if(/\W/.test(user_input.value)){
			user_p.innerHTML='用户名需为4-20个字符(包括汉子、数字、字母、下划线，每个汉子为2字符)'
		}else{
			user_p.innerHTML='该用户名可用'
		}
	}

// 下面是对邮箱的正则判断
	email_input.onfocus = function(){
		email_p.innerHTML='请输入有效的电子邮箱，可用于登陆和找回密码'
	}
	email_input.onblur = function(){
		if(email_input.value==''){
			email_p.innerHTML='您还没有输入电子邮箱'
		}else if(!/^\w+@(sohu|qq|163|126|sina)\.com$/.test(email_input.value)){
			email_p.innerHTML='电子邮箱格式不正确，例如myname@sohu.com'
		}else{
			email_p.innerHTML='该邮箱可用'
		}
	}
// 下面是对密码的正则判断
	pas2_input.onfocus = function(){
		pas2_p.innerHTML='密码需由6-16个字母、数字和符号组成，区分大小写；不能使用重复、连续的字母、数字或符号'
	}
	pas2_input.onblur = function(){
		if(pas2_input.value==''){
			pas2_p.innerHTML='您还没有输入密码'
		}else if(pas2_input.value.length<6){
			pas2_p.innerHTML='密码太短，最少为6位'
		}else if(/^\w\1{2,}$/.test(pas2_input.value)){
			pas2_p.innerHTML='为了您的账户安全，密码不能为重复数字和连续数字'
		}else{
			pas2_p.innerHTML='该密码可用'
		}
	}
// 下面是对确认密码的正则判断
	repas2_input.onfocus = function(){
		repas2_p.innerHTML='请再次输入您的密码'
	}
	repas2_input.onblur = function(){
		if(repas2_input.value==''||repas2_input.value!=pas2_input.value){
			repas2_p.innerHTML='密码不一致，请再次输入'
		}else{
			repas2_p.innerHTML='该密码可用'
		}
	}
// 所有到此结束

}

