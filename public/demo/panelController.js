
var panelId = "panelDiv";


function showLogin(data) {
    var login = new Login(TPL.login);
    login.data = data;
    login.init();
}

function showUserList(data) {
    var list = new UserList(TPL.list);
    list.data = data.data.ctx;
    list.init();
}

function showPostList(data) {
    var list = new PostList(TPL.list);
    list.data = data.data.ctx;
    list.init();
}


function showDetail(dataUri) {
    alert("detail");
}



// login
function Login(tpl) {
    this.tpl = tpl;
    this.container = _(panelId);
    this.data;
}
Login.prototype.init = function() {
    var div = document.createElement("div");
    div.id = "login";
    this.container.appendChild(div);

    var item = document.createElement("div");
    var tpl = this.tpl;
    item.className = "loginBtn";
    item.onclick = function() {
        forBridge(item, tpl.onClick);
    }
    item.innerHTML = tpl.btnTxt;
    _("login").appendChild(item);

    var dataDiv = document.createElement("div");
    showJson(this.data, dataDiv);
    _("login").appendChild(dataDiv);
}



// user list
function UserList(tpl) {
    this.tpl = tpl;
    this.container = _(panelId);
    this.data;
}
UserList.prototype.init = function() {
    var div = document.createElement("div");
    div.id = "list";
    this.container.appendChild(div);

    var dataDiv = document.createElement("div");
    showJson(this.data, dataDiv);
    _("list").appendChild(dataDiv);
}


// post list
function PostList(tpl) {
    this.tpl = tpl;
    this.container = _(panelId);
    this.data;
}
PostList.prototype.init = function() {
    var div = document.createElement("div");
    div.id = "list";
    this.container.appendChild(div);

    var dataDiv = document.createElement("div");
    showJson(this.data, dataDiv);
    _("list").appendChild(dataDiv);
}