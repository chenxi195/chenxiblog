function TopTitleModule(){
    this.msgHtml = '<span class="title">我的首页</span>';
}
TopTitleModule.prototype.render = function(){
    var scope = this;
    $('#topTitle').html(scope.msgHtml);
}