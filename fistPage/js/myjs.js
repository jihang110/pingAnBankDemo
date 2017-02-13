$(function(){
	clickImg();
});
function clickImg(){
	$("#baoliyun").click(function(){
		//默认
		$("#backgroundC").css("background-color","#ff883f");
		clearClass(this);
		$(this).children("img").attr("src",'../img/baoliyun1.png');
		$(this).parent().parent().next().find("h4").html("保理云系统");
		$(this).parent().parent().next().find("h5").html("平安银行保理云服务平台:是由平安银行为商业保理公司提供的保理业务操作及信息管理服务");
	});
	$("#zulin").click(function(){
		$("#backgroundC").css("background-color","#0066ff");
		clearClass(this);
		$(this).children("img").attr("src",'../img/zulin1.png');
		$(this).parent().parent().next().find("h4").html("内容暂缺");
		$(this).parent().parent().next().find("h5").html("");
	});
	$("#ziguan").click(function(){
		$("#backgroundC").css("background-color","#89d249");
		clearClass(this);
		$(this).children("img").attr("src",'../img/ziguan1.png');
		$(this).parent().parent().next().find("h4").html("内容暂缺");
		$(this).parent().parent().next().find("h5").html("");
	});
	$("#yunpiao").click(function(){
		$("#backgroundC").css("background-color","#5f52a0");
		clearClass(this);
		$(this).children("img").attr("src",'../img/yunpiao1.png');
		$(this).parent().parent().next().find("h4").html("内容暂缺");
		$(this).parent().parent().next().find("h5").html("");
	});
	$("#jiaoyi").click(function(){
		$("#backgroundC").css("background-color","#ea5504");
		clearClass(this);
		$(this).children("img").attr("src",'../img/jiaoyi1.png');
		$(this).parent().parent().next().find("h4").html("内容暂缺");
		$(this).parent().parent().next().find("h5").html("");
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
