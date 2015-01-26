$(function(){
    var iNow = 0;
    var tab = function(){
        $('#switchNum li').removeClass('active');
        $('#switchNum li').eq(iNow).addClass('active');
        $('#switchMenu ul').animate({top: -$('#switchMenu ul li').height()*iNow});
    };
    var next = function(){
		iNow++;
		if(iNow == $('#switchMenu ul li').length){
			iNow = 0;
		}
		tab();
	};
    var timer = setInterval(next, 3000);
    $('#switchNum li').mouseover(function(){
        iNow = $(this).index();
        tab();
    });
    $('#shareOuter').mouseenter(function(){
        $(this).animate({left: 0}, function(){
            $(this).addClass('out');
        });
    });
    $('#shareOuter').mouseleave(function(){
        $(this).animate({left: -132}, function(){
            $(this).removeClass('out');
        });
    });
});