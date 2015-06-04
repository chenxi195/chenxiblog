var c = {};

(function(c){
	c._ = function(id){return document.getElementById(id);}
	c.ajax = function(type, url, callback, failBack){
		if(window.XMLHttpRequest){
			var oAjax=new XMLHttpRequest();
		}else{
			var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
		}
		oAjax.open(type, url, true);
		oAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		oAjax.send('a=12&b=5');
		oAjax.onreadystatechange=function (){
			if(oAjax.readyState==4){
				if(oAjax.status==200){
					callback(oAjax.responseText);
				}else{
					if(failBack){
						failBack();
					}
				}
			}
		};
	}
	c.loadingStart = function(){

	}
	c.loadingEnd = function(){

	}
})(c);