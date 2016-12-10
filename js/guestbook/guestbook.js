
$(function(){
	//提示
	$("textarea").val("有事没事说两句...");
	$("textarea").on("focus",function(){
		if($(this).val()=="有事没事说两句..."){
			$("textarea").val("");
		}
	})
	$("textarea").on("blur",function(){
		if($("textarea").val()==""){
			$("textarea").val("有事没事说两句...");
		}
	})
	
	var date=new Date();
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var day=date.getDate();
	var h=date.getHours();
	var m=date.getMinutes()
	var s=date.getSeconds();
	
	//发送
	$(".send").on("click",function(){
		var username=window.localStorage.getItem("success");
		console.log(username)
		if(username==undefined){
			alert("请登录后再评论，谢谢！！")
			window.location.href="login.html";

		}
		else{
		var span1="<span class='username'>"+username+"：</span>"
		var span2="<span class='time'>"+year+"年"+month+"月"+day+"日"+h+":"+m+":"+s+"</span>"
		var con="<p>"+$("textarea").val()+"</p>";
		
		var a="<span class='del'>Delete</span>"
		$("<li>"+span1+span2+con+a+"<i></i><s></s><b></b></li>").insertBefore(".con ul li:eq(0)")
		}
	})
	//删除
	$(".con ul").on("click",".del",function(){
		$(this).parent().remove();
	})
	
	//贴图
	var i=0;
	var j=0;
	$(".con ul").on("click","i",function(){
		i++;
		if(i<4){
			var x=Math.random()*300+52;
			var y=Math.random()*20;
			if(x<400){
				src=1
			}else{
				src=2;
			}
			$(this).parent().append($("<img src='img/guestbook/"+src+".png'/>"))
			$(this).parent().parent().find("li>img:last-child").css({"position":"absolute","top":y,"left":x})
		}
	})
	
	//打印标签 标签图片位置随机
	$(".con ul").on("click","s",function(){
		j++;
		if(j<4){
			var x=Math.random()*400+352;
			var y=Math.random()*20;
			if(x<500){
				src=3
			}else if(x<600){
				src=6;
			}else if(x<700){
				src=4;
			}else{
				src=5;
			}
			$(this).parent().append($("<img src='img/guestbook/"+src+".png'/>"))
			$(this).parent().parent().find("li>img:last-child").css({"position":"absolute","top":y,"left":x})
		}
	})
	$(".con ul").on("click","b",function(){
		i=0;
		j=0;
		$(this).parent().parent().find("li>img").remove();
	})
	
	//清空文本域
	$(".clear").on("click",function(){
		$(".input textarea").val("有事没事说两句...");
	})
	$(".geren").on("mouseenter",function(){
		if(!$(".logoff").is(":animated")){
		  	$(".logoff").slideDown(200);
		}
//		$(".logoff").slideDown(200);
	})
	$(".geren").on("mouseleave",function(){
		$(this).find(".logoff").stop().slideUp(200);
	})
    var username=window.localStorage.getItem("success");
    if(username!=undefined){
    	$(".userName").html(username);
    	$(".login").hide()
    	
    }
    else{
    	$(".userName").hide();
    }
	//注销
	$(".logoff a").on("click",function(){
		window.localStorage.removeItem("success");
		$(".userName").hide()
		$(".login").show();
	})
})
