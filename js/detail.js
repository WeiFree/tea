//$(function(){
//  //图片切换显示
//  $(".xyd li").eq(0).siblings().css("opacity",0.5);
//  $(".bigImg img").eq(0).siblings().hide();
//  $(".xyd li").on("mouseenter",function(){
//      var index=$(this).index();
//      $(this).css("opacity",1).siblings().css("opacity",0.5);
//      $(".bigImg img").eq(index).fadeIn().siblings().stop(true,true).fadeOut();
//  })
// )
$(function(){
	$(".xyd li").eq(0).siblings().css("opacity",0.5);
	$(".bigImg img").eq(0).siblings().hide();
	$(".xyd li").on("mouseenter",function(){
		var index=$(this).index();
      $(this).css("opacity",1).siblings().css("opacity",0.5);
      $(".bigImg img").eq(index).fadeIn().siblings().stop(true,true).fadeOut();
	})
	
})
