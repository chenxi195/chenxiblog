
// global tpl
TPL = {};

// global app
$ = new MainFrame(TPL);


// window onload onunload
window.onload = main;


// main function
function main() {
    $.init();
    $.mainPanel.defaultLoad();
}

// for web
function forBridge(a, href, id) {
//  var
    eval(href);
}

function getData(uri, param, callBack) {
    _("oData").innerHTML = "";
    $.data = {};

    var resp = uri.split(".")[0];
    var oScript = document.createElement('script');
    var param = param != null ? param : "";
    oScript.src = uri + param;
    oScript.id = resp + "Data";
    oScript.charset = "utf-8";
    _("oData").appendChild(oScript);

    _(oScript.id).onload = function() {
        callBack();
    };
}

// bridge for web
function Bridge(api) {
    api.login = function(ctx) {
        getData(ctx, null, function() {
            var resp = ctx.split(".")[0];
            showLogin.call(this, api.data[resp]);
        });
    };

    api.switchTab = function(ctx, action) {
        this.tabPanel.switchTab(ctx, action);
    }

    api.userList = function(ctx) {
        this.mainPanel.setStyle(ctx.style);
        getData(ctx, null, function() {
            var resp = ctx.split(".")[0];
            showUserList.call(this, api.data[resp]);
        });
    };

    api.postList = function(ctx) {
        this.mainPanel.setStyle(ctx.style);
        getData(ctx, null, function() {
            var resp = ctx.split(".")[0];
            showPostList.call(this, api.data[resp]);
        });
    };

    api.detail = function(ctx) {
        showDetail.call(this, ctx);
    };
}


// main frame
function MainFrame(tpl) {
    this.tpl;
    this.tabPanel;
    this.navPanel;
    this.mainPanel;
    this.data = {};
}

MainFrame.prototype.init = function() {
    this.tpl = TPL;

    this.mainPanel = new MainPanel(this.tpl.mainPanel);
    this.mainPanel.init();

    this.tabPanel = new Tab(this.tpl.tabPanel);
    this.tabPanel.panelContainer = this.mainPanel.firstPanel;
    this.tabPanel.init();

    Bridge(this);
}




// main panel
function MainPanel(tpl) {
    this.tpl = tpl;
	this.container;
	this.firstPanel;
    this.setStyle = function(ctx) {
        MainPanelSetStyle.call(this, ctx);
    };
}
MainPanel.prototype.init = function() {
    this.container = _(this.tpl.id);
    this.firstPanel = this.container.getElementsByTagName("div")[0];
}
MainPanel.prototype.defaultLoad = function() {
    if (this.tpl.defaultLoad.style != null) {
        this.setStyle(this.tpl.defaultLoad.style);
    }
    if (this.tpl.defaultLoad.load != null) {
        eval(this.tpl.defaultLoad.load);
    }
}

function MainPanelSetStyle(style) {
    this.container.className = style;
}



// tab
function Tab(tpl, panelContainer) {
    this.tpl = tpl;
    this.container;
    this.items = [];
    this.currTab;
    this.panelContainer;
    this.switchTab = function(id, action) {
        TabSwitchItem.call(this, id, action);
    }
}
Tab.prototype.init = function() {
    this.container = _(this.tpl.id);
    var itemsTpl = this.tpl.items;
    this.container.className = "cell" + itemsTpl.length;
    for(var i = 0; i < itemsTpl.length; i++) {
        var itemTpl = itemsTpl[i];
        var itemId = itemTpl.id;
        var item = document.createElement("div");
        item.id = itemId;
        item.value = itemTpl.onClick;
        item.onclick = function() {
            eval(this.value);
        }
        item.innerHTML = itemTpl.title;
        this.container.appendChild(item);
        this.items[i] = _(itemId);
    }

}

function TabSwitchItem(id, action, items) {

    this.currTab = _(id);
    for(var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        item.className = "";
    }
    this.currTab.className = "curr";
    this.panelContainer.innerHTML = "";
    eval(action);
}







