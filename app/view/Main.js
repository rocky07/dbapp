Ext.define('DBApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
		xtype:'formpanel',
		items:[
		{
		xtype:'textfield',
		label:'Name',
		required:true,
		name:'name'

		},
		{xtype:'emailfield',
		label:'Email',
		required:true,
		name:'email'
		},{
		xtype:'button',
		text:'submit',
		action:'submitform'
		}
		]

            },
            {
                title: 'Get Started',
                iconCls: 'list',
		xtype:'list',
		store:"User",
		itemTpl:"{id}#{name},{email}"
            }
        ]
    }
});
