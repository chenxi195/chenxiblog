var Sample = {
  popSample : function(msg){
    var html = '<div>'+msg+'</div>';
    return html;
  },
  postSample : function(i, post){
    var html =
      '<div class="social_list" id="post'+i+'">'+
        '<div class="head"><p><span class="tags"><var>行业1&amp;活动1</var><em class="icon-tag"></em></span><span>晒业绩</span></p></div>'+
        '<div class="body">'+
          '<div class="social_user">' +
            '<div class="su_img"><img src="'+post.avatar+'" id="postAvatar'+i+'"/> </div>'+
            '<div class="su_name"><span>'+post.fromName+'</span><br><span class="su_time">'+post.fromDate+'</span></div>' +
          '</div>' +
          '<div class="social_content">'+post.content+'</div>'+
          '<div class="social_pictures"><ul><li></li><li></li><li></li><li></li><li></li></ul></div>' +
          '<div class="social_area"><span><em class="icon-map-marker"></em> <var>'+post.fromLocation+'</var></span></div>'+
          '<div class="social_recommend">由 <span class="usr_img icon-user"></span> xxx 推荐：这是一条推荐这是一条推荐。</div>' +
          '<div class="social_recommend"><span class="icon-thumbs-up"></span> <var>XXX</var>, <var>XXX</var>, <var>XXX</var> 等20人赞了TA。' +
        '</div>'+
        '<div class="foot"><a href=""><span class="icon-thumbs-up"></span>20</a><a href=""><span class="icon-share"></span>20</a><a href="">推荐20</a><a href=""><span class="icon-comment"></span>20</a></div>' +
      '</div>';

    return html;
  },
  postDetailSample: function(post){
    var html =
      '<div class="social_list">'+
      '<div class="head"><p><span class="tags"><var>行业1&amp;活动1</var><em class="icon-tag"></em></span><span>晒业绩</span></p></div>'+
      '<div class="body">'+
      '<div class="social_user">' +
      '<div class="su_img"><img src="'+post.avatar+'"/> </div>'+
      '<div class="su_name"><span>'+post.fromName+'</span><br><span class="su_time">'+post.fromDate+'</span></div>' +
      '</div>' +
      '<div class="social_content">'+post.content+'</div>'+
      '<div class="social_pictures"><ul><li></li><li></li><li></li><li></li><li></li></ul></div>' +
      '<div class="social_area"><span><em class="icon-map-marker"></em> <var>'+post.fromLocation+'</var></span></div>'+
      '<div class="social_recommend">由 <span class="usr_img icon-user"></span> xxx 推荐：这是一条推荐这是一条推荐。</div>' +
      '<div class="social_recommend"><span class="icon-thumbs-up"></span> <var>XXX</var>, <var>XXX</var>, <var>XXX</var> 等20人赞了TA。' +
      '</div>'+
      '<div class="foot"><a href=""><span class="icon-thumbs-up"></span>20</a><a href=""><span class="icon-share"></span>20</a><a href="">推荐20</a><a href=""><span class="icon-comment"></span>20</a></div>' +
      '</div>';

    return html;
  },
  userListSample: function(i, user){
    var html = '<div class="user_list" id="user'+i+'">'+user.nickName+'<br/>'+user.avatar+'<br/>'+user.intro+'<hr/></div>';
    return html;
  },
  slideType: function(i, data){
    var html = '<div id="slideLeftItem'+i+'">'+data.title+'</div>';
    return html;
  }
}