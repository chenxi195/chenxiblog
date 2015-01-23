window.onload = function(){
	var oUl = document.getElementById('switchMenu').getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var aNum = document.getElementById('switchNum').getElementsByTagName('a');	
	var iNow = 0;
	var timer = null;
	
	for(var i = 0; i < aNum.length; i++){
		aNum[i].index = i;
		aNum[i].onmouseover = function(){
			iNow = this.index;
			tab();
		}
	}
	
	function tab(){
		for(var i = 0; i < aNum.length; i++){
			aNum[i].className = '';
		}
		aNum[iNow].className = 'active';
		startMove(oUl,{top:-aLi[0].offsetHeight*iNow});			
	}
	
	function next(){
		iNow++;
		if(iNow == aLi.length){
			iNow = 0;
		}
		tab();
	}
	
	timer = setInterval(next, 3000);
	
	var oRote = document.getElementById('rote');
	var oShareOut = document.getElementById('shareouter')
	oShareOut.onmouseover = function(){
		startMove(oRote,{left:-10},function(){
			oRote.className='rote';
			oRote.style.zIndex = '998';
		});
		
	}
	oShareOut.onmouseout = function(){		
		oRote.style.zIndex = '1000';
		startMove(oRote,{left:-132},function(){
			oRote.className='';	  
		});
	}
}