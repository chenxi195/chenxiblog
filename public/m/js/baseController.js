function _BaseController(){
    this.viewModules = ['topTitle', 'topRemind', 'topSearchLink']; //页面所需要的模块
    this.title = '我的首页'; //标题
    this.isNavMenu = false; // 是否显示导航条
    this.page = 1; //几级页面
}
_BaseController.prototype.render = function(module){

}
_BaseController.prototype.init = function(){
    var scope = this;
    var modules = scope.viewModules;
    var isNavMenu = scope.isNavMenu;

    if(modules.length > 0){
        for(var i= 0, ii=modules.length; i<ii; i++){
            var module = modules[i];
            if(module === 'topTitle'){
                new TopTitleModule().render();
            }else if(module === 'topRemind'){
                new TopRemindModule().render();
            }else if(module === 'topSearchLink'){
                new TopSearchLinkModule().render();
            }

        }
    }

    if(isNavMenu){
        $('#navMenu').show();
    }else{
        $('#navMenu').hide();
    }
}

var BaseController = new _BaseController();