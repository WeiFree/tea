$(function(){
	var i=Math.floor(Math.random()*4);
	console.log(i)
	$(".zhangshi").append("<img src='img/zixun/zhangshi"+i+".jpg' />");
	var picword=new Array();
	picword[0]="以前不管是在酒桌上、还是在茶几上总能听到主人说“酒满茶浅”来劝酒和劝茶，但对这句话的含义却一直是半知不解。直到有一天，同一位精于茶道的朋友一同饮茶，听他边斟边说：“从来茶倒七分满，留下三分是人情。”时才恍然大悟，深得其中韵味所在。"
	picword[1]="西藏昌都市副市长赵明在拉萨表示，8月19日该市将举办第二届“三江茶马文化艺术节”，全面展示昌都茶马古道文化。"
	picword[2]="几千年下来，香文化亦如茶文化一般，生出许多支脉，同样成为拥有系统体系并博大精深的一门生活艺术。现今随着茶文化乃至传统文化的复兴，香道也在复兴的路上。"
	picword[3]="5月10日，2016第七期全国农牧渔业大县局长轮训园艺作物（茶叶）重点县农业局长班正式结业，来自18个省、自治区、直辖市和计划单列市的茶叶重点县农业局长、茶叶企业、茶叶合作社负责人和部系统的干部共135人结束了在湖北省武汉的学习。"
	var pictitle=new Array();
	pictitle[0]="茶倒七分，是人生的一门哲学"
	pictitle[1]="西藏昌都将举办“三江茶马艺术节”弘扬茶马古道文化"
	pictitle[2]="二马茶文化 | 闻香识茶"
	pictitle[3]="茶产业要从源头把好质量关"
	
	$(".article").append("<span><a href='#'>"+pictitle[i]+"</a></span>")
	$(".article").append("<p>"+picword[i]+"</p>")
	
	$(".nav-box").eq(0).on("mouseover",function(){
		$(".chayedongtai").removeClass("hide").siblings().addClass("hide");
	})
	$(".nav-box").eq(1).on("mouseover",function(){
		$(".zhongcha").removeClass("hide").siblings().addClass("hide");	
	})
	   $.ajax({
	 	type:"get",
	 	url:"json/chaye.json",
	 	datatype:"jsonp",
	 	success:function(date){
	 		for(var i=0;i<date.dateid.length;i++){
	 		var t=date.dateid[i].title;	
	 		var d=date.dateid[i].datam;
	 		var y=date.dateid[i].data;
	 		var j=date.dateid[i].jian;
	 		$(".chayedongtai").append($("<div class='news'><span><b>"+d+"</b><br />"+y+"</span><i><b>"+t+"</b><br />"+j+"</i></div>"))
	 		}
	 	}
})
	   $.ajax({
	 	type:"get",
	 	url:"json/zhongcha.json",
	 	datatype:"jsonp",
	 	success:function(date){
	 		console.log(2)
	 		for(var i=0;i<date.dateid.length;i++){
	 		var t=date.dateid[i].title;	
	 		var d=date.dateid[i].datam;
	 		var y=date.dateid[i].data;
	 		var j=date.dateid[i].jian;
	 		$(".zhongcha").append($("<div class='news'><span><b>"+d+"</b><br />"+y+"</span><i><b>"+t+"</b><br />"+j+"</i></div>"))
	 		}
	 	}
})
	   $(".nav-box").eq(0).on("mouseover",function(){
	   	$(this).children($(".sp")).addClass("sphover")
	   	$(this).children($(".tab-nav-title")).addClass("tab-nav-hover")
	   	$(".nav-box").eq(1).children($(".tab-nav-title")).removeClass("tab-nav-hover")
	   	$(".nav-box").eq(1).children($(".sp")).removeClass("sphover")
	   })
	   $(".nav-box").eq(1).on("mouseover",function(){
	   	$(this).children($(".sp")).addClass("sphover")
	   	$(this).children($(".tab-nav-title")).addClass("tab-nav-hover")
	   	$(".nav-box").eq(0).children($(".tab-nav-title")).removeClass("tab-nav-hover")
	   	$(".nav-box").eq(0).children($(".sp")).removeClass("sphover")
	   })
})
	