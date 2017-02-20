$(function(){
		debugger;
				$('#searchMoreDiv').hide();
				$('#searchMore').on('click',function(){
					changeSearchStyle();
				});
				
});
function changeSearchStyle(){
  	var i = $('#searchMore').children('i');
      	if(i.hasClass('icon-chevron-up')){
      		i.removeClass('icon-chevron-up');
      		i.addClass('icon-chevron-down');
      		$('#searchMore').children('span').html('精选筛选条件 ');
      		$('#searchMoreDiv').show();
      	}else{
      		i.removeClass('icon-chevron-down');
      		i.addClass('icon-chevron-up');
      		$('#searchMore').children('span').html('更多筛选条件 ');
      		$('#searchMoreDiv').hide();
      	}
  }