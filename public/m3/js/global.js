var c = {};

(function(c){
  c.config = {
    debug: true,
    env: 'dev' //master 正式 dev 开发
  };
  c.height = document.documentElement.clientHeight;
  c.width = document.documentElement.clientWidth;
  c.data = {};
	c._ = function(id){return document.getElementById(id);}
  c.getData = function(uri, callBack){
    var resp = uri.split(".")[0];
    var oScript = document.createElement('script');
    oScript.src = uri;
    oScript.id = resp + "Data";
    oScript.charset = "utf-8";
    c._("oData").appendChild(oScript);
    c._(oScript.id).onload = function() {
      callBack();
    };
  }
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
					var data = eval('('+oAjax.responseText+')');
					callback(data);
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
  c.uriSchema = '/';
  c.splitUri = function(uri, params){
    var str1 = uri.split(c.uriSchema)[0];
    var str2 = uri.split(c.uriSchema)[1].split('"')[0]; //双引号

    return str1 + c.uriSchema + str2 + params + '")';
  }
  c.currentFrameId = "page1";
  c.popMsg = function(msg){
   var div = document.createElement('div');
    div.className = 'errorMsg';
    div.id = 'errorMsg';
    div.innerHTML = Sample.popSample(msg);
    document.body.appendChild(div);
    setTimeout(function(){
      c._('errorMsg').remove();
    }, 1500);
  }
})(c);