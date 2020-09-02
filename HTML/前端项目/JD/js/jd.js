$(function() {

//////////////////////////////////////////////////////////////////////////////////////////
/**
 * [禁用所有a 的链接]
 */
$('a').live('click',function(e){
  e.preventDefault();
  });
//////////////////////////////////////////////////////////////////////////////////////////
/**
 * [顶部区域的手机con移动]
 */
	$('#top .top-in-right li.li3').hover(function() {
		$(this).find('span').stop().animate({
			'top': -39
		}, 60);
	}, function() {
		$(this).find('span').animate({
			'top': 0
		}, 60);
	});
//////////////////////////////////////////////////////////////////////////////////////////
/**
 * [第一条广告的关闭效果]
 */
	$('#td span').click(function() {
		$(this).parent().css('display', 'none')
	})
//////////////////////////////////////////////////////////////////////////////////////////
/**
 * [二级菜单的显示隐藏效果]
 */
	$('#column .menu ul li').hover(function() {
		$(this).find('div.menu_box').show()
		$(this).find('div.menu_close').show()
	}, function() {
		$(this).find('div.menu_box').hide()
		$(this).find('div.menu_close').hide()
	})
//////////////////////////////////////////////////////////////////////////////////////////
/**
 * [二级菜单的显示隐藏效果]
 */
$(window).scroll(function(){
	$('#column .menu ul li').mouseenter(function(){
		var num10 = $(this).parent().offset().top
		// $(document).attr('title',num10)
		var num11 = $(document).scrollTop()
		$(document).attr('title',num11+'|'+num10)
		if(num11>num10){
			// alert(1)
			$('.menu_box').css('top',num11-num10+4)
		}else{
			$('.menu_box').css('top',4)
		}
	})
})	
//////////////////////////////////////////////////////////////////////////////////////////
/**
 * [栏目区域里面的轮播图]
 */
	var num = -1
	fun_pvw()
	function fun_pvw() {
		num = (num == 5) ? 0 : (num + 1)
		$('#column .img-pvw div.pvw_box img').eq(num).fadeIn().siblings('img').hide('')
		$('#column .img-pvw div.pvw_box li').eq(num).css('background', '#E4393C').siblings('li').css('background', '#999')
	}

	var timer = setInterval(fun_pvw, 2000)

	$('#column .img-pvw div.pvw_box li').hover(function() {
		clearInterval(timer)
		num = $(this).index()
		$('#column .img-pvw div.pvw_box img').eq(num).fadeIn().siblings('img').hide()
		$(this).css('background', '#E4393C').siblings('li').css('background', '#999')
	}, function() {
		timer = setInterval(fun_pvw, 2000)
	})
//////////////////////////////////////////////////////////////////////////////////////////
/**
 * [导航条右边的图片轮换效果]
 */
	var go = 999
	gold()

	function gold() {
		if (go > 0) {
			$('.gold img').attr('src', 'images/29.png')
			go *= -1
		} else {
			$('.gold img').attr('src', 'images/td1.jpg')
			go *= -1
		}
	}
	var gold = setInterval(gold, 1000)
//////////////////////////////////////////////////////////////////////////////////////////
/**
 * [栏目里面的点击移动图片效果]
 */
	var num1 = 0
	$('#column .img-pvw div.pvw-xl .pvw-xl-js').hover(function() {
		$(this).find('span').fadeIn(500).css('background', '#F5F5F5');
	}, function() {
		$(this).find('span').stop().fadeOut(50).css({
			'background': 'none'
		});
	})
	$('#column .img-pvw div.pvw-xl .pvw-xl-left').click(function() {
		num1 = (num1 <= 0) ? 5 : (num1 - 1)
		$('#column .img-pvw div.pvw-xl .pvw-xl-box ul').animate({
			'left': (-num1 * 608) + 'px'
		}, 400)
	})
	$('#column .img-pvw div.pvw-xl .pvw-xl-right').click(function() {
		num1 = (num1 == 5) ? 0 : (num1 + 1)
		$('#column .img-pvw div.pvw-xl .pvw-xl-box ul').animate({
			'left': (-num1 * 608) + 'px'
		}, 400)
	})
//////////////////////////////////////////////////////////////////////////////////////////
/**
 * [重点区域的右边小功能菜单的效果]
 */
	$('#column .faster ul.menu2 .menu2-js').mouseenter(function() {
		var num2 = $(this).index()
			// alert(num2)
		$('#column .faster ul.menu2').find('.li1,.li2,.li3,.li4').stop().animate({
			'top': -45
		}, 200)

		$('#column .faster ul.menu2').find('.li5,.li6,.li7,.li8').hide()
		$('#column .faster ul.menu2 div.menu2-box').eq(num2).stop().animate({
			'top': 30
		}, 200).siblings('div').css({
			'top': 300
		})
	})

	$('#column .faster ul.menu2').mouseleave(function() {
		$(this).find('.li1,.li2,.li3,.li4').stop().animate({
			'top': 0
		}, 200)
		$(this).find('.li5,.li6,.li7,.li8').stop().show()
		$('#column .faster ul.menu2 div.menu2-box').stop().animate({
			'top': 300
		}, 200)
	})
//////////////////////////////////////////////////////////////////////////////////////////
/**
 * [重点区域图片预览的移入移出效果]
 */
	$('#hit .hit-cen div').hover(function() {
		$(this).find('.hit-img').stop().animate({
			'left': -10
		}, 200)
	}, function() {
		$(this).find('.hit-img').stop().animate({
			'left': 0
		}, 200)
	})
//////////////////////////////////////////////////////////////////////////////////////////
/**
 * [1F~8F的显示区域轮播效果]
 */
	var num3 = 0
	$('.lay .pvw .pvw-title ul li').mouseenter(function() {
		num3 = $(this).index()
		$(this).parent().parent().find('.pvw-jiantou').stop().delay(30).animate({
			'left': num3 * 158
		}, 300)
		$(this).find('a').css({
			'color': '#E4393C'
		}).parent().siblings('li').find('a').css({
			'color': '#666'
		})
		$(this).parent().parent().parent().find('.pvw-content').find('.pvw-conbox').stop().delay(100).animate({
			'left': -num3 * 791
		}, 1)
	})
	$('.lay .pvw .pvw-title ul li').eq(num3).find('a').css('color', '#E4393C')
//////////////////////////////////////////////////////////////////////////////////////////

/**
 * [1~8F 的右下角图片切换效果]
 */
	$('.lay .brank .brank-content span b').mouseenter(function() {
		var num4 = $(this).index()
		$(this).css('background', '#7ABD54').siblings('b').css('background', '#999')
		$(this).parent().parent().find('.brank-bn').stop().animate({
			'left': -num4 * 209
		}, 300);
	})
//////////////////////////////////////////////////////////////////////////////////////////
/**
 * [底部的纵向轮播效果]
 */
	function run2() {
		$('#foot_pvw .hot-bask ul li').last().height(0);
		$('#foot_pvw .hot-bask ul').prepend($('#foot_pvw .hot-bask ul li').last());
		$('#foot_pvw .hot-bask ul li').first().animate({
			'height': '80px'
		}, 400);
	}
	var timer2 = setInterval(run2, 6000)

	function run3() {
		$('#foot_pvw .hot-activity ul li').last().height(0);
		$('#foot_pvw .hot-activity ul').prepend($('#foot_pvw .hot-activity ul li').last());
		$('#foot_pvw .hot-activity ul li').first().animate({
			'height': '80px'
		}, 400);
	}
	var timer3 = setInterval(run3, 6000)
//////////////////////////////////////////////////////////////////////////////////////////
/**
 * [1F~8F的第一个显示区的图片切换效果]
 */
	$('.lay .pvw .pvw-content .pvw-conbox').find('ul:first').find('.li2').css({
		'width': 473,
		'position': 'relative',
		'overflow': 'hidden'
	})
	$('.lay .pvw .pvw-content .pvw-conbox ul li.li2 .pvw-li-btn').find('b:first').css({
		'background': '#7ABD54'
	}).siblings().css({
		'background': '#999'
	})
	$('.lay .pvw .pvw-content .pvw-conbox ul li.li2 .pvw-li-btn b').mouseenter(function() {
		var num5 = $(this).index()
		$(this).css({
			'background': '#7ABD54'
		}).siblings().css({
			'background': '#999'
		})
		$(this).parent().parent().find('.pvw-li-box').stop().animate({
			'left': -num5 * 473
		}, 200)

	})
/////////////////////////////////////////////////////////////////////////////////////////
/**
 * [3L鼠标移入透明度变化效果]
 */
	$('.lay .pvw .pvw-content .pvw-conbox .box3f a').hover(function() {
		// $('.lay .pvw .pvw-content .pvw-conbox .box3f').css({'background':'#333'})
		$('.lay .pvw .pvw-content .pvw-conbox .box3f a img').css({
			'opacity': '0.7'
		})
		$(this).find('img').css({
			'opacity': '1'
		})
		$(this).find('img').stop().animate({
			'left': -10
		}, 200)
	}, function() {
		$('.lay .pvw .pvw-content .pvw-conbox .box3f a img').css({
			'opacity': '1'
		})
		// $(this).parent().css({'background':'none'})
		$(this).find('img').stop().animate({
			'left': 0
		}, 200)
	})
	// $('.lay .pvw .pvw-content .pvw-conbox .box3f a').hover(function() {
	// 	// $('.lay .pvw .pvw-content .pvw-conbox .box3f').css({'background':'#333'})
	// 	// $('.lay .pvw .pvw-content .pvw-conbox .box3f a img').not($(this).find('img')).fadeTo(1000, 0.7)
	// 	$(this).find('img').stop().fadeTo(1000, 0.5);
	// 	$(this).find('img').stop().animate({
	// 		'left': -10
	// 	}, 200)
	// }, function() {
	// 	$('.lay .pvw .pvw-content .pvw-conbox .box3f a img').fadeTo(1000, 1)
	// 	// $(this).parent().css({'background':'none'})
	// 	$(this).find('img').stop().animate({
	// 		'left': 0
	// 	}, 200)
	// })
/////////////////////////////////////////////////////////////////////////////////////////
/**
 * [8Ftag效果]
 */
	$('#lay_8f .brank8f .brank-content div').eq(0).show().siblings().hide()
	$('#lay_8f .brank8f .brank-title span').eq(0).css('color', '#E4393C')
	$('#lay_8f .brank8f .brank-title span').mouseenter(function() {
		var num6 = $(this).index()
		$('#lay_8f .brank8f .brank-content div').eq(num6).show().siblings().hide()
		$('#lay_8f .brank8f .brank-title span').eq(num6).css('color', '#E4393C').siblings().css('color', '#000')
		$('#lay_8f .brank8f .brank-title div.tab').stop().animate({
			'left': num6 * 40
		}, 200)
	})

/////////////////////////////////////////////////////////////////////////////////////////////
/**
 * [1F~8F第一显示区域的图片鼠标悬停变白效果]
 */
	$('.pvw-li-box').parent().siblings().hover(function() {
		$(this).find('img').fadeTo(10, 0.5)
	}, function() {
		$(this).find('img').fadeTo(10, 1)
	})
/////////////////////////////////////////////////////////////////////////////////////////
/**
 * [Input内容获得和失去焦点效果]
 */
	$('#header .head .head-search .input').focus(function(){
		$(this).attr('value','')
	})
	$('#header .head .head-search .input').focusout(function(){
		$(this).attr('value','iphone 9 只要5元')
	})

	$('#foot_pvw .feed .input').focus(function(){
		$(this).attr('value','')
	})
	$('#foot_pvw .feed .input').focusout(function(){
		$(this).attr('value','请输入您的的Email地址')
	})		
/////////////////////////////////////////////////////////////////////////////////////////
/**
 * [2F商标切换效果]
 */
	$('#lay_2f .brank .brank-content p b').mouseenter(function(){
		var num7 = $(this).index()
		// alert(num7)
		$('#lay_2f .brank .brank-content ul').eq(num7).show().siblings('ul').hide()
		$('#lay_2f .brank .brank-content p b').eq(num7).css('background','#7ABD54').siblings('b').css('background','#999')
	})
/////////////////////////////////////////////////////////////////////////////////////////
/**
 * [给窗口绑定滚动条移动显示固定导航事件]
 */
	$(window).scroll(function() {
		// 可视区域高度
		// var window_height = $(window).height();
		// // 获得已经滚动上去的高度
		var stop = $(document).scrollTop();
		if (stop > 100) {
			$('#fixed').show()
		} else {
			$('#fixed').hide()
		}
	})
/////////////////////////////////////////////////////////////////////////////////////////
/**
 * [固定导航实时显示当前的楼层]
 */
	$(window).scroll(function (){
		for (var i = 1; i <=8; i++) {
			var num8 = $('#lay_'+i+'f').offset().top-$(document).scrollTop()
			// $(document).attr('title',num8)
			var lay_height = $('#lay_'+i+'f').height()
			if(lay_height>num8&&num8>=0){
				$('.li-'+i+'f').addClass('cur').find('a').addClass('acur')
			}else{
				$('.li-'+i+'f').removeClass('cur').find('a').removeClass('acur')
			}
		};
	})
/////////////////////////////////////////////////////////////////////////////////////////
/**
 * [点击固定导航到对应的楼层]
 */
$('ul#fixed li').click(function(){
	var num9 = $(this).index()+1
	 if($(this).index()==9){
	 	$('html').animate({scrollTop:0},300)
	 }
	 $('html').animate({scrollTop:$('#lay_'+num9+'f').offset().top-20},300)
})
/////////////////////////////////////////////////////////////////////////////////////////

})