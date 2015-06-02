function TopRemindModule(){
    this.msgHtml = '<div class="mail"><a href="#"><span class="icon-envelope"></span></a></div> ';
}
TopRemindModule.prototype.render = function(){
    var scope = this;
    $('#topRemind').html(scope.msgHtml);
}

