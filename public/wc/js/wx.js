function ajax(type, url, fnSucc, fnFaild, iSec){
  if(window.XMLHttpRequest){
    var oAjax=new XMLHttpRequest();
  }else{
    var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
  }
  oAjax.open(type, url, true);
  oAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  oAjax.send(null);
  oAjax.onreadystatechange=function (){
    if(oAjax.readyState==4){
      if(oAjax.status==200){
        fnSucc(oAjax.responseText);
      }else{
        if(fnFaild){
          fnFaild();
        }
      }
    }
  };
}

ajax('get', 'http://hemu.8-city.cn/app/app', function (str){
  alert(str);
});

function getWxDates(){
  var url = window.location.href.split('#')[0];
  ajax('get', '', {url: url}, function(data){
    if(data.code === 0){
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
          'onMenuShareWeibo'
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

      });

      wx.error(function(res){
         alert('wx.error: '+JSON.stringify(res));  
      });

    }
  });
}

// getWxDates();