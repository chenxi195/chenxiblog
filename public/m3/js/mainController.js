TPL = {};

$ = new MainFrame();

window.onload = main;

function main(){
	$.init(TPL);
	$.mainPanel.defaultLoad();
}

function MainFrame(){
	this.tpl;
	this.navPanel;
	this.tabPanel;
	this.mainPanel;
	this.data = {};
}

MainFrame.prototype.init = function(tpl){
	this.tpl = tpl;

	this.navPanel = new NavPanel(this.tpl.navPanel);
	this.navPanel.init();

	this.mainPanel = new MainPanel(this.tpl.mainPanel);
	this.mainPanel.init();

	this.tabPanel = new TabPanel(this.tpl.tabPanel);
	this.tabPanel.panelContainer = this.mainPanel.panelContainer;
	this.tabPanel.init();

	Bridge(this);
}


// for web
function forBridge(a, href) {
  eval(href);
}

function Bridge(api){
	api.postList = function(ctx) {
    if(c.config.env == 'dev'){
      c.ajax('GET', ctx, function(data) {
//      c.popMsg('请求成功')
        $.data = data;
        showPostList.call(this, $.data);
      });
    }else {
      c.getData('http://123.57.221.56/GoRegDone.do?userCid=a&name=999&jsonCb=test', function(data){

      });
    }

	};
  api.foundList = function(ctx){
    c.ajax('GET', ctx, function(data) {
      $.data = data;
      showFoundList.call(this, $.data);
    });
  }
  api.postDetail = function(ctx){
    c.ajax('GET', ctx, function(data){
      $.data = data;
      showPostDetail.call(this, $.data);
      mainFrameSwitchWindow();
    });
  };
	api.switchTab = function(ctx, action) {
		this.tabPanel.switchTab(ctx, action);
	};
  api.userList = function(ctx){
    c.ajax('GET', ctx, function(data){
      $.data = data;
      showUserList.call(this, $.data);
    });
  }
  api.userDetail = function(ctx){
    c.ajax('GET', ctx, function(data){
      $.data = data;
      showUserDetail.call(this, $.data);
    });
  }
  api.jobs = function(ctx){
    c.ajax('GET', ctx, function(data){
      $.data = data;
      showJobs.call(this, $.data);
    });
  }
  api.UpInSubTab = function(ctx){
    var tabSubContainer = c._(ctx);
    if(tabSubContainer.className == "" || tabSubContainer.className == 'swipeDownOut'){
      tabSubContainer.className = 'swipeUpIn';
      var div = document.createElement('div');
      div.id = 'mask';
      div.className = 'mask';
      div.onclick = function(){
        api.UpInSubTab(ctx);
      }
        document.body.appendChild(div);

    }else{
      tabSubContainer.className = 'swipeDownOut';
      c._('mask').remove();
    }
  }
  api.acts = function(ctx){
    c.ajax('GET', ctx, function(data){
      $.data = data;
      showActs.call(this, $.data);
    });
  }
  api.slideInput = function(ctx){
    showSlideInput.call(this, ctx);
  }

}

// main panel
function MainPanel(tpl) {
	this.tpl = tpl;
	this.container;
	this.panelContainer;
	this.setStyle = function(ctx) {
		MainPanelSetStyle.call(this, ctx);
	};
}
MainPanel.prototype.init = function() {
	this.container = c._(this.tpl.id);
	this.panelContainer = this.container.getElementsByTagName("div")[0];
  this.container.style.height = (c.height-100)+'px';
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

function mainFrameSwitchWindow(){
  var page1 = document.getElementById('page1');
  var page2 = document.getElementById('page2');
  var page3 = document.getElementById('page3');

  page2.className = 'swipeRightIn';
  page1.className = 'swipeLeftOut';
  c.currentFrameId = 'page2';

}



//NavPanel
function NavPanel(tpl){
	this.tpl = tpl;
	this.container;
	this.item;

}

NavPanel.prototype.init = function(){
	this.container = c._(this.tpl.id);
	var text = this.tpl.text;
}

//TabPanel
function TabPanel(tpl){
	this.tpl = tpl;
	this.container;
	this.items = [];
  this.contentContainers = [];
	this.currTab;
  this.currentContainer;
	this.switchTab = function(id, action) {
		TabSwitchItem.call(this, id, action);
	}
}

TabPanel.prototype.init = function(){
	this.container = c._(this.tpl.id);
	var itemsTpl = this.tpl.items;

	for(var i= 0, ii=itemsTpl.length; i<ii; i++){
    var itemId = itemsTpl[i].id;
		var item = c._(itemId);
    var itemContent = c._(itemId+'Container');

		item.onclick = function(){
      var index = this.id.split('tab')[1]-1;
      var value = itemsTpl[index].onClick;
      eval(value);
    };
		this.items[i] = item;
    this.contentContainers[i] = itemContent;
	}

}

function TabSwitchItem(id, action, items) {
	this.currTab = c._(id);
  this.currentContainer = c._(id+'Container');
	for(var i = 0; i < this.items.length; i++) {
		var item = this.items[i];
    item.className = "";
	}

  for(var i = 0; i < this.contentContainers.length; i++) {
    var itemContainer = this.contentContainers[i];
    if(itemContainer){
      itemContainer.style.display = 'none';
    }
  }

	this.currTab.className = "curr";
  this.currentContainer.style.display = 'block';
  if(!this.currentContainer.innerHTML){
    eval(action);
  }

}

