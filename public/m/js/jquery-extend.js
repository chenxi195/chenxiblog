$.extend({
	loadingStart: function(){
		if ($('.loading').length < 1) {
			$('body').append('<div class="loading"><span class="icon-spinner icon-spin"></span> Loading...</div>')
		}
	},
	loadingEnd: function(){
		$('.loading').hide().remove();
	},
	popTextMsg: function(msg){
		if ($('.errorMsg').length < 1) {
			$('body').append('<div class="errorMsg"><div>'+msg+'</div></div>')
		}
		setTimeout(function(){$('.errorMsg').fadeOut('fast', function(){
			$('.errorMsg').remove();
		})}, 1500);
	}
});

