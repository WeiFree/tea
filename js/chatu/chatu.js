$("#demo").waterfall({
  itemClass: ".box",
  minColCount: 1,
  spacingHeight: 10,
  resizeable: true,
  isFadeIn:true,
  ajaxCallback: function(success, end) {
    var data = {"data": [
      { "src": "03.jpg" },
      { "src": "07.jpg" },
      { "src": "02.jpg" }, 
      { "src": "08.jpg" }, 
      { "src": "01.jpg" }, 
      { "src": "06.jpg" },
      { "src": "04.jpg" },
      { "src": "05.jpg" },
    ]};
    var str = "";
    var templ = '<div class="box" style="opacity:0;filter:alpha(opacity=0);"><div class="pic"><img src="img/chatu/{{src}}" /></div></div>'
 	console.log(123)
    for(var i = 0; i < data.data.length; i++) {
      str += templ.replace("{{src}}", data.data[i].src);
    }
    $(str).appendTo($("#demo"));
    success();
    end();
  }
});                