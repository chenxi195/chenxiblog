
TPL.navPanel = {
	id: 'navContainer',
	name: 'index',
	text: '我的首页',
	className: 'title'
}

TPL.mainPanel = {
	id: 'mainContainer',
	style: "tabAndNav",
	defaultLoad: {
		load: '$.postList("/postList")'
	}
}

TPL.tabPanel = {
	id: 'tabContainer',
	items: [
		{
			id: 'tab1',
			title: '1',
			text: '社区',
			onClick: ''
		},
		{
			id: 'tab2',
			title: '2',
			text: 'IM',
			onClick: ''
		},
		{
			id: 'tab3',
			title: '3',
			text: '发布',
			onClick: ''
		},
		{
			id: 'tab4',
			title: '4',
			text: '发现',
			onClick: ''
		},
		{
			id: 'tab5',
			title: '5',
			text: '我的',
			onClick: ''
		}
	]
}