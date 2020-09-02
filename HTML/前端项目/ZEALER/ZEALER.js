$(function(){

// 点击侧键 如何让点击频率固定、


	// 滑动展览图
	var c = 0
	run()
	function run(){
		$('.pic-pvw').animate({'left':-c*1000+'px'},500)
		$('.btn li a').eq(c).css({'background':'#fff','opacity': 1})
		$('.btn li a').not($('.btn li a').eq(c)).css({'background':'none','opacity': 0.4})
		c = (c>=3)?0:(c+1);

	}
	var timer = setInterval(run,3000)
	// 滑动按钮
		$('.btn li').click(function(){
			clearInterval(timer)
			c = $(this).index()
			$('.pic-pvw').stop().animate({'left':-c*1000+'px'},500)
			$('.btn li a').eq(c).css({'background':'#fff','opacity': 1})
			$('.btn li a').not($('.btn li a').eq(c)).css({'background':'none','opacity': 0.4})
			// alert(c)
		})
		$('.btn li').mouseup(function(){
			$('.pic-pvw').stop()
			timer = setInterval(run,3000)
		})
	// 滑动侧按钮
		$('.flex-next').click(function(){
			clearInterval(timer)	
			c = (c>=3)?0:(c+1)
			// alert(c)
			$('.pic-pvw').stop().animate({'left':-c*1000+'px'},500)
			$('.btn li a').eq(c).css({'background':'#fff','opacity': 1})
			$('.btn li a').not($('.btn li a').eq(c)).css({'background':'none','opacity': 0.4})
			// alert(c)
		})
		$('.flex-next').mouseup(function(){
			$('.pic-pvw').stop()
			timer = setInterval(run,3000)
		})



		$('.flex-prev').click(function(){
			clearInterval(timer)
			c = (c<=0)?3:(c-1)
			// alert(c)
			$('.pic-pvw').stop().animate({'left':-c*1000+'px'},500)
			$('.btn li a').eq(c).css({'background':'#fff','opacity': 1})
			$('.btn li a').not($('.btn li a').eq(c)).css({'background':'none','opacity': 0.4})
			// alert(c)
		})
		$('.flex-prev').mouseup(function(){
			$('.pic-pvw').stop()
			timer = setInterval(run,3000)
		})

// *****************************
	// 小盒子
.box ul li .play{
.box ul li .pvw_img{
.box ul li .subject{
	$('.box ul li .pvw_img').mouseover(function{
		$('.box ul li .play').fadeTo('fast', 0.9);
	})

})



