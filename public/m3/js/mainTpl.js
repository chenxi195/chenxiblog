
TPL.navPanel = {
	id: 'navContainer',
	text: '社区',
	style: 'indexNav'
}

TPL.mainPanel = {
	id: 'panelContainer',
	style: "tabAndNav",
	defaultLoad: {
		load: "$.jobs(\'/jobType\')"
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
			onClick: '$.switchTab("tab2", "$.userList(\'/userList\')")'
		},
		{
			id: 'tab3',
			title: '3',
			text: '',
			onClick: '$.UpInSubTab("tabSubContainer")'
		},
		{
			id: 'tab4',
			title: '4',
			text: '发现',
			onClick: '$.switchTab("tab4", "$.foundList(\'/postList\')")'
		},
		{
			id: 'tab5',
			title: '5',
			text: '我的',
			onClick: '$.switchTab("tab5", "$.userDetail(\'/userDetail\')")'
		}
	]
}