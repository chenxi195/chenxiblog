TPL = {};

$ = new MainFrame();

window.onload = main;

function main(){
	$.init(TPL);
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

	this.tabPanel = new TabPanel(this.tpl.tabPanel);
	this.tabPanel.init();

	this.mainPanel = new MainPanel(this.tpl.mainPanel);
	this.mainPanel.init();

	Bridge(this);
}

function Bridge(api){
	api.postList = function(ctx) {
		c.ajax('GET', ctx, function(data) {
			$.data = data;
			showPostList.call(this, $.data.postList);
		});
	};
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
	this.container = c._(this.tpl.id);
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



//NavPanel
function NavPanel(tpl){
	this.tpl = tpl;
	this.container;
	this.item;

}

NavPanel.prototype.init = function(){
	this.container = c._(this.tpl.id);
	var name = this.tpl.name;
	var id = this.tpl.id;
	var text = this.tpl.text;
	var className = this.tpl.className;
	var item = document.createElement('div');
	item.id = id;
	item.innerHTML = text;
	item.className = className;

	if(name === 'index'){
		var remindIcon = document.createElement('span');
		var remind = document.createElement('a');
		var searchIcon = document.createElement('span');
		var search = document.createElement('a');
		remindIcon.className = 'icon-envelope';
		remind.className = 'remind';
		searchIcon.className = 'icon-search';
		search.className = 'search';

		remind.appendChild(remindIcon);
		search.appendChild(searchIcon);
		item.appendChild(remind);
		item.appendChild(search);
	}

	this.container.appendChild(item);
	this.item = c._(id);
}

//TabPanel
function TabPanel(tpl){
	this.tpl = tpl;
	this.container;
	this.items = [];
}

TabPanel.prototype.init = function(){
	this.container = c._(this.tpl.id);
	var itemsTpl = this.tpl.items;

	for(var i= 0, ii=itemsTpl.length; i<ii; i++){
		var itemTpl = itemsTpl[i];
		var itemId = itemTpl.id;
		var itemText = itemTpl.text;
		var item = document.createElement('a');
		item.id = itemId;
		item.innerHTML = itemText;

		this.container.appendChild(item);
		this.items[i] = item;
	}
}

