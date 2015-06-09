TPL.list = {
	id: "tab1Container",
  avatarOnClick: '$.postDetail("/postInfo")'
}
TPL.foundList = {
  id: "tab4Container",
  avatarOnClick: '$.postDetail("/postInfo")'
}

TPL.detail = {
  id: "page2"
}

TPL.userList = {
  id: "tab2Container",
  onClick: '$.userDetail("/userInfo")'
}

TPL.userDetail = {
  id: "tab5Container"
}

TPL.jobs = {
  id: "slideMenu",
  type: 4, //TODO 1 二级列菜单 2 二级横菜单 3 二级全显示菜单 4 日期显示菜单
  leftOnClick: '',
  rightOnClick: ''
}
TPL.acts = {
  id: "inlineList",
  onClick: ''
}
TPL.slideInput = {
  id: 'slideInput',
  cancelBtn: 'inputCancel',
  sureBtn: 'inputSure',
  inputContent: 'inputContent'
}