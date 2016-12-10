$(function(){
	$(".big-box").animate({width:"100%",height:"100%"},1000)
var num=0;
	var accoount=$("li").length;
	var timer=null;
	for(var i=0;i<$("li").length;i++){
        var span=$("<span>"+(i+1)+"</span>")
        span.appendTo($(".ctrl-square"))
    }
	$(".ctrl-square span").eq(0).addClass("current")
	$(".slider-img li:not(:first-child)").hide();
	$(".ctrl-square span").on("click",function(){
		var index=$(this).html()-1;
		console.log(index);
		num=index;
		$(".slider-img li").fadeOut(500).siblings().eq(index).fadeIn(1000)
		$(this).addClass("current").siblings().removeClass("current");
	})

	
    timer=setInterval(function(){
    	autoMove()
    },3000);
    
    $(".slider").hover(function(){clearInterval(timer)}, function(){timer = setInterval(function(){
    	autoMove()
    }, 3000);});

	$(".prev").on("click",function(){
		if(num<0){
        num=accoount-1;
    }else{
     --num;
    }
	$(".ctrl-square span").eq(num).trigger("click");
	})
	$(".next").on("click",autoMove)
	function autoMove(){
    if(num>=(accoount-1)){
        num=0;
    }else{
     ++num;
    }
	$(".ctrl-square span").eq(num).trigger("click");  
	console.log(123)
}
	
	
	$("input[type=text]").css("color","#9f9f9f")
	//获得焦点
	$("input[type=text]").on("focus",function(){
		if($(this).val() == $(this).attr("value")) { //相等才清
            $(this).val(""); 
            $(this).css("color","black")
        }
	})
	//失去焦点
	$("input[type=text]").on("blur",function(){
		if($(this).val() == "") { //为空时添加
            $(this).val($(this).attr("value")) ; 
            $(this).css("color","#9f9f9f")       
        }
	})
	
	// 用户名格式验证  学号或者手机号码
    var reg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$|(^1[34578]\d{9}$)/;
    var user=$("#user");
    var pw=$("#pw");
    user.on("input propertychange",function(){
    	$("span").eq(1).css("visibility","hidden");
        if(reg.test(user.val())==false){ 
            $("span").eq(0).html("<i></i>请输入正确格式的用户名!")
            $("span").eq(0).css("visibility","visible");
        }
        else{
            $("span").eq(0).css("visibility","hidden");
        }
        if(user.val()==""){
            $("span").eq(0).css("visibility","hidden");
        }
    })
    pw.on("input propertychange",function(){
        $("span").eq(1).css("visibility","hidden");
    })
    pw.on("focus",function(){
        $(this).prop("type","password");
    })
    //input type转换
    pw.on("blur",function(){
        if($(this).val() == "密码") { 
            $(this).prop("type","text");  
        }
    })

    //登录验证
    $(".login").on("click",function(){
        var username=user.val();
        var info=window.localStorage.getItem(username);
        if(username=="邮箱/手机号"||pw.val()=="密码"){
        	$("span").eq(1).html("<i></i>用户名、密码不能为空!")
        	$("span").eq(1).css("visibility","visible");
        }else{
        	if(info==undefined){
	            $("span").eq(0).html("<i></i>用户名不存在!")
	            $("span").eq(0).css("visibility","visible");
	        }
	        else{
	            if(pw.val()==info){
	                alert("恭喜您！登录成功 正在跳转到留言板……");
	                window.localStorage.setItem("success",username);
	                window.location.href="guestbook.html";
	            }
	            else{
	            	$("span").eq(1).html("<i></i>请输入正确的密码!")
	                $("span").eq(1).css("visibility","visible");
	            }
	        }
        }
    })
	})