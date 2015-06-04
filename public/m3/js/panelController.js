function showPostList(data){
	var list = new PostList($.tpl.list);
	list.init(data.data.ctx);
}

// post list
function PostList(tpl) {
	this.tpl = tpl;
	this.container = c._(this.tpl.id);
	this.data;
}
PostList.prototype.init = function(data) {
	this.data = data;
	var postList = this.data.postList;
	console.log(postList);

	for(var i=0, ii=postList.length; i<ii; i++){
		var post = postList[i];
		var div = document.createElement("div");
		div.id = "list"+i;
		div.className = 'social_list';
		div.innerHTML = '<div class="social_list"><div class="head"><p><span class="tags"><var>行业1&amp;活动1</var><em class="icon-tag"></em></span><span>晒业绩</span></p></div><div class="body"><div class="social_user"><div class="su_img"><img src="'+post.avatar+'"/> </div>'+
			'<div class="su_name"><span>'+post.fromName+'</span><br><span class="su_time">'+post.fromDate+'</span></div></div><div class="social_content">'+post.content+'</div>'+
			'<div class="social_pictures"><ul><li></li><li></li><li></li><li></li><li></li></ul></div><div class="social_area"><span><em class="icon-map-marker"></em> <var>'+post.fromLocation+'</var></span></div>'+
			'<div class="social_recommend">由 <span class="usr_img icon-user"></span> xxx 推荐：这是一条推荐这是一条推荐。</div><div class="social_recommend"><span class="icon-thumbs-up"></span> <var>XXX</var>, <var>XXX</var>, <var>XXX</var> 等20人赞了TA。</div>'+
			'</div><div class="foot"><a href=""><span class="icon-thumbs-up"></span>20</a><a href=""><span class="icon-share"></span>20</a><a href="">推荐20</a><a href=""><span class="icon-comment"></span>20</a></div></div>';


		this.container.appendChild(div);
	}
}