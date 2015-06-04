
TPL.navPanel = {
	id: 'navContainer',
	name: 'index',
	text: '我的首页',
	className: 'title'
}

TPL.mainPanel = {
	id: 'panelContainer',
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
			onClick: '$.switchTab("tab1", "$.postList(\'/postList\')")'
		},
		{
			id: 'tab2',
			title: '2',
			text: 'IM',
			onClick: '$.switchTab("tab2", "$.postList(\'/postList\')")'
		},
		{
			id: 'tab3',
			title: '3',
			text: '发布',
			onClick: '$.switchTab("tab3", "$.postList(\'/postList\')")'
		},
		{
			id: 'tab4',
			title: '4',
			text: '发现',
			onClick: '$.switchTab("tab4", "$.postList(\'/postList\')")'
		},
		{
			id: 'tab5',
			title: '5',
			text: '我的',
			onClick: '$.switchTab("tab5", "$.postList(\'/postList\')")'
		}
	]
}