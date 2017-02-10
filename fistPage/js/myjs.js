$(function(){
	clickImg();
});
function clickImg(){
	$("#baoliyun").click(function(){
		//默认
		$("#backgroundC").css("background-color","#EA5504");
		$("#signButton").css("background-color","#EA5504");
		clearClass(this);
		$(this).children("img").attr("src",'../img/baoliyun1.png');
	});
	$("#zulin").click(function(){
		$("#backgroundC").css("background-color","#438dc9");
		$("#signButton").css("background-color","#438dc9");
		clearClass(this);
		$(this).children("img").attr("src",'../img/zulin1.png');
	});
	$("#ziguan").click(function(){
		$("#backgroundC").css("background-color","#57d492");
		$("#signButton").css("background-color","#57d492");
		clearClass(this);
		$(this).children("img").attr("src",'../img/ziguan1.png');
	});
	$("#yunpiao").click(function(){
		$("#backgroundC").css("background-color","#18cfd6");
		$("#signButton").css("background-color","#18cfd6");
		clearClass(this);
		$(this).children("img").attr("src",'../img/yunpiao1.png');
	});
	$("#jiaoyi").click(function(){
		$("#backgroundC").css("background-color","#e85b09");
		$("#signButton").css("background-color","#e85b09");
		clearClass(this);
		$(this).children("img").attr("src",'../img/jiaoyi1.png');
	});
}
function clearClass(a){
//	$(a).children("img").attr("src","../img/baoliyun.png");
//	var id = $(a).attr("id");
//	var path = "../img/"+id+".png";
//	$("#"+id).children("img").attr("src",path);
	$("#baoliyun").children("img").attr("src","../img/baoliyun.png");
	$("#zulin").children("img").attr("src","../img/zulin.png");
	$("#ziguan").children("img").attr("src","../img/ziguan.png");
	$("#yunpiao").children("img").attr("src","../img/yunpiao.png");
	$("#jiaoyi").children("img").attr("src","../img/jiaoyi.png");
}
