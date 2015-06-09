function showPostList(data){
	var list = new PostList($.tpl.list);
	list.init(data.data.ctx);
}

function showPostDetail(data){
  var detail = new PostDetail($.tpl.detail);
  detail.init(data.data.ctx);
}

function showFoundList(data){
  var list = new PostList($.tpl.foundList);
  list.init(data.data.ctx);
}

function showUserList(data){
  var userList = new UserList($.tpl.userList);
  userList.init(data.data.ctx);
}

function showUserDetail(data){
  var userDetail = new UserDetail($.tpl.userDetail);
  userDetail.init(data.data.ctx);
}

function showJobs(data){
  var showJobs = new SlideMenu($.tpl.jobs);
  showJobs.init(data);
}

function showActs(data){
  var showActs = new InlineList($.tpl.acts);
  showActs.init(data)
}

function showSlideInput(ctx){
  var slideInput = new SlideInput($.tpl.slideInput);
  slideInput.init(ctx);
}

// post list
function PostList(tpl) {
	this.tpl = tpl;
	this.container = c._(this.tpl.id);
	this.data;
}
PostList.prototype.init = function(data) {
	this.data = data;
	var postList = this.data.postList;
  var tplUri = this.tpl.avatarOnClick;
	console.log(postList);

	for(var i=0, ii=postList.length; i<ii; i++){
		var post = postList[i];
		var div = document.createElement("div");
		div.id = "list"+i;
		div.className = 'social_list';
		div.innerHTML = Sample.postSample(i, post);
		this.container.appendChild(div);

    c._('postAvatar'+i).onclick = function(){
      var params = '?postId='+post.id;
      var uri = c.splitUri(tplUri, params);
      forBridge(null, uri);
    }
	}
}

//post detail
function PostDetail(tpl){
  this.tpl = tpl;
  this.container = c._(this.tpl.id);
  this.data;
}
PostDetail.prototype.init = function(data){
  this.data = data;
  var post = this.data.postDetail;
  var div = document.createElement("div");
  div.innerHTML = Sample.postDetailSample(post);
  this.container.appendChild(div);
}

//user List
function UserList(tpl){
  this.tpl = tpl;
  this.container = c._(this.tpl.id);
  this.data;
}
UserList.prototype.init = function(data){
  this.data = data;
  var userList = this.data.userList;
  var tplUri = this.tpl.avatarOnClick;

  for(var i=0, ii=userList.length; i<ii; i++){
    var user = userList[i];
    var div = document.createElement("div");
    div.id = "userList"+i;
    div.className = 'user_list';
    div.innerHTML = Sample.userListSample(i, user);
    this.container.appendChild(div);

    c._('userList'+i).onclick = function(){
      var params = '?userId='+user.uid;
      var uri = c.splitUri(tplUri, params);
      forBridge(null, uri);
    }
  }
}

//user detail

function UserDetail(tpl){
  this.tpl = tpl;
  this.container = c._(this.tpl.id);
  this.data;
}

UserDetail.prototype.init = function(data){
  this.data = data;
  var user = this.data.user;

  for(var i in user){
    var div = document.createElement('div');
    div.innerHTML = i + ':' + user[i];
    this.container.appendChild(div);
  }

}

