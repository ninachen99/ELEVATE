$(document).ready(function(){
	$('#source').hide();
	$('#transButton').click(function(){
		$(this).show(1000);
		$('#source').show(1000);
		$('#source').click(function(){	
			$(this).hide(1000);
			$('#source').hide(1000);
		});
	});

	$('.video-buttons li').click(function() {
		var content = $(this).data('content');
		$('.' + content).show().siblings().hide();
	});
});