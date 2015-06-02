function TopSearchLinkModule(){
    this.msgHtml = '<a href="#" class="icon-search"></a>';
}
TopSearchLinkModule.prototype.render = function(){
    var scope = this;
    $('#topSearch').html(scope.msgHtml);
}