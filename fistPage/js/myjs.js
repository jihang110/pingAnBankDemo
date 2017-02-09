$(function(){
	clickImg();
});
function clickImg(){
	$("#baoliyun").click(function(){
		//默认
		$("#backgroundC").css("background-color","#EA5504");
		$("#signButton").css("background-color","#EA5504");
		clearClass();
		$(this).addClass("baoliyun");
	});
	$("#zulin").click(function(){
		$("#backgroundC").css("background-color","#438dc9");
		$("#signButton").css("background-color","#438dc9");
		clearClass();
		$(this).addClass("zulin");
	});
	$("#ziguan").click(function(){
		$("#backgroundC").css("background-color","#57d492");
		$("#signButton").css("background-color","#57d492");
		clearClass();
		$(this).addClass("ziguan");
	});
	$("#yunpiao").click(function(){
		$("#backgroundC").css("background-color","#18cfd6");
		$("#signButton").css("background-color","#18cfd6");
		clearClass();
		$(this).addClass("yunpiao");
	});
	$("#jiaoyi").click(function(){
		$("#backgroundC").css("background-color","#e85b09");
		$("#signButton").css("background-color","#e85b09");
		clearClass();
		$(this).addClass("jiaoyi");
	});
}
function clearClass(){
	$("#baoliyun").attr("class","backg-white block baoliyun1");
	$("#zulin").attr("class","backg-white block zulin1");
	$("#ziguan").attr("class","backg-white block ziguan1");
	$("#yunpiao").attr("class","backg-white block yunpiao1");
	$("#jiaoyi").attr("class","backg-white block jiaoyi1");
}
