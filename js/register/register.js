$(function(){
		
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
	
	 var reg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$|(1[34578]\d{9})$/;
    var user=$("#user");
    var pw=$("#pw");
    var tpw=$("#tpw");
    user.on("input propertychange",function(){
    	$("span").eq(1).css("visibility","hidden");
    	$("span").eq(2).css("visibility","hidden");
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
    tpw.on("input propertychange",function(){
    	$("span").eq(2).css("visibility","hidden");
    })
    // 注册  本地存储信息
    $(".rg").on("click",function(){
        var username=user.val();
        var info=window.localStorage.getItem(username);
        if(info!=undefined){
            $("span").eq(0).html("<i></i>该用户名已存在!")
            $("span").eq(0).css("visibility","visible");
        }
        else{
            if(user.val()=="邮箱/手机号"||pw.val()=="密码"){
                $("span").eq(1).css("visibility","visible");
            }
            else{
            	if(pw.val()==tpw.val()){
            		$("span").eq(1).css("visibility","hidden");
            		$("span").eq(2).css("visibility","hidden");
            		var username=user.val();
	                var pass=pw.val();
	                window.localStorage.setItem(username,pass);
	                alert("恭喜您！注册成功 快去登录吧……");
	                window.location.href="login.html";
            	}
                else{
                	$("span").eq(2).css("visibility","visible");
                }  
            }
        }
        //清除     history back会记录value
//      user.val("学号/手机号");
//      pw.val("密码");
//      user.css("color","#ccc")
//      pw.css("color","#ccc")
    })
})
