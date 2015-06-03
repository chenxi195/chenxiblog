
TPL.mainPanel = {
    id: "panelContainer",
    defaultLoad: {
        style: "noTabNoNav",
        load: "$.login('login.js')"
    }
}

TPL.tabPanel = {
    id: "tabContainer",
    items: [
        {
            id: "tab1",
            title: "1",
            onClick: "$.switchTab('tab1', '$.userList(\"userList.js?list=1\")')"
        },
        {
            id: "tab2",
            title: "2",
            onClick: "$.switchTab('tab2', '$.postList(\"postList.js?list=2\")')"
        }
    ]
}