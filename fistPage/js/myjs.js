$(function(){
	clickImg();
});
function clickImg(){
	$("#baoliyun").click(function(){
		//默认
		$("#backgroundC").css("background-color","#ff883f");
		clearClass(this);
		$(this).children("img").attr("src",'../img/baoliyun1.png');
	});
	$("#zulin").click(function(){
		$("#backgroundC").css("background-color","#0066ff");
		clearClass(this);
		$(this).children("img").attr("src",'../img/zulin1.png');
	});
	$("#ziguan").click(function(){
		$("#backgroundC").css("background-color","#89d249");
		clearClass(this);
		$(this).children("img").attr("src",'../img/ziguan1.png');
	});
	$("#yunpiao").click(function(){
		$("#backgroundC").css("background-color","#5f52a0");
		clearClass(this);
		$(this).children("img").attr("src",'../img/yunpiao1.png');
	});
	$("#jiaoyi").click(function(){
		$("#backgroundC").css("background-color","#ea5504");
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
