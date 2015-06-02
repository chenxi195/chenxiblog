$.extend({
	loadingStart: function(){
		if ($('.loading').length < 1) {
			$('body').append('<div class="loading"><span class="icon-spinner icon-spin"></span> Loading...</div>')
		}
	},
	loadingEnd: function(){
		$('.loading').hide().remove();
	}
});
