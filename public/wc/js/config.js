var HeadStr = {};
(function(obj){
  obj.sendCodeTime = 60;
  obj.loadingStart = function () {if ($('.loading').length < 1) {$('body').append('<div class="loading">Loading...</div>')}};
  obj.loadingEnd = function(){ $('.loading').remove()};
  obj.popMsg = function(msg){
    if ($('.errorMsg').length < 1) {$('body').append('<div class="errorMsg"><div>'+msg+'</div></div>')}
    setTimeout(function(){$('.errorMsg').remove()}, 1500);
  };
  obj.get = function($, url, params, callback){
    obj.loadingStart();
    $.get(url, params, function(data){
      if(data.code === 200){
        callback(data);
      }else{
        var code = data.code || data.errcode || data.ret;
        switch (code) {
          case -92: //店家微信公共账号还没有配置
            obj.popMsg("系统错误");
            break;
          default: //系统错误
            if(data.errMsg){
              obj.popMsg(data.errMsg);
            }else{
              obj.popMsg("请查看返回参数是否正确");
            }
        }
      }
      obj.loadingEnd();
    });
  };
  obj.post = function($, url, params, callback){
    obj.loadingStart();
    $.post(url, params, function(data){
      if(data.code === 200){
        callback(data);
      }else{
        var code = data.code || data.errcode || data.ret;
        switch (code) {
          case -88: //直接跳转到支付 或 授权跳转到支付
            obj.popMsg(data.errMsg);
            window.location.href = data.redirectUrl;
            break;
          default: //系统错误
            if(data.errMsg){
              obj.popMsg(data.errMsg);
            }else{
              obj.popMsg("请查看返回参数是否正确");
            }
        }
      }
      obj.loadingEnd();
    });
  };
  obj.loadPageList = function($scope, $http, url, params, callback){
    $scope.loadShow = false;
    var successCallback = function(data){
      $scope.items = data.l;
      $scope.page = data.p;
      $scope.pages = data.pl;
      if(data.l.length > 0){
        $scope.noDataText = '';
        if($scope.pages > 1){
          $scope.loadShow = true;
        }
        $scope.loadMoreText = '点击加载更多...';

        $scope.loadMore = function(){
          ++$scope.page;
          if($scope.page >  $scope.pages){
            $scope.loadMoreText = '没有了...';
          }else{
            var pageParams = {};
            if(params){
              for(var attr in params){pageParams[attr] = params[attr];}
              pageParams.p = $scope.page;
            }else{
              pageParams.p = $scope.page;
            }
            $scope.loadMoreText = '正在加载...';
            $http.get(url,{params: pageParams}).success(function(data, status, headers, config){
              for(var i=0;i<data.l.length;i++){
                $scope.items.push(data.l[i]);
              }
              $scope.page = data.p;
              $scope.pages = data.pl;
              if($scope.page >= $scope.pages){
                $scope.loadMoreText = '没有了...';
              }else{
                $scope.loadMoreText = '点击加载更多...';
              }
            });
          }
        };
        if(callback){callback(data)}
      }else{
        $scope.noDataText = '暂时还没数据哦~';
      }
    };
    obj.get($http, url, params, successCallback);
  };
  obj.weixincb = {
    logo: window.location.protocol + '//' + window.location.host ,
    logoSize: '96',
    title: '',
    description: '',
    shareUrl: window.location.protocol + "//" + window.location.host ,
    onShareFriend: function () {
      
    }
  }
})(HeadStr);