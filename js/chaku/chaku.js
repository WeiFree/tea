$(function(){
	$(".kind-nav-box dl dt a").on("click",function(){
		$(".kind-nav-box dl dt a").removeClass("active")
		$(this).addClass("active")
			$(".icon").removeClass("ihover");
			$(this).children(".icon").addClass("ihover")
			})
	$(".page li").on("click",function(){
		$(".page li").removeClass("active")
		$(this).addClass("active")
	})
	first()
	$(".title").on("click",function(){
		first();
		$(".page").show()
	})
	$(".page li").eq(0).on("click",function(){wulong()})
	$(".page li").eq(1).on("click",function(){lvcha()})
	$(".page li").eq(2).on("click",function(){baicha()})
	$(".page li").eq(3).on("click",function(){heicha()})
	$(".page li").eq(4).on("click",function(){puer()})
	$(".page li").eq(5).on("click",function(){hongcha()})
	$(".kind-nav-box dl").eq(0).on("click",function(){puer();$(".page").hide()})
	$(".kind-nav-box dl").eq(1).on("click",function(){heicha();$(".page").hide()})
	$(".kind-nav-box dl").eq(2).on("click",function(){hongcha();$(".page").hide()})
	$(".kind-nav-box dl").eq(3).on("click",function(){lvcha();$(".page").hide()})
	$(".kind-nav-box dl").eq(4).on("click",function(){wulong();$(".page").hide()})
	$(".kind-nav-box dl").eq(5).on("click",function(){baicha();$(".page").hide()})
	function first(){
	$.ajax({
		type:"get",
		url:"json/zhonglei.json",
		datatype:"jsonp",
		success:function(data){
				$(".kind-list-box").html("");
				
			for(var i=0;i<20;i++){
				
	 				var k=data.dateid[i].kind;	
	 				var n=data.dateid[i].name;
	 				var p=data.dateid[i].pic;
	 				var j=data.dateid[i].jian;
	 				$(".kind-list-box").append($("<a href='detail.html'><div class='list col-lg-3 col-md-3 col-sm-4 col-xs-6'><div class='list-top'><img src='img/chakku/"+k+"/"+p+".jpg'/><span class='word'><p style='font-weight: bold;'>"+n+"</p>"+j+"</span></div><div class='list-bottom'><span>"+n+"</span></div></div></a>"))
	 			
	 		}
		}
	});	
	}
	function puer(){
	$.ajax({
		type:"get",
		url:"json/zhonglei.json",
		datatype:"jsonp",
		success:function(data){
				$(".kind-list-box").html("");
			for(var i=0;i<data.dateid.length;i++){
				if(data.dateid[i].kind=="puer"){
	 				var k=data.dateid[i].kind;	
	 				var n=data.dateid[i].name;
	 				var p=data.dateid[i].pic;
	 				var j=data.dateid[i].jian;
	 				$(".kind-list-box").append($("<a href='detail.html'><div class='list col-lg-3 col-md-3 col-sm-4 col-xs-6'><div class='list-top'><img src='img/chakku/"+k+"/"+p+".jpg'/><span class='word'><p style='font-weight: bold;'>"+n+"</p>"+j+"</span></div><div class='list-bottom'><span>"+n+"</span></div></div></a>"))
	 			}
	 		}
		}
	});	
	}
	function heicha(){
	$.ajax({
		type:"get",
		url:"json/zhonglei.json",
		datatype:"jsonp",
		success:function(data){
			$(".kind-list-box").html("");
			for(var i=0;i<data.dateid.length;i++){
				if(data.dateid[i].kind=="heicha"){
	 				var k=data.dateid[i].kind;	
	 				var n=data.dateid[i].name;
	 				var p=data.dateid[i].pic;
	 				var j=data.dateid[i].jian;
	 				$(".kind-list-box").append($("<a href='detail.html'><div class='list col-lg-3 col-md-3 col-sm-4 col-xs-6'><div class='list-top'><img src='img/chakku/"+k+"/"+p+".jpg'/><span class='word'><p style='font-weight: bold;'>"+n+"</p>"+j+"</span></div><div class='list-bottom'><span>"+n+"</span></div></div></a>"))
	 			}
	 		}
		}
	});	
	}
	function hongcha(){
	$.ajax({
		type:"get",
		url:"json/zhonglei.json",
		datatype:"jsonp",
		success:function(data){
			$(".kind-list-box").html("");
			for(var i=0;i<data.dateid.length;i++){
				if(data.dateid[i].kind=="hongcha"){
	 				var k=data.dateid[i].kind;	
	 				var n=data.dateid[i].name;
	 				var p=data.dateid[i].pic;
	 				var j=data.dateid[i].jian;
	 				$(".kind-list-box").append($("<a href='detail.html'><div class='list col-lg-3 col-md-3 col-sm-4 col-xs-6'><div class='list-top'><img src='img/chakku/"+k+"/"+p+".jpg'/><span class='word'><p style='font-weight: bold;'>"+n+"</p>"+j+"</span></div><div class='list-bottom'><span>"+n+"</span></div></div></a>"))
	 			}
	 		}
		}
	});	
	}
	function lvcha(){
	$.ajax({
		type:"get",
		url:"json/zhonglei.json",
		datatype:"jsonp",
		success:function(data){
			$(".kind-list-box").html("");
			for(var i=0;i<data.dateid.length;i++){
				if(data.dateid[i].kind=="lvcha"){
	 				var k=data.dateid[i].kind;	
	 				var n=data.dateid[i].name;
	 				var p=data.dateid[i].pic;
	 				var j=data.dateid[i].jian;
	 				$(".kind-list-box").append($("<a href='detail.html'><div class='list col-lg-3 col-md-3 col-sm-4 col-xs-6'><div class='list-top'><img src='img/chakku/"+k+"/"+p+".jpg'/><span class='word'><p style='font-weight: bold;'>"+n+"</p>"+j+"</span></div><div class='list-bottom'><span>"+n+"</span></div></div></a>"))
	 			}
	 		}
		}
	});	
	}
	function wulong(){
	$.ajax({
		type:"get",
		url:"json/zhonglei.json",
		datatype:"jsonp",
		success:function(data){
			$(".kind-list-box").html("");
			for(var i=0;i<data.dateid.length;i++){
				if(data.dateid[i].kind=="wulong"){
	 				var k=data.dateid[i].kind;	
	 				var n=data.dateid[i].name;
	 				var p=data.dateid[i].pic;
	 				var j=data.dateid[i].jian;
	 				$(".kind-list-box").append($("<a href='detail.html'><div class='list col-lg-3 col-md-3 col-sm-4 col-xs-6'><div class='list-top'><img src='img/chakku/"+k+"/"+p+".jpg'/><span class='word'><p style='font-weight: bold;'>"+n+"</p>"+j+"</span></div><div class='list-bottom'><span>"+n+"</span></div></div></a>"))
	 			}
	 		}
		}
	});	
	}
	function baicha(){
	$.ajax({
		type:"get",
		url:"json/zhonglei.json",
		datatype:"jsonp",
		success:function(data){
			$(".kind-list-box").html("");
			for(var i=0;i<data.dateid.length;i++){
				if(data.dateid[i].kind=="baicha"){
	 				var k=data.dateid[i].kind;	
	 				var n=data.dateid[i].name;
	 				var p=data.dateid[i].pic;
	 				var j=data.dateid[i].jian;
	 				$(".kind-list-box").append($("<a href='detail.html'><div class='list col-lg-3 col-md-3 col-sm-4 col-xs-6'><div class='list-top'><img src='img/chakku/"+k+"/"+p+".jpg'/><span class='word'><p style='font-weight: bold;'>"+n+"</p>"+j+"</span></div><div class='list-bottom'><span>"+n+"</span></div></div></a>"))
	 			}
	 		}
		}
	});	
	}
})
