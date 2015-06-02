function getWxDates(){
  var url = window.location.href.split('#')[0];

  //获取微信配置参数url TODO
  $.get('', {url: url}, function(data){
      wx.config({
          debug: false,
          appId: data.appId,
          timestamp: data.timestamp,
          nonceStr: data.nonceStr,
          signature: data.signature,
          jsApiList: [
              'checkJsApi',
              'onMenuShareTimeline',
              'onMenuShareAppMessage',
              'onMenuShareQQ',
              'onMenuShareWeibo',
              'chooseImage',
              'previewImage',
              'uploadImage',
              'downloadImage'
          ]
      });

      wx.ready(function () {

          //分享到朋友圈
          wx.onMenuShareTimeline({
              title: HeadStr.weixincb.title, // 分享标题
              link: HeadStr.weixincb.shareUrl, // 分享链接
              imgUrl: HeadStr.weixincb.logo, // 分享图标
              success: HeadStr.weixincb.onShareFriend,
              cancel: HeadStr.weixincb.onShareFriend
          });

          //分享给朋友
          wx.onMenuShareAppMessage({
              title: HeadStr.weixincb.title, // 分享标题
              desc: HeadStr.weixincb.description, // 分享描述
              link: HeadStr.weixincb.shareUrl, // 分享链接
              imgUrl: HeadStr.weixincb.logo, // 分享图标
              type: '', // 分享类型,music、video或link，不填默认为link
              dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
              success: HeadStr.weixincb.onShareFriend,
              cancel: HeadStr.weixincb.onShareFriend
          });

          //分享到QQ
          wx.onMenuShareQQ({
              title: HeadStr.weixincb.title, // 分享标题
              desc: HeadStr.weixincb.description, // 分享描述
              link: HeadStr.weixincb.shareUrl, // 分享链接
              imgUrl: HeadStr.weixincb.logo, // 分享图标
              success: HeadStr.weixincb.onShareFriend,
              cancel: HeadStr.weixincb.onShareFriend
          });

          //分享到腾讯微博
          wx.onMenuShareWeibo({
              title: HeadStr.weixincb.title, // 分享标题
              desc: HeadStr.weixincb.description, // 分享描述
              link: HeadStr.weixincb.shareUrl, // 分享链接
              imgUrl: HeadStr.weixincb.logo, // 分享图标
              success: HeadStr.weixincb.onShareFriend,
              cancel: HeadStr.weixincb.onShareFriend
          });

          $('#uploadBtn').on('click', function(){
              //图片上传接口 TODO
              wx.chooseImage({
                  success: function (res) {
                      var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                  }
              });
          });

      });

      wx.error(function(res){
          alert('wx.error: '+JSON.stringify(res));
      });
  });
}
//getWxDates();