//SlideMenu
function SlideMenu(tpl){
  this.tpl = tpl;
  this.slideType = this.tpl.type;
  this.container = c._(this.tpl.id);
  this.leftContainer = c._('slideLeft');
  this.rightContainer = c._('slideRight');
  this.titleContainer;
  this.contentContainer;
  this.thirdContainer;
  if(this.slideType == 1){
    this.container.className = 'slide_menu';
  }else if(this.slideType == 2){
    this.container.className = 'slide_row_menu';
  }else if(this.slideType == 3){
    this.container.className = 'slide_inline_menu';
  }else if(this.slideType == 4){
    this.container.className = 'slide_calendar_menu';
  }
  this.data;
}
SlideMenu.prototype.init = function(data){
  this.data = data;
  var items = this.data.items;
  var scope = this;

  if(this.slideType == 1 || this.slideType == 2){
    for(var i=0; i<items.length; i++){
      var item = Sample.slideType(i, items[i]);
      this.leftContainer.innerHTML += item;
    }
    for(var i=0; i<items.length; i++){
      c._('slideLeftItem'+i).onclick = function(){
        var id = this.id;
        scope.showSubData(id, items);
      }
    }
    c._('slideLeftItem0').onclick();
  }else if(this.slideType == 3){
    for(var i=0; i<items.length; i++){
      var title = document.createElement('div'),
          content = document.createElement('div');
      title.className = 'slide_title';
      title.id = 'slideTitle'+i;
      content.className = 'slideContent';
      content.id = 'slideContent'+i;
      this.leftContainer.appendChild(title);
      this.leftContainer.appendChild(content);
      this.titleContainer = c._('slideTitle'+i);
      this.contentContainer = c._('slideContent'+i);
      var item = Sample.slideType(i, items[i]);
      var subItems = matchSubData(i, items);

      this.titleContainer.innerHTML = item;
      for(var j=0, jj=subItems.length; j<jj; j++){
        var subItem = Sample.slideType(j, subItems[j]);
        this.contentContainer.innerHTML += subItem;
      }
    }
  }else if(this.slideType == 4){
    var div = document.createElement('div');
    div.id = 'slideThird';
    div.className = 'slide_third';
    this.container.appendChild(div);
    this.thirdContainer = c._('slideThird');

    var now = new Date();
    var nowYear = parseInt(now.getFullYear());
    var nowMonth = now.getMonth()+1;
    var nowDate = now.getDate();
    var years = [];
    var months = this.getMonthsByYear(nowYear);
    var days = this.getDaysByYearMonth(nowYear, nowMonth);

    for(var i=nowYear+10; i >= nowYear-10; i--){
      years.push(i);
    }

    for(var i=0;i<years.length;i++){
      var yearDiv = document.createElement('div');
      yearDiv.id = 'year-'+years[i];
      yearDiv.innerHTML = years[i];
      this.leftContainer.appendChild(yearDiv);
    }

    for(var i=0;i<months.length;i++){
      var month = parseInt(months[i]);
      var monthDiv = document.createElement('div');
      monthDiv.id = 'month-'+month;
      monthDiv.innerHTML = month;
      this.rightContainer.appendChild(monthDiv);
    }
    for(var i=0;i<days.length;i++){
      var dayDiv = document.createElement('div');
      dayDiv.id = 'day-'+days[i];
      dayDiv.innerHTML = days[i];
      this.thirdContainer.appendChild(dayDiv);
    }
  }


}
SlideMenu.prototype.showSubData = function(id, items){
  var index = id.split('slideLeftItem')[1];
  var subItems = matchSubData(index, items);

  this.rightContainer.innerHTML = '';
  for(var i= 0, ii=items.length; i<ii; i++){
    c._('slideLeftItem'+i).className = '';
  }
  c._(id).className = 'curr';

  for(var i=0, ii=subItems.length; i<ii; i++){
    var subItem = Sample.slideType(i, subItems[i]);
    this.rightContainer.innerHTML += subItem;
  }
  //TODO subItem click event

}

SlideMenu.prototype.getDaysByYearMonth = function(year, month) {
  var daysCount = 30;
  var days = [];
  if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    daysCount = 31;
  } else if (month == 2) {
    if (year % 4 ==0 && year % 100 !=0 ){
      daysCount = 29
    } else {
      daysCount = 28;
    }
  }
  for(var i=1;i<=daysCount;i++){
    days.push(i);
  }
  return days;
}

SlideMenu.prototype.getMonthsByYear = function(year){
  var now = new Date();
  var nowYear = now.getFullYear();
  var monthStart = 0;
  var months = [];
  if(nowYear == year){
    monthStart = now.getMonth();
  }

  for(var i=monthStart; i<12; i++){
    months.push(i+1);
  }
  return months;
}





function matchSubData(index, data){
  for(var i=0, ii=data.length; i<ii; i++){
    if(i == index){
      return data[i].subItems;
    }
  }
}

function SlideInput(tpl){
  this.tpl = tpl;
  this.container = c._(this.tpl.id);
  this.cancelBtn = c._(this.tpl.cancelBtn);
  this.sureBtn = c._(this.tpl.sureBtn);
  this.inputContent = c._(this.tpl.inputContent);
}
SlideInput.prototype.init = function(ctx){
  var container = this.container;
  var inputContent = this.inputContent;
  container.className = 'inputUpIn';
  inputContent.focus();
  this.cancelBtn.onclick = function(){
    container.className = 'inputDownOut';
    inputContent.value = '';
    inputContent.blur();
  }
  this.sureBtn.onclick = function(){
    container.className = 'inputDownOut';
    inputContent.blur();
    //TODO post ajax
  }

}



